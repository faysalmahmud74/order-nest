import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
    { name: "Marketing", value: 27.33 },
    { name: "Accounts", value: 22 },
    { name: "Analytics", value: 22 },
    { name: "IT", value: 16.5 },
    { name: "Operations", value: 7.5 },
    { name: "HR", value: 4.6 },
];

const COLORS = ["#FFC107", "#FF5722", "#9C27B0", "#3F51B5", "#00BCD4", "#E91E63"];

const EmployeeCard = () => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md xl:min-h-[380px] 2xl:min-h-[360px] overflow-hidden">
            <h3 className="text-xl font-semibold">Employee Management</h3>
            <p className="mb-4">Manage your employees efficiently.</p>
            <div className="flex flex-col items-center">
                <PieChart width={400} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        fill="#8884d8"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default EmployeeCard;