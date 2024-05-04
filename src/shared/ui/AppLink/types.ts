import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

export default interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactNode
}
