package com.elearning.dto;

public class UserStatsResponse {
    private Long totalUsers;
    private Long students;
    private Long teachers;
    private Long admins;

    public UserStatsResponse(Long totalUsers, Long students, Long teachers, Long admins) {
        this.totalUsers = totalUsers;
        this.students = students;
        this.teachers = teachers;
        this.admins = admins;
    }

    public Long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(Long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public Long getStudents() {
        return students;
    }

    public void setStudents(Long students) {
        this.students = students;
    }

    public Long getTeachers() {
        return teachers;
    }

    public void setTeachers(Long teachers) {
        this.teachers = teachers;
    }

    public Long getAdmins() {
        return admins;
    }

    public void setAdmins(Long admins) {
        this.admins = admins;
    }
}
