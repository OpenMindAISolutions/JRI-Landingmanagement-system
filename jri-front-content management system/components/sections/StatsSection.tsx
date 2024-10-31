import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#6633cc]/5 to-transparent" />
      <h2 className="text-2xl font-bold text-center mb-16 bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a]/80 bg-clip-text text-transparent">
        Helping 2,000+ companies grow global teams faster!
      </h2>
      <div className="container grid grid-cols-4 gap-8">
        <StatCard number="4+" description="New markets entered in 48 months" />
        <StatCard number="<2 weeks" description="To onboard new employees abroad" />
        <StatCard number="9" description="Countries where employees are based" />
        <StatCard number="98%" description="Reduction in payment errors" />
      </div>
    </section>
  )
}

function StatCard({ number, description }: { number: string; description: string }) {
  return (
    <div className="group space-y-2 rounded-xl bg-white/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white hover:shadow-xl">
      <div className="text-2xl font-bold text-center">{number}</div>
      <p className="text-sm text-muted-foreground text-center">
        {description}
      </p>
    </div>
  )
}