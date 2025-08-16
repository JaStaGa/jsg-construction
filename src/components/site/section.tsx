import { cn } from "@/lib/utils"
import { type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react"

type SectionProps<T extends ElementType = "section"> = {
    as?: T
    className?: string
    children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">

export default function Section<T extends ElementType = "section">({
    as,
    className,
    children,
    ...rest
}: SectionProps<T>) {
    const Tag = (as || "section") as ElementType
    return (
        <Tag className={cn("mx-auto max-w-screen-xl px-4 py-12", className)} {...rest}>
            {children}
        </Tag>
    )
}
