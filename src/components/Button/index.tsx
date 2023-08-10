import styles from './Button.module.scss'

interface ButtonProps {
  children: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button className={styles.botao} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
