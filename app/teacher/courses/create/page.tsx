"use client"

import { TeacherHeader } from "@/components/teacher-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, X, Plus, FileText, Video, FileImage } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

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

export default function CreateCoursePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [modules, setModules] = useState([{ id: 1, title: "", description: "", resources: [] }])
  const router = useRouter()

  const addModule = () => {
    const newModule = {
      id: Date.now(),
      title: "",
      description: "",
      resources: [],
    }
    setModules([...modules, newModule])
  }

  const removeModule = (id) => {
    setModules(modules.filter((module) => module.id !== id))
  }

  const updateModule = (id, field, value) => {
    setModules(modules.map((module) => (module.id === id ? { ...module, [field]: value } : module)))
  }

  const addResource = (moduleId, type) => {
    const newResource = {
      id: Date.now(),
      type,
      title: "",
      file: null,
    }
    setModules(
      modules.map((module) =>
        module.id === moduleId ? { ...module, resources: [...module.resources, newResource] } : module,
      ),
    )
  }

  const removeResource = (moduleId, resourceId) => {
    setModules(
      modules.map((module) =>
        module.id === moduleId ? { ...module, resources: module.resources.filter((r) => r.id !== resourceId) } : module,
      ),
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    const formData = new FormData(e.currentTarget)
    const courseData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      level: formData.get("level"),
      duration: formData.get("duration"),
      modules: modules,
    }

    try {
      // TODO: Replace with actual Spring Boot API call
      const response = await fetch("/api/teacher/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(courseData),
      })

      if (response.ok) {
        setSuccess("Course created successfully!")
        setTimeout(() => {
          router.push("/teacher/courses")
        }, 2000)
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Failed to create course")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <TeacherHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground font-space-grotesk mb-2">Create New Course</h1>
            <p className="text-muted-foreground">Share your knowledge and help students learn new skills</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide the essential details about your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input id="title" name="title" placeholder="e.g., Complete Web Development Bootcamp" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Course Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe what students will learn in this course..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Difficulty Level</Label>
                    <Select name="level" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Estimated Duration</Label>
                    <Input id="duration" name="duration" placeholder="e.g., 40 hours" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Course Modules</CardTitle>
                    <CardDescription>Organize your course content into modules and lessons</CardDescription>
                  </div>
                  <Button type="button" onClick={addModule} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Module
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {modules.map((module, index) => (
                  <Card key={module.id} className="border-dashed">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Module {index + 1}</CardTitle>
                        {modules.length > 1 && (
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeModule(module.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Module Title</Label>
                        <Input
                          placeholder="e.g., Introduction to HTML"
                          value={module.title}
                          onChange={(e) => updateModule(module.id, "title", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Module Description</Label>
                        <Textarea
                          placeholder="Describe what this module covers..."
                          value={module.description}
                          onChange={(e) => updateModule(module.id, "description", e.target.value)}
                          rows={2}
                        />
                      </div>

                      {/* Resources */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Resources</Label>
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => addResource(module.id, "video")}
                            >
                              <Video className="h-4 w-4 mr-1" />
                              Video
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => addResource(module.id, "pdf")}
                            >
                              <FileText className="h-4 w-4 mr-1" />
                              PDF
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => addResource(module.id, "image")}
                            >
                              <FileImage className="h-4 w-4 mr-1" />
                              Image
                            </Button>
                          </div>
                        </div>

                        {module.resources.map((resource) => (
                          <div key={resource.id} className="flex items-center gap-3 p-3 border rounded-lg">
                            <Badge variant="secondary">{resource.type}</Badge>
                            <Input
                              placeholder="Resource title"
                              value={resource.title}
                              onChange={(e) => {
                                const updatedModules = modules.map((m) =>
                                  m.id === module.id
                                    ? {
                                        ...m,
                                        resources: m.resources.map((r) =>
                                          r.id === resource.id ? { ...r, title: e.target.value } : r,
                                        ),
                                      }
                                    : m,
                                )
                                setModules(updatedModules)
                              }}
                              className="flex-1"
                            />
                            <Button type="button" variant="outline" size="sm">
                              <Upload className="h-4 w-4" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeResource(module.id, resource.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Alerts */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            {/* Submit */}
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Course"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
