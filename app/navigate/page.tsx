"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import {
  AlertCircle,
  Anchor,
  ArrowLeft,
  SailboatIcon as Boat,
  ChevronDown,
  Compass,
  Fish,
  Layers,
  MapPin,
  Menu,
  Navigation,
  Plus,
  Search,
  Settings,
  Thermometer,
  Waves,
  Wind,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"

// Mock data for demonstration
const weatherData = {
  temperature: 28,
  windSpeed: 15,
  windDirection: "NE",
  waveHeight: 1.2,
  visibility: "Good",
}

const boundaryAlerts = [
  { id: 1, distance: 2.5, direction: "North", severity: "warning" },
  { id: 2, distance: 5.1, direction: "East", severity: "info" },
]

const fishingSpots = [
  { id: 1, name: "Coral Reef Edge", rating: 4.5, distance: 3.2 },
  { id: 2, name: "Deep Water Channel", rating: 4.2, distance: 5.7 },
  { id: 3, name: "Eastern Sandbank", rating: 3.8, distance: 2.9 },
]

export default function NavigatePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [userLocation, setUserLocation] = useState({ lat: 10.7905, lng: 79.8428 }) // Default to Nagapattinam
  const [mapZoom, setMapZoom] = useState(12)
  const [showBoundaries, setShowBoundaries] = useState(true)
  const [showFishingSpots, setShowFishingSpots] = useState(true)

  // Simulate getting user location
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate location update
      setUserLocation({ lat: 10.7915, lng: 79.8438 })
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "bg-white border-r border-blue-100 flex flex-col transition-all duration-300 ease-in-out z-10",
            sidebarOpen ? "w-80" : "w-0 md:w-16",
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-blue-100">
            <h2 className={cn("font-semibold text-blue-900", !sidebarOpen && "md:hidden")}>Navigation</h2>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-600">
              {sidebarOpen ? <ArrowLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className={cn("overflow-y-auto flex-1", !sidebarOpen && "md:hidden")}>
            <Tabs defaultValue="navigation" className="w-full">
              <TabsList className="w-full justify-start p-1 bg-blue-50 m-4 rounded-md">
                <TabsTrigger value="navigation" className="flex-1">
                  Navigation
                </TabsTrigger>
                <TabsTrigger value="weather" className="flex-1">
                  Weather
                </TabsTrigger>
                <TabsTrigger value="spots" className="flex-1">
                  Spots
                </TabsTrigger>
              </TabsList>

              <TabsContent value="navigation" className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-900">Your Position</h3>
                  <Card>
                    <CardContent className="p-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Latitude:</span>
                        <span className="font-mono">{userLocation.lat.toFixed(4)}°N</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Longitude:</span>
                        <span className="font-mono">{userLocation.lng.toFixed(4)}°E</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Speed:</span>
                        <span className="font-mono">8.2 knots</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Heading:</span>
                        <span className="font-mono">045° NE</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-blue-900">Boundary Alerts</h3>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">2 Alerts</span>
                  </div>
                  <div className="space-y-2">
                    {boundaryAlerts.map((alert) => (
                      <Card
                        key={alert.id}
                        className={cn(
                          "border-l-4",
                          alert.severity === "warning" ? "border-l-amber-500" : "border-l-blue-500",
                        )}
                      >
                        <CardContent className="p-3 text-sm">
                          <div className="flex items-start gap-2">
                            <AlertCircle
                              className={cn(
                                "h-5 w-5 flex-shrink-0",
                                alert.severity === "warning" ? "text-amber-500" : "text-blue-500",
                              )}
                            />
                            <div>
                              <p className="font-medium">
                                International boundary {alert.distance} km {alert.direction}
                              </p>
                              <p className="text-gray-500 text-xs">Maintain your course to avoid crossing</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-900">Map Controls</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Show Boundaries</span>
                      <Switch checked={showBoundaries} onCheckedChange={setShowBoundaries} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Show Fishing Spots</span>
                      <Switch checked={showFishingSpots} onCheckedChange={setShowFishingSpots} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Zoom Level</span>
                        <span className="text-sm font-medium">{mapZoom}</span>
                      </div>
                      <Slider
                        value={[mapZoom]}
                        min={5}
                        max={18}
                        step={1}
                        onValueChange={(value) => setMapZoom(value[0])}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="weather" className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-900">Current Conditions</h3>
                  <Card>
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-500">Temperature</span>
                        </div>
                        <span className="font-medium">{weatherData.temperature}°C</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Wind className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-500">Wind</span>
                        </div>
                        <span className="font-medium">
                          {weatherData.windSpeed} km/h {weatherData.windDirection}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Waves className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-500">Wave Height</span>
                        </div>
                        <span className="font-medium">{weatherData.waveHeight} m</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Compass className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-500">Visibility</span>
                        </div>
                        <span className="font-medium">{weatherData.visibility}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-900">Forecast</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((day) => (
                      <Card key={day} className="bg-blue-50 border-blue-100">
                        <CardContent className="p-2 text-center">
                          <p className="text-xs text-gray-500">+{day} day</p>
                          <div className="my-1">
                            <Waves className="h-4 w-4 mx-auto text-blue-600" />
                          </div>
                          <p className="text-sm font-medium">
                            {Math.round(weatherData.waveHeight + (Math.random() * 0.8 - 0.4))} m
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-900">Fishing Conditions</h3>
                  <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Fish className="h-5 w-5" />
                        <h4 className="font-medium">Good Fishing Conditions</h4>
                      </div>
                      <p className="text-sm text-blue-100">
                        Current wind and wave patterns suggest good fishing in the eastern waters. Traditional knowledge
                        indicates mackerel and sardines are likely present.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="spots" className="p-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Search fishing spots..." className="pl-9" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-blue-900">Recommended Spots</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-blue-600">
                      <Plus className="h-3 w-3 mr-1" /> Add New
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {fishingSpots.map((spot) => (
                      <Card key={spot.id} className="hover:bg-blue-50 transition-colors cursor-pointer">
                        <CardContent className="p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-blue-900">{spot.name}</h4>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <MapPin className="h-3 w-3" />
                                <span>{spot.distance} km away</span>
                              </div>
                            </div>
                            <div className="flex items-center bg-blue-100 px-2 py-0.5 rounded-full text-blue-800 text-xs">
                              <span>★</span>
                              <span>{spot.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-blue-900">Traditional Knowledge</h3>
                  <Card className="bg-blue-50 border-blue-100">
                    <CardContent className="p-3 text-sm">
                      <p className="text-gray-700">
                        <span className="font-medium text-blue-800">Northeast winds</span> typically bring
                        <span className="font-medium text-blue-800"> sardines and mackerel</span> closer to shore during
                        <span className="font-medium text-blue-800"> early morning</span> hours.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Collapsed sidebar icons */}
          {!sidebarOpen && (
            <div className="hidden md:flex flex-col items-center py-4 space-y-4">
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Navigation className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Waves className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Fish className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Layers className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-600">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          )}
        </aside>

        {/* Main map area */}
        <main className="flex-1 relative bg-blue-50 overflow-hidden">
          {/* Simulated map */}
          <div className="absolute inset-0 bg-blue-100">
            <div className="relative w-full h-full">
              {/* Map image placeholder */}
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Navigation Map"
                fill
                className="object-cover opacity-70"
              />

              {/* International boundary line */}
              {showBoundaries && (
                <div className="absolute top-0 right-[30%] bottom-0 border-r-4 border-dashed border-red-500 opacity-70"></div>
              )}

              {/* User location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="relative bg-blue-600 rounded-full p-1 shadow-lg">
                    <Boat className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Fishing spots */}
              {showFishingSpots && (
                <>
                  <div className="absolute top-[30%] left-[40%]">
                    <div className="bg-green-500 rounded-full p-1 shadow-lg">
                      <Anchor className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-[60%] left-[25%]">
                    <div className="bg-green-500 rounded-full p-1 shadow-lg">
                      <Anchor className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-[45%] left-[70%]">
                    <div className="bg-amber-500 rounded-full p-1 shadow-lg">
                      <Anchor className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </>
              )}

              {/* Map controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <Button variant="secondary" size="icon" className="bg-white shadow-md">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white shadow-md">
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white shadow-md">
                  <Layers className="h-4 w-4" />
                </Button>
              </div>

              {/* Compass */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Compass className="h-8 w-8 text-blue-600" />
              </div>

              {/* Warning overlay for boundary proximity */}
              <div className="absolute inset-x-0 top-0 bg-amber-500 bg-opacity-90 text-white py-2 px-4 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">You are approaching an international boundary (2.5 km away)</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

