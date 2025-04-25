
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  User,
  Settings,
  Users,
  BarChart,
  PanelLeft,
  Gamepad2,
  MessageSquare,
  LogOut,
  Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

export function AdminLayout() {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would handle logout here
    navigate('/');
  };

  const navItems = [
    { to: '/admin', label: 'Dashboard', icon: BarChart },
    { to: '/admin/games', label: 'Game Management', icon: Gamepad2 },
    { to: '/admin/teams', label: 'Team Manager', icon: Users },
    { to: '/admin/leaderboard', label: 'Leaderboard', icon: Trophy },
    { to: '/admin/faq', label: 'FAQ Manager', icon: MessageSquare },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={cn(
          'bg-sidebar border-r transition-all duration-300 flex flex-col',
          collapsed ? 'w-16' : 'w-64'
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center">
              <Trophy className="h-6 w-6 text-festival-primary mr-2" />
              <span className="font-bold">Admin Panel</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className={cn('ml-auto', collapsed && 'mx-auto')}
          >
            <PanelLeft className={cn('h-5 w-5', collapsed && 'rotate-180')} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-2 flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/admin'}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center px-3 py-2 rounded-md transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground/70 hover:text-foreground',
                      collapsed && 'justify-center'
                    )
                  }
                >
                  <item.icon className={cn('h-5 w-5', !collapsed && 'mr-3')} />
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="p-4 border-t mt-auto">
          {!collapsed ? (
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-sm">Admin User</div>
                  <div className="text-xs text-muted-foreground">admin@lucsc.com</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="mx-auto"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
      
      <Toaster position="bottom-right" />
    </div>
  );
}
