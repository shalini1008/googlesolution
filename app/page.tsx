import Image from "next/image"
import Link from "next/link"
import { Anchor, SailboatIcon as Boat, Compass, Fish, Fuel, Globe, MapPin, Shield, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
     
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter text-blue-900 sm:text-5xl md:text-6xl">
                    Navigating a Sustainable Future for Tamil Nadu's Fishermen
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    FishSync combines traditional knowledge with modern technology to enhance efficiency, ensure
                    territorial compliance, and promote sustainable fishing.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://miro.medium.com/v2/resize:fit:900/1*hqPWf89EAU0_jj9Et69SGg.jpeg"
                  alt="FishSync App Interface"
                  width={700}
                  height={700}
                  className="rounded-sm shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges Section */}
        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
                Addressing Key Challenges
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">
                Tamil Nadu's coastal fishermen face significant challenges that threaten their livelihoods and marine
                ecosystems.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-blue-100 transition-all hover:shadow-md hover:border-blue-200">
                <CardHeader className="pb-2">
                  <Globe className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Territorial Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">
                    Unintentional crossings into international waters result in legal and security issues.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-100 transition-all hover:shadow-md hover:border-blue-200">
                <CardHeader className="pb-2">
                  <Fish className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Fishing Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">
                    Lack of real-time tools to predict fish movement, optimize fishing times, and select appropriate
                    nets.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-100 transition-all hover:shadow-md hover:border-blue-200">
                <CardHeader className="pb-2">
                  <Anchor className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">
                    Difficulty enforcing the 60-day fishing ban and monitoring catch levels to prevent overfishing.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-100 transition-all hover:shadow-md hover:border-blue-200">
                <CardHeader className="pb-2">
                  <Fuel className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Resource Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">
                    Inefficient fuel consumption and trip planning due to reliance on manual methods.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-blue-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
                Powerful Features
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">
                FishSync combines GPS, weather analytics, and real-time data to transform fishing practices.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-blue-900">GPS Boundary Alerts</h3>
                <p className="mt-2 text-gray-600">
                  Real-time notifications when approaching international waters or restricted zones.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-blue-900">Weather Integration</h3>
                <p className="mt-2 text-gray-600">
                  Advanced forecasting that combines traditional knowledge with modern meteorology.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Fish className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-blue-900">Fish Movement Prediction</h3>
                <p className="mt-2 text-gray-600">
                  AI-powered analytics to predict fish locations based on ocean conditions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Boat className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-blue-900">Route Optimization</h3>
                <p className="mt-2 text-gray-600">
                  Fuel-efficient route planning to reduce costs and environmental impact.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-blue-900">Compliance Monitoring</h3>
                <p className="mt-2 text-gray-600">
                  Tools to track and enforce fishing bans and sustainable catch limits.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Compass className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-blue-900">Offline Navigation</h3>
                <p className="mt-2 text-gray-600">
                  Continues to function in areas with limited connectivity for uninterrupted guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
                Trusted by Fishermen
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">
                Hear from the fishing communities who have transformed their practices with FishSync.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Fisherman portrait"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Rajesh Kumar</CardTitle>
                      <CardDescription>Fisherman, Nagapattinam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "FishSync has saved me from crossing international waters twice. I also use 30% less fuel now with
                    the optimized routes."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Fisherman portrait"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Murugan S.</CardTitle>
                      <CardDescription>Boat Owner, Rameswaram</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The fish movement predictions are surprisingly accurate. My catches have improved while spending
                    less time at sea."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Fisherman portrait"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Lakshmi P.</CardTitle>
                      <CardDescription>Fishing Cooperative, Chennai</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Our community has seen a 40% reduction in territorial disputes since adopting FishSync across our
                    fleet."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Fishing Practices?
              </h2>
              <p className="mt-4 text-blue-100 md:text-xl">
                Join hundreds of fishermen who are fishing smarter, safer, and more sustainably with FishSync.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-blue-600">
                <Fish className="h-6 w-6" />
                <span className="text-xl">FishSync</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Empowering Tamil Nadu's coastal fishermen with technology for sustainable fishing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Product</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
            <p>© 2025 FishSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

