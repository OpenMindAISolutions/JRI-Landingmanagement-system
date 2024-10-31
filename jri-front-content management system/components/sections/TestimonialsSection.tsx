import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Without JRI.AI we would not have been able to be that quick in our international expansion.",
    author: "Alice Penrad",
    role: "HR Business Partner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "JRI.AI has transformed how we manage our global workforce. The platform is intuitive and powerful.",
    author: "Michael Chen",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "The compliance and automation features have saved us countless hours and reduced errors significantly.",
    author: "Sarah Johnson",
    role: "Global Payroll Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
]

export function TestimonialsSection() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-16">
        Trusted by global teams
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="aspect-square w-24 overflow-hidden rounded-lg mb-4 mx-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <blockquote className="text-lg mb-4 italic text-muted-foreground text-center">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}