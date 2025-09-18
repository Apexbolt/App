package com.elearning.repository;

import com.elearning.model.Course;
import com.elearning.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByTeacher(User teacher);
    List<Course> findByIsPublishedTrue();
    List<Course> findByCategoryAndIsPublishedTrue(String category);
    
    @Query("SELECT c FROM Course c WHERE c.isPublished = true AND " +
           "(LOWER(c.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
           "LOWER(c.description) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    List<Course> searchPublishedCourses(@Param("keyword") String keyword);
    
    @Query("SELECT COUNT(c) FROM Course c WHERE c.isPublished = true")
    Long countPublishedCourses();
    
    @Query("SELECT COUNT(c) FROM Course c WHERE c.teacher = :teacher")
    Long countByTeacher(@Param("teacher") User teacher);
}
