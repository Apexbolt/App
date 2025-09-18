package com.elearning.repository;

import com.elearning.model.Lesson;
import com.elearning.model.Progress;
import com.elearning.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    List<Progress> findByStudent(User student);
    Optional<Progress> findByStudentAndLesson(User student, Lesson lesson);
    
    @Query("SELECT p FROM Progress p WHERE p.student = :student AND p.lesson.module.course.id = :courseId")
    List<Progress> findByStudentAndCourseId(@Param("student") User student, @Param("courseId") Long courseId);
    
    @Query("SELECT COUNT(p) FROM Progress p WHERE p.student = :student AND p.isCompleted = true AND p.lesson.module.course.id = :courseId")
    Long countCompletedLessonsByCourse(@Param("student") User student, @Param("courseId") Long courseId);
    
    @Query("SELECT COUNT(p.lesson) FROM Progress p WHERE p.lesson.module.course.id = :courseId")
    Long countTotalLessonsByCourse(@Param("courseId") Long courseId);
}
