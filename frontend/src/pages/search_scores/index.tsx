// import { useEffect, useState } from 'react';
// import useDialogState from '@/hooks/use-dialog-state';
import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
// import { UsersActionDialog } from './components/campagins-action-dialog';
// import { columns } from './components/columns';
// import { UsersDeleteDialog } from './components/campagins-delete-dialog';
// import { CampaignsTable } from './components/campagins-table';
// import UsersContextProvider, { type UsersDialogType } from './context/users-context';
// import { Campaign, campaignListSchema } from './data/schema';
import Layout from '../layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Overview } from '../reports/components/overview';
import { RecentSales } from '../reports/components/recent-sales';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import customAxios from '@/api/customApi_event_service';

const formSchema = z.object({
    'Registration Number': z.string().nonempty('Registration Number is required'),
});

export default function Search_Score() {
    // Dialog states
    // const [currentRow, setCurrentRow] = useState<Campaign | null>(null);
    // const [open, setOpen] = useDialogState<UsersDialogType>(null);
    // const [events, setAllEvent] = useState<Campaign[]>([]);

    // const fetchEvents = async () => {
    //     const response = await customAxios.get('/Admin/GetEvents');
    //     console.log(response.data.data.events);
    //     const events = response.data.data.events;
    //     try {
    //         const validatedData = campaignListSchema.parse(events);

    //         setAllEvent(validatedData);
    //     } catch (error) {
    //         console.error('Validation Error:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchEvents();
    // }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            'Registration Number': '',
        },
    });

    return (
        <Layout>
            <Header sticky>
                {/* <Search /> */}
                <div className="ml-auto flex items-center space-x-4"></div>
            </Header>
            {/* ===== Main ===== */}
            <Main>
                <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Search Score</h2>
                        <p className="text-muted-foreground">Quickly search and check scores with accuracy!</p>
                    </div>
                </div>
                {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <path d="M2 10h20" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                        </CardContent>
                    </Card>
                </div> */}
                <div className="w-full">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>User Registration</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form>
                                    <div className="flex gap-2">
                                        <FormField
                                            control={form.control}
                                            name="Registration Number"
                                            render={({ field }) => (
                                                <FormItem className="space-y-1 w-3/4">
                                                    <FormLabel>Registration Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter registration number" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex justify-center items-end">
                                            <Button className="">Submit</Button>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className="w-full mt-6">
                        <CardHeader>
                            <CardTitle>User Registration</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form>
                                    <div className="flex gap-2">
                                        <FormField
                                            control={form.control}
                                            name="Registration Number"
                                            render={({ field }) => (
                                                <FormItem className="space-y-1 w-3/4">
                                                    <FormLabel>Registration Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter registration number" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex justify-center items-end">
                                            <Button className="">Submit</Button>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </Main>
        </Layout>
    );
}
