"use client"

import { StudentHeader } from "@/components/student-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Trophy, TrendingUp, Play, Star, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Mock data - replace with actual API calls
const mockEnrolledCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 65,
    totalLessons: 45,
    completedLessons: 29,
    thumbnail: "/web-development-course.png",
    category: "Web Development",
    duration: "54 hours",
    lastAccessed: "2 hours ago",
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Jose Portilla",
    progress: 30,
    totalLessons: 32,
    completedLessons: 10,
    thumbnail: "/python-data-science-course.png",
    category: "Data Science",
    duration: "42 hours",
    lastAccessed: "1 day ago",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Johnson",
    progress: 85,
    totalLessons: 28,
    completedLessons: 24,
    thumbnail: "/ui-ux-design-course.png",
    category: "Design",
    duration: "36 hours",
    lastAccessed: "3 hours ago",
  },
]

const mockRecommendedCourses = [
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    students: 12500,
    thumbnail: "/javascript-advanced-course.png",
    category: "Programming",
    duration: "28 hours",
    price: "Free",
  },
  {
    id: 5,
    title: "React Native Mobile Development",
    instructor: "Stephen Grider",
    rating: 4.7,
    students: 8900,
    thumbnail: "/react-native-mobile-course.jpg",
    category: "Mobile Development",
    duration: "35 hours",
    price: "Free",
  },
  {
    id: 6,
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    rating: 4.9,
    students: 15600,
    thumbnail: "/machine-learning-course.png",
    category: "AI & ML",
    duration: "44 hours",
    price: "Free",
  },
]

export default function StudentDashboard() {
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    totalCourses: 3,
    completedCourses: 1,
    totalHours: 45,
    certificates: 2,
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">Continue your learning journey and achieve your goals.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedCourses}</div>
              <p className="text-xs text-muted-foreground">33% completion rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalHours}</div>
              <p className="text-xs text-muted-foreground">+12 hours this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.certificates}</div>
              <p className="text-xs text-muted-foreground">2 earned this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground font-space-grotesk">Continue Learning</h2>
            <Button variant="outline" asChild>
              <Link href="/student/courses">View All Courses</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEnrolledCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Button
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Continue
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <span className="text-xs text-muted-foreground">{course.lastAccessed}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {course.completedLessons}/{course.totalLessons} lessons
                      </span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground font-space-grotesk">Recommended for You</h2>
            <Button variant="outline" asChild>
              <Link href="/student/courses">Explore More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRecommendedCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-600">{course.price}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <span>{course.duration}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/student/courses/${course.id}`}>Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
