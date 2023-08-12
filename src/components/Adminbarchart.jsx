import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'Jan',
        expenses: 4000,
        profits: 2400,
    },
    {
        month: 'Feb',
        expenses: 3000,
        profits: 1398,
    },
    {
        month: 'Mar',
        expenses: 2000,
        profits: 9800,
    },
    {
        month: 'Apr',
        expenses: 2780,
        profits: 3908,
    },
    {
        month: 'May',
        expenses: 1890,
        profits: 4800,
    },
    {
        month: 'Jun',
        expenses: 2390,
        profits: 3800,
    },
    {
        month: 'Jul',
        expenses: 3490,
        profits: 4300,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        return (
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={data}
                    margin={{
                        top: 40,
                        right: 30,
                        left: 20,
                        bottom: 1,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="expenses" fill="#8884d8" name="Expenses" />
                    <Bar dataKey="profits" fill="#82ca9d" name="Profits" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
