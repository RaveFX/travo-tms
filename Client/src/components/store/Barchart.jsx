// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const BarChart = () => {
//     const data = {
//         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         datasets: [
//             {
//                 label: 'Traffic',
//                 data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div className="mx-auto w-3/5 overflow-hidden">
//             <Bar data={data} options={{ maintainAspectRatio: false }} style={{ width: '100%', height: '400px' }} />
//         </div>
//     );
// };

// export default BarChart;


import React from "react";

import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";

const Barchart = () => {
    const data = [
        { name: "Facebook", users: 2000000000 },
        { name: "Instagram", users: 1500000000 },
        { name: "Twiter", users: 1000000000 },
        { name: "Telegram", users: 500000000 },
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Socail Media Users</h1>
            <div className="App">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="users"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 80,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
            </div>
        </div>
    );
};

export default Barchart;