import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json()
    const { email, password, firstName, lastName, role, bio, expertise } = userData

    // TODO: Replace with actual Spring Boot API call
    // const response = await fetch(`${process.env.SPRING_BOOT_API_URL}/auth/signup`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // })

    // Mock user creation logic
    const newUser = {
      id: Date.now(), // Mock ID generation
      email,
      firstName,
      lastName,
      role,
      ...(role === "teacher" && { bio, expertise }),
      createdAt: new Date().toISOString(),
    }

    // Mock JWT token
    const token = `mock-jwt-token-${newUser.id}-${Date.now()}`

    return NextResponse.json({
      user: newUser,
      token,
      message: "Account created successfully",
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
