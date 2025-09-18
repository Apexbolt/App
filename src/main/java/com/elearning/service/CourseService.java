package com.elearning.service;

import com.elearning.dto.CourseRequest;
import com.elearning.model.Course;
import com.elearning.model.User;
import com.elearning.repository.CourseRepository;
import com.elearning.repository.UserRepository;
import com.elearning.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Course> getPublishedCourses() {
        return courseRepository.findByIsPublishedTrue();
    }

    public Course getPublishedCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        
        if (!course.isPublished()) {
            throw new RuntimeException("Course is not published");
        }
        
        return course;
    }

    public List<Course> searchCourses(String keyword) {
        return courseRepository.searchPublishedCourses(keyword);
    }

    public List<Course> getCoursesByCategory(String category) {
        return courseRepository.findByCategoryAndIsPublishedTrue(category);
    }

    public Course createCourse(CourseRequest courseRequest) {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User teacher = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Teacher not found"));

        Course course = new Course();
        course.setTitle(courseRequest.getTitle());
        course.setDescription(courseRequest.getDescription());
        course.setCategory(courseRequest.getCategory());
        course.setLevel(courseRequest.getLevel());
        course.setTeacher(teacher);

        return courseRepository.save(course);
    }

    public List<Course> getTeacherCourses() {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User teacher = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Teacher not found"));

        return courseRepository.findByTeacher(teacher);
    }

    public Course updateCourse(Long courseId, CourseRequest courseRequest) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        // Verify ownership
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!course.getTeacher().getId().equals(userPrincipal.getId())) {
            throw new RuntimeException("Unauthorized to update this course");
        }

        course.setTitle(courseRequest.getTitle());
        course.setDescription(courseRequest.getDescription());
        course.setCategory(courseRequest.getCategory());
        course.setLevel(courseRequest.getLevel());

        return courseRepository.save(course);
    }

    public void publishCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        // Verify ownership
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!course.getTeacher().getId().equals(userPrincipal.getId())) {
            throw new RuntimeException("Unauthorized to publish this course");
        }

        course.setPublished(true);
        courseRepository.save(course);
    }

    public void deleteCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        // Verify ownership
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!course.getTeacher().getId().equals(userPrincipal.getId())) {
            throw new RuntimeException("Unauthorized to delete this course");
        }

        courseRepository.delete(course);
    }
}
