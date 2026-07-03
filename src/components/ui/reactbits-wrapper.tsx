"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-subtle rounded-3xl overflow-hidden hover-lift group relative bg-[var(--charcoal)]/50 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Card.displayName = "Card"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "sm" | "default" | "lg" | "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-[var(--ember)] hover:bg-[var(--copper)] text-white",
      outline: "border-[var(--slate)] bg-transparent text-[var(--cream)] hover:bg-[var(--charcoal)] hover:border-[var(--ember)]/30",
      ghost: "hover:bg-[var(--charcoal)] hover:text-[var(--ember)]",
      link: "text-[var(--ember)] underline-offset-4 hover:underline",
    }

    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      default: "h-9 px-4 py-2 text-base",
      lg: "h-11 px-8 py-6 text-base",
      icon: "size-9",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 magnetic-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--obsidian)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
}

const Background = forwardRef<HTMLElement, BackgroundProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("bg-[var(--obsidian)] relative z-10", className)}
      {...props}
    >
      {children}
    </section>
  )
)
Background.displayName = "Background"

export { Card, Button, Background }
export { Card as AppCard, Button as AppButton, Background as AppBackground }
