import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Phone, MapPin, Gift, ChevronRight, AlertCircle, Shield, Leaf, X, Clock, Mail, Navigation } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface LandingPageProps {
  onStartOrdering: () => void;
  onNavigate: (page: 'about' | 'terms' | 'privacy') => void;
}

export function LandingPage({ onStartOrdering, onNavigate }: LandingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [giftCardOpen, setGiftCardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.button 
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6 text-neutral-600" />
            </motion.button>
            <div className="text-center flex-1">
              <h1 className="text-2xl tracking-wider text-neutral-700">FO SUSHI</h1>
              <p className="text-xs text-neutral-500 tracking-wide">Fresh, Fast, First-Rate</p>
            </div>
            <motion.button 
              onClick={() => setContactOpen(true)}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 text-neutral-600" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY5MTY1MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fresh Sushi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
          <h2 className="text-2xl mb-2">Fresh, Fast, First-Rate</h2>
          <p className="text-sm opacity-90">Quality sushi crafted with care</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        
        {/* Order Online CTA */}
        <motion.button 
          onClick={onStartOrdering}
          className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-4 px-6 rounded-lg mb-6 shadow-md transition-colors flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="text-lg tracking-wide">ORDER ONLINE</span>
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        {/* Allergy Safety Section - Featured */}
        <div className="bg-gradient-to-br from-[#728754]/10 to-[#728754]/5 border-2 border-[#728754] rounded-lg p-5 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-[#728754] p-2 rounded-full">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg text-neutral-800 mb-1">Allergy-Friendly Ordering</h3>
              <p className="text-sm text-neutral-600">Safe dining starts with clear information</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-[#728754] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-neutral-700">
                  <strong>Complete Allergen Info:</strong> Every dish clearly labeled with all allergens
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Leaf className="w-5 h-5 text-[#728754] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-neutral-700">
                  <strong>Smart Filters:</strong> Hide dishes containing your specific allergens
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-[#728754] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-neutral-700">
                  <strong>Safe Choices:</strong> Easily identify safe menu options at a glance
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 border border-[#728754]/30">
            <p className="text-xs text-neutral-600 mb-2">Common allergens we track:</p>
            <div className="flex flex-wrap gap-1.5">
              {['Shellfish', 'Fish', 'Soy', 'Sesame', 'Gluten', 'Dairy', 'Nuts', 'Eggs'].map(allergen => (
                <span 
                  key={allergen}
                  className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full border border-neutral-200"
                >
                  {allergen}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-neutral-50 rounded-lg p-5 mb-6">
          <h3 className="text-lg text-neutral-800 mb-3">About FO SUSHI</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Here at Fo Sushi we cure your sushi cravings by bringing delicious sushi right to your front door! 
            Located in Bettendorf, Iowa in the heart of the Quad Cities, our food is the closest you can get! Fresh and hot 
            and our quality foods and our presentation is second to none. Just look at the reviews for another 
            great reason to give Fo Sushi a try!
          </p>
          
          <div className="relative h-40 rounded-lg overflow-hidden mb-4">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1757770331522-e7542553ec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwbWFraW5nJTIwc3VzaGl8ZW58MXx8fHwxNzY5MTk4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Chef Making Sushi"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm text-neutral-600">
            We're committed to transparency about ingredients and allergens, making it easy for everyone 
            to enjoy our delicious sushi safely.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.button 
            onClick={() => setLocationOpen(true)}
            className="bg-white border border-neutral-200 rounded-lg p-4 hover:border-[#728754] transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MapPin className="w-6 h-6 text-[#728754] mx-auto mb-2" />
            <span className="text-sm text-neutral-700">Find Us</span>
          </motion.button>
          
          <motion.button 
            onClick={() => setGiftCardOpen(true)}
            className="bg-white border border-neutral-200 rounded-lg p-4 hover:border-[#728754] transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Gift className="w-6 h-6 text-[#728754] mx-auto mb-2" />
            <span className="text-sm text-neutral-700">E-Gift Cards</span>
          </motion.button>
        </div>

        {/* Secondary CTA */}
        <motion.button 
          onClick={onStartOrdering}
          className="w-full bg-white border-2 border-[#728754] text-[#728754] py-3 px-6 rounded-lg hover:bg-[#728754] hover:text-white transition-colors flex items-center justify-center gap-2 mb-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>Start Your Order</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="bg-[#728754] text-white py-6 px-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <button onClick={() => onNavigate('about')} className="hover:underline">About Us</button>
            <button onClick={() => onNavigate('terms')} className="hover:underline">Terms & Conditions</button>
            <button onClick={() => onNavigate('privacy')} className="hover:underline">Privacy Policy</button>
          </div>
          <p className="text-center text-xs opacity-80">
            © 2026 FO SUSHI. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Navigation Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div 
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 shadow-2xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="text-xl text-neutral-800">Menu</h2>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.button 
                    onClick={() => {
                      setMenuOpen(false);
                      onStartOrdering();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#728754]/10 text-neutral-700 flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Menu className="w-5 h-5 text-[#728754]" />
                    <span>Order Online</span>
                  </motion.button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <motion.button 
                    onClick={() => {
                      setMenuOpen(false);
                      setLocationOpen(true);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#728754]/10 text-neutral-700 flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MapPin className="w-5 h-5 text-[#728754]" />
                    <span>Location & Hours</span>
                  </motion.button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.button 
                    onClick={() => {
                      setMenuOpen(false);
                      setContactOpen(true);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#728754]/10 text-neutral-700 flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 text-[#728754]" />
                    <span>Contact Us</span>
                  </motion.button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <motion.button 
                    onClick={() => {
                      setMenuOpen(false);
                      setGiftCardOpen(true);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#728754]/10 text-neutral-700 flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Gift className="w-5 h-5 text-[#728754]" />
                    <span>Gift Cards</span>
                  </motion.button>
                </motion.li>
                <li className="pt-4 border-t border-neutral-200">
                  <button 
                    onClick={() => {
                      setMenuOpen(false);
                      onNavigate('about');
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-neutral-100 text-neutral-600 text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setMenuOpen(false);
                      onNavigate('terms');
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-neutral-100 text-neutral-600 text-sm"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setMenuOpen(false);
                      onNavigate('privacy');
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-neutral-100 text-neutral-600 text-sm"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {contactOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setContactOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-white rounded-lg max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-neutral-800">Contact Us</h2>
                <button 
                  onClick={() => setContactOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                  <Phone className="w-5 h-5 text-[#728754] mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Phone</p>
                    <a href="tel:+15633449888" className="text-neutral-800 hover:text-[#728754]">
                      (563) 344-9888
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                  <Mail className="w-5 h-5 text-[#728754] mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Email</p>
                    <a href="mailto:info@fosushi.com" className="text-neutral-800 hover:text-[#728754]">
                      info@fosushi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#728754] mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Address</p>
                    <p className="text-neutral-800">
                      2900 Devils Glen Rd<br />
                      Bettendorf, IA 52722
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setContactOpen(false)}
                  className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Location Modal */}
      <AnimatePresence>
        {locationOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setLocationOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-neutral-800">Find Us</h2>
                <button 
                  onClick={() => setLocationOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-neutral-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#728754] mx-auto mb-2" />
                    <p className="text-sm text-neutral-600">Map View</p>
                    <p className="text-xs text-neutral-500">Quad Cities Area</p>
                  </div>
                </div>

                <div className="p-4 bg-[#728754]/5 rounded-lg border border-[#728754]/20">
                  <h3 className="text-neutral-800 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#728754]" />
                    <span>Address</span>
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    2900 Devils Glen Rd<br />
                    Bettendorf, IA 52722
                  </p>
                  <a 
                    href="https://maps.google.com/?q=2900+Devils+Glen+Rd+Bettendorf+IA+52722"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#728754] hover:underline text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="text-neutral-800 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#728754]" />
                    <span>Hours</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Monday - Thursday</span>
                      <span className="text-neutral-800">11:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Friday - Saturday</span>
                      <span className="text-neutral-800">11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Sunday</span>
                      <span className="text-neutral-800">12:00 PM - 8:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setLocationOpen(false);
                      setContactOpen(true);
                    }}
                    className="border-2 border-[#728754] text-[#728754] py-3 rounded-lg hover:bg-[#728754]/5 transition-colors"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => {
                      setLocationOpen(false);
                      onStartOrdering();
                    }}
                    className="bg-[#728754] hover:bg-[#5a6b42] text-white py-3 rounded-lg transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Gift Card Modal */}
      <AnimatePresence>
        {giftCardOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setGiftCardOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-neutral-800">E-Gift Cards</h2>
                <button 
                  onClick={() => setGiftCardOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#728754] to-[#5a6b42] rounded-lg p-6 text-white">
                  <Gift className="w-12 h-12 mb-3" />
                  <h3 className="text-xl mb-2">Give the Gift of Great Sushi</h3>
                  <p className="text-sm opacity-90">
                    Perfect for any occasion - birthdays, holidays, or just because!
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-neutral-700 mb-2">Select Amount</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['$25', '$50', '$75', '$100'].map(amount => (
                      <button
                        key={amount}
                        className="border-2 border-neutral-200 hover:border-[#728754] hover:bg-[#728754]/5 py-3 rounded-lg text-neutral-700 transition-colors"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full mt-3 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-700 mb-2">Recipient Email</label>
                  <input
                    type="email"
                    placeholder="recipient@email.com"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-700 mb-2">Personal Message (Optional)</label>
                  <textarea
                    placeholder="Add a personal message..."
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#728754] resize-none"
                  ></textarea>
                </div>

                <button
                  className="w-full bg-[#728754] hover:bg-[#5a6b42] text-white py-3 rounded-lg transition-colors"
                >
                  Purchase Gift Card
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  Gift cards are delivered via email instantly. No expiration date.
                </p>
              </div>
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
