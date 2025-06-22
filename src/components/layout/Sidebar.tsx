import React from 'react';
import {
  LayoutGrid,
  Users,
  UserCircle,
  FileText,
  Receipt,
  Package,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = 
  | 'LayoutGrid' | 'Users' | 'UserCircle' | 'FileText' | 'Receipt' 
  | 'Package' | 'Mail' | 'Archive' | 'Calendar' | 'HelpCircle' | 'Settings';

const iconMap: Record<IconName, LucideIcon> = {
  LayoutGrid, Users, UserCircle, FileText, Receipt, 
  Package, Mail, Archive, Calendar, HelpCircle, Settings,
};

interface NavItem {
  href: string;
  label: string;
  icon: IconName;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: 'LayoutGrid', isActive: true },
  { href: '#', label: 'Leads', icon: 'Users' },
  { href: '#', label: 'Customers', icon: 'UserCircle' },
  { href: '#', label: 'Proposals', icon: 'FileText' },
  { href: '#', label: 'Invoices', icon: 'Receipt' },
  { href: '#', label: 'Items', icon: 'Package' },
  { href: '#', label: 'Mail', icon: 'Mail' },
  { href: '#', label: 'Shoebox', icon: 'Archive' },
  { href: '#', label: 'Calendar', icon: 'Calendar' },
];

const secondaryNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: 'HelpCircle' },
  { href: '#', label: 'Settings', icon: 'Settings' },
];

const NavLink: React.FC<NavItem> = ({ href, label, icon, isActive = false }) => {
  const IconComponent = iconMap[icon];
  return (
    <a
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
      )}
    >
      <IconComponent className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col h-full bg-background">
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-lg font-bold text-background">
              b
            </div>
            <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              o
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-1 flex-col justify-between overflow-y-auto">
        <nav className="p-4 space-y-1">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>
        <nav className="p-4 border-t space-y-1">
           {secondaryNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
