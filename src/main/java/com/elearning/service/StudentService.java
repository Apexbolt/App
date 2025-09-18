package com.elearning.service;

import com.elearning.model.*;
import com.elearning.repository.*;
import com.elearning.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private ProgressRepository progressRepository;

    @Autowired
    private LessonRepository lessonRepository;

    public Map<String, Object> getStudentDashboard() {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User student = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Map<String, Object> dashboard = new HashMap<>();
        
        List<Enrollment> enrollments = enrollmentRepository.findByStudent(student);
        dashboard.put("enrolledCourses", enrollments);
        dashboard.put("totalEnrollments", enrollments.size());
        
        long completedCourses = enrollments.stream()
                .mapToLong(e -> e.isCompleted() ? 1 : 0)
                .sum();
        dashboard.put("completedCourses", completedCourses);
        
        // Get recommended courses (simple logic - can be enhanced)
        List<Course> recommendations = courseRepository.findByIsPublishedTrue();
        dashboard.put("recommendations", recommendations.subList(0, Math.min(3, recommendations.size())));
        
        return dashboard;
    }

    public void enrollInCourse(Long courseId) {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User student = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        if (!course.isPublished()) {
            throw new RuntimeException("Course is not available for enrollment");
        }

        // Check if already enrolled
        if (enrollmentRepository.findByStudentAndCourse(student, course).isPresent()) {
            throw new RuntimeException("Already enrolled in this course");
        }

        Enrollment enrollment = new Enrollment(student, course);
        enrollmentRepository.save(enrollment);
    }

    public List<Enrollment> getStudentEnrollments() {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User student = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        return enrollmentRepository.findByStudent(student);
    }

    public Map<String, Object> getCourseProgress(Long courseId) {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User student = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        List<Progress> progressList = progressRepository.findByStudentAndCourseId(student, courseId);
        Long completedLessons = progressRepository.countCompletedLessonsByCourse(student, courseId);
        Long totalLessons = progressRepository.countTotalLessonsByCourse(courseId);

        Map<String, Object> progress = new HashMap<>();
        progress.put("progressList", progressList);
        progress.put("completedLessons", completedLessons);
        progress.put("totalLessons", totalLessons);
        progress.put("progressPercentage", totalLessons > 0 ? (completedLessons * 100) / totalLessons : 0);

        return progress;
    }

    public void markLessonComplete(Long lessonId) {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User student = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Lesson lesson = lessonRepository.findById(lessonId)
                .orElseThrow(() -> new RuntimeException("Lesson not found"));

        Progress progress = progressRepository.findByStudentAndLesson(student, lesson)
                .orElse(new Progress(student, lesson));

        progress.setCompleted(true);
        progressRepository.save(progress);
    }

    public List<Course> getRecommendedCourses() {
        // Simple recommendation logic - can be enhanced with ML algorithms
        return courseRepository.findByIsPublishedTrue();
    }
}
