import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LandingPage } from '@/app/components/LandingPage';
import { MenuPage } from '@/app/components/MenuPage';
import { InfoPage } from '@/app/components/InfoPage';

type ViewType = 'landing' | 'menu' | 'about' | 'terms' | 'privacy';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');

  return (
    <div className="min-h-screen bg-neutral-50">
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LandingPage 
              onStartOrdering={() => setCurrentView('menu')}
              onNavigate={(page) => setCurrentView(page)}
            />
          </motion.div>
        )}
        
        {currentView === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MenuPage onBack={() => setCurrentView('landing')} />
          </motion.div>
        )}
        
        {(currentView === 'about' || currentView === 'terms' || currentView === 'privacy') && (
          <motion.div
            key="info"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <InfoPage 
              type={currentView}
              onBack={() => setCurrentView('landing')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
