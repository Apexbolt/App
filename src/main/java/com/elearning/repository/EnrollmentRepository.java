package com.elearning.repository;

import com.elearning.model.Course;
import com.elearning.model.Enrollment;
import com.elearning.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    List<Enrollment> findByStudent(User student);
    List<Enrollment> findByCourse(Course course);
    Optional<Enrollment> findByStudentAndCourse(User student, Course course);
    
    @Query("SELECT COUNT(e) FROM Enrollment e WHERE e.course = :course")
    Long countByCourse(@Param("course") Course course);
    
    @Query("SELECT COUNT(e) FROM Enrollment e WHERE e.student = :student")
    Long countByStudent(@Param("student") User student);
    
    @Query("SELECT COUNT(e) FROM Enrollment e WHERE e.isCompleted = true")
    Long countCompletedEnrollments();
}
