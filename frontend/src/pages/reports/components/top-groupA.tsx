import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TopScore } from '@/types/api';

export function TopGroupA({ data }: { data: TopScore[] }) {
    return (
        <div className="space-y-8">
            <ScrollArea className="h-96">
                {data.map((item, index) => (
                    <div className="flex items-center gap-4 mb-1 p-4 pt-0" key={index}>
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-wrap items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{item.registration_Number}</p>
                                <p className="text-xs text-muted-foreground">
                                    Math: {item.math}, Physics: {item.physics}, Chemistry: {item.chemistry}
                                </p>
                            </div>
                            <div className="font-medium">{item.totalScore}</div>
                        </div>
                    </div>
                ))}
            </ScrollArea>

            {/* <div className="flex items-center gap-4">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-wrap items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Jackson Lee</p>
                        <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                    </div>
                    <div className="font-medium">+$39.00</div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-wrap items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                        <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                    </div>
                    <div className="font-medium">+$299.00</div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-wrap items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">William Kim</p>
                        <p className="text-sm text-muted-foreground">will@email.com</p>
                    </div>
                    <div className="font-medium">+$99.00</div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-wrap items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Sofia Davis</p>
                        <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
                    </div>
                    <div className="font-medium">+$39.00</div>
                </div>
            </div> */}
        </div>
    );
}
