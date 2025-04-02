import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

/**
 * Custom 404 page that matches the design language of the portfolio
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500 blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-600 blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="backdrop-blur-lg bg-black/30 rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl max-w-md mx-auto text-center z-10">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>

        <p className="text-gray-300 mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>

        <Link href="/">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg">
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-4 text-center text-gray-500 text-sm z-10">
        © {new Date().getFullYear()} Shazia Praveen. All rights reserved.
      </div>
    </div>
  )
}

