import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavGroup } from '@/components/layout/nav-group';
import { NavUser } from '@/components/layout/nav-user';
//import { TeamSwitcher } from '@/components/layout/team-switcher'
import { sidebarData } from './data/sidebar-data';
//import { useAuth } from '@/context/AuthContext';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    // const { user } = useAuth();
    // const User = {
    //     user: {
    //         name: user.userName || '',
    //         email: user.email || '',
    //         avatar: user.photoURL,
    //     },
    // };

    return (
        <Sidebar collapsible="icon" variant="floating" {...props}>
            <SidebarHeader>
                {sidebarData.teams.map((activeTeam) => (
                    <div className="flex flex-row gap-3" key={activeTeam.name}>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <activeTeam.logo className="size-4" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">{activeTeam.name}</span>
                            <span className="truncate text-xs">{activeTeam.plan}</span>
                        </div>
                    </div>
                ))}
            </SidebarHeader>
            <SidebarContent>
                {sidebarData.navGroups.map((props) => (
                    <NavGroup key={props.title} {...props} />
                ))}
            </SidebarContent>
            {/* <SidebarFooter>
                <NavUser user={User.user} />
            </SidebarFooter> */}
            <SidebarRail />
        </Sidebar>
    );
}
