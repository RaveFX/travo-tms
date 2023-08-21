import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        month: 'Jan',
        totalCustomers: 200,
    },
    {
        month: 'Feb',
        totalCustomers: 260,
    },
    {
        month: 'Mar',
        totalCustomers: 310,
    },
    {
        month: 'Apr',
        totalCustomers: 220,
    },
    {
        month: 'May',
        totalCustomers: 280,
    },
    {
        month: 'Jun',
        totalCustomers: 330,
    },
    {
        month: 'Jul',
        totalCustomers: 240,
    },
    {
        month: 'Aug',
        totalCustomers: 300,
    },
    {
        month: 'Sep',
        totalCustomers: 350,
    },
    {
        month: 'Oct',
        totalCustomers: 260,
    },
    {
        month: 'Nov',
        totalCustomers: 320,
    },
    {
        month: 'Dec',
        totalCustomers: 370,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

    render() {
        return (
            <ResponsiveContainer width="100%" height={250}>
                <ComposedChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalCustomers" barSize={20} fill="#413ea0" name="Total Customers" />
                    <Line type="monotone" dataKey="totalCustomers" stroke="#82ca9d" name="Total Customers" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
