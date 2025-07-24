import React, { useState, useEffect } from 'react';
import { MapPin, Truck, Clock, CheckCircle2 } from 'lucide-react';

interface DeliveryMapProps {
  orderStatus: 'preparing' | 'out_for_delivery' | 'delivered';
  estimatedTime: number;
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({ orderStatus, estimatedTime }) => {
  const [deliveryProgress, setDeliveryProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryProgress(prev => {
        if (orderStatus === 'preparing') return Math.min(prev + 0.5, 25);
        if (orderStatus === 'out_for_delivery') return Math.min(prev + 1, 85);
        if (orderStatus === 'delivered') return 100;
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [orderStatus]);

  return (
    <div className="relative bg-delivery-light rounded-xl p-4 h-96 overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-delivery-blue/10 to-delivery-green/10 rounded-xl">
        {/* Grid pattern to simulate map */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-delivery-gray/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Route */}
      <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]" viewBox="0 0 300 200">
        {/* Route path */}
        <path
          d="M 30 170 Q 80 120 150 130 Q 220 140 270 30"
          stroke="hsl(var(--delivery-orange))"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
        />
        
        {/* Progress indicator */}
        <path
          d="M 30 170 Q 80 120 150 130 Q 220 140 270 30"
          stroke="hsl(var(--delivery-green))"
          strokeWidth="4"
          fill="none"
          strokeDasharray={`${deliveryProgress * 5} 1000`}
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Restaurant Location */}
      <div className="absolute bottom-8 left-8 bg-card rounded-full p-2 shadow-lg">
        <div className="w-3 h-3 bg-delivery-orange rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-16 left-6 text-xs font-medium text-delivery-gray">
        Restaurant
      </div>

      {/* Your Location */}
      <div className="absolute top-8 right-8 bg-card rounded-full p-2 shadow-lg">
        <MapPin className="w-4 h-4 text-delivery-blue" />
      </div>
      <div className="absolute top-16 right-6 text-xs font-medium text-delivery-gray">
        Your Location
      </div>

      {/* Delivery Driver */}
      {orderStatus === 'out_for_delivery' && (
        <div 
          className="absolute transition-all duration-1000 ease-out bg-primary rounded-full p-2 shadow-lg"
          style={{
            left: `${20 + (deliveryProgress * 0.6)}%`,
            top: `${70 - (deliveryProgress * 0.4)}%`,
          }}
        >
          <Truck className="w-4 h-4 text-primary-foreground" />
        </div>
      )}

      {/* Status indicator */}
      <div className="absolute top-4 left-4 bg-card rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          {orderStatus === 'preparing' && (
            <>
              <Clock className="w-4 h-4 text-delivery-orange" />
              <span className="text-sm font-medium">Preparing</span>
            </>
          )}
          {orderStatus === 'out_for_delivery' && (
            <>
              <Truck className="w-4 h-4 text-delivery-blue" />
              <span className="text-sm font-medium">On the way</span>
            </>
          )}
          {orderStatus === 'delivered' && (
            <>
              <CheckCircle2 className="w-4 h-4 text-delivery-green" />
              <span className="text-sm font-medium">Delivered</span>
            </>
          )}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          ETA: {estimatedTime} mins
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;