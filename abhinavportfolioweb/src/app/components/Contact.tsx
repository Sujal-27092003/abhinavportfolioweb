import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
            <span className="text-pink-700 text-sm font-medium">📧 Let's connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12">
            Interested in collaboration or want to learn more about my work? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-slate-900">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg">
                  <Mail className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">abhinav.thakur2024@teachforindia.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Andheri West, Mumbai</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}