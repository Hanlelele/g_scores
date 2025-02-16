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
                                <p className="text-[0.7rem] text-muted-foreground">
                                    Math: {item.math}, Physics: {item.physics}, Chemistry: {item.chemistry}
                                </p>
                            </div>
                            <div className="font-medium">{item.totalScore}</div>
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
}
