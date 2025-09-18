"use client"

import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Users, UserCheck, MoreHorizontal, Mail, Shield, Ban, Edit, Trash2, Download } from "lucide-react"
import { useState } from "react"

// Mock user data
const mockUsers = {
  students: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      coursesEnrolled: 3,
      coursesCompleted: 1,
      status: "active",
      totalHours: 45,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2024-01-08",
      lastActive: "1 day ago",
      coursesEnrolled: 5,
      coursesCompleted: 3,
      status: "active",
      totalHours: 78,
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2024-02-01",
      lastActive: "1 week ago",
      coursesEnrolled: 2,
      coursesCompleted: 0,
      status: "inactive",
      totalHours: 12,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2024-01-20",
      lastActive: "3 hours ago",
      coursesEnrolled: 4,
      coursesCompleted: 2,
      status: "active",
      totalHours: 56,
    },
  ],
  teachers: [
    {
      id: 1,
      name: "Dr. Angela Yu",
      email: "angela.yu@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2023-12-01",
      lastActive: "1 hour ago",
      coursesCreated: 3,
      totalStudents: 470,
      status: "active",
      rating: 4.8,
      verified: true,
    },
    {
      id: 2,
      name: "Jose Portilla",
      email: "jose.portilla@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2023-12-15",
      lastActive: "5 hours ago",
      coursesCreated: 2,
      totalStudents: 234,
      status: "active",
      rating: 4.7,
      verified: true,
    },
    {
      id: 3,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      avatar: "/placeholder.svg",
      joinDate: "2024-01-10",
      lastActive: "2 days ago",
      coursesCreated: 1,
      totalStudents: 89,
      status: "pending",
      rating: 0,
      verified: false,
    },
  ],
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("students")

  const filteredStudents = mockUsers.students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const filteredTeachers = mockUsers.teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || teacher.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleUserAction = (action, userId, userType) => {
    console.log(`${action} ${userType} with ID: ${userId}`)
    // TODO: Implement actual user management actions
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">User Management</h1>
            <p className="text-muted-foreground">Manage students, teachers, and user permissions</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
            <Button>
              <Users className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="students">Students ({mockUsers.students.length})</TabsTrigger>
              <TabsTrigger value="teachers">Teachers ({mockUsers.teachers.length})</TabsTrigger>
            </TabsList>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
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
                          <div className="text-lg font-bold">{student.coursesEnrolled}</div>
                          <p className="text-xs text-muted-foreground">Enrolled</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{student.coursesCompleted}</div>
                          <p className="text-xs text-muted-foreground">Completed</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{student.totalHours}h</div>
                          <p className="text-xs text-muted-foreground">Learning Time</p>
                        </div>
                        <Badge
                          variant={student.status === "active" ? "default" : "secondary"}
                          className={
                            student.status === "active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : student.status === "inactive"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                : ""
                          }
                        >
                          {student.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleUserAction("view", student.id, "student")}>
                              <UserCheck className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUserAction("message", student.id, "student")}>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUserAction("edit", student.id, "student")}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleUserAction("suspend", student.id, "student")}
                              className="text-yellow-600"
                            >
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend User
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleUserAction("delete", student.id, "student")}
                              className="text-destructive"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredTeachers.map((teacher) => (
                <Card key={teacher.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={teacher.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{teacher.name}</h3>
                            {teacher.verified && (
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                <Shield className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{teacher.email}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                            <span>Joined {new Date(teacher.joinDate).toLocaleDateString()}</span>
                            <span>Last active {teacher.lastActive}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-lg font-bold">{teacher.coursesCreated}</div>
                          <p className="text-xs text-muted-foreground">Courses</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{teacher.totalStudents}</div>
                          <p className="text-xs text-muted-foreground">Students</p>
                        </div>
                        {teacher.rating > 0 && (
                          <div className="text-center">
                            <div className="text-lg font-bold">{teacher.rating}</div>
                            <p className="text-xs text-muted-foreground">Rating</p>
                          </div>
                        )}
                        <Badge
                          variant={teacher.status === "active" ? "default" : "secondary"}
                          className={
                            teacher.status === "active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : teacher.status === "pending"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                : ""
                          }
                        >
                          {teacher.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleUserAction("view", teacher.id, "teacher")}>
                              <UserCheck className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUserAction("message", teacher.id, "teacher")}>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Message
                            </DropdownMenuItem>
                            {teacher.status === "pending" && (
                              <DropdownMenuItem
                                onClick={() => handleUserAction("approve", teacher.id, "teacher")}
                                className="text-green-600"
                              >
                                <UserCheck className="mr-2 h-4 w-4" />
                                Approve Teacher
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => handleUserAction("edit", teacher.id, "teacher")}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleUserAction("suspend", teacher.id, "teacher")}
                              className="text-yellow-600"
                            >
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend User
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleUserAction("delete", teacher.id, "teacher")}
                              className="text-destructive"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {((activeTab === "students" && filteredStudents.length === 0) ||
          (activeTab === "teachers" && filteredTeachers.length === 0)) && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground mb-4">No {activeTab} match your current search and filter criteria.</p>
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
