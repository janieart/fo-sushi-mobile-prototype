import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Plus, AlertCircle } from 'lucide-react';

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    allergens: string[];
    category: string;
  };
}

const allergenLabels: Record<string, string> = {
  shellfish: 'Shellfish',
  fish: 'Fish',
  soy: 'Soy',
  sesame: 'Sesame',
  gluten: 'Gluten',
  dairy: 'Dairy',
  nuts: 'Nuts',
  eggs: 'Eggs',
};

const allergenColors: Record<string, string> = {
  shellfish: 'bg-red-100 text-red-700 border-red-200',
  fish: 'bg-blue-100 text-blue-700 border-blue-200',
  soy: 'bg-amber-100 text-amber-700 border-amber-200',
  sesame: 'bg-orange-100 text-orange-700 border-orange-200',
  gluten: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  dairy: 'bg-purple-100 text-purple-700 border-purple-200',
  nuts: 'bg-brown-100 text-brown-700 border-brown-200',
  eggs: 'bg-pink-100 text-pink-700 border-pink-200',
};

export function MenuItem({ item }: MenuItemProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="flex gap-4 p-4">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-neutral-100">
          <ImageWithFallback 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-neutral-800">{item.name}</h4>
            <span className="text-neutral-700 shrink-0">${item.price.toFixed(2)}</span>
          </div>
          
          <p className="text-sm text-neutral-500 mb-3 line-clamp-2">{item.description}</p>
          
          <div className="space-y-2">
            {item.allergens.length > 0 && (
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="text-xs text-neutral-600">Contains:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.allergens.map(allergen => (
                    <span
                      key={allergen}
                      className={`
                        px-2 py-0.5 rounded text-xs border
                        ${allergenColors[allergen] || 'bg-neutral-100 text-neutral-700 border-neutral-200'}
                      `}
                    >
                      {allergenLabels[allergen] || allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <motion.button 
              className="w-full mt-3 bg-[#728754] hover:bg-[#5a6b42] text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Plus className="w-4 h-4" />
              Add to Order
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
