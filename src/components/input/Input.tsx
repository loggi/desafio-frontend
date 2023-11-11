import "./Input.css"

interface InputProps {
  id: string
  label: string
  name: string
  placeholder?: string
  onChange: React.ReactEventHandler
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input__text"
        type="text"
        name={name ? name : id}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
