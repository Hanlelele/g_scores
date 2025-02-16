import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import Layout from '../layout';
import { Statistics } from './components/statistics';
import { TopGroupA } from './components/top-groupA';
import customAxios from '@/api/customApi';

import { AverageResponse, AverageScore, StatisticsData, StatisticsResponse, TopResponse, TopScore } from '@/types/api';

const selectSubject = new Map<string, string>([
    ['math', 'Math'],
    ['literature', 'Literature'],
    ['english', 'English'],
    ['physics', 'Physics'],
    ['chemistry', 'Chemistry'],
    ['biology', 'Biology'],
    ['history', 'History'],
    ['geography', 'Geography'],
    ['civic_education', 'Civic Education'],
]);

export default function Reports() {
    const [currentSubject, setCurrentSubject] = useState<string>('math');
    const [dataChart, setDataChart] = useState<StatisticsData[]>([]);
    const [dataTop, setDataTop] = useState<TopScore[]>([]);
    const [dataAverage, setDataAverage] = useState<AverageScore>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customAxios.get<StatisticsResponse>('/v1/scores/statistics', {
                    params: {
                        subject: currentSubject,
                    },
                });
                if (response.data.success) {
                    setDataChart(response.data.data.scoreDistribution);
                    console.log('dataChart', dataChart);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentSubject]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customAxios.get<TopResponse>('/v1/scores/top');
                const responseAverage = await customAxios.get<AverageResponse>('/v1/scores/average');

                if (response.data.success) {
                    setDataTop(response.data.data);
                }
                if (responseAverage.data.success) {
                    setDataAverage(responseAverage.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout>
            {/* ===== Top Heading ===== */}
            <Header sticky>
                {/* <Search /> */}
                <div className="w-full flex justify-center items-center space-x-4">
                    <h2 className="text-2xl font-bold tracking-tight font-rubik">Reports</h2>
                </div>
            </Header>
            {/* ===== Main ===== */}
            <Main>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
                    <Card className="bg-sidebar">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Math</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{dataAverage?.math}</div>
                            <p className="text-xs text-muted-foreground">Average math score</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sidebar">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Literature</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{dataAverage?.literature}</div>
                            <p className="text-xs text-muted-foreground">Average literature score</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sidebar">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">English</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{dataAverage?.english}</div>
                            <p className="text-xs text-muted-foreground">Average english score</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-sidebar">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Civic Education</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{dataAverage?.civic_education}</div>
                            <p className="text-xs text-muted-foreground">Average civic education score</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 mt-4">
                    <Card className="col-span-1 lg:col-span-4 bg-sidebar">
                        <CardHeader>
                            <CardTitle>Student Score Distribution</CardTitle>
                            <div className="flex justify-end items-center">
                                <Select value={currentSubject} onValueChange={setCurrentSubject}>
                                    <SelectTrigger className="w-28">
                                        <SelectValue>{selectSubject.get(currentSubject)}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="math">Math</SelectItem>
                                        <SelectItem value="literature">Literature</SelectItem>
                                        <SelectItem value="english">English</SelectItem>
                                        <SelectItem value="physics">Physics</SelectItem>
                                        <SelectItem value="chemistry">Chemistry</SelectItem>
                                        <SelectItem value="biology">Biology</SelectItem>
                                        <SelectItem value="history">History</SelectItem>
                                        <SelectItem value="geography">Geography</SelectItem>
                                        <SelectItem value="civic_education">Civic Education</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Statistics data={dataChart} />
                        </CardContent>
                    </Card>
                    <Card className="col-span-1 lg:col-span-3 bg-sidebar">
                        <CardHeader>
                            <CardTitle>Top 10</CardTitle>
                            <CardDescription>
                                Ranking the Top 10 Students in Group A (Math, Physics, Chemistry)
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2">
                            <TopGroupA data={dataTop} />
                        </CardContent>
                    </Card>
                </div>
            </Main>
        </Layout>
    );
}
