import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe, Heart } from "lucide-react"

/**
 * Footer component with contact information, quick links, and social media
 * Limited to Instagram, LinkedIn, and Portfolio as requested
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Limited social media links as requested
  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/shazia-praveen" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/_shaz_khalique" },
    { name: "Portfolio", icon: <Globe className="h-5 w-5" />, href: "#" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-black/80 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
              Shazia Praveen
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Digital Marketing & Event Manager specializing in creating impactful marketing strategies and driving
              brand growth through effective digital campaigns.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-pink-500/20 text-gray-400 hover:text-pink-500 transition-all duration-300"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-pink-500 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-500 flex-shrink-0" />
                <a href="tel:+918448147746" className="text-gray-400 hover:text-pink-400 transition-colors">
                  +91 84481-47746
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-pink-500 flex-shrink-0" />
                <a
                  href="mailto:sparveen1786@gmail.com"
                  className="text-gray-400 break-all hover:text-pink-400 transition-colors"
                >
                  sparveen1786@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-400">Meer Vihar, Delhi - 110081</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Shazia Praveen. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> by Shazia Praveen
          </p>
        </div>
      </div>
    </footer>
  )
}

