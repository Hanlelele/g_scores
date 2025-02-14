// import { useEffect, useState } from 'react';
// import { IconUserPlus } from '@tabler/icons-react';
// import useDialogState from '@/hooks/use-dialog-state';
// import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
// import { UsersActionDialog } from './components/users-action-dialog';
// import { columns } from './components/users-columns';
// import { UsersDeleteDialog } from './components/users-delete-dialog';
// import { UsersTable } from './components/users-table';
// import UsersContextProvider, { type UsersDialogType } from './context/users-context';
// import { User, userListSchema } from './data/schema';
import Layout from '../layout';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Overview } from './components/overview';
// import customAxios from '@/api/customApi';
// import { UsersUnBlockDialog } from './components/user-unblock-dialog';

export default function Reports() {
    // Dialog states
    // const [currentRow, setCurrentRow] = useState<User | null>(null);
    // const [open, setOpen] = useDialogState<UsersDialogType>(null);

    // const [users, setUsers] = useState<User[]>([]);

    // const fetchUsers = async () => {
    //     try {
    //         const response = await customAxios.get('/Admin/GetUsers');

    //         const data = response.data.data.users;
    //         setUsers(data);
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    // // Parse user list
    // const userList = userListSchema.parse(users);

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
                        <h2 className="text-2xl font-bold tracking-tight font-rubik">Report</h2>
                        <p className="text-muted-foreground">Report</p>
                    </div>
                </div>

                <Tabs orientation="vertical" defaultValue="overview" className="space-y-4">
                    {/* <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics' disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
          </div> */}
                    <TabsContent value="overview" className="space-y-4">
                        <div className="w-full">
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <Overview />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </Main>
        </Layout>
    );
}
