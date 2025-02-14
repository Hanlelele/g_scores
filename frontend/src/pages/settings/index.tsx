// import { useState } from 'react';

// import useDialogState from '@/hooks/use-dialog-state';
// import { Header } from '@/components/layout/header';
// import { Main } from '@/components/layout/main';
// import { columns } from './components/users-columns';
// import { UsersTable } from './components/users-table';
// import UsersContextProvider, { type UsersDialogType } from './context/users-context';
// import { Game, gameListSchema } from './data/schema';
// import { games } from './data/game';
import Layout from '../layout';
// import { UsersActionDialog } from './components/users-action-dialog';

export default function Settings() {
    // // Dialog states
    // const [currentRow, setCurrentRow] = useState<Game | null>(null);
    // const [open, setOpen] = useDialogState<UsersDialogType>(null);

    // // Parse user list
    // const userList = gameListSchema.parse(games);

    return (
        <Layout>
            <h1>Settings</h1>
        </Layout>
    );
}
