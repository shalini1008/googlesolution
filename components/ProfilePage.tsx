"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, MapPin, Calendar, Settings, LogOut } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fisherman Profile</h1>
          <p className="text-muted-foreground">
            Manage your account, view past trips, and check achievements
          </p>
        </div>
        <Link href="/dashboard">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              {/* <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar> */}
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
            {/* <Separator className="my-4" /> */}
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
            <Button variant="ghost" className="w-full gap-2 text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20">
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
                  <CardDescription>
                    View your past fishing trips and logs
                  </CardDescription>
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
                            <Button variant="outline" size="sm">View Report</Button>
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
                            <Button variant="outline" size="sm">View Report</Button>
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
                            <Button variant="outline" size="sm">View Report</Button>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
}
