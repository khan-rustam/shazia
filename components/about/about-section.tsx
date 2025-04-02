import { Mail, MapPin, Phone, Linkedin, Instagram, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import shazia from "@/public/shaz.jpg";

/**
 * AboutSection component displays personal information,
 * professional profile, education, languages, and interests
 */
export default function AboutSection() {
  // Limited social media links as requested
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/shazia-praveen",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/_shaz_khalique",
      color: "hover:bg-pink-600",
    },
    {
      name: "Portfolio",
      icon: <Globe className="h-5 w-5" />,
      href: "#",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
              About Me
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile card with contact info and social links */}
            <div className="lg:col-span-1">
              <div className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl h-full">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-pink-500 mb-4">
                    <Image
                      src={shazia}
                      alt="Shazia Praveen"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-center">
                    Shazia Praveen
                  </h3>
                  <p className="text-pink-400 text-sm mb-4 text-center">
                    Digital Marketing & Event Manager
                  </p>

                  {/* Social media links - limited to 3 as requested */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        className={`w-9 h-9 rounded-full flex items-center justify-center bg-black/50 text-white transition-all duration-300 ${social.color}`}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>

                  <div className="w-full border-t border-white/10 pt-4">
                    <ul className="space-y-3">
                      {/* Phone with click-to-call */}
                      <li className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-pink-500 flex-shrink-0" />
                        <a
                          href="tel:+918448147746"
                          className="text-sm hover:text-pink-400 transition-colors"
                        >
                          +91 84481-47746
                        </a>
                      </li>
                      {/* Email with mailto link as requested */}
                      <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-pink-500 flex-shrink-0" />
                        <a
                          href="mailto:sparveen1786@gmail.com"
                          className="text-sm break-all hover:text-pink-400 transition-colors"
                        >
                          sparveen1786@gmail.com
                        </a>
                      </li>
                      {/* Location */}
                      <li className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-pink-500 flex-shrink-0" />
                        <span className="text-sm">
                          Meer Vihar, Delhi - 110081
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Information cards grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {/* Professional Profile */}
                <div className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl transform transition-all hover:scale-[1.02] duration-500">
                  <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                      <span className="text-pink-500 text-lg">👩‍💼</span>
                    </span>
                    Professional Profile
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Results-driven digital marketer and event manager with
                    hands-on experience in executing strategic campaigns. Adept
                    at leveraging analytics, SEO, and branding techniques to
                    drive business growth and maximize engagement.
                  </p>
                  {/* <p className="text-gray-300 leading-relaxed mt-3">
                    My approach combines analytical thinking with creative
                    execution to deliver campaigns that drive engagement and
                    conversions.
                  </p> */}
                </div>

                {/* Education */}
                <div className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl transform transition-all hover:scale-[1.02] duration-500">
                  <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                      <span className="text-pink-500 text-lg">🎓</span>
                    </span>
                    Education
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-medium">Bachelor of Physiotherapy</h4>
                      <p className="text-gray-400">NIMS University</p>
                      <p className="text-sm text-gray-500">2022 - Present</p>
                    </li>
                    <li>
                      <h4 className="font-medium">Higher Secondary</h4>
                      <p className="text-gray-400">BM Bharti Model School</p>
                      <p className="text-sm text-gray-500">2020 - 2021</p>
                    </li>
                  </ul>
                </div>

                {/* Languages */}
                <div className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl transform transition-all hover:scale-[1.02] duration-500">
                  <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                      <span className="text-pink-500 text-lg">🌐</span>
                    </span>
                    Languages
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>English</span>
                        <span className="text-pink-400">Fluent</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-1.5 rounded-full w-[95%]"></div>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between mb-1">
                        <span>Hindi</span>
                        <span className="text-pink-400">Fluent</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-1.5 rounded-full w-full"></div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Interests */}
                <div className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl transform transition-all hover:scale-[1.02] duration-500">
                  <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                      <span className="text-pink-500 text-lg">🎯</span>
                    </span>
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Reading",
                      "Writing",
                      "Adventure",
                      "Exploring Foods",
                      "Sleeping",
                      "Cooking",
                    ].map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
