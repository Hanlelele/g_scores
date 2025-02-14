import { Row } from '@tanstack/react-table';
import { IconEdit } from '@tabler/icons-react';
import { useUsersContext } from '../context/users-context';
import { Game } from '../data/schema';

interface DataTableRowActionsProps {
    row: Row<Game>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
    const { setOpen, setCurrentRow } = useUsersContext();
    return (
        <>
            <IconEdit
                onClick={() => {
                    setCurrentRow(row.original);
                    setOpen('edit');
                }}
                className="!text-blue-500 w-4 h-4 cursor-pointer"
            />
        </>
    );
}
