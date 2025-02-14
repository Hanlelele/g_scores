// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
// import { dataCounterPart03, Overview } from './components/overview';
// import { IconStarFilled } from '@tabler/icons-react';
// import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from '@/components/ui/select';
// import { useEffect, useState } from 'react';
// import { addDays, format } from 'date-fns';
// import { CalendarIcon } from 'lucide-react';
// import { DateRange } from 'react-day-picker';
// import { cn } from '@/lib/utils';
// import { Calendar } from '@/components/ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import Voucher, { dataVoucher03 } from './components/voucher';
import Layout from '../layout';
// import { useAuth } from '@/context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { Game } from './components/game';
// import { dataCounterPart02, dataCounterPart01 } from './components/overview';
// import { dataVoucher01, dataVoucher02 } from './components/voucher';
// import customAxios from '@/api/customApi';
// import customAxiosEvent from '@/api/customApi_event_service';

// const appText = new Map<string, string>([
//     ['today', 'Today'],
//     ['week', 'This week'],
//     ['month', 'This month'],
//     ['year', 'This year'],
// ]);

// interface overviewData {
//     totalUsers: number;
//     totalEvents: number;
//     totalPlayers: number;
//     totalCounterParts: number;
// }

export default function Dashboard() {
    // const [appType, setAppType] = useState('today');
    // const [counterPartData, setCounterPartData] = useState(dataCounterPart01);
    // const [voucherData, setVoucherData] = useState(dataVoucher03);
    // const [overDataMonth, setOverDataMonth] = useState<overviewData>();
    // const [overviewData, setOverviewData] = useState<overviewData>();

    // const [date, setDate] = useState<DateRange | undefined>({
    //     from: new Date('2025-01-14T17:00:00.000Z'),
    //     to: addDays(new Date(), 12),
    // });

    // const [dateVoucher, setDateVoucher] = useState<DateRange | undefined>({
    //     from: new Date('2025-01-14T17:00:00.000Z'),
    //     to: addDays(new Date(), 7),
    // });

    // // Hàm render cho nút khi chọn ngày
    // const renderButtonContent = (date: DateRange | undefined) => {
    //     if (!date?.from) {
    //         return <span>Pick a date</span>;
    //     }

    //     if (date?.from && date?.to) {
    //         return (
    //             <>
    //                 {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
    //             </>
    //         );
    //     }

    //     return format(date.from, 'LLL dd, y');
    // };

    // const navigate = useNavigate();

    // const { user } = useAuth();

    // useEffect(() => {
    //     if (!user.isAuthenticated || user.role !== 'ADMIN') {
    //         navigate('/login');
    //     }
    // }, []);

    // const changCounterPart = () => {
    //     if (date?.from?.toISOString() === '2024-12-18T17:00:00.000Z') {
    //         setCounterPartData(dataCounterPart02);
    //     } else if (date?.from?.toISOString() === '2025-01-14T17:00:00.000Z') {
    //         setCounterPartData(dataCounterPart01);
    //     } else {
    //         setCounterPartData(dataCounterPart03);
    //     }
    // };

    // const handleChangeVoucher = () => {
    //     if (dateVoucher?.from?.toISOString() === '2025-01-15T03:05:28.542Z') {
    //         setVoucherData(dataVoucher03);
    //     } else if (dateVoucher?.from?.toISOString() === '2024-12-13T17:00:00.000Z') {
    //         setVoucherData(dataVoucher01);
    //     } else {
    //         setVoucherData(dataVoucher02);
    //     }
    // };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response01 = await customAxios.get('/Admin/UsersStatistics');
    //             const response02 = await customAxiosEvent.get('/Admin/EventStatistics');
    //             const data: any = response01.data.data;
    //             const data02: any = response02.data.data;
    //             setOverDataMonth({
    //                 totalUsers: data.totalUsers,
    //                 totalEvents: data02.totalActiveEvents,
    //                 totalPlayers: data.totalPlayers,
    //                 totalCounterParts: data.totalCounterParts,
    //             });
    //         } catch (error) {
    //             console.log('error', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     if (appType === 'week') {
    //         setOverviewData({
    //             totalUsers: 15,
    //             totalEvents: 8,
    //             totalPlayers: 10,
    //             totalCounterParts: 10,
    //         });
    //     } else if (appType === 'month') {
    //         setOverviewData(overDataMonth);
    //     } else if (appType === 'year') {
    //         setOverviewData({
    //             totalUsers: 25,
    //             totalEvents: 21,
    //             totalPlayers: 14,
    //             totalCounterParts: 12,
    //         });
    //     } else if (appType === 'today') {
    //         setOverviewData({
    //             totalUsers: 15,
    //             totalEvents: 10,
    //             totalPlayers: 5,
    //             totalCounterParts: 3,
    //         });
    //     }
    // }, [appType]);

    return (
        <Layout>
            {/* ===== Top Heading ===== */}
            <Header sticky>
                {/* <Search /> */}
                <div className="ml-auto flex items-center space-x-4"></div>
            </Header>
            {/* ===== Main ===== */}
            <Main>
                <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                        <p className="text-muted-foreground">Dashboard</p>
                    </div>
                </div>
            </Main>
        </Layout>
    );
}
