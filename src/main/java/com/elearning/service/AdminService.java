package com.elearning.service;

import com.elearning.dto.UserStatsResponse;
import com.elearning.model.Course;
import com.elearning.model.User;
import com.elearning.repository.CourseRepository;
import com.elearning.repository.EnrollmentRepository;
import com.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    public Map<String, Object> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();
        
        stats.put("totalUsers", userRepository.count());
        stats.put("totalStudents", userRepository.countByRole(User.Role.STUDENT));
        stats.put("totalTeachers", userRepository.countByRole(User.Role.TEACHER));
        stats.put("totalCourses", courseRepository.count());
        stats.put("publishedCourses", courseRepository.countPublishedCourses());
        stats.put("totalEnrollments", enrollmentRepository.count());
        stats.put("completedCourses", enrollmentRepository.countCompletedEnrollments());
        
        return stats;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public UserStatsResponse getUserStats() {
        Long totalUsers = userRepository.count();
        Long students = userRepository.countByRole(User.Role.STUDENT);
        Long teachers = userRepository.countByRole(User.Role.TEACHER);
        Long admins = userRepository.countByRole(User.Role.ADMIN);
        
        return new UserStatsResponse(totalUsers, students, teachers, admins);
    }

    public void toggleUserStatus(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setActive(!user.isActive());
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new RuntimeException("User not found");
        }
        userRepository.deleteById(userId);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public void approveCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        course.setPublished(true);
        courseRepository.save(course);
    }

    public void rejectCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        course.setPublished(false);
        courseRepository.save(course);
    }

    public void deleteCourse(Long courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new RuntimeException("Course not found");
        }
        courseRepository.deleteById(courseId);
    }

    public Map<String, Object> getEnrollmentAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        
        analytics.put("totalEnrollments", enrollmentRepository.count());
        analytics.put("completedEnrollments", enrollmentRepository.countCompletedEnrollments());
        
        // Add more detailed analytics as needed
        return analytics;
    }

    public Map<String, Object> getCourseAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        
        analytics.put("totalCourses", courseRepository.count());
        analytics.put("publishedCourses", courseRepository.countPublishedCourses());
        
        // Add more detailed analytics as needed
        return analytics;
    }
}
