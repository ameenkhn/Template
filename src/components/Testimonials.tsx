import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Chennai',
      rating: 5,
      text: 'The cardiac team at Apollo saved my life. Their expertise and care during my heart surgery was exceptional. Forever grateful.',
      treatment: 'Cardiac Surgery',
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Amazing experience from consultation to recovery. The doctors took time to explain everything and made me feel confident.',
      treatment: 'Orthopedic Surgery',
    },
    {
      name: 'Mohammed Ali',
      location: 'Hyderabad',
      rating: 5,
      text: 'State-of-the-art facilities and world-class doctors. The cancer treatment I received here gave me a new lease on life.',
      treatment: 'Oncology',
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Patients Speak</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real patients who trusted us with their health
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.treatment}</div>
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