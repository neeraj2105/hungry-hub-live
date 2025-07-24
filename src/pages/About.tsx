
import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">About FoodDelivery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Never wonder "Where's my food?" again. We're revolutionizing food delivery with real-time tracking and seamless ordering experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center">
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-muted-foreground">Average delivery time of 25-35 minutes</p>
        </Card>

        <Card className="p-6 text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Tracking</h3>
          <p className="text-muted-foreground">Real-time GPS tracking of your order</p>
        </Card>

        <Card className="p-6 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">200+ Restaurants</h3>
          <p className="text-muted-foreground">Wide variety of cuisines to choose from</p>
        </Card>

        <Card className="p-6 text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-muted-foreground">Only the best restaurants and food</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              FoodDelivery was born from a simple frustration: not knowing where your food order is. We've all been there - waiting for food, wondering if it's being prepared, on the way, or stuck in traffic.
            </p>
            <p>
              That's why we created a platform that puts transparency first. With real-time tracking, you can see exactly where your food is at every step of the journey.
            </p>
            <p>
              Built using cutting-edge technology and integrated with major delivery services, we provide accurate location updates, ETA calculations, and order status notifications - all in one seamless experience.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Technology</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Real-time GPS Tracking</h4>
                <p className="text-muted-foreground text-sm">Live location updates using Google Maps API</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">API Integration</h4>
                <p className="text-muted-foreground text-sm">Seamless integration with Uber Eats & Delivery.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Modern Stack</h4>
                <p className="text-muted-foreground text-sm">Built with React, Tailwind CSS, and Node.js</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Push Notifications</h4>
                <p className="text-muted-foreground text-sm">Instant updates on order status changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-delivery-light">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-6">
            To eliminate the anxiety of food delivery by providing complete transparency and control over your dining experience.
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Partner Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
