"use client"

import { TeacherHeader } from "@/components/teacher-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp, Users, BookOpen, Clock, Star, Target } from "lucide-react"
import { useState } from "react"

// Mock analytics data
const mockAnalyticsData = {
  overview: {
    totalRevenue: 0, // Free courses
    totalStudents: 470,
    totalCourses: 3,
    averageRating: 4.8,
    completionRate: 68,
    engagementRate: 85,
  },
  coursePerformance: [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      students: 256,
      completionRate: 78,
      averageRating: 4.8,
      revenue: 0,
      engagementRate: 89,
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      students: 125,
      completionRate: 72,
      averageRating: 4.7,
      revenue: 0,
      engagementRate: 82,
    },
    {
      id: 3,
      title: "React Fundamentals",
      students: 89,
      completionRate: 45,
      averageRating: 4.9,
      revenue: 0,
      engagementRate: 76,
    },
  ],
  monthlyData: [
    { month: "Jan", students: 45, completions: 12, engagement: 78 },
    { month: "Feb", students: 52, completions: 18, engagement: 82 },
    { month: "Mar", students: 48, completions: 15, engagement: 79 },
    { month: "Apr", students: 61, completions: 22, engagement: 85 },
    { month: "May", students: 58, completions: 19, engagement: 88 },
    { month: "Jun", students: 67, completions: 28, engagement: 91 },
  ],
  studentActivity: [
    { day: "Mon", active: 45, lessons: 89 },
    { day: "Tue", active: 52, lessons: 95 },
    { day: "Wed", active: 48, lessons: 87 },
    { day: "Thu", active: 61, lessons: 102 },
    { day: "Fri", active: 58, lessons: 98 },
    { day: "Sat", active: 35, lessons: 67 },
    { day: "Sun", active: 28, lessons: 54 },
  ],
  deviceUsage: [
    { name: "Desktop", value: 45, color: "#ef4444" },
    { name: "Mobile", value: 35, color: "#3b82f6" },
    { name: "Tablet", value: 20, color: "#10b981" },
  ],
  geographicData: [
    { country: "United States", students: 156, percentage: 33 },
    { country: "United Kingdom", students: 89, percentage: 19 },
    { country: "Canada", students: 67, percentage: 14 },
    { country: "Australia", students: 45, percentage: 10 },
    { country: "Germany", students: 38, percentage: 8 },
    { country: "Others", students: 75, percentage: 16 },
  ],
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6months")
  const [selectedCourse, setSelectedCourse] = useState("all")

  return (
    <div className="min-h-screen bg-background">
      <TeacherHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive insights into your teaching performance</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Course Performance</TabsTrigger>
            <TabsTrigger value="students">Student Analytics</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.totalStudents}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.completionRate}%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.averageRating}</div>
                  <p className="text-xs text-muted-foreground">+0.2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.engagementRate}%</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Growth</CardTitle>
                  <CardDescription>New enrollments and course completions over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={mockAnalyticsData.monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="students"
                        stackId="1"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="completions"
                        stackId="1"
                        stroke="hsl(var(--chart-2))"
                        fill="hsl(var(--chart-2))"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Usage</CardTitle>
                  <CardDescription>How students access your courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={mockAnalyticsData.deviceUsage}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {mockAnalyticsData.deviceUsage.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Where your students are located</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAnalyticsData.geographicData.map((country) => (
                    <div key={country.country} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-primary rounded-sm" />
                        <span className="font-medium">{country.country}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{country.students} students</span>
                        <Badge variant="secondary">{country.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Course Performance Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {mockAnalyticsData.coursePerformance.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.students} enrolled students</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Free Course
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.completionRate}%</div>
                        <p className="text-sm text-muted-foreground">Completion Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.averageRating}</div>
                        <p className="text-sm text-muted-foreground">Average Rating</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.engagementRate}%</div>
                        <p className="text-sm text-muted-foreground">Engagement Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.students}</div>
                        <p className="text-sm text-muted-foreground">Total Students</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Student Analytics Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Student Activity</CardTitle>
                <CardDescription>Active students and lessons completed by day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={mockAnalyticsData.studentActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="active" fill="hsl(var(--primary))" name="Active Students" />
                    <Bar dataKey="lessons" fill="hsl(var(--chart-2))" name="Lessons Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Engagement Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Student engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={mockAnalyticsData.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="engagement" stroke="hsl(var(--primary))" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Insights</CardTitle>
                  <CardDescription>Key findings and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-900">High Engagement</span>
                    </div>
                    <p className="text-sm text-green-800">
                      Your courses maintain an 85% average engagement rate, well above industry standards.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Peak Activity</span>
                    </div>
                    <p className="text-sm text-blue-800">
                      Students are most active on weekdays, particularly Tuesday through Thursday.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Content Performance</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Video lessons have 23% higher completion rates than text-based content.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Actions to improve engagement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Increase Video Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Consider adding more video lessons to boost engagement and completion rates.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Weekend Engagement</h4>
                    <p className="text-sm text-muted-foreground">
                      Send reminder emails on weekends to maintain learning momentum.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Interactive Elements</h4>
                    <p className="text-sm text-muted-foreground">
                      Add more quizzes and interactive exercises to increase student participation.
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
