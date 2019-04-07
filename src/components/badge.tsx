import { h } from 'preact'

import './badge.css'

export interface BadgeProps {
  color: string
  text: string
}

const Badge = ({ color, text }: BadgeProps) => {
  let styles = { background: color }
  return <span class="badge" style={styles}>{{text}}</span>
}

export default Badge
