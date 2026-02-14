import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import abhinavImage from 'figma:asset/68d44d560d386d6592c1f10652bc44f90f8ad328.png';

interface HeroProps {
  onStudentPortfolioClick: () => void;
}

export function Hero({ onStudentPortfolioClick }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
                <span className="text-pink-700 text-sm font-medium">✨ Teach For India Fellow</span>
              </div>
              <h1 className="mb-4 text-5xl md:text-6xl tracking-tight text-slate-900">
                Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">Abhinav</span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-600 mb-6">
                Educator passionate about building excellent education 🎓
              </p>
              <p className="text-lg text-slate-500 max-w-2xl">
                Currently impacting 99 students in primary grade classrooms, developing 21st-century skills through innovative teaching.
              </p>
            </div>

            <div className="flex gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={onStudentPortfolioClick}
                className="gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                View Student Portfolio <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/abhinav-thakur-8597ab393/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-pink-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:abhinav.thakur2024@teachforindia.org" className="text-slate-600 hover:text-pink-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://res.cloudinary.com/dfkihrs2w/image/upload/v1771045643/WhatsApp_Image_2026-02-14_at_10.37.06_AM_vgmrt3.jpg" 
                alt="Abhinav teaching students in classroom"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
