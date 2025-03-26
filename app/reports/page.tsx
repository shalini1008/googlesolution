"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Fish, LineChart, Loader2, PieChart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import Navbar from "@/components/navbar"

// Mock data for demonstration
const catchData = [
  {
    id: 1,
    date: "2023-03-15",
    location: "Nagapattinam Coast",
    species: "Sardine",
    quantity: 250,
    unit: "kg",
    value: 12500,
  },
  {
    id: 2,
    date: "2023-03-16",
    location: "Rameswaram Waters",
    species: "Mackerel",
    quantity: 180,
    unit: "kg",
    value: 14400,
  },
  { id: 3, date: "2023-03-17", location: "Cuddalore Bay", species: "Tuna", quantity: 120, unit: "kg", value: 18000 },
  {
    id: 4,
    date: "2023-03-18",
    location: "Nagapattinam Coast",
    species: "Pomfret",
    quantity: 90,
    unit: "kg",
    value: 13500,
  },
  { id: 5, date: "2023-03-19", location: "Chennai Harbor", species: "Shrimp", quantity: 75, unit: "kg", value: 22500 },
  {
    id: 6,
    date: "2023-03-20",
    location: "Tuticorin Reef",
    species: "Snapper",
    quantity: 110,
    unit: "kg",
    value: 16500,
  },
  {
    id: 7,
    date: "2023-03-21",
    location: "Rameswaram Waters",
    species: "Sardine",
    quantity: 220,
    unit: "kg",
    value: 11000,
  },
  {
    id: 8,
    date: "2023-03-22",
    location: "Cuddalore Bay",
    species: "Mackerel",
    quantity: 160,
    unit: "kg",
    value: 12800,
  },
]

const monthlyData = [
  { month: "Jan", sardine: 850, mackerel: 620, tuna: 450, shrimp: 320 },
  { month: "Feb", sardine: 780, mackerel: 700, tuna: 380, shrimp: 340 },
  { month: "Mar", sardine: 920, mackerel: 750, tuna: 410, shrimp: 290 },
  { month: "Apr", sardine: 1050, mackerel: 680, tuna: 460, shrimp: 310 },
  { month: "May", sardine: 1150, mackerel: 620, tuna: 520, shrimp: 280 },
  { month: "Jun", sardine: 980, mackerel: 580, tuna: 490, shrimp: 250 },
]

const speciesData = [
  { name: "Sardine", value: 35 },
  { name: "Mackerel", value: 25 },
  { name: "Tuna", value: 15 },
  { name: "Shrimp", value: 10 },
  { name: "Others", value: 15 },
]

const revenueData = [
  { month: "Jan", revenue: 125000 },
  { month: "Feb", revenue: 138000 },
  { month: "Mar", revenue: 152000 },
  { month: "Apr", revenue: 146000 },
  { month: "May", revenue: 160000 },
  { month: "Jun", revenue: 142000 },
]

