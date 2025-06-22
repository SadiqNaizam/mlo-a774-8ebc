import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden">
      {/* Sidebar fixed to the first column, spanning both rows */}
      <div className="row-span-2 border-r bg-background">
        <Sidebar />
      </div>

      {/* Header fixed to the first row of the second column */}
      <div className="col-start-2 row-start-1">
        <Header />
      </div>
      
      {/* Main content area that scrolls independently */}
      <main className="col-start-2 row-start-2 overflow-y-auto bg-background">
        <div className="px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
