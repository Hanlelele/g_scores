import { ColumnDef } from '@tanstack/react-table';
import LongText from '@/components/long-text';
import { Game } from '../data/schema';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Game>[] = [
    {
        accessorKey: 'title',
        header: () => <span>Title</span>,
        cell: ({ row }) => <LongText className="max-w-36">{row.getValue('title')}</LongText>,
    },

    {
        accessorKey: 'imageUrl',
        header: () => <span>Avatar</span>,
        cell: ({ row }) => {
            const avatarUrl = row.getValue('imageUrl');
            return <img src={avatarUrl as string} alt="Avatar" className="w-40 h-32 object-cover" />;
        },
        meta: {
            className: 'max-w-36',
        },
        filterFn: 'weakEquals',
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: 'gameType',
        header: () => <span>Game Type</span>,
        cell: ({ row }) => <div>{row.getValue('gameType')}</div>,
    },

    {
        accessorKey: 'allowItemExchange',
        header: () => <span>Allow Item ExChange</span>,
        cell: ({ row }) => <div className="capitalize">{row.getValue('allowItemExchange')}</div>,
    },

    {
        accessorKey: 'instructions',
        header: () => <span>Instruction</span>,
        cell: ({ row }) => <div>{row.getValue('instructions')}</div>,
        meta: {
            className: 'max-w-60',
        },
    },

    {
        id: 'actions',
        cell: DataTableRowActions,
    },
];
