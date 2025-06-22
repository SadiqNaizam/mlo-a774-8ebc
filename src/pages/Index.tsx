import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FunnelStats from '@/components/Dashboard/FunnelStats';
import LineChartCard from '@/components/Dashboard/LineChartCard';
import PieChartCard from '@/components/Dashboard/PieChartCard';
import SummaryStats from '@/components/Dashboard/SummaryStats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Dashboard Overview Page
 * 
 * This page serves as the main entry point for the Lead Management Dashboard.
 * It uses MainAppLayout to provide the consistent sidebar and header structure.
 * The content area is organized using a Tab component to switch between different
 * views (e.g., Sales, Leads), with the primary "Leads" dashboard displayed by default.
 * The dashboard itself is a responsive grid of specialized data visualization components.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:w-[200px]">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>

        {/* Sales Tab - Placeholder */}
        <TabsContent value="sales">
          <div className="mt-6 flex h-[60vh] items-center justify-center rounded-lg border border-dashed bg-card">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-card-foreground">Sales Dashboard</h2>
                <p className="text-muted-foreground">Content for the sales overview will be displayed here.</p>
            </div>
          </div>
        </TabsContent>

        {/* Leads Tab - Main Dashboard Content */}
        <TabsContent value="leads" className="mt-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Row 1: Funnel Stats and Source Distribution */}
            <FunnelStats />
            <PieChartCard />

            {/* Row 2: Leads Tracking Over Time */}
            <LineChartCard />
            
            {/* Row 3: Summary Statistics */}
            <SummaryStats />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;
