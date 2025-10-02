import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * CTASection component - Call to Action section with contact options
 * Features email contact and resume download buttons
 */
export default function CTASection() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-pink-500 blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-pink-600 blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-black/40 rounded-3xl p-12 border border-white/10 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:sparveen1786@gmail.com">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg">
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </Button>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              download="Shazia_Praveen_Resume.pdf"
            >
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-500/10 px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

