"use client"

import { StudentHeader } from "@/components/student-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize,
  CheckCircle,
  Circle,
  FileText,
  Video,
  MessageSquare,
  Send,
  BookOpen,
  Clock,
} from "lucide-react"
import { useState } from "react"
import { useParams } from "next/navigation"

// Mock course data
const mockCourseData = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  instructor: "Dr. Angela Yu",
  description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
  thumbnail: "/web-development-course.png",
  totalLessons: 45,
  totalDuration: "54 hours",
  enrolledStudents: 256,
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
          completed: true,
          videoUrl: "/placeholder-video.mp4",
        },
        {
          id: 2,
          title: "Setting Up Your Development Environment",
          type: "video",
          duration: "18:45",
          completed: true,
          videoUrl: "/placeholder-video.mp4",
        },
        {
          id: 3,
          title: "Course Resources",
          type: "pdf",
          duration: "5 min read",
          completed: false,
          pdfUrl: "/placeholder.pdf",
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
          videoUrl: "/placeholder-video.mp4",
        },
        {
          id: 5,
          title: "HTML Forms and Input Types",
          type: "video",
          duration: "22:30",
          completed: false,
          videoUrl: "/placeholder-video.mp4",
        },
        {
          id: 6,
          title: "HTML Best Practices Guide",
          type: "pdf",
          duration: "8 min read",
          completed: false,
          pdfUrl: "/placeholder.pdf",
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
          videoUrl: "/placeholder-video.mp4",
        },
        {
          id: 8,
          title: "Flexbox and Grid Layout",
          type: "video",
          duration: "35:45",
          completed: false,
          videoUrl: "/placeholder-video.mp4",
        },
      ],
    },
  ],
}

// Mock comments data
const mockComments = [
  {
    id: 1,
    user: { name: "John Doe", avatar: "/placeholder.svg" },
    content: "Great explanation! This really helped me understand the concepts better.",
    timestamp: "2 hours ago",
    replies: [
      {
        id: 2,
        user: { name: "Dr. Angela Yu", avatar: "/placeholder.svg", isInstructor: true },
        content: "Glad it helped! Keep up the great work!",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 3,
    user: { name: "Sarah Johnson", avatar: "/placeholder.svg" },
    content: "Could you provide more examples of this in practice?",
    timestamp: "4 hours ago",
    replies: [],
  },
]

export default function LearnCoursePage() {
  const params = useParams()
  const [currentLesson, setCurrentLesson] = useState(mockCourseData.modules[0].lessons[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState(mockComments)

  // Calculate overall progress
  const totalLessons = mockCourseData.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = mockCourseData.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )
  const overallProgress = Math.round((completedLessons / totalLessons) * 100)

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson)
    setIsPlaying(false)
  }

  const handleMarkComplete = () => {
    // TODO: Update lesson completion status via API
    const updatedModules = mockCourseData.modules.map((module) => ({
      ...module,
      lessons: module.lessons.map((lesson) =>
        lesson.id === currentLesson.id ? { ...lesson, completed: true } : lesson,
      ),
    }))
    mockCourseData.modules = updatedModules
    setCurrentLesson({ ...currentLesson, completed: true })
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: { name: "Current User", avatar: "/placeholder.svg" },
        content: newComment,
        timestamp: "Just now",
        replies: [],
      }
      setComments([comment, ...comments])
      setNewComment("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar - Course Content */}
        <div className="w-80 border-r border-border bg-card">
          <div className="p-6 border-b border-border">
            <h2 className="font-bold text-lg font-space-grotesk line-clamp-2">{mockCourseData.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">by {mockCourseData.instructor}</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {completedLessons}/{totalLessons} lessons
                </span>
                <span>{mockCourseData.totalDuration}</span>
              </div>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="p-4 space-y-4">
              {mockCourseData.modules.map((module) => (
                <div key={module.id} className="space-y-2">
                  <h3 className="font-semibold text-sm text-foreground">{module.title}</h3>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonSelect(lesson)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                          currentLesson.id === lesson.id
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-shrink-0">
                          {lesson.type === "video" ? (
                            <Video className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <FileText className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-2">{lesson.title}</p>
                          <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Video/Content Player */}
          <div className="flex-1 bg-black relative">
            {currentLesson.type === "video" ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-4xl max-h-[70vh] bg-gray-900 rounded-lg overflow-hidden">
                  {/* Video placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">{currentLesson.title}</p>
                      <p className="text-sm opacity-75">Video content would load here</p>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <SkipBack className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                      <div className="flex-1">
                        <Progress value={progress} className="h-1" />
                      </div>
                      <Button variant="ghost" size="sm">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <Card className="w-full max-w-4xl">
                  <CardHeader className="text-center">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <CardTitle>{currentLesson.title}</CardTitle>
                    <CardDescription>PDF content would be displayed here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/30 h-96 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">PDF viewer placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Lesson Info and Actions */}
          <div className="border-t border-border bg-background p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold font-space-grotesk">{currentLesson.title}</h1>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentLesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{currentLesson.type === "video" ? "Video Lesson" : "Reading Material"}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!currentLesson.completed && (
                  <Button onClick={handleMarkComplete}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark as Complete
                  </Button>
                )}
                {currentLesson.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>
            </div>

            {/* Comments Section */}
            <Separator className="my-6" />
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Discussion</h3>
                <Badge variant="secondary">{comments.length}</Badge>
              </div>

              {/* Add Comment */}
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>YU</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Ask a question or share your thoughts..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    Post Comment
                  </Button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-3">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{comment.user.name}</span>
                          {comment.user.isInstructor && (
                            <Badge variant="secondary" className="text-xs">
                              Instructor
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-11 space-y-3">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-3">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={reply.user.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{reply.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm">{reply.user.name}</span>
                                {reply.user.isInstructor && (
                                  <Badge variant="secondary" className="text-xs">
                                    Instructor
                                  </Badge>
                                )}
                                <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                              </div>
                              <p className="text-sm">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
