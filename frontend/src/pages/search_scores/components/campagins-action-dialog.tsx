'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { Campaign } from '../data/schema';
import customAxios from '@/api/customApi_event_service';
import { Separator } from '@/components/ui/separator';
interface Props {
    currentRow?: Campaign;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onChangeStatus: () => void;
}

export function UsersActionDialog({ currentRow, open, onOpenChange, onChangeStatus }: Props) {
    const { toast } = useToast();
    const [imagePreview, setImagePreview] = useState<string | null>(currentRow?.imageUrl || null);

    const handleApprovedEvent = async () => {
        try {
            const approved = await customAxios.post(`/Admin/AcceptEvent/${currentRow?.id}`);

            console.log('approved', approved);

            if (approved.status === 200) {
                toast({
                    variant: 'success',
                    title: 'Success',
                    description: 'Event has been approved.',
                });
                await onChangeStatus();
                onOpenChange(false);
            }
        } catch (error: any) {
            onOpenChange(false);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error.response.data.message,
            });
        }
    };

    const handleRejectEvent = async () => {
        try {
            const rejected = await customAxios.post(`/Admin/RefuseEvent/${currentRow?.id}`);

            if (rejected.status === 200) {
                toast({
                    variant: 'success',
                    title: 'Success',
                    description: 'Event has been rejected.',
                });

                await onChangeStatus();
                onOpenChange(false);
            }
        } catch (error: any) {
            onOpenChange(false);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error.response.data.message,
            });
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(state) => {
                setImagePreview(currentRow?.imageUrl || null); // Reset image preview
                onOpenChange(state);
            }}
        >
            <DialogContent className="max-w-5xl p-6 bg-gray-50 rounded-lg shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-800">Event Detail</DialogTitle>
                    <DialogDescription className="text-sm text-gray-600">
                        Details of the selected event.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                    {/* Image Section */}
                    <section className="w-full lg:w-1/3">
                        <h2 className="text-lg font-semibold mb-4">Event Image</h2>
                        <div className="w-full flex justify-center">
                            <img
                                src={imagePreview || ''}
                                alt="Campaign"
                                className="w-full max-h-96 object-cover rounded-md border border-gray-300 shadow-sm"
                            />
                        </div>
                    </section>

                    <Separator orientation="vertical" className="hidden lg:block" />

                    {/* Information Section */}
                    <section className="w-full lg:w-2/5">
                        <h2 className="text-lg font-semibold mb-4 text-center">Event Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <p className="text-gray-900">{currentRow?.name || 'N/A'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description:</label>
                                <p className="text-gray-900">{currentRow?.description || 'N/A'}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Start Date:</label>
                                    <p className="text-gray-900">
                                        {currentRow?.startDate?.toLocaleDateString() || 'N/A'}
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">End Date:</label>
                                    <p className="text-gray-900">
                                        {currentRow?.endDate?.toLocaleDateString() || 'N/A'}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Created Date:</label>
                                <p className="text-gray-900">
                                    {currentRow?.createdDate?.toLocaleDateString() || 'N/A'}
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status:</label>
                                <p
                                    className={`text-sm font-medium ${
                                        currentRow?.status === 'Pending' ? 'text-green-600' : 'text-red-600'
                                    }`}
                                >
                                    {currentRow?.status || 'N/A'}
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator orientation="vertical" className="hidden lg:block" />

                    {/* CounterPart Section */}
                    <section className="w-full lg:w-1/3">
                        <h2 className="text-lg font-semibold mb-4 text-center">CounterPart Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">CounterPart:</label>
                                <p className="text-gray-900">{currentRow?.counterPart?.fullName || 'N/A'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address:</label>
                                <p className="text-gray-900">{currentRow?.counterPart?.address || 'N/A'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Field:</label>
                                <p className="text-gray-900">{currentRow?.counterPart?.field || 'N/A'}</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <img
                                    src={currentRow?.counterPart?.imageUrl}
                                    alt="CounterPart"
                                    className="w-full max-h-96 object-cover rounded-md border border-gray-300 shadow-sm"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        variant="approved"
                        form="user-form"
                        onClick={() => handleApprovedEvent()}
                        disabled={currentRow?.status !== 'Pending'}
                    >
                        Approved
                    </Button>
                    <Button
                        type="submit"
                        form="user-form"
                        onClick={() => handleRejectEvent()}
                        variant="danger"
                        disabled={currentRow?.status !== 'Pending'}
                    >
                        Reject
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
