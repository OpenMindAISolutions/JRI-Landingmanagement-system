import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, GraduationCap, Newspaper } from "lucide-react"

const resources = [
  {
    title: "Employment cost calculator",
    description: "Determine the cost of hiring remote employees around the globe.",
    icon: Calculator,
    color: "bg-[#6633cc]"
  },
  {
    title: "Global Payroll Academy",
    description: "Learn all you need to know to hire, manage, and use payroll for global teams.",
    icon: GraduationCap,
    color: "bg-[#E6F2F2]"
  },
  {
    title: "Global HR & Accounting Blog",
    description: "Stay up-to-date with JRI.AI news, content and more.",
    icon: Newspaper,
    color: "bg-[#FFF4CC]"
  }
]

export function ResourcesSection() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-16">
        JRI.AI is your trusted resource for<br />
        Global Payroll and Employment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Link key={index} href="#" className="group">
            <Card>
              <CardContent className="p-8">
                <div className={`aspect-video ${resource.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <resource.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-bold group-hover:text-[#6633cc] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="#" className="text-[#6633cc] hover:underline">
          See all resources →
        </Link>
      </div>
    </section>
  )
}