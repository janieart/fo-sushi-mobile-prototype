import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ShoppingBag, ChevronDown, ChevronRight, Plus, Minus, X, CreditCard, Gift, MapPin, Clock, Package, Truck, CheckCircle, Edit } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface MenuPageProps {
  onBack: () => void;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  category: 'traditional' | 'specialty';
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface Extras {
  soySauce: number;
  wasabi: number;
  ginger: number;
  chopsticks: number;
  napkins: number;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber with sesame seeds',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['nut-free'],
    category: 'traditional',
  },
  {
    id: '2',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna with spicy mayo and scallions',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBuaWdpcml8ZW58MXx8fHwxNzY5MDk5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['gluten-free', 'nut-free'],
    category: 'traditional',
  },
  {
    id: '3',
    name: 'Salmon Roll',
    description: 'Fresh Atlantic salmon with cucumber',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2OTE1MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['gluten-free', 'nut-free'],
    category: 'traditional',
  },
  {
    id: '4',
    name: 'Avocado Roll',
    description: 'Fresh avocado wrapped in seasoned rice and nori',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['gluten-free', 'nut-free', 'soy-free', 'vegan'],
    category: 'traditional',
  },
  {
    id: '5',
    name: 'Cucumber Roll',
    description: 'Simple and refreshing cucumber roll',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2OTE1MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['gluten-free', 'nut-free', 'soy-free', 'vegan'],
    category: 'traditional',
  },
  {
    id: '6',
    name: 'Vegetable Roll',
    description: 'Cucumber, carrot, avocado, and radish',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['gluten-free', 'nut-free', 'soy-free', 'vegan'],
    category: 'traditional',
  },
  {
    id: '7',
    name: 'Dragon Roll',
    description: 'Eel and cucumber with avocado topping',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBuaWdpcml8ZW58MXx8fHwxNzY5MDk5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['gluten-free', 'nut-free'],
    category: 'specialty',
  },
  {
    id: '8',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted fish',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2OTE1MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['nut-free'],
    category: 'specialty',
  },
  {
    id: '9',
    name: 'Spider Roll',
    description: 'Soft shell crab tempura with cucumber and avocado',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1659549307726-799b5dc4e7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGwlMjBmb29kfGVufDF8fHx8MTc2OTE4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['nut-free'],
    category: 'specialty',
  },
  {
    id: '10',
    name: 'Shrimp Tempura Roll',
    description: 'Crispy tempura shrimp with avocado and eel sauce',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBuaWdpcml8ZW58MXx8fHwxNzY5MDk5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['nut-free'],
    category: 'specialty',
  },
  {
    id: '11',
    name: 'Volcano Roll',
    description: 'Baked spicy seafood over California roll',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2OTE1MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['nut-free'],
    category: 'specialty',
  },
];

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    'gluten-free': 'bg-yellow-100 text-yellow-700 border border-yellow-300',
    'nut-free': 'bg-orange-100 text-orange-700 border border-orange-300',
    'soy-free': 'bg-blue-100 text-blue-700 border border-blue-300',
    'vegan': 'bg-green-100 text-green-700 border border-green-300',
  };
  return colors[tag] || 'bg-neutral-100 text-neutral-700 border border-neutral-300';
};

