import { Row } from '@tanstack/react-table';
import { IconMenuDeep } from '@tabler/icons-react';
import { useUsersContext } from '../context/users-context';
import { Campaign } from '../data/schema';

interface DataTableRowActionsProps {
    row: Row<Campaign>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
    const { setOpen, setCurrentRow } = useUsersContext();
    return (
        <>
            <IconMenuDeep
                className="cursor-pointer"
                onClick={() => {
                    setCurrentRow(row.original);
                    setOpen('edit');
                }}
            />
        </>
    );
}
