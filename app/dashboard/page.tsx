"use client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Grid, Info, MapPin, Wind } from "lucide-react";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import FishPrediction from "@/components/fishPrediction";


const Dashboard = () => {
    const features = [
        {
            title: "Fish Prediction",
            description: "Real-time predictions for fish availability based on environmental data. Our algorithms analyze ocean conditions, water temperature, and other factors to guide your fishing trips.",
            icon: <Grid className="w-6 h-6 text-blue-500" />,
            component: <FishPrediction/>
        },
        {
            title: "Territorial Alerts",
            description: "Receive instant alerts when approaching territorial borders, ensuring safety and compliance with regulations.",
            icon: <MapPin className="w-6 h-6 text-red-500" />,
            component: <Map />
        },
        {
            title: "Fuel Optimization",
            description: "Insights to optimize fuel consumption for efficient operations, helping you save costs while protecting the environment.",
            icon: <Info className="w-6 h-6 text-green-500" />,
            component: null,
        },
        {
            title: "Weather Monitoring",
            description: "Get live weather updates and forecasts to plan your journey effectively and avoid harsh conditions.",
            icon: <Wind className="w-6 h-6 text-yellow-500" />,
            component: null,
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="p-6 bg-gray-50">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to FishSync Dashboard</h1>
                    <p className="text-lg text-center text-gray-700 mt-4 max-w-3xl mx-auto">
                        Enhance your fishing experience with our cutting-edge tools designed for fishermen. From predicting the best fishing spots to ensuring you stay within territorial borders, we’ve got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    {feature.icon}
                                    <CardTitle className="text-lg font-semibold">
                                        {feature.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{feature.description}</p>
                            </CardContent>
                            {feature.component && (
                                <div>
                                    {feature.component}
                                </div>

                            )}
                        </Card>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-10">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">Why Choose FishSync?</h2>
                    <p className="mb-4">
                        FishSync is built to revolutionize traditional fishing practices by integrating modern technology. Our tools are crafted to make fishing safer, more efficient, and environmentally friendly. Whether you’re a commercial fisherman or a hobbyist, our platform adapts to your needs.
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">Key Benefits:</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Accurate predictions to maximize your catch.</li>
                        <li>Territorial safety alerts to avoid legal complications.</li>
                        <li>Fuel efficiency tips for cost-effective operations.</li>
                        <li>Up-to-date weather forecasts for planning your trips.</li>
                    </ul>
                    <p>
                        Join thousands of fishermen who rely on FishSync for their daily operations. Together, we can make fishing a more sustainable and productive activity.
                    </p>
                </div>
                <div className="mb-12 space-y-12">
                    {/* Section 1 */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                        <h2 className="text-2xl text-center font-semibold text-blue-500 mb-4">
                            Empowering Fishermen in Tamil Nadu
                        </h2>
                        <p className="text-gray-700 text-center leading-relaxed">
                            With real-time data and actionable insights, FishSync empowers fishermen
                            to make informed decisions, ensuring a safe and productive fishing experience.
                            From small-scale fishers to large commercial fleets, our solutions cater to
                            diverse needs.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="p-6 bg-green-50 rounded-lg shadow-md">
                        <h2 className="text-2xl text-center font-semibold text-green-600 mb-4">
                            Experience the Ocean's Beauty
                        </h2>
                        <p className="text-gray-700 text-center leading-relaxed">
                            Explore the vast beauty of the ocean while leveraging technology to
                            optimize your journey. FishSync combines innovation and tradition,
                            creating a harmonious balance for all fishing enthusiasts.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
                        <h2 className="text-2xl text-center font-semibold text-yellow-600 mb-4">
                            Plan Your Journey with Confidence
                        </h2>
                        <p className="text-gray-700 text-center leading-relaxed">
                            FishSync ensures your safety by providing accurate weather updates.
                            Avoid harsh weather conditions and plan your fishing trips with confidence
                            for a seamless and productive experience.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
