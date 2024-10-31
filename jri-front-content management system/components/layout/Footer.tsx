import Link from "next/link"

const footerSections = {
  Solutions: [
    "Hire Employees",
    "Run Global Payroll",
    "Multi-Country Payroll",
    "Make Global Payments",
    "Payroll Consolidation",
    "Manage Contractors",
    "Pay Remote Teams",
    "JRI.AI Wallet",
    "Hire from talent anywhere",
    "Expand internationally",
    "Relocate and retain employees",
    "Turn contractors into employees"
  ],
  "For Companies": [
    "Case Studies",
    "Pricing",
    "Global Hiring Guide",
    "Global Payroll Guide",
    "Marketplace",
    "Help Center",
    "Terms and Conditions"
  ],
  "For Contractors": [
    "Features",
    "Help Center",
    "Terms and Conditions"
  ],
  Information: [
    "About Us",
    "Careers",
    "JRI.AI Academy",
    "Affiliate Program",
    "Partner Program",
    "Press & Media",
    "Contact Us",
    "Resources Hub",
    "Blog"
  ],
  Legal: [
    "Legal Notice",
    "Privacy Policy",
    "Sitemap",
    "HR & Payroll Glossary",
    { text: "HR & Payroll Glossary", badge: "New" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2 text-sm">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                    >
                      {typeof link === 'string' ? link : (
                        <>
                          {link.text}
                          {link.badge && (
                            <span className="ml-2 rounded bg-[#6633cc] px-1.5 py-0.5 text-[10px] font-medium">
                              {link.badge}
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} JRI.AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}