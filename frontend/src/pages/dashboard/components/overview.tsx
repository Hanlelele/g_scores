import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export const dataCounterPart02 = [
    {
        name: 'Dec 19',
        total: 4,
    },
    {
        name: 'Dec 20',
        total: 0,
    },
    {
        name: 'Dec 21',
        total: 0,
    },
    {
        name: 'Dec 22',
        total: 2,
    },
    {
        name: 'Dec 23',
        total: 0,
    },
    {
        name: 'Dec 24',
        total: 1,
    },
    {
        name: 'Dec 25',
        total: 3,
    },
    {
        name: 'Dec 26',
        total: 0,
    },
    {
        name: 'Dec 27',
        total: 1,
    },
    {
        name: 'Dec 28',
        total: 0,
    },
    {
        name: 'Dec 29',
        total: 0,
    },
    {
        name: 'Dec 30',
        total: 0,
    },
];

export const dataCounterPart01 = [
    {
        name: 'Jan 15',
        total: 6,
    },
    {
        name: 'Jan 16',
        total: 0,
    },
    {
        name: 'Jan 18',
        total: 0,
    },
    {
        name: 'Jan 19',
        total: 0,
    },
    {
        name: 'Jan 20',
        total: 0,
    },
    {
        name: 'Jan 21',
        total: 0,
    },
    {
        name: 'Jan 22',
        total: 0,
    },
    {
        name: 'Jan 23',
        total: 0,
    },
    {
        name: 'Jan 24',
        total: 0,
    },
    {
        name: 'Jan 25',
        total: 0,
    },
    {
        name: 'Jan 26',
        total: 0,
    },
    {
        name: 'Jan 27',
        total: 0,
    },
];

export const dataCounterPart03 = [
    {
        name: 'Jan 02',
        total: 0,
    },
    {
        name: 'Jan 03',
        total: 2,
    },
    {
        name: 'Jan 04',
        total: 0,
    },
    {
        name: 'Jan 05',
        total: 4,
    },
    {
        name: 'Jan 06',
        total: 0,
    },
    {
        name: 'Jan 07',
        total: 1,
    },
    {
        name: 'Jan 08',
        total: 0,
    },
    {
        name: 'Jan 09',
        total: 1,
    },
    {
        name: 'Jan 10',
        total: 0,
    },
    {
        name: 'Jan 11',
        total: 0,
    },
    {
        name: 'Jan 12',
        total: 0,
    },
    {
        name: 'Jan 13',
        total: 1,
    },
];

export function Overview({ data }: any) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
            </BarChart>
        </ResponsiveContainer>
    );
}
