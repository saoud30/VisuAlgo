
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student, MIT",
      content: "This made recursion click instantly! The visual representation of the call stack helped me understand concepts that textbooks couldn't explain.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "CS Professor, Stanford",
      content: "I use VisuAlgo in all my algorithm classes now. Students are more engaged and retention has improved significantly. Absolutely game-changing.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer, Google",
      content: "Finally, a tool that makes algorithm interviews less intimidating. The step-by-step visualizations are perfect for learning and practice.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Emily Zhang",
      role: "Bootcamp Graduate",
      content: "As someone transitioning into tech, VisuAlgo helped bridge the gap between theory and practical understanding. Highly recommended!",
      rating: 5,
      avatar: "EZ"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 px-4 scroll-reveal">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What Our Users Say
          </h2>
          <p className="text-xl text-foreground/70">
            Join thousands of students and educators who've transformed their learning experience.
          </p>
        </div>

        <div className="glass-panel p-8 lg:p-12 relative">
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-neon fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed italic">
              "{current.content}"
            </blockquote>

            {/* Avatar and Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-electric to-purple rounded-full flex items-center justify-center text-white font-bold">
                {current.avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{current.name}</div>
                <div className="text-foreground/60 text-sm">{current.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-glass-white hover:bg-electric/20 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-glass-white hover:bg-electric/20 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-electric' : 'bg-foreground/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
