'use client'

import { usePathname, useSearchParams } from 'next/navigation'

export default function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <></>
  )
}