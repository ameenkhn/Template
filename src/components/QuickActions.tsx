import { Calendar, Stethoscope, Phone, MapPin, FileText, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

export const QuickActions = () => {
  const actions = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule with top specialists',
      color: 'bg-primary',
      iconColor: 'text-primary-foreground',
    },
    {
      icon: Stethoscope,
      title: 'Find a Doctor',
      description: 'Search our expert physicians',
      color: 'bg-accent',
      iconColor: 'text-accent-foreground',
    },
    {
      icon: Phone,
      title: 'Emergency',
      description: '24/7 immediate assistance',
      color: 'bg-destructive',
      iconColor: 'text-destructive-foreground',
    },
    {
      icon: MapPin,
      title: 'Locations',
      description: 'Find nearest hospital',
      color: 'bg-success',
      iconColor: 'text-success-foreground',
    },
    {
      icon: FileText,
      title: 'Health Records',
      description: 'Access your reports',
      color: 'bg-warning',
      iconColor: 'text-warning-foreground',
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      description: 'Check hospital timings',
      color: 'bg-muted',
      iconColor: 'text-muted-foreground',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center space-y-3">
                  <div className={`w-14 h-14 mx-auto rounded-full ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <action.icon className={`h-6 w-6 ${action.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};