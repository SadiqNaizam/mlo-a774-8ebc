import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStat {
  percentage: number;
  reason: string;
}

interface OtherStat {
  value: string;
  label: string;
  hasInfoIcon?: boolean;
}

const reasonsData: ReasonStat[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' },
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' }, // Note: Duplicate reason from image
];

const otherData: OtherStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfoIcon: true },
];

const SummaryStats: React.FC = () => {
  return (
    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {reasonsData.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="text-4xl font-bold text-foreground">{stat.percentage}%</p>
                <p className="text-sm text-muted-foreground">{stat.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-[calc(100%-4rem)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherData.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center space-x-1.5">
                    <p className="text-sm text-muted-foreground max-w-[120px]">{stat.label}</p>
                    {stat.hasInfoIcon && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Leads that have not been contacted in over 30 days.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryStats;
