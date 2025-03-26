"use client"

import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
export default function MarketLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className="h-screen w-11/12 mx-auto">
        <Button variant="outline" className="flex items-center gap-2" onClick={() => router.back()}>
          <ArrowLeft />
          Back
        </Button>
        {children}
      </div>
    </>
  )
}