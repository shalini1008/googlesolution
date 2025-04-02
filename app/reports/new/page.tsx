"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Upload, Camera, Save, ChevronLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
export default function NewCatchReportPage() {
  return (
    <div className="flex min-h-screen flex-col">
        <Navbar />
      <div className="flex items-center mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Reports
          </Button>
        </Link>
        <div className="ml-4">
          <h1 className="text-3xl font-bold tracking-tight">New Catch Report</h1>
          <p className="text-muted-foreground">Submit details about your fishing trip and catch</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>Enter information about your fishing trip</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Input id="date" type="date" />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Input id="time" type="time" />
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <Input id="location" placeholder="Enter coordinates or location name" />
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Click "Use Current GPS" to automatically fill your location
              </p>
            </div>

            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Use Current GPS
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vessel">Vessel</Label>
              <Select>
                <SelectTrigger id="vessel">
                  <SelectValue placeholder="Select your vessel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tamil-seaking">Tamil Seaking</SelectItem>
                  <SelectItem value="ocean-harvester">Ocean Harvester</SelectItem>
                  <SelectItem value="fisherman-pride">Fisherman's Pride</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="depth">Water Depth (meters)</Label>
              <Input id="depth" type="number" placeholder="Enter water depth" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weather">Weather Conditions</Label>
              <Select>
                <SelectTrigger id="weather">
                  <SelectValue placeholder="Select weather conditions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clear">Clear</SelectItem>
                  <SelectItem value="partly-cloudy">Partly Cloudy</SelectItem>
                  <SelectItem value="cloudy">Cloudy</SelectItem>
                  <SelectItem value="rainy">Rainy</SelectItem>
                  <SelectItem value="windy">Windy</SelectItem>
                  <SelectItem value="stormy">Stormy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Catch Details</CardTitle>
            <CardDescription>Enter information about your catch</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="species">Primary Species</Label>
              <Select>
                <SelectTrigger id="species">
                  <SelectValue placeholder="Select primary species caught" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tuna">Tuna</SelectItem>
                  <SelectItem value="mackerel">Mackerel</SelectItem>
                  <SelectItem value="sardines">Sardines</SelectItem>
                  <SelectItem value="kingfish">Kingfish</SelectItem>
                  <SelectItem value="snapper">Snapper</SelectItem>
                  <SelectItem value="mixed">Mixed (Multiple Species)</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondary-species">Secondary Species (Optional)</Label>
              <Select>
                <SelectTrigger id="secondary-species">
                  <SelectValue placeholder="Select secondary species caught" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="tuna">Tuna</SelectItem>
                  <SelectItem value="mackerel">Mackerel</SelectItem>
                  <SelectItem value="sardines">Sardines</SelectItem>
                  <SelectItem value="kingfish">Kingfish</SelectItem>
                  <SelectItem value="snapper">Snapper</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Total Weight (kg)</Label>
                <Input id="weight" type="number" placeholder="Enter total weight" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="count">Approximate Count</Label>
                <Input id="count" type="number" placeholder="Enter count" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fishing-method">Fishing Method</Label>
              <Select>
                <SelectTrigger id="fishing-method">
                  <SelectValue placeholder="Select fishing method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="net">Net Fishing</SelectItem>
                  <SelectItem value="trawling">Trawling</SelectItem>
                  <SelectItem value="line">Line Fishing</SelectItem>
                  <SelectItem value="trap">Trap Fishing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Enter any additional information about your catch" />
            </div>

            <div className="space-y-2">
              <Label>Photos (Optional)</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square border-2 border-dashed rounded-md flex flex-col items-center justify-center p-4 hover:bg-muted cursor-pointer">
                  <Camera className="h-8 w-8 mb-2 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground text-center">Add Photo</span>
                </div>
                <div className="aspect-square border-2 border-dashed rounded-md flex flex-col items-center justify-center p-4 hover:bg-muted cursor-pointer">
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground text-center">Upload</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Submit Report
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

