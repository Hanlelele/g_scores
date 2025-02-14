import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Quiz', value: 45 },
    { name: 'Shake', value: 60 },
];

const COLORS = ['#4CAF50', '#FFC107'];

// Hàm render Tooltip tùy chỉnh
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];
        return (
            <div style={styles.tooltipContainer}>
                <p style={styles.tooltipTitle}>{name}</p>
                <p style={styles.tooltipValue}>{value} lượt</p>
            </div>
        );
    }

    return null;
};

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

// Component chính
export function Game() {
    return (
        <div style={{ textAlign: 'center' }}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                {/* Sử dụng Tooltip tùy chỉnh */}
                <Tooltip content={<CustomTooltip />} />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
        </div>
    );
}
