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
      name: "Social Media Strategy",
      description:
        "Strategic planning and execution of social media campaigns across multiple platforms to maximize engagement and brand visibility.",
    },
    {
      icon: "👥",
      name: "Social Media Management",
      description:
        "End-to-end management of social media operations including content planning, creation, and maintaining strategic monthly calendars.",
    },
    {
      icon: "✍️",
      name: "Content Creation",
      description:
        "Creating engaging, SEO-optimized content that resonates with target audiences and drives conversions.",
    },
    {
      icon: "📝",
      name: "Web Content Writing",
      description:
        "Crafting compelling web content that enhances user experience and drives engagement.",
    },
    {
      icon: "📰",
      name: "Blog Writing",
      description: "Creating informative and engaging blog posts that establish thought leadership and drive traffic.",
    },
    {
      icon: "📄",
      name: "Article Writing",
      description: "Writing well-researched articles that provide value to readers and boost brand authority.",
    },
    {
      icon: "🚀",
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies including campaign planning, execution, and performance analysis.",
    },
    {
      icon: "📧",
      name: "Email Campaign Design",
      description: "Designing and executing effective email marketing campaigns that drive engagement and conversions.",
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
      icon: "🗺️",
      name: "Google My Business (GMB)",
      description: "Optimizing GMB listings to improve local search visibility and customer engagement.",
    },
    {
      icon: "🔍",
      name: "Keyword Optimization",
      description: "Strategic keyword research and implementation to improve search engine rankings.",
    },
    {
      icon: "📊",
      name: "Campaign Management",
      description: "Managing marketing campaigns from conception to execution, ensuring optimal performance and ROI.",
    },
    {
      icon: "👨‍💼",
      name: "Team Leadership",
      description: "Leading and guiding marketing teams to achieve goals and deliver exceptional results.",
    },
    {
      icon: "📈",
      name: "Analytics & Reporting",
      description: "Data-driven analysis of marketing campaigns to measure performance and identify optimization opportunities.",
    },
    {
      icon: "📱",
      name: "Meta Ads",
      description: "Creating and managing effective advertising campaigns on Meta platforms (Facebook & Instagram).",
    },
    {
      icon: "📋",
      name: "Case Study / Research",
      description: "Conducting thorough research and creating detailed case studies to support marketing strategies.",
    },
    {
      icon: "🔍",
      name: "Market Research",
      description: "Analyzing market trends and consumer behavior to inform strategic marketing decisions.",
    },
    {
      icon: "🎨",
      name: "Canva Design (Basic)",
      description: "Creating visually appealing graphics and marketing materials using Canva for various campaigns.",
    },
    {
      icon: "📊",
      name: "Marketing Strategy",
      description: "Developing comprehensive marketing strategies that align with business objectives and drive growth.",
    },
    {
      icon: "🤝",
      name: "Customer Engagement",
      description: "Building and maintaining strong relationships with customers through effective engagement strategies.",
    },
    {
      icon: "📋",
      name: "Marketing Planning",
      description: "Strategic planning of marketing initiatives to ensure coordinated and effective campaign execution.",
    },
    {
      icon: "🎯",
      name: "Creative Direction",
      description: "Providing creative guidance and direction for marketing campaigns and content creation.",
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

