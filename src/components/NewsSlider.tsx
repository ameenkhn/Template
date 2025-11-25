import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const news = [
    {
      title: 'Apollo & University of Leicester launch Digital Health Centre',
      category: 'Latest Update',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop',
    },
    {
      title: 'Apollo Hospitals completes 500 robotic cardiac procedures',
      category: 'Latest Update',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=1000&fit=crop',
    },
    {
      title: 'Advanced Stroke Care Network with 24-hour treatment window',
      category: 'Latest Update',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=1000&fit=crop',
    },
    {
      title: 'Apollo University launches precision medicine research hub',
      category: 'Latest Update',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=1000&fit=crop',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-muted-foreground">Stay informed about our latest achievements and innovations</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6">
            <AnimatePresence mode="wait">
              {news.slice(currentSlide, currentSlide + 3).map((item, index) => (
                <motion.div
                  key={currentSlide + index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-1 min-w-[300px]"
                >
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-sm font-medium mb-2 text-white/80">{item.category}</div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ArrowRight className="h-5 w-5 text-primary" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex md:hidden gap-2 justify-center mt-6">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};