export function MenuPage({ onBack }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'traditional' | 'specialty' | string>('all');
  const [allergyFilterExpanded, setAllergyFilterExpanded] = useState(false);
  const [selectedAllergyFilters, setSelectedAllergyFilters] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'extras' | 'complete'>('cart');
  const [giftCode, setGiftCode] = useState('');
  const [giftDiscount, setGiftDiscount] = useState(0);
  const [extras, setExtras] = useState<Extras>({
    soySauce: 2,
    wasabi: 2,
    ginger: 2,
    chopsticks: 2,
    napkins: 5,
  });
  const [orderStatus, setOrderStatus] = useState<'preparing' | 'ready' | 'delivering' | 'delivered'>('preparing');
  const [editingOrder, setEditingOrder] = useState(false);

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateExtras = (key: keyof Extras, delta: number) => {
    setExtras(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  const applyGiftCode = () => {
    // Mock gift code validation
    if (giftCode.toUpperCase() === 'FOSUSHI10') {
      setGiftDiscount(10);
    } else if (giftCode.toUpperCase() === 'WELCOME20') {
      setGiftDiscount(20);
    } else {
      alert('Invalid gift code');
    }
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartTotal = Math.max(0, cartSubtotal - giftDiscount);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleAllergyFilter = (filter: string) => {
    if (selectedAllergyFilters.includes(filter)) {
      setSelectedAllergyFilters(selectedAllergyFilters.filter(f => f !== filter));
    } else {
      setSelectedAllergyFilters([...selectedAllergyFilters, filter]);
    }
  };

  const filteredItems = menuItems.filter(item => {
    // Category filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    
    // Allergy filter - show items that have ALL selected allergy tags
    if (selectedAllergyFilters.length > 0) {
      return selectedAllergyFilters.every(filter => item.tags.includes(filter));
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.button 
              onClick={onBack} 
              className="p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5 text-neutral-600" />
            </motion.button>
            <div className="text-center flex-1">
              <h1 className="text-2xl tracking-wider text-neutral-700">FO SUSHI</h1>
              <p className="text-xs text-neutral-500 tracking-wide">Quad Cities • Fresh, Fast, First-Rate</p>
            </div>
            <button 
              onClick={() => setCartOpen(true)}
              className="p-2 relative"
            >
              <ShoppingBag className="w-5 h-5 text-neutral-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#728754] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl text-[#728754] text-center mb-8">Our Menu</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <div className="md:w-64 flex-shrink-0">
            <div className="space-y-2 md:sticky md:top-24">
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`
                  w-full text-left px-6 py-3 rounded-lg transition-all text-lg
                  ${selectedCategory === 'all' 
                    ? 'bg-[#728754] text-white shadow-md' 
                    : 'bg-neutral-50 text-[#728754] hover:bg-neutral-100'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                All Items
              </motion.button>

              <motion.button
                onClick={() => setSelectedCategory('traditional')}
                className={`
                  w-full text-left px-6 py-3 rounded-lg transition-all text-lg
                  ${selectedCategory === 'traditional' 
                    ? 'bg-[#728754] text-white shadow-md' 
                    : 'bg-neutral-50 text-[#728754] hover:bg-neutral-100'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Traditional Rolls
              </motion.button>

              <motion.button
                onClick={() => setSelectedCategory('specialty')}
                className={`
                  w-full text-left px-6 py-3 rounded-lg transition-all text-lg
                  ${selectedCategory === 'specialty' 
                    ? 'bg-[#728754] text-white shadow-md' 
                    : 'bg-neutral-50 text-[#728754] hover:bg-neutral-100'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Specialty Rolls
              </motion.button>

              {/* Allergy-Friendly Section */}
              <div className="bg-neutral-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => setAllergyFilterExpanded(!allergyFilterExpanded)}
                  className="w-full text-left px-6 py-3 flex items-center justify-between text-lg text-[#728754] hover:bg-neutral-100 transition-colors"
                >
                  <span>Allergy-Friendly</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${allergyFilterExpanded ? 'rotate-90' : ''}`} />
                </button>
                
                {allergyFilterExpanded && (
                  <div className="px-4 pb-3 space-y-1">
                    {['gluten-free', 'nut-free', 'soy-free', 'vegan'].map(filter => (
                      <button
                        key={filter}
                        onClick={() => toggleAllergyFilter(filter)}
                        className={`
                          w-full text-left px-4 py-2 rounded transition-all text-sm
                          ${selectedAllergyFilters.includes(filter)
                            ? 'bg-[#8fb968] text-white'
                            : 'text-neutral-600 hover:bg-neutral-100'
                          }
                        `}
                      >
                        {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Menu Items */}
          <div className="flex-1">
            {selectedAllergyFilters.length > 0 && (
              <div className="mb-4 p-3 bg-[#728754]/10 rounded-lg border border-[#728754]/20">
                <p className="text-sm text-[#728754]">
                  Showing items that are: <strong>{selectedAllergyFilters.map(f => f.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(', ')}</strong>
                </p>
              </div>
            )}

            {filteredItems.length === 0 ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-neutral-500 text-lg">No items match your filters</p>
                <p className="text-sm text-neutral-400 mt-2">Try adjusting your selection</p>
              </motion.div>
            ) : (
              <motion.div 
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex gap-4 p-4">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-lg overflow-hidden bg-neutral-100">
                          <ImageWithFallback 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-xl text-neutral-800 mb-1">{item.name}</h3>
                            {item.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {item.tags.map(tag => (
                                  <span 
                                    key={tag}
                                    className={`px-2 py-0.5 text-xs rounded-full ${getTagColor(tag)}`}
                                  >
                                    {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-xl text-[#728754] shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-neutral-600 mb-3">
                          {item.description}
                        </p>

                        <motion.button 
                          onClick={() => addToCart(item)}
                          className="bg-[#728754] hover:bg-[#5a6b42] text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Plus className="w-4 h-4" />
                          Add to Order
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Cart Button - Mobile */}
      <AnimatePresence>
        {cartCount > 0 && !cartOpen && (
          <motion.button
            onClick={() => setCartOpen(true)}
            className="md:hidden fixed bottom-6 right-6 bg-[#728754] text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>{cartCount} items</span>
            <span className="font-bold">${cartTotal.toFixed(2)}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setCartOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            <motion.div 
              className="fixed right-0 top-0 bottom-0 w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
            {/* Cart Header */}
            <div className="bg-[#728754] text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl">Your Order</h2>
                <button onClick={() => setCartOpen(false)} className="p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm opacity-90">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
            </div>

            {checkoutStep === 'cart' && (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ShoppingBag className="w-16 h-16 text-neutral-300 mx-auto mb-3" />
                      <p className="text-neutral-500">Your cart is empty</p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="space-y-4"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {cart.map((item, index) => (
                        <motion.div 
                          key={item.id} 
                          className="flex gap-4 border-b border-neutral-200 pb-4"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          layout
                        >
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                            <ImageWithFallback 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-neutral-800">{item.name}</h4>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-neutral-400 hover:text-red-500"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              
                              <span className="text-[#728754]">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Gift Certificate */}
                      <motion.div 
                        className="mt-6 p-4 bg-neutral-50 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Gift className="w-5 h-5 text-[#728754]" />
                          <span className="text-sm">Have a gift certificate?</span>
                        </div>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            value={giftCode}
                            onChange={(e) => setGiftCode(e.target.value)}
                            className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754] text-sm"
                            placeholder="Enter code"
                          />
                          <button 
                            onClick={applyGiftCode}
                            className="bg-[#728754] hover:bg-[#5a6b42] text-white px-4 py-2 rounded-lg transition-colors text-sm"
                          >
                            Apply
                          </button>
                        </div>
                        {giftDiscount > 0 && (
                          <p className="text-sm text-green-600 mt-2">✓ ${giftDiscount} discount applied!</p>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Cart Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-neutral-200 p-6 bg-neutral-50">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-600">Subtotal</span>
                        <span className="text-neutral-800">${cartSubtotal.toFixed(2)}</span>
                      </div>
                      {giftDiscount > 0 && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-green-600">Gift Certificate</span>
                          <span className="text-green-600">-${giftDiscount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 border-t border-neutral-200">
                        <span className="text-lg">Total</span>
                        <span className="text-2xl text-[#728754]">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => setCheckoutStep('details')}
                      className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      Continue to Checkout
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'details' && (
              <>
                <div className="flex-1 overflow-y-auto p-6">
                  <button 
                    onClick={() => setCheckoutStep('cart')}
                    className="flex items-center gap-2 text-neutral-600 mb-6 hover:text-neutral-800"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to cart
                  </button>

                  <h3 className="text-xl mb-6">Delivery Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754]"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754]"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2">Delivery Address</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754]"
                        placeholder="123 Main St, Quad Cities"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2">Special Instructions (Optional)</label>
                      <textarea 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754]"
                        rows={3}
                        placeholder="Ring doorbell, leave at door, etc."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-200 p-6 bg-neutral-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Total</span>
                    <span className="text-2xl text-[#728754]">${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <motion.button
                    onClick={() => setCheckoutStep('extras')}
                    className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </>
            )}

            {checkoutStep === 'extras' && (
              <>
                <div className="flex-1 overflow-y-auto p-6">
                  <button 
                    onClick={() => setCheckoutStep('details')}
                    className="flex items-center gap-2 text-neutral-600 mb-6 hover:text-neutral-800"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <h3 className="text-xl mb-2">Add Extras?</h3>
                  <p className="text-sm text-neutral-500 mb-6">Don't forget the essentials for your meal</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <p className="text-neutral-800">Soy Sauce Packets</p>
                        <p className="text-xs text-neutral-500">Complimentary</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-neutral-200">
                        <button 
                          onClick={() => updateExtras('soySauce', -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{extras.soySauce}</span>
                        <button 
                          onClick={() => updateExtras('soySauce', 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <p className="text-neutral-800">Wasabi</p>
                        <p className="text-xs text-neutral-500">Complimentary</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-neutral-200">
                        <button 
                          onClick={() => updateExtras('wasabi', -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{extras.wasabi}</span>
                        <button 
                          onClick={() => updateExtras('wasabi', 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <p className="text-neutral-800">Pickled Ginger</p>
                        <p className="text-xs text-neutral-500">Complimentary</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-neutral-200">
                        <button 
                          onClick={() => updateExtras('ginger', -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{extras.ginger}</span>
                        <button 
                          onClick={() => updateExtras('ginger', 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <p className="text-neutral-800">Chopsticks</p>
                        <p className="text-xs text-neutral-500">Complimentary</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-neutral-200">
                        <button 
                          onClick={() => updateExtras('chopsticks', -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{extras.chopsticks}</span>
                        <button 
                          onClick={() => updateExtras('chopsticks', 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <p className="text-neutral-800">Napkins</p>
                        <p className="text-xs text-neutral-500">Complimentary</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-neutral-200">
                        <button 
                          onClick={() => updateExtras('napkins', -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{extras.napkins}</span>
                        <button 
                          onClick={() => updateExtras('napkins', 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-200 p-6 bg-neutral-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Total</span>
                    <span className="text-2xl text-[#728754]">${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <motion.button
                    onClick={() => {
                      setCheckoutStep('complete');
                      // Simulate order status progression
                      setTimeout(() => setOrderStatus('ready'), 3000);
                      setTimeout(() => setOrderStatus('delivering'), 6000);
                    }}
                    className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CreditCard className="w-5 h-5" />
                    Place Order
                  </motion.button>
                </div>
              </>
            )}

            {checkoutStep === 'complete' && !editingOrder && (
              <motion.div 
                className="flex-1 overflow-y-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <motion.div 
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  >
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl text-neutral-800 mb-2 text-center">Order Confirmed!</h3>
                  <p className="text-neutral-600 mb-2 text-center">Order #FO-{Math.floor(Math.random() * 10000)}</p>
                  <p className="text-sm text-neutral-500 mb-6 text-center">Your delicious sushi is on its way</p>

                  {/* Order Status Timeline */}
                  <div className="mb-6 bg-neutral-50 rounded-lg p-4">
                    <h4 className="text-sm text-neutral-600 mb-4">Order Status</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${orderStatus !== 'preparing' ? 'bg-green-500' : 'bg-[#728754]'}`}>
                          {orderStatus !== 'preparing' ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Package className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">Preparing your order</p>
                          <p className="text-xs text-neutral-500">Est. 10-15 minutes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${orderStatus === 'delivering' || orderStatus === 'delivered' ? 'bg-green-500' : orderStatus === 'ready' ? 'bg-[#728754]' : 'bg-neutral-300'}`}>
                          {orderStatus === 'delivering' || orderStatus === 'delivered' ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Clock className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">Ready for delivery</p>
                          <p className="text-xs text-neutral-500">Est. 15-20 minutes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${orderStatus === 'delivered' ? 'bg-green-500' : orderStatus === 'delivering' ? 'bg-[#728754]' : 'bg-neutral-300'}`}>
                          {orderStatus === 'delivered' ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Truck className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">Out for delivery</p>
                          <p className="text-xs text-neutral-500">Est. 30-45 minutes total</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-[#728754]" />
                      <h4 className="text-sm text-neutral-600">Delivery Location</h4>
                    </div>
                    <div className="w-full h-64 bg-neutral-200 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194349.44405094992!2d-90.73876968984833!3d41.52419187024945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e23411b6a82e87%3A0xed56ba6a849c609b!2sQuad%20Cities%2C%20IA-IL!5e0!3m2!1sen!2sus!4v1674158400000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  {/* Last Minute Changes */}
                  <button
                    onClick={() => setEditingOrder(true)}
                    className="w-full mb-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit className="w-5 h-5" />
                    Make Last-Minute Changes
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCart([]);
                      setCheckoutStep('cart');
                      setCartOpen(false);
                      setOrderStatus('preparing');
                      setGiftDiscount(0);
                      setGiftCode('');
                    }}
                    className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    Done
                  </motion.button>
                </div>
              </motion.div>
            )}

            {checkoutStep === 'complete' && editingOrder && (
              <div className="flex-1 overflow-y-auto p-6">
                <button 
                  onClick={() => setEditingOrder(false)}
                  className="flex items-center gap-2 text-neutral-600 mb-6 hover:text-neutral-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to order status
                </button>

                <h3 className="text-xl mb-6">Edit Your Order</h3>

                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 border-b border-neutral-200 pb-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                        <ImageWithFallback 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-neutral-800">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-neutral-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <span className="text-[#728754]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> Changes made after your order has started preparation may delay delivery time.
                  </p>
                </div>

                <motion.button
                  onClick={() => setEditingOrder(false)}
                  className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Save Changes
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </div>
  );
}
