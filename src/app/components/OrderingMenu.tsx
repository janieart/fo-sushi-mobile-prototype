import React, { useState } from 'react';
import { MenuHeader } from '@/app/components/MenuHeader';
import { AllergenFilters } from '@/app/components/AllergenFilters';
import { MenuGrid } from '@/app/components/MenuGrid';
import { ArrowLeft } from 'lucide-react';

interface OrderingMenuProps {
  onBack: () => void;
}

export function OrderingMenu({ onBack }: OrderingMenuProps) {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 mb-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back to Home</span>
          </button>
        </div>
      </div>
      
      <MenuHeader />
      
      <div className="px-4 py-6 max-w-md mx-auto">
        <AllergenFilters 
          selectedAllergens={selectedAllergens}
          onAllergenToggle={setSelectedAllergens}
        />
        <MenuGrid selectedAllergens={selectedAllergens} />
      </div>
    </div>
  );
}
