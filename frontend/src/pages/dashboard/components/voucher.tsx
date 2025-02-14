import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from 'recharts';

export const dataVoucher01 = [
    {
        name: 'Dec 14',
        uv: 1000,
        pv: 50,
        amt: 2400,
    },
    {
        name: 'Dec 15',
        uv: 200,
        pv: 10,
        amt: 2210,
    },
    {
        name: 'Dec 16',
        uv: 1000,
        pv: 0,
        amt: 2290,
    },
    {
        name: 'Dec 17',
        uv: 300,
        pv: 39,
        amt: 2000,
    },
    {
        name: 'Dec 18',
        uv: 1800,
        pv: 48,
        amt: 2181,
    },
    {
        name: 'Dec 19',
        uv: 200,
        pv: 38,
        amt: 2500,
    },
    {
        name: 'Dec 20',
        uv: 300,
        pv: 43,
        amt: 2100,
    },

    {
        name: 'Dec 21',
        uv: 3000,
        pv: 40,
        amt: 2100,
    },
];

export const dataVoucher02 = [
    {
        name: 'Dec 30',
        uv: 1000,
        pv: 100,
        amt: 2400,
    },
    {
        name: 'Dec 31',
        uv: 3000,
        pv: 250,
        amt: 2210,
    },
    {
        name: 'Jan 01',
        uv: 2000,
        pv: 100,
        amt: 2290,
    },
    {
        name: 'Jan 02',
        uv: 300,
        pv: 5,
        amt: 2000,
    },
    {
        name: 'Jan 03',
        uv: 1800,
        pv: 38,
        amt: 2181,
    },
    {
        name: 'Jan 04',
        uv: 400,
        pv: 38,
        amt: 2500,
    },
    {
        name: 'Jan 05',
        uv: 3490,
        pv: 300,
        amt: 2100,
    },

    {
        name: 'Jan 06',
        uv: 2000,
        pv: 40,
        amt: 2100,
    },
];

export const dataVoucher03 = [
    {
        name: 'Jan 15',
        uv: 1000,
        pv: 100,
        amt: 2400,
    },
    {
        name: 'Jan 16',
        uv: 0,
        pv: 0,
        amt: 2210,
    },
    {
        name: 'Jan 17',
        uv: 0,
        pv: 0,
        amt: 2290,
    },
    {
        name: 'Jan 18',
        uv: 0,
        pv: 0,
        amt: 2000,
    },
    {
        name: 'Jan 19',
        uv: 0,
        pv: 0,
        amt: 2181,
    },
    {
        name: 'Jan 20',
        uv: 0,
        pv: 0,
        amt: 2500,
    },
    {
        name: 'Jan 21',
        uv: 0,
        pv: 0,
        amt: 2100,
    },

    {
        name: 'Jan 11',
        uv: 0,
        pv: 0,
        amt: 2100,
    },
];

export default function Voucher({ data }: any) {
    return (
        <ResponsiveContainer width={'100%'} height={300}>
            <LineChart data={data} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" name="Used Voucher" stroke="#8884d8" activeDot={{ r: 8 }}>
                    <LabelList position="top" offset={10} />
                </Line>
                <Line type="monotone" dataKey="uv" name="Release Voucher" stroke="#82ca9d">
                    <LabelList position="top" offset={10} />
                </Line>
            </LineChart>
        </ResponsiveContainer>
    );
}
