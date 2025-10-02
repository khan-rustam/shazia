/**
 * ExperienceSection component displays work history in a timeline format
 * Each job is displayed with company, position, period, type, and description
 */
export default function ExperienceSection() {
  // Work experience data
  const experiences = [
    {
      company: "Kayease Global Solutions LLP.",
      position: "Digital Marketing Manager",
      period: "Aug 2025 - Present",
      type: "Hybrid",
      description:
        "Led marketing initiatives to grow brand awareness and connect with customers effectively. Managed marketing strategies and campaigns, guiding the team to achieve goals and deliver results.",
    },
    {
      company: "Synergy",
      position: "Digital Marketing Manager",
      period: "Dec 2024 - July 2025",
      type: "On-Site",
      description:
        "Coordinated and led brand meetings and client interactions to align campaign goals with brand expectations. Supported event coordination and client meetings, ensuring timely execution and alignment with brand messaging.",
    },
    {
      company: "Synergy",
      position: "Digital Marketing Executive",
      period: "July 2024 - Dec 2024",
      type: "On-Site",
      description:
        "Created engaging content and scheduled posts across platforms in accordance with editorial calendar to maintain consistency and boost engagement. Managed end-to-end social media operations including content planning, creation, and maintaining a strategic monthly social media calendar.",
    },
    {
      company: "Yati Group & Events | Jaipur, Rajasthan",
      position: "Digital Marketing Manager",
      period: "July 2024 - Aug 2024",
      type: "Freelance",
      description:
        "Managed overall marketing strategies as a manager, including influencer marketing campaigns, copywriting for brand messaging, and organizing press meets to enhance brand visibility and engagement.",
    },
    {
      company: "Super Growth Marketing | Jaipur, Rajasthan",
      position: "Marketing Manager & Specialist",
      period: "March 2024 - August 2024",
      type: "Hybrid",
      description:
        "Supported cross-functional marketing initiatives including event coordination and client meetings to enhance brand visibility and campaign execution.",
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
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-pink-500 shadow-lg shadow-pink-500/30 transform -translate-y-1/2 md:-translate-x-1/2 z-10"></div>
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
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
                          className={`px-2 py-1 rounded-full text-xs ${job.type === "Remote"
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
