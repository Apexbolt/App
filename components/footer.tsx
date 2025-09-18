import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="ml-3 text-xl font-bold font-[family-name:var(--font-space-grotesk)]">EduPlatform</span>
            </div>
            <p className="text-background/80 mb-6 font-[family-name:var(--font-dm-sans)]">
              Empowering learners worldwide with expert-led courses and innovative learning experiences.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Courses</h3>
            <ul className="space-y-2 text-background/80 font-[family-name:var(--font-dm-sans)]">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Company</h3>
            <ul className="space-y-2 text-background/80 font-[family-name:var(--font-dm-sans)]">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Stay Updated</h3>
            <p className="text-background/80 mb-4 font-[family-name:var(--font-dm-sans)]">
              Get the latest courses and learning tips delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm font-[family-name:var(--font-dm-sans)]">
            © 2024 EduPlatform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-background/80 hover:text-background text-sm transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/80 hover:text-background text-sm transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-background/80 hover:text-background text-sm transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
