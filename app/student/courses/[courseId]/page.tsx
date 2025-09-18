"use client"

import { StudentHeader } from "@/components/student-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  FileText,
  CheckCircle,
  Circle,
  Award,
  Globe,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

// Mock course detail data
const mockCourseDetail = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  instructor: {
    name: "Dr. Angela Yu",
    avatar: "/placeholder.svg",
    bio: "Lead Instructor at the App Brewery. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer.",
    rating: 4.9,
    students: 50000,
    courses: 12,
  },
  description:
    "Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy!",
  longDescription: `At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.

Here's why this is the best course for learning web development:

• The course is taught by the lead instructor at the App Brewery, London's leading in-person programming bootcamp.

• The course has been updated to be 2024 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.

• This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.

• The curriculum was developed over a period of four years, with comprehensive student testing and feedback.

• We've taught over 600,000 students how to code and many have gone on to change their lives by becoming professional developers or starting their own tech startup.

• You'll save yourself over $12,000 by enrolling, and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming bootcamp.

• The course is constantly updated with new content, with new projects and modules determined by students - that's you!`,
  thumbnail: "/web-development-course.png",
  rating: 4.8,
  reviews: 89234,
  students: 256789,
  totalLessons: 45,
  totalDuration: "54 hours",
  level: "Beginner",
  category: "Web Development",
  language: "English",
  lastUpdated: "December 2024",
  price: "Free",
  enrolled: false,
  features: [
    "65+ hours of HD video content",
    "Downloadable resources and exercises",
    "Full lifetime access",
    "Access on mobile and TV",
    "Certificate of completion",
    "30-day money-back guarantee",
  ],
  requirements: [
    "No programming experience needed - I'll teach you everything you need to know",
    "A computer with access to the internet",
    "No paid software required - all websites will be created with free software",
  ],
  whatYouWillLearn: [
    "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development",
    "After the course you will be able to build ANY website you want",
    "Build fully-fledged websites and web apps for your startup or business",
    "Work as a freelance web developer",
    "Master frontend development with React",
    "Master backend development with Node",
    "Learn professional developer best practices",
  ],
  modules: [
    {
      id: 1,
      title: "Introduction to Web Development",
      lessons: [
        {
          id: 1,
          title: "What is Web Development?",
          type: "video",
          duration: "12:30",
          completed: false,
        },
        {
          id: 2,
          title: "Setting Up Your Development Environment",
          type: "video",
          duration: "18:45",
          completed: false,
        },
        {
          id: 3,
          title: "Course Resources",
          type: "pdf",
          duration: "5 min read",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      lessons: [
        {
          id: 4,
          title: "HTML Structure and Elements",
          type: "video",
          duration: "25:15",
          completed: false,
        },
        {
          id: 5,
          title: "HTML Forms and Input Types",
          type: "video",
          duration: "22:30",
          completed: false,
        },
        {
          id: 6,
          title: "HTML Best Practices Guide",
          type: "pdf",
          duration: "8 min read",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "CSS Styling",
      lessons: [
        {
          id: 7,
          title: "CSS Selectors and Properties",
          type: "video",
          duration: "28:20",
          completed: false,
        },
        {
          id: 8,
          title: "Flexbox and Grid Layout",
          type: "video",
          duration: "35:45",
          completed: false,
        },
      ],
    },
  ],
}

export default function CourseDetailPage() {
  const params = useParams()
  const [enrolled, setEnrolled] = useState(mockCourseDetail.enrolled)

  const handleEnroll = () => {
    // TODO: Implement enrollment logic
    setEnrolled(true)
  }

  const totalLessons = mockCourseDetail.modules.reduce((acc, module) => acc + module.lessons.length, 0)

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{mockCourseDetail.category}</Badge>
                <Badge variant="outline">{mockCourseDetail.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold font-space-grotesk">{mockCourseDetail.title}</h1>
              <p className="text-lg text-muted-foreground">{mockCourseDetail.description}</p>

              {/* Course Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{mockCourseDetail.rating}</span>
                  <span className="text-muted-foreground">({mockCourseDetail.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{mockCourseDetail.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{mockCourseDetail.totalDuration}</span>
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <Card>
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={mockCourseDetail.thumbnail || "/placeholder.svg"}
                  alt={mockCourseDetail.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="rounded-full">
                    <Play className="h-6 w-6 mr-2" />
                    Preview Course
                  </Button>
                </div>
              </div>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What you'll learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mockCourseDetail.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle>Course content</CardTitle>
                <CardDescription>
                  {mockCourseDetail.modules.length} modules • {totalLessons} lessons • {mockCourseDetail.totalDuration}{" "}
                  total length
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockCourseDetail.modules.map((module) => (
                  <div key={module.id} className="border rounded-lg">
                    <div className="p-4 bg-muted/30">
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{module.lessons.length} lessons</p>
                    </div>
                    <div className="divide-y">
                      {module.lessons.map((lesson) => (
                        <div key={lesson.id} className="p-4 flex items-center gap-3">
                          <div className="flex-shrink-0">
                            {lesson.type === "video" ? (
                              <Play className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <FileText className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{lesson.title}</p>
                          </div>
                          <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockCourseDetail.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Circle className="h-2 w-2 text-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {mockCourseDetail.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mockCourseDetail.instructor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{mockCourseDetail.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{mockCourseDetail.instructor.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{mockCourseDetail.instructor.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{mockCourseDetail.instructor.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{mockCourseDetail.instructor.courses} courses</span>
                      </div>
                    </div>
                    <p className="text-sm">{mockCourseDetail.instructor.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="sticky top-8">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={mockCourseDetail.thumbnail || "/placeholder.svg"}
                  alt={mockCourseDetail.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{mockCourseDetail.price}</div>
                    <p className="text-sm text-muted-foreground">Full lifetime access</p>
                  </div>

                  {enrolled ? (
                    <div className="space-y-3">
                      <Button className="w-full" asChild>
                        <Link href={`/student/learn/${mockCourseDetail.id}`}>
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </Link>
                      </Button>
                      <div className="text-center">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Enrolled
                        </Badge>
                      </div>
                    </div>
                  ) : (
                    <Button className="w-full" onClick={handleEnroll}>
                      Enroll Now
                    </Button>
                  )}

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <h4 className="font-semibold">This course includes:</h4>
                    <ul className="space-y-2">
                      {mockCourseDetail.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>{mockCourseDetail.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span>Mobile access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Updated {mockCourseDetail.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
