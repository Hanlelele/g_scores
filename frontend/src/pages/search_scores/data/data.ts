// import { IconCash, IconShield, IconUsersGroup, IconUserShield } from '@tabler/icons-react';
import { CampaignStatus } from './schema';

export const callTypes = new Map<CampaignStatus, string>([
    [
        'Pending',
        'bg-emerald-100/30 text-emerald-900 dark:text-emerald-200 border-emerald-200 hover:bg-emerald-200 hover:text-emerald-800 hover:border-emerald-300',
    ],
    [
        'Approved',
        'bg-emerald-200/40 text-emerald-800 dark:text-emerald-100 border-emerald-300 hover:bg-emerald-300 hover:text-emerald-900 hover:border-emerald-400',
    ],
    [
        'InProgress',
        'bg-blue-200/40 text-blue-900 dark:text-blue-100 border-blue-300 hover:bg-blue-300 hover:text-blue-800 hover:border-blue-400',
    ],
    [
        'Finished',
        'bg-yellow-100/30 text-yellow-900 dark:text-yellow-200 border-yellow-300 hover:bg-yellow-200 hover:text-yellow-800 hover:border-yellow-400',
    ],
    [
        'Canceled',
        'bg-red-100/30 text-red-900 dark:text-red-200 border-red-300 hover:bg-red-200 hover:text-red-800 hover:border-red-400',
    ],
]);

export const campaignStatus = [
    {
        label: 'Pending',
        value: 'Pending',
    },
    {
        label: 'Approved',
        value: 'Approved',
    },
    {
        label: 'InProgress',
        value: 'InProgress',
    },
    {
        label: 'Finished',
        value: 'Finished',
    },
    {
        label: 'Canceled',
        value: 'Canceled',
    },
] as const;

export const randomMethod = [
    {
        label: 'ChainLink',
        value: 'ChainLink',
    },
    {
        label: 'UniSwap',
        value: 'UniSwap',
    },
    {
        label: 'Uniswap-Nonce Number',
        value: 'Uniswap-Nonce Number',
    },
] as const;
