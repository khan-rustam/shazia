import { cn } from "@/lib/utils"

/**
 * LoadingSpinner component for displaying loading states
 * Used throughout the application for better UX during loading
 */
export default function LoadingSpinner({
  size = "default",
  className,
}: {
  size?: "sm" | "default" | "lg"
  className?: string
}) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    default: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={cn("border-t-transparent border-pink-500 rounded-full animate-spin", sizeClasses[size], className)}
      />
    </div>
  )
}

