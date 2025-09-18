"use client"

import { StudentHeader } from "@/components/student-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star, Users, Clock, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock data for all courses
const mockAllCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    students: 25600,
    thumbnail: "/web-development-course.png",
    category: "Web Development",
    duration: "54 hours",
    price: "Free",
    level: "Beginner",
    enrolled: true,
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Jose Portilla",
    rating: 4.7,
    students: 18900,
    thumbnail: "/python-data-science-course.png",
    category: "Data Science",
    duration: "42 hours",
    price: "Free",
    level: "Intermediate",
    enrolled: true,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 12300,
    thumbnail: "/ui-ux-design-course.png",
    category: "Design",
    duration: "36 hours",
    price: "Free",
    level: "Beginner",
    enrolled: true,
  },
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
    level: "Advanced",
    enrolled: false,
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
    level: "Intermediate",
    enrolled: false,
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
    level: "Advanced",
    enrolled: false,
  },
  {
    id: 7,
    title: "Digital Marketing Masterclass",
    instructor: "Phil Ebiner",
    rating: 4.6,
    students: 9800,
    thumbnail: "/digital-marketing-course.png",
    category: "Marketing",
    duration: "32 hours",
    price: "Free",
    level: "Beginner",
    enrolled: false,
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    instructor: "Nathan House",
    rating: 4.8,
    students: 7200,
    thumbnail: "/cybersecurity-course.png",
    category: "Security",
    duration: "38 hours",
    price: "Free",
    level: "Intermediate",
    enrolled: false,
  },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const categories = [
    "Web Development",
    "Data Science",
    "Design",
    "Programming",
    "Mobile Development",
    "AI & ML",
    "Marketing",
    "Security",
  ]
  const levels = ["Beginner", "Intermediate", "Advanced"]

  const filteredCourses = mockAllCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "enrolled" && course.enrolled) ||
      (activeTab === "available" && !course.enrolled)

    return matchesSearch && matchesCategory && matchesLevel && matchesTab
  })

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Courses</h1>
          <p className="text-muted-foreground">Discover and enroll in courses to advance your skills</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="enrolled">My Courses</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-600">{course.price}</Badge>
                    {course.enrolled && (
                      <Button
                        size="sm"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <Link href={`/student/learn/${course.id}`}>
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Link>
                      </Button>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-base line-clamp-2 leading-tight">{course.title}</CardTitle>
                    <CardDescription className="text-sm">by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    {course.enrolled ? (
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <Link href={`/student/learn/${course.id}`}>Continue Learning</Link>
                      </Button>
                    ) : (
                      <Button className="w-full" asChild>
                        <Link href={`/student/courses/${course.id}`}>Enroll Now</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No courses found matching your criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
