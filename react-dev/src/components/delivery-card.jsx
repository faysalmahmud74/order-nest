import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const data = [
    { name: "Monday", Delivered: 120, Pending: 30, Canceled: 10 },
    { name: "Tuesday", Delivered: 150, Pending: 20, Canceled: 5 },
    { name: "Wednesday", Delivered: 100, Pending: 50, Canceled: 15 },
    { name: "Thursday", Delivered: 180, Pending: 25, Canceled: 8 },
    { name: "Friday", Delivered: 200, Pending: 15, Canceled: 10 },
    { name: "Saturday", Delivered: 170, Pending: 40, Canceled: 12 },
    { name: "Sunday", Delivered: 190, Pending: 20, Canceled: 9 },
];

const DeliveryGraph = () => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md 2xl:min-h-[405px]">
            <h3 className="text-xl font-semibold">Delivery Information</h3>
            <p className="b-4">Track your delivery status throughout the week.</p>
            <div className="flex flex-col items-center">
                <BarChart width={350} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Delivered" fill="#4CAF50" />
                    <Bar dataKey="Pending" fill="#FFC107" />
                    <Bar dataKey="Canceled" fill="#F44336" />
                </BarChart>
            </div>
        </div>
    );
};

export default DeliveryGraph;