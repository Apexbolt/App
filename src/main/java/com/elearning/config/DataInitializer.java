package com.elearning.config;

import com.elearning.model.User;
import com.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Create default admin user if not exists
        if (!userRepository.existsByEmail("admin@elearning.com")) {
            User admin = new User();
            admin.setFirstName("Admin");
            admin.setLastName("User");
            admin.setEmail("admin@elearning.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setRole(User.Role.ADMIN);
            admin.setActive(true);
            admin.setBio("System Administrator");
            
            userRepository.save(admin);
            System.out.println("Default admin user created: admin@elearning.com / admin123");
        }
        
        // Create default teacher for testing
        if (!userRepository.existsByEmail("teacher@example.com")) {
            User teacher = new User();
            teacher.setFirstName("Jane");
            teacher.setLastName("Smith");
            teacher.setEmail("teacher@example.com");
            teacher.setPassword(passwordEncoder.encode("password123"));
            teacher.setRole(User.Role.TEACHER);
            teacher.setActive(true);
            teacher.setBio("Experienced web developer and educator");
            
            userRepository.save(teacher);
            System.out.println("Default teacher user created: teacher@example.com / password123");
        }
        
        // Create default student for testing
        if (!userRepository.existsByEmail("student@example.com")) {
            User student = new User();
            student.setFirstName("John");
            student.setLastName("Doe");
            student.setEmail("student@example.com");
            student.setPassword(passwordEncoder.encode("password123"));
            student.setRole(User.Role.STUDENT);
            student.setActive(true);
            
            userRepository.save(student);
            System.out.println("Default student user created: student@example.com / password123");
        }
    }
}
