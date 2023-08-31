import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'On Delivery', value: 100 },
    { name: 'Delivered', value: 200 },
    { name: 'Not Started Delivery', value: 50 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-of-straight-angle-oz0th';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                        startAngle={180}
                        endAngle={0}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
