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
