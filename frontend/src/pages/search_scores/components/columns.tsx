import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import LongText from '@/components/long-text';
import { callTypes, campaignStatus } from '../data/data';
import { Campaign } from '../data/schema';
import { DataTableRowActions } from './data-table-row-actions';
import { CampaignStatus } from '@/pages/counterPart/campaigns/data/schema';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<Campaign>[] = [
    {
        accessorKey: 'id',
        header: () => <span>ID</span>,
        cell: ({ row }) => <LongText className="max-w-28">{row.getValue('id')}</LongText>,
    },

    {
        accessorKey: 'imageUrl',
        header: () => <span>Image</span>,
        cell: ({ row }) => {
            const imageUrl = row.getValue('imageUrl');
            return <img src={imageUrl as string} alt="Campaign" className="w-40 max-w-40 h-20 object-cover" />;
        },
    },
    {
        accessorKey: 'counterPart',
        header: () => <span>CounterPart</span>,
        cell: ({ row }) => {
            const counterPart = row.getValue('counterPart') as { fullName: string };
            return <LongText className="max-w-28">{counterPart?.fullName}</LongText>;
        },
    },
    {
        accessorKey: 'name',
        header: () => <span>Title Event</span>,
        cell: ({ row }) => <div>{row.getValue('name')}</div>,
        meta: { className: 'w-36' },
    },

    {
        accessorKey: 'description',
        header: () => <span>Description</span>,
        cell: ({ row }) => <LongText className="max-w-56 w-48 text-wrap">{row.getValue('description')}</LongText>,
    },

    {
        accessorKey: 'startDate',
        header: () => <span>Start Date</span>,
        cell: ({ row }) => <div>{new Date(row.getValue('startDate')).toLocaleDateString()}</div>,
        enableSorting: false,
    },

    {
        accessorKey: 'endDate',
        header: () => <span>End Date</span>,
        cell: ({ row }) => <div>{new Date(row.getValue('endDate')).toLocaleDateString()}</div>,
        enableSorting: false,
    },
    {
        accessorKey: 'status',
        header: () => <span>Status</span>,
        cell: ({ row }) => {
            const currentValue = row.getValue('status') as CampaignStatus;

            // Tìm label cho trạng thái hiện tại
            const currentStatusLabel = campaignStatus.find((s) => s.value === currentValue)?.label || 'Unknown';

            return (
                <Badge
                    className={cn(
                        'px-4 py-2 mb-1 text-sm font-[500] rounded-md cursor-pointer hover:opacity-75',
                        callTypes.get(currentValue) || 'bg-gray-100 text-gray-800 border-gray-200 ',
                    )}
                >
                    {currentStatusLabel}
                </Badge>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: 'createdDate',
        header: () => <span>Created Date</span>,
        cell: ({ row }) => <div>{new Date(row.getValue('createdDate')).toLocaleDateString()}</div>,
        enableSorting: false,
    },

    {
        id: 'actions',
        cell: DataTableRowActions,
    },
];
