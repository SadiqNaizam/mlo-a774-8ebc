import React, { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar, ChevronDown } from 'lucide-react';

type ActiveTab = 'Leads came' | 'Leads Converted' | 'Total deals size';

const trackingData = [
  { month: 'March', closedWon: 65, closedLost: 68 },
  { month: 'April', closedWon: 22, closedLost: 45 },
  { month: 'May', closedWon: 64, closedLost: 95 },
  { month: 'June', closedWon: 81, closedLost: 7 },
  { month: 'July', closedWon: 86, closedLost: 42 },
  { month: 'August', closedWon: 30, closedLost: 92 },
];

const LineChartCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('Leads Converted');

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-end space-x-6 mt-2">
              <div className="flex items-end space-x-2">
                <p className="text-4xl font-bold">680</p>
                <p className="text-muted-foreground">total closed</p>
              </div>
              <div className="flex items-end space-x-2">
                <p className="text-4xl font-bold">70</p>
                <p className="text-muted-foreground">total lost</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center bg-muted p-1 rounded-md text-sm">
              {(['Leads came', 'Leads Converted', 'Total deals size'] as ActiveTab[]).map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'w-full transition-colors duration-200',
                    activeTab === tab ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                  )}
                >
                  {tab}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="h-8 self-start sm:self-auto">
              <Calendar className="mr-2 h-4 w-4" />
              Last 6 months
              <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trackingData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} style={{ fontSize: '12px', fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} style={{ fontSize: '12px', fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip 
                contentStyle={{ 
                  background: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)'
                }}/>
              <Area type="monotone" dataKey="closedWon" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" name="Closed Won" />
              <Area type="monotone" dataKey="closedLost" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" name="Closed Lost" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-teal-500"></div>
                <span>Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-rose-500"></div>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
