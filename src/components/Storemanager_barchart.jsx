import React from "react";
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    ResponsiveContainer,
} from "recharts";

const Storemanager_barchart = () => {
    const data = [
        { month: "January", expenses: 8000, profit: 4000 },
        { month: "February", expenses: 8500, profit: 6500 },
        { month: "March", expenses: 9000, profit: 9000 },
        { month: "April", expenses: 8000, profit: 4000 },
        { month: "MAy", expenses: 8500, profit: 6500 },
        { month: "June", expenses: 9000, profit: 9000 },
        { month: "July", expenses: 8000, profit: 4000 },
        { month: "Agust", expenses: 8500, profit: 6500 },
        { month: "September", expenses: 9000, profit: 9000 },
        { month: "Octomber", expenses: 8000, profit: 4000 },
        { month: "November", expenses: 8500, profit: 6500 },
        { month: "December", expenses: 9000, profit: 9000 },
        // ... continue for other months
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <div className="App">
                <ResponsiveContainer width="75%" height={400}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="expenses" fill="#8884d8" />
                        <Bar dataKey="profit" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Storemanager_barchart;
