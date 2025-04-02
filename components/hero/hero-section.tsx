import Image from "next/image"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import shazia from "@/public/shaz.jpg"

/**
 * HeroSection component - the main landing section of the portfolio
 * Features a profile image, introduction, and call-to-action buttons
 */
export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-pink-500 opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500 blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-600 blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="backdrop-blur-lg bg-black/30 rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl max-w-4xl mx-auto transform transition-all hover:scale-[1.01] duration-500">
          <div className="flex flex-col md:flex-row items-center gap-8 ">
            {/* Profile image with animation */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg shadow-pink-500/20 animate-float hidden md:block">
              <Image
                src={shazia}
                alt="Shazia Praveen - Digital Marketing & Event Manager"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </div>

            {/* Text content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
                Shazia Praveen
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-200">Digital Marketing & Event Manager</h2>
              <p className="text-gray-300 max-w-lg mb-6 text-left">
                Versatile digital marketing and event management professional with a passion for crafting impactful
                marketing strategies. Proven expertise in social media management, brand promotion, and content creation
                to enhance online presence and audience engagement.
              </p>

              {/* Call-to-action buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="mailto:sparveen1786@gmail.com">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Button>
                </a>
                <a
                  href="https://1drv.ms/b/c/5ed06253bf894f16/ERHXvVOT_1tKu_jYEoAoWZ0BrOFO2OpMjrBSh168I6k8Lg?e=9LIo4D"
                  target="_blank"
                  download
                >
                  <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

