
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Github, Twitter } from 'lucide-react';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Have questions, feedback, or suggestions? We'd love to hear from you.
            Our team is here to help make your algorithm learning journey amazing.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-panel p-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg focus:outline-none focus:border-electric transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg focus:outline-none focus:border-electric transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg focus:outline-none focus:border-electric transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="education">Educational Partnership</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg focus:outline-none focus:border-electric transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <Button type="submit" className="glow-button w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Other Ways to Reach Us
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Choose the method that works best for you. We typically respond 
                  within 24 hours during business days.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-panel p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric to-blue-400 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Support</h3>
                    <p className="text-foreground/70">support@visualgo.com</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon to-green-400 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Community Discord</h3>
                    <p className="text-foreground/70">Join our developer community</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-pink-400 rounded-lg flex items-center justify-center">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">GitHub Issues</h3>
                    <p className="text-foreground/70">Report bugs and request features</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Twitter</h3>
                    <p className="text-foreground/70">@visualgo for updates and news</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Link */}
              <div className="glass-panel p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Quick Answers
                </h3>
                <p className="text-foreground/70 mb-4">
                  Before reaching out, check our FAQ section for immediate answers 
                  to common questions.
                </p>
                <Button variant="outline" className="border-glass-border hover:border-electric/50">
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
