package com.elearning.repository;

import com.elearning.model.Lesson;
import com.elearning.model.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    List<Lesson> findByModuleOrderByOrderIndex(Module module);
    List<Lesson> findByModule(Module module);
}
