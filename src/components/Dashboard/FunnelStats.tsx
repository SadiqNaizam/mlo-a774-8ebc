import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  avgTime: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  {
    name: 'Discovery',
    count: 200,
    value: 200,
    avgTime: '2 days',
    color: 'bg-red-500',
  },
  {
    name: 'Qualified',
    count: 100,
    value: 100,
    avgTime: '2 days',
    color: 'bg-yellow-400',
  },
  {
    name: 'In conversation',
    count: 50,
    value: 100,
    avgTime: '5 days',
    color: 'bg-indigo-900',
  },
  {
    name: 'Negotiations',
    count: 20,
    value: 50,
    avgTime: '8 days',
    color: 'bg-emerald-500',
  },
  {
    name: 'Closed won',
    count: 20,
    value: 50,
    avgTime: '10 days',
    color: 'bg-purple-600',
  },
];

const FunnelStats: React.FC = () => {
  const totalActiveLeads = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end space-x-2 mb-4">
          <p className="text-5xl font-bold text-foreground">{totalActiveLeads}</p>
          <p className="text-lg text-muted-foreground">active leads</p>
        </div>

        <div className="w-full h-3 rounded-full flex overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <TooltipProvider key={stage.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn('h-full', stage.color)}
                    style={{ width: `${(stage.count / totalActiveLeads) * 100}%` }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{stage.name}: {stage.count} leads</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 font-medium">
            <span>STAGE</span>
            <span className="text-right">LEADS</span>
            <span className="text-right">VALUE</span>
            <span className="text-right">AVG. TIME</span>
          </div>
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-4">
              <div className={cn('w-2.5 h-2.5 rounded-sm', stage.color)} />
              <p className="text-foreground font-medium">{stage.name}</p>
              <p className="text-right">{stage.count}</p>
              <p className="text-right">$ {stage.value}</p>
              <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                         <p className="text-right cursor-default">{stage.avgTime}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>average time on this stage</p>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelStats;
