import { StatisticsData } from '@/types/api';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLOR_MAP: Record<string, string> = {
    Excellent: '#4CAF50',
    Good: '#2196F3',
    Average: '#FF9800',
    Poor: '#F44336',
};

const FIXED_ORDER = ['Excellent', 'Good', 'Average', 'Poor'];

// Styles cho Tooltip
const styles = {
    tooltipContainer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    tooltipTitle: {
        fontSize: '14px',
        fontWeight: 'bold',
        margin: 0,
    },
    tooltipValue: {
        fontSize: '12px',
        margin: 0,
    },
};

// Hàm render Tooltip tùy chỉnh
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];
        return (
            <div style={styles.tooltipContainer}>
                <p style={styles.tooltipTitle}>{name}</p>
                <p style={styles.tooltipValue}>{value} student</p>
            </div>
        );
    }

    return null;
};

// Hàm render phần trăm trên biểu đồ
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export function Statistics({ data }: { data: StatisticsData[] }) {
    const sortedData = FIXED_ORDER.map((key) => data.find((item) => item.name === key) || { name: key, count: 0 });

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart width={400} height={400}>
                <Pie
                    data={sortedData}
                    cx={200}
                    cy={180}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="count"
                >
                    {sortedData.map((entry) => (
                        <Cell key={entry.name} fill={COLOR_MAP[entry.name]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    wrapperStyle={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    className="w-full"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
                />
            </PieChart>
        </div>
    );
}
