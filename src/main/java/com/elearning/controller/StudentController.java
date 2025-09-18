package com.elearning.controller;

import com.elearning.dto.MessageResponse;
import com.elearning.model.Course;
import com.elearning.model.Enrollment;
import com.elearning.model.Progress;
import com.elearning.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student")
@PreAuthorize("hasRole('STUDENT')")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboard() {
        Map<String, Object> dashboard = studentService.getStudentDashboard();
        return ResponseEntity.ok(dashboard);
    }

    @PostMapping("/enroll/{courseId}")
    public ResponseEntity<MessageResponse> enrollInCourse(@PathVariable Long courseId) {
        studentService.enrollInCourse(courseId);
        return ResponseEntity.ok(new MessageResponse("Successfully enrolled in course"));
    }

    @GetMapping("/enrollments")
    public ResponseEntity<List<Enrollment>> getEnrollments() {
        List<Enrollment> enrollments = studentService.getStudentEnrollments();
        return ResponseEntity.ok(enrollments);
    }

    @GetMapping("/progress/{courseId}")
    public ResponseEntity<Map<String, Object>> getCourseProgress(@PathVariable Long courseId) {
        Map<String, Object> progress = studentService.getCourseProgress(courseId);
        return ResponseEntity.ok(progress);
    }

    @PostMapping("/progress/{lessonId}/complete")
    public ResponseEntity<MessageResponse> markLessonComplete(@PathVariable Long lessonId) {
        studentService.markLessonComplete(lessonId);
        return ResponseEntity.ok(new MessageResponse("Lesson marked as complete"));
    }

    @GetMapping("/recommendations")
    public ResponseEntity<List<Course>> getRecommendations() {
        List<Course> recommendations = studentService.getRecommendedCourses();
        return ResponseEntity.ok(recommendations);
    }
}
