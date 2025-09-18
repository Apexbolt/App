"use client"

import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Users, Clock, TrendingUp } from "lucide-react"
import { useState } from "react"

// Mock course data for admin
const mockAdminCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    category: "Web Development",
    level: "Beginner",
    students: 256,
    rating: 4.8,
    reviews: 89,
    status: "published",
    createdDate: "2023-12-01",
    lastUpdated: "2024-01-15",
    revenue: 0,
    completionRate: 78,
    thumbnail: "/web-development-course.png",
    totalLessons: 45,
    duration: "54 hours",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Jose Portilla",
    category: "Programming",
    level: "Advanced",
    students: 125,
    rating: 4.7,
    reviews: 34,
    status: "published",
    createdDate: "2023-12-15",
    lastUpdated: "2024-01-10",
    revenue: 0,
    completionRate: 72,
    thumbnail: "/javascript-advanced-course.png",
    totalLessons: 28,
    duration: "32 hours",
  },
  {
    id: 3,
    title: "React Fundamentals",
    instructor: "Dr. Angela Yu",
    category: "Web Development",
    level: "Intermediate",
    students: 89,
    rating: 4.9,
    reviews: 23,
    status: "draft",
    createdDate: "2024-01-20",
    lastUpdated: "2024-01-22",
    revenue: 0,
    completionRate: 0,
    thumbnail: "/placeholder.svg?key=react",
    totalLessons: 32,
    duration: "40 hours",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Andrew Ng",
    category: "Data Science",
    level: "Intermediate",
    students: 0,
    rating: 0,
    reviews: 0,
    status: "pending",
    createdDate: "2024-01-25",
    lastUpdated: "2024-01-25",
    revenue: 0,
    completionRate: 0,
    thumbnail: "/python-data-science-course.png",
    totalLessons: 36,
    duration: "48 hours",
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    instructor: "Sarah Wilson",
    category: "Design",
    level: "Beginner",
    students: 67,
    rating: 4.6,
    reviews: 18,
    status: "published",
    createdDate: "2024-01-10",
    lastUpdated: "2024-01-18",
    revenue: 0,
    completionRate: 65,
    thumbnail: "/ui-ux-design-course.png",
    totalLessons: 24,
    duration: "28 hours",
  },
]

export default function AdminCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredCourses = mockAdminCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || course.status === statusFilter
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter
    return matchesSearch && matchesStatus && matchesCategory
  })

  const handleCourseAction = (action, courseId) => {
    console.log(`${action} course with ID: ${courseId}`)
    // TODO: Implement actual course management actions
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "draft":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "suspended":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Course Management</h1>
            <p className="text-muted-foreground">Oversee all courses, approvals, and content moderation</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Export Courses</Button>
            <Button>Add Course</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAdminCourses.length}</div>
              <p className="text-xs text-muted-foreground">
                {mockAdminCourses.filter((c) => c.status === "published").length} published
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockAdminCourses.filter((c) => c.status === "pending").length}
              </div>
              <p className="text-xs text-muted-foreground">Require review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockAdminCourses.reduce((acc, course) => acc + course.students, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Completion</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(
                  mockAdminCourses
                    .filter((c) => c.status === "published")
                    .reduce((acc, course) => acc + course.completionRate, 0) /
                    mockAdminCourses.filter((c) => c.status === "published").length,
                )}
                %
              </div>
              <p className="text-xs text-muted-foreground">Published courses</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(e\
