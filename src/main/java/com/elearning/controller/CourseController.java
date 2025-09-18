package com.elearning.controller;

import com.elearning.dto.CourseRequest;
import com.elearning.dto.MessageResponse;
import com.elearning.model.Course;
import com.elearning.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/public")
    public ResponseEntity<List<Course>> getPublicCourses() {
        List<Course> courses = courseService.getPublishedCourses();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/public/{courseId}")
    public ResponseEntity<Course> getPublicCourse(@PathVariable Long courseId) {
        Course course = courseService.getPublishedCourse(courseId);
        return ResponseEntity.ok(course);
    }

    @GetMapping("/public/search")
    public ResponseEntity<List<Course>> searchCourses(@RequestParam String keyword) {
        List<Course> courses = courseService.searchCourses(keyword);
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/public/category/{category}")
    public ResponseEntity<List<Course>> getCoursesByCategory(@PathVariable String category) {
        List<Course> courses = courseService.getCoursesByCategory(category);
        return ResponseEntity.ok(courses);
    }

    @PostMapping("/teacher")
    @PreAuthorize("hasRole('TEACHER')")
    public ResponseEntity<Course> createCourse(@Valid @RequestBody CourseRequest courseRequest) {
        Course course = courseService.createCourse(courseRequest);
        return ResponseEntity.ok(course);
    }

    @GetMapping("/teacher/my-courses")
    @PreAuthorize("hasRole('TEACHER')")
    public ResponseEntity<List<Course>> getTeacherCourses() {
        List<Course> courses = courseService.getTeacherCourses();
        return ResponseEntity.ok(courses);
    }

    @PutMapping("/teacher/{courseId}")
    @PreAuthorize("hasRole('TEACHER')")
    public ResponseEntity<Course> updateCourse(@PathVariable Long courseId, @Valid @RequestBody CourseRequest courseRequest) {
        Course course = courseService.updateCourse(courseId, courseRequest);
        return ResponseEntity.ok(course);
    }

    @PutMapping("/teacher/{courseId}/publish")
    @PreAuthorize("hasRole('TEACHER')")
    public ResponseEntity<MessageResponse> publishCourse(@PathVariable Long courseId) {
        courseService.publishCourse(courseId);
        return ResponseEntity.ok(new MessageResponse("Course published successfully"));
    }

    @DeleteMapping("/teacher/{courseId}")
    @PreAuthorize("hasRole('TEACHER')")
    public ResponseEntity<MessageResponse> deleteCourse(@PathVariable Long courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.ok(new MessageResponse("Course deleted successfully"));
    }
}
