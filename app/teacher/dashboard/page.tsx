"use client"

import { TeacherHeader } from "@/components/teacher-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, TrendingUp, DollarSign, Plus, Eye, Edit, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useEffect, useState } from "react"

// Mock data for teacher courses
const mockTeacherCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    students: 256,
    rating: 4.8,
    revenue: 0, // Free course
    thumbnail: "/web-development-course.png",
    status: "published",
    lastUpdated: "2 days ago",
    totalLessons: 45,
    completionRate: 68,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    students: 125,
    rating: 4.7,
    revenue: 0, // Free course
    thumbnail: "/javascript-advanced-course.png",
    status: "published",
    lastUpdated: "1 week ago",
    totalLessons: 28,
    completionRate: 72,
  },
  {
    id: 3,
    title: "React Fundamentals",
    students: 89,
    rating: 4.9,
    revenue: 0, // Free course
    thumbnail: "/placeholder.svg?key=react",
    status: "draft",
    lastUpdated: "3 days ago",
    totalLessons: 32,
    completionRate: 0,
  },
]

export default function TeacherDashboard() {
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    totalCourses: 3,
    totalStudents: 470,
    avgRating: 4.8,
    totalRevenue: 0, // Free courses
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <TeacherHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">Manage your courses and track student progress</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">+45 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgRating}</div>
              <p className="text-xs text-muted-foreground">+0.2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Free</div>
              <p className="text-xs text-muted-foreground">All courses are free</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground font-space-grotesk">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-24 flex-col space-y-2" asChild>
              <Link href="/teacher/courses/create">
                <Plus className="h-6 w-6" />
                <span>Create New Course</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/teacher/students">
                <Users className="h-6 w-6" />
                <span>View Students</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/teacher/analytics">
                <TrendingUp className="h-6 w-6" />
                <span>View Analytics</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* My Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground font-space-grotesk">My Courses</h2>
            <Button variant="outline" asChild>
              <Link href="/teacher/courses">View All Courses</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTeacherCourses.map((course) => (
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
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
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
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>Last updated {course.lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Students:</span>
                        <div className="font-medium">{course.students}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="font-medium">{course.rating}/5</div>
                      </div>
                    </div>

                    {course.status === "published" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Completion Rate</span>
                          <span className="font-medium">{course.completionRate}%</span>
                        </div>
                        <Progress value={course.completionRate} className="h-2" />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{course.totalLessons} lessons</span>
                      <span>Free Course</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
