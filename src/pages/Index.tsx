import React, { useState, useEffect } from 'react';
import { Bell, MessageCircle, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DeliveryMap from '@/components/DeliveryMap';
import OrderSummary from '@/components/OrderSummary';
import DeliveryStatus from '@/components/DeliveryStatus';
import heroImage from '@/assets/delivery-hero.jpg';

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState<'preparing' | 'out_for_delivery' | 'delivered'>('preparing');
  const [estimatedTime, setEstimatedTime] = useState(25);

  // Simulate real-time status updates
  useEffect(() => {
    const statusTimeline = [
      { status: 'preparing' as const, time: 25, delay: 0 },
      { status: 'out_for_delivery' as const, time: 15, delay: 8000 },
      { status: 'delivered' as const, time: 0, delay: 25000 }
    ];

    statusTimeline.forEach(({ status, time, delay }) => {
      setTimeout(() => {
        setCurrentStatus(status);
        setEstimatedTime(time);
      }, delay);
    });
  }, []);

  const mockOrder = {
    orderNumber: "FD2024-7891",
    restaurant: {
      name: "Mario's Italian Kitchen",
      rating: 4.8,
      address: "123 Foodie Street, Downtown",
      phone: "+1 (555) 123-4567"
    },
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 18.99 },
      { name: "Caesar Salad", quantity: 1, price: 12.50 },
      { name: "Garlic Bread", quantity: 2, price: 7.99 }
    ],
    total: 39.48,
    orderTime: "2:15 PM",
    estimatedDelivery: "3:00 PM"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FD</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">Food Delivery Tracker</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-delivery-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Never wonder <span className="text-primary">"Where's my food?"</span> again
                </h2>
                <p className="text-xl text-muted-foreground">
                  Track your food orders in real-time from restaurant to your doorstep — live on the map.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-delivery-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Tracking</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-delivery-blue rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Real-time ETA</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-delivery-orange rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Push Notifications</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Food Delivery Tracker App" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map and Status - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Live Tracking</h3>
              <DeliveryMap orderStatus={currentStatus} estimatedTime={estimatedTime} />
            </Card>
            
            <DeliveryStatus currentStatus={currentStatus} />
          </div>
          
          {/* Order Summary - Takes 1 column */}
          <div className="space-y-6">
            <OrderSummary {...mockOrder} />
            
            {/* Quick Actions */}
            <Card className="p-6">
              <h4 className="font-medium mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Driver
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Delivery Instructions
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Food Delivery Tracker — Real-Time Delivery, Reimagined</p>
            <p className="text-sm">Built with React, Tailwind CSS, and integrated with delivery APIs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;