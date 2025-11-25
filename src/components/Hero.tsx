import { Button } from './ui/button';
import { ArrowRight, Link, Play } from 'lucide-react';
import { motion } from 'framer-motion';;

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              India's Leading Healthcare Provider
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Expert Healthcare
              <span className="block text-primary">When You Need It Most</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Experience world-class medical care with our team of renowned specialists, 
              cutting-edge technology, and patient-first approach to healthcare excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="public\Yoga_Video_Generation_for_Ads.mp4" target="_blank">
              <Button className="group border border-primary text-primary hover:bg-primary/10">
              <Play className="mr-2 h-4 w-4" />
                    Watch Video
              </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">11K+</div>
                <div className="text-sm text-muted-foreground">Doctors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">45M+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground/80">Watch Our Story</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">24/7 Emergency</div>
                  <div className="text-xs text-muted-foreground">Always Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};