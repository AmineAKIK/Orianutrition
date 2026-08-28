import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
const styles={primary:'bg-forest text-paper hover:bg-forest-dark',secondary:'border border-forest text-forest hover:bg-sage-light'} as const
export function LinkButton({to,children,variant='primary'}:{to:string;children:ReactNode;variant?:keyof typeof styles}){return <Link to={to} className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${styles[variant]}`}>{children}</Link>}
export function Button({children,variant='primary',className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>&{children:ReactNode;variant?:keyof typeof styles}){return <button {...props} className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`}>{children}</button>}
