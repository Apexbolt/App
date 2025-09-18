"use client"

import { TeacherHeader } from "@/components/teacher-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Eye, Edit, Trash2, Users, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock data for teacher's courses
const mockTeacherCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
    students: 256,
    rating: 4.8,
    reviews: 89,
    thumbnail: "/web-development-course.png",
    status: "published",
    lastUpdated: "2 days ago",
    totalLessons: 45,
    completionRate: 68,
    category: "Web Development",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    description: "Master advanced JavaScript concepts including closures, prototypes, async/await and more.",
    students: 125,
    rating: 4.7,
    reviews: 34,
    thumbnail: "/javascript-advanced-course.png",
    status: "published",
    lastUpdated: "1 week ago",
    totalLessons: 28,
    completionRate: 72,
    category: "Programming",
    level: "Advanced",
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Learn React from scratch including components, state, props, and hooks.",
    students: 89,
    rating: 4.9,
    reviews: 23,
    thumbnail: "/placeholder.svg?key=react",
    status: "draft",
    lastUpdated: "3 days ago",
    totalLessons: 32,
    completionRate: 0,
    category: "Web Development",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Python for Beginners",
    description: "Start your programming journey with Python - the most beginner-friendly language.",
    students: 0,
    rating: 0,
    reviews: 0,
    thumbnail: "/python-data-science-course.png",
    status: "draft",
    lastUpdated: "1 day ago",
    totalLessons: 24,
    completionRate: 0,
    category: "Programming",
    level: "Beginner",
  },
]

export default function TeacherCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredCourses = mockTeacherCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || course.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const handleDeleteCourse = (courseId) => {
    // TODO: Implement delete functionality
    console.log("Delete course:", courseId)
  }

  return (
    <div className="min-h-screen bg-background">
      <TeacherHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">My Courses</h1>
            <p className="text-muted-foreground">Manage and track your course content</p>
          </div>
          <Button asChild>
            <Link href="/teacher/courses/create">
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search your courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant={selectedStatus === "all" ? "default" : "outline"} onClick={() => setSelectedStatus("all")}>
              All
            </Button>
            <Button
              variant={selectedStatus === "published" ? "default" : "outline"}
              onClick={() => setSelectedStatus("published")}
            >
              Published
            </Button>
            <Button
              variant={selectedStatus === "draft" ? "default" : "outline"}
              onClick={() => setSelectedStatus("draft")}
            >
              Draft
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <Badge
                  className={`absolute top-3 right-3 ${
                    course.status === "published"
                      ? "bg-green-600 hover:bg-green-600"
                      : "bg-yellow-600 hover:bg-yellow-600"
                  }`}
                >
                  {course.status}
                </Badge>
                <div className="absolute top-3 left-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem asChild>
                        <Link href={`/teacher/courses/${course.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Course
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/teacher/courses/${course.id}/edit`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Course
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteCourse(course.id)} className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Course
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg line-clamp-2 leading-tight">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                    </div>
                    {course.status === "published" && course.rating > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>
                          {course.rating} ({course.reviews})
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Progress for published courses */}
                  {course.status === "published" && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Avg. Completion</span>
                        <span className="font-medium">{course.completionRate}%</span>
                      </div>
                      <Progress value={course.completionRate} className="h-2" />
                    </div>
                  )}

                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.totalLessons} lessons</span>
                    <span>Updated {course.lastUpdated}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <Link href={`/teacher/courses/${course.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/teacher/courses/${course.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No courses found matching your criteria.</p>
            <Button asChild>
              <Link href="/teacher/courses/create">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Course
              </Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
