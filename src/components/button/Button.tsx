import "./Button.css"

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  onClick: React.ReactEventHandler
  size?: string
}

export const Button = ({
  children,
  disabled,
  onClick,
  size = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={size ? `button button--${size}` : `button`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
