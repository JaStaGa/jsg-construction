import { cn } from "@/lib/utils"

export default function Section({
    children, className, as: Tag = "section",
}: { children: React.ReactNode; className?: string; as?: any }) {
    return (
        <Tag className={cn("mx-auto max-w-screen-xl px-4 py-12", className)}>
            {children}
        </Tag>
    )
}
