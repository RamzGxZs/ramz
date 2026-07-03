import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLDivElement | null>
  inView: boolean
  hasAnimated: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseScrollAnimationOptions = {}): UseScrollAnimationReturn {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          setHasAnimated(true)
        } else if (!triggerOnce) {
          setInView(false)
        }
      })
    },
    [triggerOnce]
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, handleIntersection])

  return { ref, inView, hasAnimated }
}

/**
 * Custom hook for magnetic hover effect
 * Tracks mouse position relative to element center
 */
export function useMagneticHover(strength: number = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      element.style.setProperty("--mx", `${deltaX}px`)
      element.style.setProperty("--my", `${deltaY}px`)
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const element = ref.current
    if (!element) return

    element.style.setProperty("--mx", "0px")
    element.style.setProperty("--my", "0px")
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}

/**
 * Custom hook for cursor glow effect
 * Creates a glow that follows the cursor within an element
 */
export function useCursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    element.style.setProperty("--glow-x", `${x}px`)
    element.style.setProperty("--glow-y", `${y}px`)
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  return ref
}

/**
 * Custom hook for smooth scroll to section
 */
export function useSmoothScroll() {
  const scrollTo = useCallback((targetId: string) => {
    const element = document.getElementById(targetId)
    if (!element) return

    const headerHeight = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [])

  return { scrollTo }
}
