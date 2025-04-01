"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Ship,
  MapPin,
  Calendar,
  Settings,
  LogOut,
  Trophy,
  Award,
  Shield,
  Leaf,
  Edit,
  Save,
  Trash2,
  Plus,
  User,
  Lock,
  Bell,
  Fish,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    // <div className="container mx-auto py-6">
    <div className="flex min-h-screen flex-col">
        <Navbar />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fisherman Profile</h1>
          <p className="text-muted-foreground">Manage your account, view past trips, and check achievements</p>
        </div>
        <Link href="/dashboard">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <CardTitle>Rajesh Kumar</CardTitle>
              <CardDescription>Fisherman, Tamil Nadu</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Ship className="h-4 w-4 text-ocean-500" />
                <span className="text-sm">Tamil Seaking</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-500" />
                <span className="text-sm">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-ocean-500" />
                <span className="text-sm">Member since 2020</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Sustainability Score</span>
                <span className="text-sm font-semibold">85/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Trips</span>
                <span className="text-sm font-semibold">142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Reports Submitted</span>
                <span className="text-sm font-semibold">136</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button variant="outline" className="w-full gap-2">
              <Settings className="h-4 w-4" />
              Account Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full gap-2 text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-3 space-y-6">
          <Tabs defaultValue="trips" className="w-full">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="trips">Past Trips</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="vessels">Vessels</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="trips" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Fishing Trips</CardTitle>
                  <CardDescription>View your past fishing trips and logs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium">Eastern Bay Expedition</div>
                        <div className="text-sm text-muted-foreground">April 5, 2023</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Location</div>
                            <div className="font-semibold">12.90°N, 80.20°E</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Duration</div>
                            <div className="font-semibold">8 hours 15 minutes</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Catch</div>
                            <div className="font-semibold">Tuna (120 kg)</div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Link href="/catch-reports">
                            <Button variant="outline" size="sm">
                              View Report
                            </Button>
                          </Link>
                          <Link href="/map">
                            <Button size="sm">View on Map</Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium">Southern Coast Run</div>
                        <div className="text-sm text-muted-foreground">April 3, 2023</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Location</div>
                            <div className="font-semibold">12.95°N, 80.15°E</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Duration</div>
                            <div className="font-semibold">6 hours 45 minutes</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Catch</div>
                            <div className="font-semibold">Mackerel (85 kg)</div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Link href="/catch-reports">
                            <Button variant="outline" size="sm">
                              View Report
                            </Button>
                          </Link>
                          <Link href="/map">
                            <Button size="sm">View on Map</Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium">Deep Water Expedition</div>
                        <div className="text-sm text-muted-foreground">March 30, 2023</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Location</div>
                            <div className="font-semibold">12.85°N, 80.25°E</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Duration</div>
                            <div className="font-semibold">10 hours 30 minutes</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Catch</div>
                            <div className="font-semibold">Sardines (150 kg)</div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Link href="/catch-reports">
                            <Button variant="outline" size="sm">
                              View Report
                            </Button>
                          </Link>
                          <Link href="/map">
                            <Button size="sm">View on Map</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Link href="/catch-reports">
                      <Button variant="outline">View All Trips</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Badges</CardTitle>
                  <CardDescription>Track your progress and accomplishments as a sustainable fisherman</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-amber-500" />
                        Sustainability Achievements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 flex items-start gap-4">
                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                            <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Perfect Compliance</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Maintained perfect regulatory compliance for 6 consecutive months.
                            </p>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                            >
                              Earned on Feb 15, 2023
                            </Badge>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-4">
                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                            <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Sustainable Fisher</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Maintained a sustainability score above 80 for 3 consecutive months.
                            </p>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                            >
                              Earned on Jan 10, 2023
                            </Badge>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-4">
                          <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                            <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Community Leader</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Shared valuable fishing data that helped other fishermen improve their practices.
                            </p>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                            >
                              Earned on Mar 22, 2023
                            </Badge>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 flex items-start gap-4 bg-muted/50">
                          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                            <Trophy className="h-6 w-6 text-gray-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-muted-foreground">Fuel Efficiency Expert</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Reduce fuel consumption by 40% through efficient route planning.
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-ocean-400 rounded-full" style={{ width: "65%" }}></div>
                              </div>
                              <span className="text-xs text-muted-foreground">65% complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-ocean-500" />
                        Fishing Milestones
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 text-center">
                          <div className="bg-ocean-100 dark:bg-ocean-900/20 p-3 rounded-full inline-flex mx-auto mb-3">
                            <Ship className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                          </div>
                          <h4 className="font-semibold">100+ Trips</h4>
                          <p className="text-sm text-muted-foreground mb-2">Completed over 100 fishing trips</p>
                          <Badge className="bg-ocean-100 text-ocean-700 border-ocean-200 dark:bg-ocean-900/20 dark:text-ocean-400 dark:border-ocean-800">
                            Achieved
                          </Badge>
                        </div>

                        <div className="border rounded-lg p-4 text-center">
                          <div className="bg-ocean-100 dark:bg-ocean-900/20 p-3 rounded-full inline-flex mx-auto mb-3">
                            <Fish className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                          </div>
                          <h4 className="font-semibold">5,000 kg Catch</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Recorded over 5,000 kg of sustainable catch
                          </p>
                          <Badge className="bg-ocean-100 text-ocean-700 border-ocean-200 dark:bg-ocean-900/20 dark:text-ocean-400 dark:border-ocean-800">
                            Achieved
                          </Badge>
                        </div>

                        <div className="border rounded-lg p-4 text-center bg-muted/50">
                          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full inline-flex mx-auto mb-3">
                            <MapPin className="h-6 w-6 text-gray-400" />
                          </div>
                          <h4 className="font-semibold text-muted-foreground">Explorer</h4>
                          <p className="text-sm text-muted-foreground mb-2">Fish in 10 different zones</p>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-muted-foreground">7/10 zones</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vessels" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Registered Vessels</CardTitle>
                    <CardDescription>Manage your fishing vessels and their details</CardDescription>
                  </div>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" /> Add Vessel
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium flex items-center gap-2">
                          <Ship className="h-5 w-5 text-ocean-500" />
                          Tamil Seaking
                        </div>
                        <Badge>Primary Vessel</Badge>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="space-y-3">
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Registration Number</div>
                                <div className="font-semibold">TN-CHN-2018-4523</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Vessel Type</div>
                                <div className="font-semibold">Mechanized Fishing Boat</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Length</div>
                                <div className="font-semibold">42 feet</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="space-y-3">
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Engine Power</div>
                                <div className="font-semibold">180 HP</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Fuel Capacity</div>
                                <div className="font-semibold">500 liters</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Year Built</div>
                                <div className="font-semibold">2018</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Edit className="h-4 w-4" /> Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                          >
                            <Trash2 className="h-4 w-4" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium flex items-center gap-2">
                          <Ship className="h-5 w-5 text-ocean-500" />
                          Ocean Harvester
                        </div>
                        <Badge variant="outline">Secondary</Badge>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="space-y-3">
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Registration Number</div>
                                <div className="font-semibold">TN-CHN-2020-7891</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Vessel Type</div>
                                <div className="font-semibold">Mechanized Trawler</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Length</div>
                                <div className="font-semibold">38 feet</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="space-y-3">
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Engine Power</div>
                                <div className="font-semibold">150 HP</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Fuel Capacity</div>
                                <div className="font-semibold">400 liters</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Year Built</div>
                                <div className="font-semibold">2020</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Edit className="h-4 w-4" /> Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                          >
                            <Trash2 className="h-4 w-4" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vessel Maintenance Log</CardTitle>
                  <CardDescription>Track maintenance activities for your vessels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium">Engine Maintenance</div>
                        <div className="text-sm text-muted-foreground">March 15, 2023</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Vessel</div>
                            <div className="font-semibold">Tamil Seaking</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Type</div>
                            <div className="font-semibold">Engine Overhaul</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Cost</div>
                            <div className="font-semibold">₹25,000</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Notes</div>
                          <div className="text-sm">
                            Complete engine overhaul including replacement of worn parts and oil change. Next
                            maintenance due in 6 months.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 border-b flex justify-between items-center">
                        <div className="font-medium">Hull Inspection</div>
                        <div className="text-sm text-muted-foreground">February 10, 2023</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Vessel</div>
                            <div className="font-semibold">Ocean Harvester</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Type</div>
                            <div className="font-semibold">Hull Inspection & Repair</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">Cost</div>
                            <div className="font-semibold">₹18,500</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Notes</div>
                          <div className="text-sm">
                            Inspection revealed minor damage to hull. Repaired and repainted affected areas. Hull
                            integrity is good.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button variant="outline" className="gap-1">
                      <Plus className="h-4 w-4" /> Add Maintenance Record
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your personal information and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-ocean-500" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" defaultValue="Rajesh Kumar" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber">Phone Number</Label>
                          <Input id="phoneNumber" defaultValue="+91 9876543210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" defaultValue="rajesh.kumar@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="Chennai, Tamil Nadu" />
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button className="gap-1">
                          <Save className="h-4 w-4" /> Save Changes
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Lock className="h-5 w-5 text-ocean-500" />
                        Security
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline">Change Password</Button>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Bell className="h-5 w-5 text-ocean-500" />
                        Notifications
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="weatherAlerts">Weather Alerts</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications about severe weather conditions
                            </p>
                          </div>
                          <Switch id="weatherAlerts" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="boundaryAlerts">Boundary Alerts</Label>
                            <p className="text-sm text-muted-foreground">
                              Get alerts when approaching international waters
                            </p>
                          </div>
                          <Switch id="boundaryAlerts" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="fishingUpdates">Fishing Updates</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about optimal fishing conditions
                            </p>
                          </div>
                          <Switch id="fishingUpdates" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="marketPrices">Market Prices</Label>
                            <p className="text-sm text-muted-foreground">
                              Get notifications about fish market price changes
                            </p>
                          </div>
                          <Switch id="marketPrices" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-ocean-500" />
                        Preferences
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger id="language">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="ta">Tamil</SelectItem>
                              <SelectItem value="hi">Hindi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="units">Measurement Units</Label>
                          <Select defaultValue="metric">
                            <SelectTrigger id="units">
                              <SelectValue placeholder="Select units" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="metric">Metric (km, kg)</SelectItem>
                              <SelectItem value="imperial">Imperial (miles, lbs)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dataSharing">Data Sharing</Label>
                          <Select defaultValue="community">
                            <SelectTrigger id="dataSharing">
                              <SelectValue placeholder="Select data sharing preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="private">Private (Only me)</SelectItem>
                              <SelectItem value="community">Community (Share anonymized data)</SelectItem>
                              <SelectItem value="public">Public (Share with attribution)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="gap-1 text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    <Trash2 className="h-4 w-4" /> Delete Account
                  </Button>
                  <Button className="gap-1">
                    <Save className="h-4 w-4" /> Save All Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

