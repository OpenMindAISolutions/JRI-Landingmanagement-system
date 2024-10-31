import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#6633cc] py-24 text-white text-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container relative">
        <p className="text-sm mb-4 text-white/80">Discover your solution</p>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
          Ready to see what<br />
          JRI.AI can do for you?
        </h2>
        <Button variant="secondary" className="bg-white text-[#6633cc] hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
          Get started →
        </Button>
      </div>
    </section>
  )
}