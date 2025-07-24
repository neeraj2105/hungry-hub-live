import React from 'react';
import { CheckCircle2, Clock, Truck, ChefHat } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatusStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  status: 'completed' | 'current' | 'pending';
  time?: string;
}

interface DeliveryStatusProps {
  currentStatus: 'preparing' | 'out_for_delivery' | 'delivered';
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ currentStatus }) => {
  const getSteps = (): StatusStep[] => {
    return [
      {
        id: 'confirmed',
        title: 'Order Confirmed',
        description: 'Restaurant has received your order',
        icon: CheckCircle2,
        status: 'completed',
        time: '2:15 PM'
      },
      {
        id: 'preparing',
        title: 'Preparing Your Food',
        description: 'Chef is working on your delicious meal',
        icon: ChefHat,
        status: currentStatus === 'preparing' ? 'current' : 'completed',
        time: currentStatus !== 'preparing' ? '2:25 PM' : undefined
      },
      {
        id: 'out_for_delivery',
        title: 'Out for Delivery',
        description: 'Driver is on the way to you',
        icon: Truck,
        status: currentStatus === 'out_for_delivery' ? 'current' : 
                currentStatus === 'delivered' ? 'completed' : 'pending',
        time: currentStatus === 'delivered' ? '2:45 PM' : undefined
      },
      {
        id: 'delivered',
        title: 'Delivered',
        description: 'Enjoy your meal!',
        icon: CheckCircle2,
        status: currentStatus === 'delivered' ? 'completed' : 'pending',
        time: currentStatus === 'delivered' ? '3:02 PM' : undefined
      }
    ];
  };

  const steps = getSteps();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-delivery-green';
      case 'current':
        return 'text-primary';
      default:
        return 'text-delivery-gray';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-delivery-green';
      case 'current':
        return 'bg-primary';
      default:
        return 'bg-delivery-gray/30';
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Delivery Status</h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connection line */}
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-12 w-0.5 h-6 bg-border"></div>
            )}
            
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusBg(step.status)}`}>
                <step.icon className={`w-5 h-5 ${
                  step.status === 'completed' ? 'text-white' : 
                  step.status === 'current' ? 'text-white' : 'text-delivery-gray'
                }`} />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`font-medium ${getStatusColor(step.status)}`}>
                    {step.title}
                  </h4>
                  {step.time && (
                    <span className="text-sm text-muted-foreground">
                      {step.time}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
                
                {/* Current status indicator */}
                {step.status === 'current' && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary font-medium">In Progress</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* ETA Banner */}
      <div className="mt-6 p-4 bg-delivery-light rounded-lg border-l-4 border-primary">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-medium">
            {currentStatus === 'delivered' 
              ? 'Order delivered successfully!' 
              : `Estimated delivery: ${currentStatus === 'preparing' ? '25-30' : '10-15'} minutes`
            }
          </span>
        </div>
      </div>
    </Card>
  );
};

export default DeliveryStatus;