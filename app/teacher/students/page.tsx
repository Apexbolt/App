"use client"

import { TeacherHeader } from "@/components/teacher-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Search, Users, TrendingUp, Clock, BookOpen, MessageSquare, Mail, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

// Mock student data
const mockStudentData = {
  overview: {
    totalStudents: 470,
    activeStudents: 342,
    averageProgress: 68,
    completionRate: 45,
  },
  students: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder.svg",
      enrolledCourses: 2,
      completedCourses: 1,
      totalProgress: 75,
      lastActive: "2 hours ago",
      joinDate: "2024-01-15",
      courses: [
        {
          id: 1,
          title: "Complete Web Development Bootcamp",
          progress: 85,
          timeSpent: 32,
          lastAccessed: "2 hours ago",
        },
        {
          id: 2,
          title: "Advanced JavaScript Concepts",
          progress: 65,
          timeSpent: 18,
          lastAccessed: "1 day ago",
        },
      ],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/placeholder.svg",
      enrolledCourses: 3,
      completedCourses: 2,
      totalProgress: 92,
      lastActive: "1 day ago",
      joinDate: "2024-01-08",
      courses: [
        {
          id: 1,
          title: "Complete Web Development Bootcamp",
          progress: 100,
          timeSpent: 45,
          lastAccessed: "3 days ago",
        },
        {
          id: 2,
          title: "Advanced JavaScript Concepts",
          progress: 100,
          timeSpent: 28,
          lastAccessed: "1 week ago",
        },
        {
          id: 3,
          title: "React Fundamentals",
          progress: 45,
          timeSpent: 12,
          lastAccessed: "1 day ago",
        },
      ],
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@example.com",
      avatar: "/placeholder.svg",
      enrolledCourses: 1,
      completedCourses: 0,
      totalProgress: 35,
      lastActive: "3 days ago",
      joinDate: "2024-02-01",
      courses: [
        {
          id: 1,
          title: "Complete Web Development Bootcamp",
          progress: 35,
          timeSpent: 15,
          lastAccessed: "3 days ago",
        },
      ],
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      avatar: "/placeholder.svg",
      enrolledCourses: 2,
      completedCourses: 1,
      totalProgress: 78,
      lastActive: "5 hours ago",
      joinDate: "2024-01-20",
      courses: [
        {
          id: 2,
          title: "Advanced JavaScript Concepts",
          progress: 100,
          timeSpent: 28,
          lastAccessed: "1 week ago",
        },
        {
          id: 3,
          title: "React Fundamentals",
          progress: 56,
          timeSpent: 16,
          lastAccessed: "5 hours ago",
        },
      ],
    },
  ],
  engagementData: [
    { month: "Jan", active: 45, completed: 12 },
    { month: "Feb", active: 52, completed: 18 },
    { month: "Mar", active: 48, completed: 15 },
    { month: "Apr", active: 61, completed: 22 },
    { month: "May", active: 58, completed: 19 },
    { month: "Jun", active: 67, completed: 28 },
  ],
  progressDistribution: [
    { range: "0-25%", count: 45 },
    { range: "26-50%", count: 78 },
    { range: "51-75%", count: 125 },
    { range: "76-100%", count: 89 },
  ],
}

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredStudents = mockStudentData.students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <TeacherHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Student Management</h1>
          <p className="text-muted-foreground">Track student progress and engagement across your courses</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStudentData.overview.totalStudents}</div>
                  <p className="text-xs text-muted-foreground">Across all courses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Students</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStudentData.overview.activeStudents}</div>
                  <p className="text-xs text-muted-foreground">Active this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStudentData.overview.averageProgress}%</div>
                  <p className="text-xs text-muted-foreground">Across all students</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStudentData.overview.completionRate}%</div>
                  <p className="text-xs text-muted-foreground">Course completion</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Engagement</CardTitle>
                  <CardDescription>Active students and course completions over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockStudentData.engagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="active" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line type="monotone" dataKey="completed" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress Distribution</CardTitle>
                  <CardDescription>How students are progressing through courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mockStudentData.progressDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="1">Web Development Bootcamp</SelectItem>
                  <SelectItem value="2">Advanced JavaScript</SelectItem>
                  <SelectItem value="3">React Fundamentals</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="lastActive">Last Active</SelectItem>
                  <SelectItem value="joinDate">Join Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Students List */}
            <div className="space-y-4">
              {filteredStudents.map((student) => (
                <Card key={student.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={student.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                            <span>Joined {new Date(student.joinDate).toLocaleDateString()}</span>
                            <span>Last active {student.lastActive}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{student.totalProgress}%</div>
                          <p className="text-xs text-muted-foreground">Overall Progress</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">
                            {student.completedCourses}/{student.enrolledCourses}
                          </div>
                          <p className="text-xs text-muted-foreground">Courses</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    {/* Course Progress */}
                    <div className="mt-6 space-y-3">
                      <h4 className="font-medium text-sm">Course Progress</h4>
                      {student.courses.map((course) => (
                        <div key={course.id} className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">{course.title}</span>
                              <span className="text-sm text-muted-foreground">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {course.timeSpent}h • {course.lastAccessed}
                          </div>
                        </div>
                      ))}
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
                  <CardTitle>Top Performing Students</CardTitle>
                  <CardDescription>Students with highest completion rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockStudentData.students
                      .sort((a, b) => b.totalProgress - a.totalProgress)
                      .slice(0, 5)
                      .map((student, index) => (
                        <div key={student.id} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </div>
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{student.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {student.completedCourses} courses completed
                            </p>
                          </div>
                          <Badge variant="secondary">{student.totalProgress}%</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Insights</CardTitle>
                  <CardDescription>Key metrics and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Engagement Trend</span>
                    </div>
                    <p className="text-sm text-blue-800">
                      Student engagement has increased by 15% this month. Great job!
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-yellow-600" />
                      <span className="font-medium text-yellow-900">At-Risk Students</span>
                    </div>
                    <p className="text-sm text-yellow-800">
                      12 students haven't been active in over a week. Consider reaching out.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-900">Course Performance</span>
                    </div>
                    <p className="text-sm text-green-800">
                      Web Development Bootcamp has the highest completion rate at 78%.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
