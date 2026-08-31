import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base = 'inline-flex items-center justify-center gap-2 text-center font-medium leading-tight transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50'
const variants: Record<Variant, string> = {
  primary: 'bg-forest text-paper hover:bg-forest-dark active:bg-forest-dark',
  secondary: 'border border-forest bg-transparent text-forest hover:bg-forest hover:text-paper',
  ghost: 'bg-transparent text-forest hover:bg-sage-light',
}
const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 py-3 text-[0.9375rem] sm:whitespace-nowrap',
  lg: 'min-h-12 px-6 py-3.5 text-base sm:px-7 sm:whitespace-nowrap',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  icon?: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ variant = 'primary', size = 'md', children, className = '', icon, type = 'button', ...props }, ref) {
  return <button ref={ref} type={type} {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}{icon}</button>
})

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function LinkButton({ to, variant = 'primary', size = 'md', children, className = '', icon, ...props }: LinkButtonProps) {
  return <Link to={to} {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}{icon}</Link>
}
