import "./Typography.css"

interface TitleProps {
  children: React.ReactNode
  variant?: React.ElementType
}

export const Typography = ({
  children,
  variant: TextElement = "h1",
  ...rest
}: TitleProps) => {
  return (
    <TextElement className={`typography typography__${TextElement}`} {...rest}>
      {children}
    </TextElement>
  )
}
