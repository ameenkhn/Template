import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { QuickActions } from '@/components/QuickActions';
import { Specialities } from '@/components/Specialities';
import { NewsSlider } from '@/components/NewsSlider';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Hospital',
            name: 'Apollo Hospitals',
            url: 'https://www.apollohospitals.com',
            logo: '/logo.svg',
            image: '/og-image.jpg',
            description: "Apollo Hospitals is India's premier multispecialty hospital, renowned for expert care in cancer treatment, cardiology, orthopedics, transplants, neurology, and more.",
            address: {
              '@type': 'PostalAddress',
              streetAddress: '21, Greams Lane, Off Greams Road',
              addressLocality: 'Chennai',
              addressRegion: 'Tamil Nadu',
              postalCode: '600006',
              addressCountry: 'IN',
            },
            telephone: '1860-500-1066',
            medicalSpecialty: [
              'Cardiology',
              'Oncology',
              'Neurology',
              'Orthopedics',
              'Gastroenterology',
              'Transplantation',
            ],
          }),
        }}
      />

      <Header />
      <main>
        <Hero />
        <QuickActions />
        <Specialities />
        <NewsSlider />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
