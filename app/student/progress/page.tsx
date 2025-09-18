"use client"

import { StudentHeader } from "@/components/student-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Trophy, Clock, BookOpen, TrendingUp, Calendar, Target, Award, Download, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock progress data
const mockProgressData = {
  overallStats: {
    totalCourses: 3,
    completedCourses: 1,
    inProgressCourses: 2,
    totalHoursLearned: 45,
    averageScore: 87,
    streak: 12,
    certificates: 2,
  },
  courseProgress: [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      thumbnail: "/web-development-course.png",
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      timeSpent: 28,
      lastAccessed: "2 hours ago",
      status: "in-progress",
      averageScore: 92,
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Jose Portilla",
      thumbnail: "/python-data-science-course.png",
      progress: 30,
      totalLessons: 32,
      completedLessons: 10,
      timeSpent: 12,
      lastAccessed: "1 day ago",
      status: "in-progress",
      averageScore: 85,
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Johnson",
      thumbnail: "/ui-ux-design-course.png",
      progress: 100,
      totalLessons: 28,
      completedLessons: 28,
      timeSpent: 24,
      lastAccessed: "3 days ago",
      status: "completed",
      averageScore: 94,
    },
  ],
  weeklyActivity: [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.8 },
    { day: "Wed", hours: 3.2 },
    { day: "Thu", hours: 2.1 },
    { day: "Fri", hours: 4.0 },
    { day: "Sat", hours: 1.5 },
    { day: "Sun", hours: 2.8 },
  ],
  monthlyProgress: [
    { month: "Jan", completed: 5 },
    { month: "Feb", completed: 8 },
    { month: "Mar", completed: 12 },
    { month: "Apr", completed: 15 },
    { month: "May", completed: 18 },
    { month: "Jun", completed: 22 },
  ],
  skillDistribution: [
    { name: "Web Development", value: 40, color: "#ef4444" },
    { name: "Data Science", value: 25, color: "#3b82f6" },
    { name: "Design", value: 20, color: "#10b981" },
    { name: "Programming", value: 15, color: "#f59e0b" },
  ],
  certificates: [
    {
      id: 1,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Johnson",
      completedDate: "2024-01-15",
      certificateUrl: "/certificates/ui-ux-design.pdf",
      thumbnail: "/ui-ux-design-course.png",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      instructor: "John Smith",
      completedDate: "2024-01-08",
      certificateUrl: "/certificates/javascript-basics.pdf",
      thumbnail: "/javascript-advanced-course.png",
    },
  ],
}

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Learning Progress</h1>
          <p className="text-muted-foreground">Track your learning journey and achievements</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockProgressData.overallStats.totalCourses}</div>
                  <p className="text-xs text-muted-foreground">
                    {mockProgressData.overallStats.completedCourses} completed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockProgressData.overallStats.totalHoursLearned}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockProgressData.overallStats.averageScore}%</div>
                  <p className="text-xs text-muted-foreground">Across all courses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockProgressData.overallStats.streak}</div>
                  <p className="text-xs text-muted-foreground">Days in a row</p>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Learning Activity</CardTitle>
                <CardDescription>Hours spent learning each day this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockProgressData.weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Skill Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skill Distribution</CardTitle>
                  <CardDescription>Your learning focus areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={mockProgressData.skillDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {mockProgressData.skillDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Your latest accomplishments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Course Completed</p>
                      <p className="text-xs text-muted-foreground">UI/UX Design Fundamentals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">12-Day Streak</p>
                      <p className="text-xs text-muted-foreground">Keep up the momentum!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Certificate Earned</p>
                      <p className="text-xs text-muted-foreground">JavaScript Basics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProgressData.courseProgress.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-3 right-3 ${
                        course.status === "completed"
                          ? "bg-green-600 hover:bg-green-600"
                          : "bg-blue-600 hover:bg-blue-600"
                      }`}
                    >
                      {course.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <CardDescription>by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Lessons:</span>
                          <div className="font-medium">
                            {course.completedLessons}/{course.totalLessons}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Time:</span>
                          <div className="font-medium">{course.timeSpent}h</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Score:</span>
                          <div className="font-medium">{course.averageScore}%</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last:</span>
                          <div className="font-medium">{course.lastAccessed}</div>
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/student/learn/${course.id}`}>
                          {course.status === "completed" ? "Review Course" : "Continue Learning"}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Progress</CardTitle>
                  <CardDescription>Lessons completed each month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockProgressData.monthlyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="completed" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Insights</CardTitle>
                  <CardDescription>Your learning patterns and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Peak Learning Time</span>
                    </div>
                    <p className="text-sm text-blue-800">
                      You learn best between 2-4 PM. Consider scheduling study sessions during this time.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-900">Consistency Streak</span>
                    </div>
                    <p className="text-sm text-green-800">
                      Great job maintaining a 12-day learning streak! Keep it up to build lasting habits.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Recommended Focus</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Based on your progress, consider diving deeper into React and Node.js concepts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Statistics</CardTitle>
                <CardDescription>Comprehensive view of your learning metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">87%</div>
                    <p className="text-sm text-muted-foreground">Average Quiz Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">156</div>
                    <p className="text-sm text-muted-foreground">Total Lessons Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24</div>
                    <p className="text-sm text-muted-foreground">Days Active This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProgressData.certificates.map((certificate) => (
                <Card key={certificate.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="h-16 w-16 text-primary/30" />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Certified
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{certificate.title}</CardTitle>
                    <CardDescription>by {certificate.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Completed on {new Date(certificate.completedDate).toLocaleDateString()}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {mockProgressData.certificates.length === 0 && (
              <div className="text-center py-12">
                <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No certificates yet</h3>
                <p className="text-muted-foreground mb-4">
                  Complete courses to earn certificates and showcase your achievements.
                </p>
                <Button asChild>
                  <Link href="/student/courses">Browse Courses</Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
