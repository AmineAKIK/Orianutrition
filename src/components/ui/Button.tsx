import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base = 'inline-flex items-center justify-center gap-2 text-center font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50'
const variants: Record<Variant, string> = {
  primary: 'bg-forest text-paper hover:bg-forest-dark active:bg-forest-dark',
  secondary: 'border border-forest bg-transparent text-forest hover:bg-forest hover:text-paper',
  ghost: 'bg-transparent text-forest hover:bg-sage-light',
}
const sizes: Record<Size, string> = {
  md: 'min-h-11 whitespace-nowrap px-5 py-3 text-sm',
  lg: 'min-h-12 px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  icon?: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ variant = 'primary', size = 'md', children, className = '', icon, ...props }, ref) {
  return <button ref={ref} {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}{icon}</button>
})

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function LinkButton({ to, variant = 'primary', size = 'md', children, className = '', icon, ...props }: LinkButtonProps) {
  return <Link to={to} {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}{icon}</Link>
}
