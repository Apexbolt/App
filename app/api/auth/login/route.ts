import { type NextRequest, NextResponse } from "next/server"

// Mock user data - replace with Spring Boot API calls
const mockUsers = [
  {
    id: 1,
    email: "student@example.com",
    password: "password123",
    role: "student",
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    email: "teacher@example.com",
    password: "password123",
    role: "teacher",
    firstName: "Jane",
    lastName: "Smith",
    bio: "Experienced web developer and educator",
    expertise: "Web Development, JavaScript",
  },
  {
    id: 3,
    email: "admin@elearning.com",
    password: "admin123",
    role: "admin",
    firstName: "Admin",
    lastName: "User",
    bio: "System Administrator",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password, role } = await request.json()

    // TODO: Replace with actual Spring Boot API call
    // const response = await fetch(`${process.env.SPRING_BOOT_API_URL}/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password, role }),
    // })

    // Mock authentication logic
    const user = mockUsers.find((u) => u.email === email && u.password === password && u.role === role)

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials or role" }, { status: 401 })
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    // Mock JWT token
    const token = `mock-jwt-token-${user.id}-${Date.now()}`

    return NextResponse.json({
      user: userWithoutPassword,
      token,
      message: "Login successful",
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
