'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Game } from '../data/schema';

const formSchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    gameType: z.string(),
    allowItemExchange: z.string(),
    instructions: z.string(),
    isEdit: z.boolean(),
});
type UserForm = z.infer<typeof formSchema>;

interface Props {
    currentRow?: Game;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function UsersActionDialog({ currentRow, open, onOpenChange }: Props) {
    const { toast } = useToast();
    const isEdit = !!currentRow;
    const form = useForm<UserForm>({
        resolver: zodResolver(formSchema),
        defaultValues: isEdit
            ? {
                  ...currentRow,
                  isEdit,
              }
            : {
                  title: '',
                  imageUrl: '',
                  gameType: '',
                  allowItemExchange: '',
                  instructions: '',
                  isEdit,
              },
    });

    const onSubmit = () => {
        form.reset();

        toast({
            variant: 'success',
            title: 'You submitted the following values:',
            description: 'Update Game Information successfully',
        });
        onOpenChange(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(state) => {
                form.reset();
                onOpenChange(state);
            }}
        >
            <DialogContent className="max-w-4xl">
                <DialogHeader className="text-left">
                    <DialogTitle>{isEdit ? 'Update Game Information' : 'Add New User'}</DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? 'To update the game information, you will want to provide clear and details about the changes.'
                            : 'Create new user here. '}
                        Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        id="user-form"
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 p-0.5 flex flex-row gap-4"
                    >
                        <div className="flex-shrink-0">
                            <img
                                src={form.watch('imageUrl')}
                                alt="Game"
                                className="w-80 h-52 object-cover rounded-md border border-gray-300 shadow-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-3 w-full h-80">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                                        <FormLabel className="col-span-2 text-right">Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John"
                                                className="col-span-4"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="col-span-4 col-start-3" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gameType"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                                        <FormLabel className="col-span-2 text-right">Game Type</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Doe"
                                                className="col-span-4"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="col-span-4 col-start-3" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="allowItemExchange"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                                        <FormLabel className="col-span-2 text-right">Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john_doe" className="col-span-4" {...field} />
                                        </FormControl>
                                        <FormMessage className="col-span-4 col-start-3" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="instructions"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                                        <FormLabel className="col-span-2 text-right">Instructions</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="...." className="col-span-4 h-44" {...field} />
                                        </FormControl>
                                        <FormMessage className="col-span-4 col-start-3" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
                <DialogFooter>
                    <Button type="submit" form="user-form">
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
