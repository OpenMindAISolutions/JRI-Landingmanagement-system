import { Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container relative pt-12 md:pt-24 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#6633cc]/5 to-transparent" />
      <div className="flex flex-col space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="flex gap-4 mb-6">
              <span className="inline-flex items-center rounded-full bg-white/50 backdrop-blur-sm px-3 py-1 text-xs font-medium shadow-sm transition-colors hover:bg-white/80">
                <Globe2 className="mr-1.5 h-3.5 w-3.5" /> 170+ countries
              </span>
              <span className="inline-flex items-center rounded-full bg-white/50 backdrop-blur-sm px-3 py-1 text-xs font-medium shadow-sm transition-colors hover:bg-white/80">
                4.7 rating on Capterra
              </span>
            </div>
            <h1 className="bg-gradient-to-br from-[#1a1a1a] to-[#1a1a1a]/80 bg-clip-text text-5xl font-bold tracking-tight leading-[1.1] text-transparent">
              All your<br />Global Payroll<br />in one place
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-lg text-muted-foreground">
              Automate payroll operations. Expand globally. Hire and pay compliantly.
            </p>
            <Button className="bg-[#6633cc] hover:bg-[#6633cc]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#6633cc]/20">
              Get started
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            width={1270}
            height={300}
            alt="Global Payroll Dashboard"
            className="rounded-t-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}