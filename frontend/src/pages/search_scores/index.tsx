import { useState } from 'react';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import { Table, TableBody, TableCell, TableRow, TableHeader } from '@/components/ui/table';
import Layout from '../layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import customAxios from '@/api/customApi';
import { SearchResponse, Score } from '@/types/api';

const formSchema = z.object({
    Registration_Number: z.string().nonempty('Registration Number is required'),
});

export default function Search_Score() {
    const [score, setScore] = useState<Score | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Registration_Number: '',
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            const response = await customAxios.get<SearchResponse>('/v1/scores/search', {
                params: { registration_Number: data.Registration_Number },
            });

            if (response.status === 200) {
                setScore(response.data.data);
            }
            setIsLoading(false);
        } catch (error) {}
    }
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
                <div className="w-full">
                    <Card className="w-full bg-sidebar">
                        <CardHeader>
                            <CardTitle>User Registration</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="flex gap-2">
                                        <FormField
                                            control={form.control}
                                            name="Registration_Number"
                                            render={({ field }) => (
                                                <FormItem className="space-y-1 w-3/4">
                                                    <FormLabel>Registration Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter registration number" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                            disabled={isLoading}
                                        />
                                        <div className="flex justify-center items-end">
                                            <Button disabled={isLoading}>Submit</Button>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className="w-full mt-6 bg-sidebar">
                        <CardHeader>
                            <CardTitle>Detailed Scores</CardTitle>
                            <CardDescription>Detailed view of search scores here !</CardDescription>
                        </CardHeader>
                        {score ? (
                            <CardContent>
                                <Table>
                                    <TableHeader className="text-gray-500 font-semibold">
                                        <TableRow>
                                            <TableCell>Registration Number</TableCell>
                                            <TableCell>Math</TableCell>
                                            <TableCell>Literature</TableCell>
                                            <TableCell>English</TableCell>
                                            <TableCell>Physics</TableCell>
                                            <TableCell>Chemistry</TableCell>
                                            <TableCell>Biology</TableCell>
                                            <TableCell>History</TableCell>
                                            <TableCell>Geography</TableCell>
                                            <TableCell>Civic Education</TableCell>
                                            <TableCell>Language Code</TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{score.registration_Number}</TableCell>
                                            <TableCell>{score.math}</TableCell>
                                            <TableCell>{score.literature}</TableCell>
                                            <TableCell>{score.english}</TableCell>
                                            <TableCell>{score.physics}</TableCell>
                                            <TableCell>{score.chemistry}</TableCell>
                                            <TableCell>{score.biology}</TableCell>
                                            <TableCell>{score.history}</TableCell>
                                            <TableCell>{score.geography}</TableCell>
                                            <TableCell>{score.civic_education}</TableCell>
                                            <TableCell>{score.language_code}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        ) : (
                            <CardContent>
                                <p className="text-center text-lg font-semibold">No data found</p>
                            </CardContent>
                        )}
                    </Card>
                </div>
            </Main>
        </Layout>
    );
}
