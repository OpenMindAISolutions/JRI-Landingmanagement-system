import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Unify your global payroll infrastructure",
    description: "Build on your existing setup. Unify data from multiple payroll systems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    theme: "primary"
  },
  {
    title: "Set up payroll in new locations",
    description: "Leverage our expansive ecosystem of verified in-country providers. Manage all your data in one platform.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80"
  },
  {
    title: "Hire in 170+ countries with EOR",
    description: "Employ new team members in countries where you don't have legal entities. Test new markets risk-free.",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80"
  },
  {
    title: "Pay global teams easily",
    description: "Make payments in multiple currencies. Save with free local payments through JRI.AI's infrastructure.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80"
  }
]

export function FeaturesSection() {
  return (
    <section className="container py-16">
      <div className="flex justify-between items-start mb-12">
        <h2 className="text-3xl font-bold">
          Solutions to fit all of your<br />
          Payroll and Employment needs
        </h2>
        <Link href="#" className="text-[#6633cc] hover:underline">
          Learn about our full suite of services →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${feature.theme === 'primary' ? 'bg-[#6633cc] text-white' : ''}`}>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className={`mb-8 ${feature.theme === 'primary' ? '' : 'text-muted-foreground'}`}>
                {feature.description}
              </p>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  width={500}
                  height={300}
                  alt={feature.title}
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}