export default function ReportsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [timeframe, setTimeframe] = useState("month")

  const handleExport = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-blue-50/50">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-blue-900">Catch Reports</h1>
              <p className="text-gray-500">Track and analyze your fishing data</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600"
                onClick={handleExport}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Exporting...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </>
                )}
              </Button>
              <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[180px] border-blue-200">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Catch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-900">1,205 kg</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Fish className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-green-600">↑ 12% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-900">₹108,700</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-green-600">↑ 8% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Fishing Trips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-900">24</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-amber-600">↓ 3% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Avg. Catch per Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-900">50.2 kg</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <PieChart className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-green-600">↑ 15% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle>Monthly Catch by Species</CardTitle>
                <CardDescription>Distribution of catch by fish type (in kg)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    sardine: {
                      label: "Sardine",
                      color: "hsl(var(--chart-1))",
                    },
                    mackerel: {
                      label: "Mackerel",
                      color: "hsl(var(--chart-2))",
                    },
                    tuna: {
                      label: "Tuna",
                      color: "hsl(var(--chart-3))",
                    },
                    shrimp: {
                      label: "Shrimp",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="sardine" fill="var(--color-sardine)" />
                      <Bar dataKey="mackerel" fill="var(--color-mackerel)" />
                      <Bar dataKey="tuna" fill="var(--color-tuna)" />
                      <Bar dataKey="shrimp" fill="var(--color-shrimp)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue from fish sales (in ₹)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Catch Data Table */}
          <div className="mt-8">
            <Tabs defaultValue="table">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <TabsList className="bg-blue-100">
                  <TabsTrigger value="table">Table View</TabsTrigger>
                  <TabsTrigger value="species">Species Breakdown</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search records..." className="pl-9 border-blue-200 w-full sm:w-[200px]" />
                  </div>
                  <Button variant="outline" size="icon" className="border-blue-200">
                    <Filter className="h-4 w-4 text-blue-600" />
                  </Button>
                </div>
              </div>

              <TabsContent value="table" className="mt-4">
                <Card className="border-blue-100">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader className="bg-blue-50">
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Species</TableHead>
                          <TableHead className="text-right">Quantity</TableHead>
                          <TableHead className="text-right">Value (₹)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {catchData.map((item) => (
                          <TableRow key={item.id} className="hover:bg-blue-50/50">
                            <TableCell className="font-medium">{new Date(item.date).toLocaleDateString()}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            <TableCell>{item.species}</TableCell>
                            <TableCell className="text-right">
                              {item.quantity} {item.unit}
                            </TableCell>
                            <TableCell className="text-right">₹{item.value.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500">Showing 8 of 24 records</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-blue-200">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-200">
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="species" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-blue-100">
                    <CardHeader>
                      <CardTitle>Species Distribution</CardTitle>
                      <CardDescription>Percentage of total catch by species</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <div className="h-[300px] w-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Tooltip />
                            <Legend layout="vertical" verticalAlign="middle" align="right" />
                            <Pie
                              data={speciesData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {speciesData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={`hsl(${210 + index * 40}, 80%, ${60 - index * 5}%)`}
                                />
                              ))}
                            </Pie>
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-100">
                    <CardHeader>
                      <CardTitle>Top Fishing Locations</CardTitle>
                      <CardDescription>Catch volume by fishing area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Nagapattinam Coast</span>
                            <span className="text-sm text-gray-500">340 kg</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-blue-100">
                            <div className="h-2 rounded-full bg-blue-600" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Rameswaram Waters</span>
                            <span className="text-sm text-gray-500">400 kg</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-blue-100">
                            <div className="h-2 rounded-full bg-blue-600" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Cuddalore Bay</span>
                            <span className="text-sm text-gray-500">280 kg</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-blue-100">
                            <div className="h-2 rounded-full bg-blue-600" style={{ width: "70%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Chennai Harbor</span>
                            <span className="text-sm text-gray-500">75 kg</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-blue-100">
                            <div className="h-2 rounded-full bg-blue-600" style={{ width: "18.75%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Tuticorin Reef</span>
                            <span className="text-sm text-gray-500">110 kg</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-blue-100">
                            <div className="h-2 rounded-full bg-blue-600" style={{ width: "27.5%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sustainability Insights */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-900">Sustainability Insights</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0">
                <CardHeader>
                  <CardTitle className="text-green-700">Sustainable Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Your fishing practices are aligned with seasonal regulations. Continued adherence to the 60-day
                    fishing ban will help maintain fish populations.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-amber-500 border-t-0 border-r-0 border-b-0">
                <CardHeader>
                  <CardTitle className="text-amber-700">Areas for Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Consider reducing sardine fishing by 15% in the coming month to allow for population recovery in the
                    Nagapattinam coastal waters.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500 border-t-0 border-r-0 border-b-0">
                <CardHeader>
                  <CardTitle className="text-blue-700">Resource Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Your fuel usage per kg of catch has improved by 12% compared to last quarter, resulting in better
                    profitability and reduced environmental impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


