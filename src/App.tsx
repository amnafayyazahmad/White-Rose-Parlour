import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
<>
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          <div
            className="w-24 h-24 bg-gradient-to-br from-pink-400/20 to-rose-500/20 rounded-full blur-xl"
            style={{
              transform: `scale(${0.5 + Math.random()})`
            }}
          />
        </div>
      ))}
    </div>


    

    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 animate-fadeIn">
              <Sparkles className="w-8 h-8 text-pink-400" />


              
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-pink-800 bg-clip-text text-transparent">
                Beauty Hub
              </span>
            </div>


            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <button className="btn-primary">Book Now</button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-pink-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg animate-slideDown">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block nav-link-mobile">Home</button>
              <button onClick={() => scrollToSection('services')} className="block nav-link-mobile">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block nav-link-mobile">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="block nav-link-mobile">About</button>
              <button onClick={() => scrollToSection('contact')} className="block nav-link-mobile">Contact</button>
              <button className="btn-primary w-full">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>


        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

           <h1 className="text-6xl md:text-8xl font-black text-pink-900 bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 relative animate-gradient">
            White Rose 
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              Parlour
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fadeInUp animation-delay-200">
            Experience luxury beauty treatments in an elegant atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button onClick={() => scrollToSection('services')} className="btn-primary text-lg px-8 py-4">
              Explore Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="btn-secondary text-lg px-8 py-4">
              View Gallery
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-scrollIndicator"></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">Indulge in our premium beauty treatments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Facial Treatments', desc: 'Rejuvenating facials for glowing skin', icon: '✨' },
              { title: 'Hair Styling', desc: 'Expert cuts, colors, and treatments', icon: '💇' },
              { title: 'Makeup Artistry', desc: 'Professional makeup for any occasion', icon: '💄' },
              { title: 'Nail Care', desc: 'Manicures, pedicures, and nail art', icon: '💅' },
              { title: 'Spa & Massage', desc: 'Relaxing treatments for body and mind', icon: '🧖' },
              { title: 'Bridal Packages', desc: 'Complete bridal beauty solutions', icon: '👰' }
            ].map((service, index) => (
              <div key={index} className="service-card group">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-gray-600 text-lg">Discover our beautiful transformations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-pink-200 to-pink-900">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Beautiful Transformation {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                About Suchehwa
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Welcome to Suchehwa Beauty, where elegance meets expertise. With over a decade of experience,
                we bring you the finest beauty treatments in a luxurious, serene environment.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our team of certified professionals is dedicated to enhancing your natural beauty
                using premium products and cutting-edge techniques.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">50+</div>
                  <div className="text-gray-600">Services</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInUp animation-delay-200">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-300 to-pink-400 shadow-2xl transform hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { name: 'Sarah Johnson', text: 'Absolutely wonderful experience! The staff is professional and the results are amazing.' },
              { name: 'Emily Chen', text: 'Best beauty parlor in town. I always leave feeling pampered and beautiful.' }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="text-pink-400 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold text-pink-600">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">Visit us or book your appointment today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="contact-card">
              <Phone className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="contact-card">
              <Mail className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">hello@suchehwa.com</p>
            </div>
            <div className="contact-card">
              <MapPin className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">123 Beauty Lane, Suite 100</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-pink-500 to-pink-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-bold">Suchehwa Beauty</span>
              </div>
              <p className="text-pink-100">Your destination for luxury beauty treatments</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block hover:text-pink-200 transition-colors">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="block hover:text-pink-200 transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-pink-200 transition-colors">About</button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
          <div className="border-t border-pink-400 pt-8 text-center text-pink-100">
            <p>© 2024 Suchehwa Beauty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}


export default App;
