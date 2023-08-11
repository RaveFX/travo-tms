// import React from "react";
// import {
//     Tooltip,
//     BarChart,
//     XAxis,
//     YAxis,
//     Legend,
//     CartesianGrid,
//     Bar,
//     ResponsiveContainer,
// } from "recharts";

// const Storemanager_barchart = () => {
//     const data = [
//         { month: "January", expenses: 8000, profit: 4000 },
//         { month: "February", expenses: 8500, profit: 6500 },
//         { month: "March", expenses: 9000, profit: 9000 },
//         { month: "April", expenses: 8000, profit: 4000 },
//         { month: "MAy", expenses: 8500, profit: 6500 },
//         { month: "June", expenses: 9000, profit: 9000 },
//         { month: "July", expenses: 8000, profit: 4000 },
//         { month: "Agust", expenses: 8500, profit: 6500 },
//         { month: "September", expenses: 9000, profit: 9000 },
//         { month: "Octomber", expenses: 8000, profit: 4000 },
//         { month: "November", expenses: 8500, profit: 6500 },
//         { month: "December", expenses: 9000, profit: 9000 },
//         // ... continue for other months
//     ];

//     return (
//         <div style={{ textAlign: "center" }}>
//             <div className="App">
//                 <ResponsiveContainer width="75%" height={350}>
//                     <BarChart
//                         data={data}
//                         margin={{
//                             top: 5,
//                             right: 30,
//                             left: 20,
//                             bottom: 5,
//                         }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="expenses" fill="#8884d8" />
//                         <Bar dataKey="profit" fill="#82ca9d" />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// };

// export default Storemanager_barchart;





// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//         name: 'Jan',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Feb',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Mar',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     // ... Continue with data for the remaining months
//     // Example data for Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
//     // Make sure to adjust these values as per your data
//     {
//         name: 'Apr',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'May',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Jun',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Jul',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Aug',
//         uv: 2000,
//         pv: 3000,
//         amt: 1500,
//     },
//     {
//         name: 'Sep',
//         uv: 3200,
//         pv: 4200,
//         amt: 2400,
//     },
//     {
//         name: 'Oct',
//         uv: 1800,
//         pv: 2500,
//         amt: 1200,
//     },
//     {
//         name: 'Nov',
//         uv: 2500,
//         pv: 3200,
//         amt: 1800,
//     },
//     {
//         name: 'Dec',
//         uv: 4000,
//         pv: 5000,
//         amt: 3000,
//     },
// ];

// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

//     state = {
//         opacity: {
//             uv: 1,
//             pv: 1,
//         },
//     };

//     handleMouseEnter = (o) => {
//         const { dataKey } = o;
//         const { opacity } = this.state;

//         this.setState({
//             opacity: { ...opacity, [dataKey]: 0.5 },
//         });
//     };

//     handleMouseLeave = (o) => {
//         const { dataKey } = o;
//         const { opacity } = this.state;

//         this.setState({
//             opacity: { ...opacity, [dataKey]: 1 },
//         });
//     };

//     render() {
//         const { opacity } = this.state;

//         return (
//             <div style={{ width: '100%' }}>
//                 <ResponsiveContainer width="75%" height={350}>
//                     <LineChart
//                         width={500}
//                         height={300}
//                         data={data}
//                         margin={{
//                             top: 5,
//                             right: 30,
//                             left: 20,
//                             bottom: 5,
//                         }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
//                         <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
//                         <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" />
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>
//         );
//     }
// }


import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    // ... Continue with data for the remaining months
    // Example data for Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
    // Make sure to adjust these values as per your data
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 2000,
        pv: 3000,
        amt: 1500,
    },
    {
        name: 'Sep',
        uv: 3200,
        pv: 4200,
        amt: 2400,
    },
    {
        name: 'Oct',
        uv: 1800,
        pv: 2500,
        amt: 1200,
    },
    {
        name: 'Nov',
        uv: 2500,
        pv: 3200,
        amt: 1800,
    },
    {
        name: 'Dec',
        uv: 4000,
        pv: 5000,
        amt: 3000,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

    render() {
        return (
            <ResponsiveContainer width="75%" height={350}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}

