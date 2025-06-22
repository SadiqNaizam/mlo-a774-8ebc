import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

interface SourceData {
  name: 'Clutch' | 'Behance' | 'Instagram' | 'Dribbble';
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#f87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#facc15' }, // yellow-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#14b8a6' }, // teal-500
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#34d399' }, // emerald-400
];

const PieChartCard: React.FC = () => {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Sources</CardTitle>
        <Button variant="outline" size="sm" className="h-8">
          <Calendar className="mr-2 h-4 w-4" />
          Last 6 months
          <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="w-full h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  contentStyle={{ 
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                  }}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col space-y-3">
            {data.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span style={{ backgroundColor: entry.color }} className="h-2.5 w-2.5 rounded-sm" />
                  <span className='text-muted-foreground'>{entry.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground">$ {entry.value.toLocaleString()}</span>
                  <span className="text-muted-foreground">{entry.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
          <CardDescription>from leads total</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default PieChartCard;
