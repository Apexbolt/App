"use client"

import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
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
import { Users, BookOpen, AlertTriangle, Activity, Star, UserCheck, Eye } from "lucide-react"
import Link from "next/link"

// Mock admin dashboard data
const mockAdminData = {
  overview: {
    totalUsers: 1247,
    totalTeachers: 45,
    totalStudents: 1202,
    totalCourses: 156,
    activeCourses: 134,
    pendingApprovals: 8,
    totalRevenue: 0, // Free platform
    systemHealth: 98,
  },
  userGrowth: [
    { month: "Jan", students: 156, teachers: 8 },
    { month: "Feb", students: 234, teachers: 12 },
    { month: "Mar", students: 298, teachers: 15 },
    { month: "Apr", students: 445, teachers: 22 },
    { month: "May", students: 567, teachers: 28 },
    { month: "Jun", students: 689, teachers: 35 },
  ],
  courseCategories: [
    { name: "Web Development", value: 45, color: "#ef4444" },
    { name: "Data Science", value: 28, color: "#3b82f6" },
    { name: "Design", value: 22, color: "#10b981" },
    { name: "Programming", value: 18, color: "#f59e0b" },
    { name: "Marketing", value: 15, color: "#8b5cf6" },
    { name: "Others", value: 28, color: "#6b7280" },
  ],
  recentActivity: [
    {
      id: 1,
      type: "course_created",
      user: "Dr. Angela Yu",
      action: "created a new course",
      target: "Advanced React Patterns",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "user_registered",
      user: "John Smith",
      action: "registered as a student",
      target: "",
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      type: "course_completed",
      user: "Sarah Johnson",
      action: "completed",
      target: "Web Development Bootcamp",
      timestamp: "6 hours ago",
    },
    {
      id: 4,
      type: "teacher_approved",
      user: "Mike Chen",
      action: "was approved as a teacher",
      target: "",
      timestamp: "1 day ago",
    },
  ],
  pendingApprovals: [
    {
      id: 1,
      type: "course",
      title: "Machine Learning Fundamentals",
      teacher: "Dr. Andrew Ng",
      submitted: "2 days ago",
      status: "pending",
    },
    {
      id: 2,
      type: "teacher",
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      submitted: "3 days ago",
      status: "pending",
    },
    {
      id: 3,
      type: "course",
      title: "Digital Marketing Strategy",
      teacher: "Mark Johnson",
      submitted: "4 days ago",
      status: "pending",
    },
  ],
  systemMetrics: [
    { name: "Server Uptime", value: 99.9, status: "excellent" },
    { name: "Response Time", value: 245, unit: "ms", status: "good" },
    { name: "Error Rate", value: 0.1, unit: "%", status: "excellent" },
    { name: "Active Sessions", value: 1247, status: "normal" },
  ],
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and management tools</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAdminData.overview.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {mockAdminData.overview.totalStudents} students, {mockAdminData.overview.totalTeachers} teachers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAdminData.overview.totalCourses}</div>
              <p className="text-xs text-muted-foreground">{mockAdminData.overview.activeCourses} active courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAdminData.overview.pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAdminData.overview.systemHealth}%</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Student and teacher registrations over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockAdminData.userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="students" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="teachers" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Categories</CardTitle>
              <CardDescription>Distribution of courses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockAdminData.courseCategories}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {mockAdminData.courseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* System Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>System Metrics</CardTitle>
            <CardDescription>Real-time platform performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockAdminData.systemMetrics.map((metric) => (
                <div key={metric.name} className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {metric.value}
                    {metric.unit && <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{metric.name}</p>
                  <Badge
                    variant={
                      metric.status === "excellent" ? "default" : metric.status === "good" ? "secondary" : "destructive"
                    }
                    className={
                      metric.status === "excellent"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : metric.status === "good"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : ""
                    }
                  >
                    {metric.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity and Pending Approvals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest platform activities and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAdminData.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      {activity.type === "course_created" && <BookOpen className="h-4 w-4 text-primary" />}
                      {activity.type === "user_registered" && <Users className="h-4 w-4 text-primary" />}
                      {activity.type === "course_completed" && <Star className="h-4 w-4 text-primary" />}
                      {activity.type === "teacher_approved" && <UserCheck className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                        {activity.target && <span className="font-medium">{activity.target}</span>}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pending Approvals</CardTitle>
                  <CardDescription>Items requiring admin review</CardDescription>
                </div>
                <Badge variant="destructive">{mockAdminData.pendingApprovals.length}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAdminData.pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                        <span className="text-sm font-medium">{item.type === "course" ? item.title : item.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.type === "course" ? `by ${item.teacher}` : item.email} • {item.submitted}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/admin/approvals">View All Approvals</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
