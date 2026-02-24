import React from 'react';
import { ArrowLeft, Shield, Scale, Lock } from 'lucide-react';

interface InfoPageProps {
  type: 'about' | 'terms' | 'privacy';
  onBack: () => void;
}

export function InfoPage({ type, onBack }: InfoPageProps) {
  const content = {
    about: {
      title: 'About FO SUSHI',
      icon: Shield,
      sections: [
        {
          heading: 'Our Story',
          content: `FO SUSHI was founded with a simple mission: to bring fresh, high-quality sushi to the Quad Cities area while prioritizing the safety and satisfaction of every customer. Located in Bettendorf, Iowa, we\'ve become a trusted name for authentic sushi prepared with care and transparency.`
        },
        {
          heading: 'Our Commitment to Allergy Safety',
          content: `We understand that dining with food allergies can be stressful. That\'s why we\'ve built our entire ordering experience around making allergen information clear, accessible, and reliable. Every dish is carefully labeled, and our kitchen staff is trained in allergen awareness and cross-contamination prevention.`
        },
        {
          heading: 'Quality Ingredients',
          content: `We source only the freshest fish and highest quality ingredients. Our commitment to excellence means every roll, every piece of sushi, is crafted with attention to detail and authentic Japanese techniques.`
        },
        {
          heading: 'Community Focus',
          content: `As a proud member of the Quad Cities community, we\'re dedicated to serving our neighbors with integrity, transparency, and exceptional food. We believe everyone deserves to enjoy great sushi safely and confidently.`
        },
        {
          heading: 'Our Team',
          content: `Our experienced chefs bring years of sushi-making expertise, combined with a passion for innovation and customer care. From traditional favorites to creative specialty rolls, we take pride in every dish we prepare.`
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      icon: Scale,
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: `By accessing and using FO SUSHI\'s online ordering service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.`
        },
        {
          heading: '2. Online Ordering',
          content: `Our online ordering service is provided for your convenience. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or problems identified by our fraud detection system.`
        },
        {
          heading: '3. Pricing and Payment',
          content: `All prices are listed in US dollars and are subject to change without notice. Payment is required at the time of order. We accept major credit cards, debit cards, and gift certificates. Sales tax will be applied as required by Iowa state law.`
        },
        {
          heading: '4. Allergen Information',
          content: `While we make every effort to provide accurate allergen information, we cannot guarantee that any product is completely free from allergens. Our kitchen handles multiple allergens, and cross-contamination may occur. Customers with severe allergies should consult with our staff before ordering.`
        },
        {
          heading: '5. Delivery and Pickup',
          content: `Delivery times are estimates and may vary based on traffic, weather, and order volume. We deliver within the Quad Cities area only. Minimum order amounts may apply for delivery. Pickup orders should be collected within 15 minutes of notification.`
        },
        {
          heading: '6. Cancellations and Refunds',
          content: `Orders may be cancelled or modified within 5 minutes of placement. After preparation begins, changes may not be possible. Refunds are provided at our discretion for legitimate quality or service issues.`
        },
        {
          heading: '7. Gift Cards',
          content: `Gift cards have no expiration date and are non-refundable. Lost or stolen gift cards cannot be replaced. Gift card balances can be checked by contacting us directly.`
        },
        {
          heading: '8. User Conduct',
          content: `You agree not to use our service for any unlawful purpose or in any way that could damage, disable, or impair our service. Abusive behavior toward staff will result in service refusal.`
        },
        {
          heading: '9. Limitation of Liability',
          content: `FO SUSHI shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our service or products. Our total liability shall not exceed the amount paid for your order.`
        },
        {
          heading: '10. Changes to Terms',
          content: `We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes acceptance of the modified terms. Last updated: January 2026.`
        }
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      icon: Lock,
      sections: [
        {
          heading: '1. Information We Collect',
          content: `We collect information you provide when placing an order, including your name, email address, phone number, delivery address, and payment information. We also collect information about your device, browser, and how you interact with our website.`
        },
        {
          heading: '2. How We Use Your Information',
          content: `We use your information to process and fulfill your orders, communicate with you about your order status, improve our service, send promotional materials (with your consent), prevent fraud and ensure security, and comply with legal obligations.`
        },
        {
          heading: '3. Information Sharing',
          content: `We do not sell your personal information. We may share information with service providers who help us operate our business (payment processors, delivery services), with law enforcement when required by law, and in connection with a business transfer or merger.`
        },
        {
          heading: '4. Payment Security',
          content: `Payment information is processed through secure, PCI-compliant payment processors. We do not store complete credit card numbers on our servers. All transactions are encrypted using industry-standard SSL technology.`
        },
        {
          heading: '5. Cookies and Tracking',
          content: `We use cookies and similar technologies to remember your preferences, understand how you use our service, and improve your experience. You can control cookie settings through your browser, though some features may not function properly if disabled.`
        },
        {
          heading: '6. Marketing Communications',
          content: `With your permission, we may send you promotional emails about special offers, new menu items, and updates. You can unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.`
        },
        {
          heading: '7. Data Retention',
          content: `We retain your information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Order history is typically retained for 7 years for tax and accounting purposes.`
        },
        {
          heading: '8. Your Rights',
          content: `You have the right to access, correct, or delete your personal information. You can request a copy of your data, opt-out of marketing communications, and request deletion of your account. Contact us to exercise these rights.`
        },
        {
          heading: '9. Children\'s Privacy',
          content: `Our service is not intended for children under 13. We do not knowingly collect personal information from children. If we learn we have collected information from a child, we will delete it promptly.`
        },
        {
          heading: '10. Changes to Privacy Policy',
          content: `We may update this privacy policy periodically. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use after changes constitutes acceptance. Last updated: January 2026.`
        },
        {
          heading: '11. Contact Us',
          content: `If you have questions about this privacy policy or how we handle your information, please contact us at info@fosushi.com or (563) 344-9888. You can also write to us at 2900 Devils Glen Rd, Bettendorf, IA 52722.`
        }
      ]
    }
  };

  const pageContent = content[type];
  const IconComponent = pageContent.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-neutral-600" />
            </button>
            <div className="flex items-center gap-3">
              <IconComponent className="w-6 h-6 text-[#728754]" />
              <h1 className="text-xl text-neutral-800">{pageContent.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-neutral-50 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <IconComponent className="w-8 h-8 text-[#728754]" />
            <h2 className="text-2xl text-neutral-800">{pageContent.title}</h2>
          </div>
          <p className="text-neutral-600">
            {type === 'about' && 'Learn more about FO SUSHI and our commitment to quality and safety.'}
            {type === 'terms' && 'Please read these terms carefully before using our service.'}
            {type === 'privacy' && 'Your privacy is important to us. Learn how we collect, use, and protect your information.'}
          </p>
        </div>

        <div className="space-y-6">
          {pageContent.sections.map((section, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg text-neutral-800 mb-3">{section.heading}</h3>
              <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <button
            onClick={onBack}
            className="w-full md:w-auto px-8 py-3 bg-[#728754] hover:bg-[#5a6b42] text-white rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#728754] text-white py-6 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-2">FO SUSHI - Bettendorf, Iowa</p>
          <p className="text-xs opacity-80">© 2026 FO SUSHI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
