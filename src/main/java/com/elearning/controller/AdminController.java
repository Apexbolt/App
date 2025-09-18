package com.elearning.controller;

import com.elearning.dto.MessageResponse;
import com.elearning.dto.UserStatsResponse;
import com.elearning.model.Course;
import com.elearning.model.User;
import com.elearning.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/dashboard/stats")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = adminService.getDashboardStats();
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = adminService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/stats")
    public ResponseEntity<UserStatsResponse> getUserStats() {
        UserStatsResponse stats = adminService.getUserStats();
        return ResponseEntity.ok(stats);
    }

    @PutMapping("/users/{userId}/toggle-status")
    public ResponseEntity<MessageResponse> toggleUserStatus(@PathVariable Long userId) {
        adminService.toggleUserStatus(userId);
        return ResponseEntity.ok(new MessageResponse("User status updated successfully"));
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<MessageResponse> deleteUser(@PathVariable Long userId) {
        adminService.deleteUser(userId);
        return ResponseEntity.ok(new MessageResponse("User deleted successfully"));
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = adminService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    @PutMapping("/courses/{courseId}/approve")
    public ResponseEntity<MessageResponse> approveCourse(@PathVariable Long courseId) {
        adminService.approveCourse(courseId);
        return ResponseEntity.ok(new MessageResponse("Course approved successfully"));
    }

    @PutMapping("/courses/{courseId}/reject")
    public ResponseEntity<MessageResponse> rejectCourse(@PathVariable Long courseId) {
        adminService.rejectCourse(courseId);
        return ResponseEntity.ok(new MessageResponse("Course rejected successfully"));
    }

    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<MessageResponse> deleteCourse(@PathVariable Long courseId) {
        adminService.deleteCourse(courseId);
        return ResponseEntity.ok(new MessageResponse("Course deleted successfully"));
    }

    @GetMapping("/analytics/enrollments")
    public ResponseEntity<Map<String, Object>> getEnrollmentAnalytics() {
        Map<String, Object> analytics = adminService.getEnrollmentAnalytics();
        return ResponseEntity.ok(analytics);
    }

    @GetMapping("/analytics/courses")
    public ResponseEntity<Map<String, Object>> getCourseAnalytics() {
        Map<String, Object> analytics = adminService.getCourseAnalytics();
        return ResponseEntity.ok(analytics);
    }
}
