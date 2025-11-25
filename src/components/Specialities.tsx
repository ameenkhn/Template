import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Specialities = () => {
  const [activeTab, setActiveTab] = useState(0);

  const specialities = [
    {
      name: 'Cardiac Sciences',
      description: "Apollo's Cardiac Sciences department is at the forefront of cardiac care in India and beyond, offering comprehensive services from advanced diagnostics to minimally invasive procedures.",
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
      procedures: ['Heart Transplant', 'Bypass Surgery', 'Angioplasty', 'Valve Replacement'],
    },
    {
      name: 'Oncology',
      description: 'Our comprehensive cancer care program combines cutting-edge technology, renowned oncologists, and personalized treatment plans for the best outcomes.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop',
      procedures: ['Chemotherapy', 'Radiation Therapy', 'Surgical Oncology', 'Immunotherapy'],
    },
    {
      name: 'Neurosciences',
      description: 'World-class neurological and neurosurgical care with advanced imaging, minimally invasive techniques, and expert neurologists.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      procedures: ['Brain Surgery', 'Spine Surgery', 'Stroke Care', 'Epilepsy Treatment'],
    },
    {
      name: 'Orthopedics',
      description: 'Advanced orthopedic care including joint replacement, sports medicine, and minimally invasive spine surgery by expert surgeons.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
      procedures: ['Joint Replacement', 'Sports Injury', 'Spine Surgery', 'Arthroscopy'],
    },
    {
      name: 'Gastroenterology',
      description: 'Comprehensive digestive health services with state-of-the-art endoscopy suites and expert gastroenterologists.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop',
      procedures: ['Endoscopy', 'Liver Transplant', 'IBD Treatment', 'Pancreatic Care'],
    },
    {
      name: 'Transplants',
      description: 'Leading transplant program with high success rates in kidney, liver, heart, and lung transplantation.',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop',
      procedures: ['Kidney Transplant', 'Liver Transplant', 'Heart Transplant', 'Lung Transplant'],
    },
  ];

  return (
    <section className="py-20 bg-background" id="specialities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Centres of Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience world-class healthcare at Apollo's specialized hubs of medical innovation. 
              Our state-of-the-art centres deliver unparalleled expertise.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {specialities.map((spec, index) => (
            <Button
              key={spec.name}
              variant={activeTab === index ? 'default' : 'outline'}
              onClick={() => setActiveTab(index)}
              className="rounded-full"
            >
              {spec.name}
            </Button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img
                    src={specialities[activeTab].image}
                    alt={specialities[activeTab].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">{specialities[activeTab].name}</CardTitle>
                    <CardDescription className="text-base">
                      {specialities[activeTab].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">
                        Top Specialties & Procedures
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {specialities[activeTab].procedures.map((proc) => (
                          <Badge key={proc} variant="secondary">
                            {proc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button>
                        Find Doctor
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};