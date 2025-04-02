// Import the SkillCard component
import SkillCard from "./skill-card"

/**
 * SkillsSection component displays a grid of skill cards
 * organized by category for better visual presentation
 */
export default function SkillsSection() {
  // Skills data with icons, names and descriptions
  const skillsData = [
    {
      icon: "📱",
      name: "Social Media Management",
      description:
        "Strategic planning and execution of social media campaigns across multiple platforms to maximize engagement and brand visibility.",
    },
    {
      icon: "🚀",
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies including campaign planning, execution, and performance analysis.",
    },
    {
      icon: "✍️",
      name: "Content Writing",
      description:
        "Creating engaging, SEO-optimized content that resonates with target audiences and drives conversions.",
    },
    {
      icon: "🔍",
      name: "SEO Management",
      description:
        "Implementing search engine optimization techniques to improve website visibility and organic traffic.",
    },
    {
      icon: "📊",
      name: "Analytics & Reporting",
      description:
        "Data-driven analysis of marketing campaigns to measure performance and identify optimization opportunities.",
    },
    {
      icon: "🎯",
      name: "Brand Promotion",
      description: "Strategic brand positioning and promotion to enhance brand recognition and customer loyalty.",
    },
    {
      icon: "💬",
      name: "Effective Communication",
      description: "Clear and persuasive communication skills for client relations and content creation.",
    },
    {
      icon: "🌐",
      name: "Website Management",
      description: "Maintaining and optimizing websites for performance, user experience, and conversion optimization.",
    },
    {
      icon: "📝",
      name: "Blog & Article Writing",
      description: "Creating informative and engaging blog posts and articles that establish thought leadership.",
    },
    {
      icon: "🗺️",
      name: "Google My Business",
      description: "Optimizing GMB listings to improve local search visibility and customer engagement.",
    },
    {
      icon: "🔑",
      name: "Keyword Optimization",
      description: "Strategic keyword research and implementation to improve search engine rankings.",
    },
    {
      icon: "📅",
      name: "Event Management",
      description: "Planning, organizing, and executing successful events from concept to completion.",
    },
  ]

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-black/0 to-black/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-pink-600 blur-3xl opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-pink-600 blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section heading with gradient text */}
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">My Skills</span>
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A comprehensive set of skills developed through hands-on experience in digital marketing and event
            management.
          </p>

          {/* Skills grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} name={skill.name} description={skill.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

