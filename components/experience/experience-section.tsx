/**
 * ExperienceSection component displays work history in a timeline format
 * Each job is displayed with company, position, period, type, and description
 */
export default function ExperienceSection() {
  // Work experience data
  const experiences = [
    {
      company: "Sparkshift",
      position: "Founder & Social Media Manager",
      period: "January 2025 - Present",
      type: "Remote",
      description:
        "Founded and managed a social media marketing agency, providing comprehensive digital marketing solutions to clients across various industries.",
    },
    {
      company: "Synergy Jaipur, Rajasthan",
      position: "Digital Marketing Manager",
      period: "July 2024 - August 2024",
      type: "On-Site",
      description:
        "Led digital marketing strategies, managed team of executives, and optimized campaigns to increase client engagement and conversions.",
    },
    {
      company: "Synergy Jaipur, Rajasthan",
      position: "Digital Marketing Executive",
      period: "July 2024 - December 2024",
      type: "On-Site",
      description:
        "Executed digital marketing campaigns, managed social media accounts, and created engaging content for various client brands.",
    },
    {
      company: "Yati Group & Events | Jaipur, Rajasthan",
      position: "Digital Marketing Manager",
      period: "July 2024 - August 2024",
      type: "Hybrid",
      description:
        "Managed digital marketing for events, created promotional materials, and coordinated online event marketing campaigns.",
    },
    {
      company: "Super Growth Marketing | Jaipur, Rajasthan",
      position: "Marketing Manager & Specialist",
      period: "March 2024 - August 2024",
      type: "Hybrid",
      description:
        "Developed and implemented marketing strategies to drive business growth, analyzed market trends, and optimized campaign performance.",
    },
    {
      company: "Todi Steel's Pvt. Ltd | Jaipur, Rajasthan",
      position: "Brand promoter",
      period: "March 2024 - March 2024",
      type: "On-Site",
      description:
        "Promoted brand awareness through various marketing channels, engaged with potential customers, and represented the company at industry events.",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
              Work Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/80 to-pink-500/20 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((job, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-pink-500 shadow-lg shadow-pink-500/30 transform -translate-y-1/2 md:-translate-x-1/2 z-10"></div>
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl transform transition-all hover:scale-[1.03] duration-500">
                      <h3 className="text-xl font-semibold text-white">
                        {job.company}
                      </h3>
                      <h4 className="text-pink-400 font-medium mb-2">
                        {job.position}
                      </h4>
                      <div className="flex justify-between text-sm text-gray-400 mb-3">
                        <span>{job.period}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            job.type === "Remote"
                              ? "bg-green-500/20 text-green-400"
                              : job.type === "Hybrid"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{job.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
