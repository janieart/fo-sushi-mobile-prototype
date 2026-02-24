import React from 'react';
import brandingImage from 'figma:asset/dfd821e4fd10b5cdb9a59784249a60c8fa33c229.png';
import { Menu, ShoppingBag } from 'lucide-react';

export function MenuHeader() {
  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <Menu className="w-6 h-6 text-neutral-600" />
          <ShoppingBag className="w-6 h-6 text-neutral-600" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl tracking-wider text-neutral-700 mb-1">
            FO SUSHI
          </h1>
          <p className="text-sm text-neutral-500 tracking-wide">Fresh, Fast, First-Rate</p>
          <div className="w-16 h-1 bg-[#728754] mx-auto mt-3"></div>
        </div>
      </div>
    </div>
  );
}
