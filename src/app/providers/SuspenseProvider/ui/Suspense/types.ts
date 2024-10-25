import { ReactNode } from 'react'

export default interface SuspenseProps {
    children: ReactNode
    fallback?: ReactNode
    className?: string
}
