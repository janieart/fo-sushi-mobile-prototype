import React from 'react';
import { MenuItem } from '@/app/components/MenuItem';

interface MenuGridProps {
  selectedAllergens: string[];
}

const menuItems = [
  {
    id: '1',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2OTE1MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['shellfish', 'sesame', 'soy'],
    category: 'Rolls',
  },
  {
    id: '2',
    name: 'Salmon Nigiri',
    description: 'Fresh Atlantic salmon',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBuaWdpcml8ZW58MXx8fHwxNzY5MDk5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish', 'soy'],
    category: 'Nigiri',
  },
  {
    id: '3',
    name: 'Spicy Tuna Roll',
    description: 'Tuna, spicy mayo, scallions',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish', 'eggs', 'soy', 'sesame'],
    category: 'Rolls',
  },
  {
    id: '4',
    name: 'Tuna Sashimi',
    description: 'Premium bluefin tuna slices',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1638866381709-071747b518c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwc2FzaGltaXxlbnwxfHx8fDE3NjkxMDk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish'],
    category: 'Sashimi',
  },
  {
    id: '5',
    name: 'Shrimp Tempura Roll',
    description: 'Crispy tempura shrimp, avocado',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2OTE1MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['shellfish', 'gluten', 'eggs', 'soy', 'sesame'],
    category: 'Rolls',
  },
  {
    id: '6',
    name: 'Vegetable Roll',
    description: 'Cucumber, avocado, carrot, radish',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['sesame', 'soy'],
    category: 'Rolls',
  },
  {
    id: '7',
    name: 'Eel Nigiri',
    description: 'Freshwater eel, sweet sauce',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBuaWdpcml8ZW58MXx8fHwxNzY5MDk5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish', 'soy', 'sesame'],
    category: 'Nigiri',
  },
  {
    id: '8',
    name: 'Dragon Roll',
    description: 'Eel, cucumber, avocado topping',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish', 'sesame', 'soy'],
    category: 'Specialty',
  },
  {
    id: '9',
    name: 'Salmon Sashimi',
    description: 'Fresh Norwegian salmon slices',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1638866381709-071747b518c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwc2FzaGltaXxlbnwxfHx8fDE3NjkxMDk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish'],
    category: 'Sashimi',
  },
  {
    id: '10',
    name: 'Philadelphia Roll',
    description: 'Salmon, cream cheese, cucumber',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    allergens: ['fish', 'dairy', 'sesame', 'soy'],
    category: 'Rolls',
  },
];

export function MenuGrid({ selectedAllergens }: MenuGridProps) {
  const filteredItems = menuItems.filter(item => {
    if (selectedAllergens.length === 0) return true;
    return !item.allergens.some(allergen => selectedAllergens.includes(allergen));
  });

  const categories = Array.from(new Set(filteredItems.map(item => item.category)));

  return (
    <div className="space-y-6">
      {categories.map(category => (
        <div key={category}>
          <h3 className="text-lg mb-3 text-neutral-700 border-b border-neutral-200 pb-2">
            {category}
          </h3>
          <div className="space-y-4">
            {filteredItems
              .filter(item => item.category === category)
              .map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500">No items match your allergen preferences.</p>
          <p className="text-sm text-neutral-400 mt-2">Try adjusting your filters above.</p>
        </div>
      )}
    </div>
  );
}
