import { Card, CardContent } from "@/components/ui/card"

const integrations = [
  { name: "HiBob", description: "People management platform", color: "bg-red-100" },
  { name: "Workday", description: "Enterprise management cloud", color: "bg-blue-100" },
  { name: "Personio", description: "All-in-one HR software solution", color: "bg-cyan-100" },
  { name: "Sage", description: "Business management software and solutions", color: "bg-green-100" },
  { name: "Zoho People", description: "Cloud-based HR software", color: "bg-emerald-100" },
  { name: "Lucca", description: "HR & finance software suite", color: "bg-orange-100" }
]

export function IntegrationSection() {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Integration-first<br />Payroll and HR platform</h2>
        <p className="text-muted-foreground">Connect leading industry tools according to your needs</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {integrations.map((integration, index) => (
          <Card key={index} className={integration.color}>
            <CardContent className="p-4">
              <h3 className="font-bold">{integration.name}</h3>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}