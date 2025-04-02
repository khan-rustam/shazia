import type { ReactNode } from "react"

interface SkillCardProps {
  icon: ReactNode
  name: string
  description: string
}

/**
 * SkillCard component displays an individual skill with icon, name and description
 * in a visually appealing card format with hover effects
 */
export default function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <div
      className="backdrop-blur-lg bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl 
                    transform transition-all hover:scale-[1.03] duration-500 hover:shadow-pink-500/10 
                    hover:border-pink-500/30 group"
    >
      <div className="flex flex-col h-full">
        <div
          className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4
                       group-hover:bg-pink-500/30 transition-all duration-300"
        >
          <div className="text-pink-500 text-2xl">{icon}</div>
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-300">{name}</h3>

        <p className="text-gray-400 text-sm flex-grow">{description}</p>
      </div>
    </div>
  )
}

