'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ClientHeader() {
  const pathname = usePathname()

  return pathname !== '/' ? <Header /> : null
}
