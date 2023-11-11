import Link from "next/link"
import "./LinkButton.css"

interface LinkButtonProps {
  children: React.ReactNode
  href: string
  variant?: string
}

export const LinkButton = ({ children, href, variant }: LinkButtonProps) => {
  return (
    <Link
      className={
        variant ? `link-button link-button--${variant}` : "link-button"
      }
      href={href}
    >
      {children}
    </Link>
  )
}
