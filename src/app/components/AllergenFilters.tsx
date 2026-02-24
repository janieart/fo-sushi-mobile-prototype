import React from 'react';
import { X, Fish, Wheat, Milk, Nut, Egg, ShellIcon as Shellfish } from 'lucide-react';

interface AllergenFiltersProps {
  selectedAllergens: string[];
  onAllergenToggle: (allergens: string[]) => void;
}

const allergens = [
  { id: 'shellfish', label: 'Shellfish', icon: Shellfish },
  { id: 'fish', label: 'Fish', icon: Fish },
  { id: 'soy', label: 'Soy', icon: null },
  { id: 'sesame', label: 'Sesame', icon: null },
  { id: 'gluten', label: 'Gluten', icon: Wheat },
  { id: 'dairy', label: 'Dairy', icon: Milk },
  { id: 'nuts', label: 'Nuts', icon: Nut },
  { id: 'eggs', label: 'Eggs', icon: Egg },
];

export function AllergenFilters({ selectedAllergens, onAllergenToggle }: AllergenFiltersProps) {
  const toggleAllergen = (allergenId: string) => {
    if (selectedAllergens.includes(allergenId)) {
      onAllergenToggle(selectedAllergens.filter(a => a !== allergenId));
    } else {
      onAllergenToggle([...selectedAllergens, allergenId]);
    }
  };

  const clearAll = () => {
    onAllergenToggle([]);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm uppercase tracking-wide text-neutral-600">Filter by Allergens</h2>
        {selectedAllergens.length > 0 && (
          <button 
            onClick={clearAll}
            className="text-xs text-[#728754] hover:text-[#5a6b42] flex items-center gap-1"
          >
            Clear all
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {allergens.map(allergen => {
          const isSelected = selectedAllergens.includes(allergen.id);
          const Icon = allergen.icon;
          
          return (
            <button
              key={allergen.id}
              onClick={() => toggleAllergen(allergen.id)}
              className={`
                px-3 py-2 rounded-full text-xs flex items-center gap-1.5 transition-all
                ${isSelected 
                  ? 'bg-[#728754] text-white shadow-md' 
                  : 'bg-white text-neutral-700 border border-neutral-300 hover:border-[#728754]'
                }
              `}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {allergen.label}
            </button>
          );
        })}
      </div>
      {selectedAllergens.length > 0 && (
        <p className="text-xs text-neutral-500 mt-3">
          Hiding items with: {selectedAllergens.map(a => allergens.find(al => al.id === a)?.label).join(', ')}
        </p>
      )}
    </div>
  );
}
