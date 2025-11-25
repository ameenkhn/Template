import { Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'About Us',
      links: ['Our Story', 'Leadership', 'Careers', 'Research', 'Awards'],
    },
    {
      title: 'Patient Care',
      links: ['Find a Doctor', 'Book Appointment', 'Health Checkup', 'Emergency', 'Visiting Hours'],
    },
    {
      title: 'Specialities',
      links: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 'Gastroenterology'],
    },
    {
      title: 'Resources',
      links: ['Health Library', 'Patient Portal', 'Insurance', 'International Patients', 'Contact Us'],
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl">Apollo Hospitals</span>
            </div>
            <p className="text-background/80 mb-4 text-sm">
              India's premier multispecialty hospital network, delivering world-class healthcare since 1983.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1860-500-1066</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@apollohospitals.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/80 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-background/80">
            © 2024 Apollo Hospitals. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-background/80 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-background/80 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-background/80 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-background/80 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};