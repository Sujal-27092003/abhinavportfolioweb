import { useState, useRef } from 'react';
import { Video, Image, Users, BookOpen, Play, ArrowLeft, Heart, Sparkles, Star, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/app/components/ui/carousel";
import { Badge } from "@/app/components/ui/badge";

interface StudentPortfolioProps {
  onBackToHome: () => void;
}

const interviewVideos = [
  "https://res.cloudinary.com/dfkihrs2w/video/upload/v1771045121/Video.792737738.59955_afd5rs.mp4",
  "https://res.cloudinary.com/dfkihrs2w/video/upload/v1771045113/MicrosoftTeams-video_atvu2g.mp4",
  "https://res.cloudinary.com/dfkihrs2w/video/upload/v1771045461/Video.792737855.087573_qwo7qb.mp4",
  "https://res.cloudinary.com/dfkihrs2w/video/upload/v1771048108/Video.792738126.07642_aclg2k.mp4"
];

const classroomImages = [
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740276/WhatsApp_Image_2026-02-09_at_8.56.33_PM_1_jqzk7j.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740276/WhatsApp_Image_2026-02-09_at_8.56.35_PM_zpkwvq.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740278/WhatsApp_Image_2026-02-09_at_8.56.33_PM_wykxu0.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740278/WhatsApp_Image_2026-02-09_at_8.56.31_PM_ehxans.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740286/WhatsApp_Image_2026-02-03_at_8.30.14_AM_1_h0de83.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740288/WhatsApp_Image_2026-02-03_at_8.30.13_AM_1_xsjpve.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740287/WhatsApp_Image_2026-02-03_at_8.30.14_AM_etmbez.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740287/WhatsApp_Image_2026-02-03_at_8.30.13_AM_2_rl4ql1.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740294/WhatsApp_Image_2026-02-03_at_8.30.11_AM_2_ru8hxw.jpg"
];

const beyondImages = [
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740282/WhatsApp_Image_2026-02-03_at_8.30.16_AM_vgnj6n.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740283/WhatsApp_Image_2026-02-03_at_8.30.15_AM_1_dy0uhb.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740284/WhatsApp_Image_2026-02-03_at_8.30.15_AM_okpqah.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740309/WhatsApp_Image_2026-02-03_at_8.28.43_AM_bhw5kq.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740308/WhatsApp_Image_2026-02-03_at_8.28.45_AM_pdw2oz.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740302/WhatsApp_Image_2026-02-03_at_8.30.07_AM_ufdffn.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740304/WhatsApp_Image_2026-02-03_at_8.30.05_AM_oi6y1u.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740304/WhatsApp_Image_2026-02-03_at_8.30.05_AM_1_csosqv.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740305/WhatsApp_Image_2026-02-03_at_8.30.04_AM_mysych.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740297/WhatsApp_Image_2026-02-03_at_8.30.09_AM_1_o7ttqg.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740299/WhatsApp_Image_2026-02-03_at_8.30.08_AM_1_kp4qg3.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740301/WhatsApp_Image_2026-02-03_at_8.30.08_AM_fvrvzk.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740278/WhatsApp_Image_2026-02-09_at_8.56.26_PM_wzdr29.jpg",
  "https://res.cloudinary.com/dfkihrs2w/image/upload/v1770740281/WhatsApp_Image_2026-02-03_at_8.30.16_AM_1_q7hsjx.jpg"
];

const reelVideo = "https://res.cloudinary.com/dfkihrs2w/video/upload/v1770739923/WhatsApp_Video_2026-01-26_at_11.56.52_PM_1_toghbs.mp4";

export function StudentPortfolio({ onBackToHome }: StudentPortfolioProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <div className="size-full bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={onBackToHome} 
            className="flex items-center gap-2 group text-slate-700 hover:text-pink-600 transition-all"
          >
            <div className="p-2 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-pink-600" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Abhinav's Classroom
            </span>
          </button>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="#interviews" className="hover:text-pink-600 transition-colors">Interviews</a>
            <a href="#reel" className="hover:text-pink-600 transition-colors">Classroom Reel</a>
            <a href="#activities" className="hover:text-pink-600 transition-colors">Activities</a>
            <a href="#beyond" className="hover:text-pink-600 transition-colors">Beyond</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 px-4 py-1.5 bg-white text-pink-600 border-pink-200 shadow-sm text-sm font-semibold rounded-full">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Student Showcase
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Building Dreams at <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent italic">Dongar & Yadav Nagar</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A window into the vibrant lives, boundless curiosity, and incredible growth of 99 amazing students.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex -space-x-3 overflow-hidden">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="inline-block h-12 w-12 rounded-full ring-4 ring-white bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="flex items-center justify-center h-12 w-12 rounded-full ring-4 ring-white bg-slate-800 text-white text-xs font-bold">
                +94
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <Users className="w-5 h-5" />
              <span>99 Learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Student Interviews Section */}
      <section id="interviews" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-bold border border-purple-100">
                <Users className="w-4 h-4" />
                <span>STUDENT VOICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Student Interviews</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-md">
              Hear directly from our scholars about their learning journey, dreams, and the magic of education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {interviewVideos.map((video, i) => (
              <div key={i} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative bg-slate-900 overflow-hidden">
                  <video 
                    src={video} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    controls
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">Student Interview {i + 1}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reel Aesthetic Section */}
      <section id="reel" className="py-24 px-6 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-[340px] aspect-[9/19] rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden bg-slate-900">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                  <div className="w-8 h-2 rounded-full bg-slate-800"></div>
                </div>
                
                <video 
                  ref={videoRef}
                  src={reelVideo} 
                  autoPlay 
                  loop 
                  muted={isMuted}
                  playsInline 
                  className="w-full h-full object-cover"
                />

                {/* Mute Toggle Button */}
                <button 
                  onClick={toggleMute}
                  className="absolute top-10 right-6 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                
                {/* Reel UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-pink-600 text-xs">A</div>
                    </div>
                    <span className="text-white font-semibold shadow-sm">@abhinav_classroom</span>
                    <button className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-bold">Follow</button>
                  </div>
                  <p className="text-white text-sm mb-8">Building a brighter future, one lesson at a time. ✨ #TeachForIndia #Education #Impact</p>
                  
                  <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-full bg-black/20 backdrop-blur-md"><Heart className="w-6 h-6 text-white fill-white" /></div>
                      <span className="text-white text-[10px] font-bold">2.4k</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white"><Play className="w-6 h-6" /></div>
                      <span className="text-white text-[10px] font-bold">12k</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white font-bold text-xl">...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold">
                <Video className="w-4 h-4" />
                <span>CLASSROOM REEL</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Authentic Moments, <br />
                <span className="text-pink-600">Pure Joy.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-pink-100 flex items-center justify-center text-purple-600 shadow-sm">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Human Connection</h4>
                    <p className="text-slate-600">Highlighting the bonds and emotional growth within our learning community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Activities - Swiping Section */}
      <section id="activities" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
              <BookOpen className="w-4 h-4" />
              <span>A DAY IN OUR CLASSROOM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Classroom Activities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Swipe through a collection of photos and videos capturing the dynamic energy of our daily lessons.
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {classroomImages.map((img, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                      <img 
                        src={img} 
                        alt={`Classroom activity ${index + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <span className="text-white font-bold text-lg">Activity {index + 1}</span>
                        <p className="text-white/80 text-sm">Empowering learners through collaboration.</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 border-pink-200 text-pink-600 hover:bg-pink-50" />
                <CarouselNext className="static translate-y-0 h-12 w-12 border-pink-200 text-pink-600 hover:bg-pink-50" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* More from Classroom Section */}
      <section id="beyond" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-bold border border-rose-100">
                <Star className="w-4 h-4" />
                <span>BEYOND THE BASICS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">More from the Classroom & Beyond</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-md">
              A comprehensive gallery of moments that define our classroom culture and community engagement.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {beyondImages.map((img, i) => (
              <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-white">
                <img 
                  src={img} 
                  alt={`Classroom moment ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Supporting 99 Bright Futures</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 relative z-10 leading-relaxed max-w-2xl mx-auto">
            These stories are just the beginning. I'm dedicated to ensuring every student at Dongar & Yadav Nagar reaches their full potential.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Button 
              size="lg" 
              onClick={onBackToHome}
              className="bg-white text-pink-600 hover:bg-pink-50 text-lg font-bold px-10 h-16 rounded-2xl"
            >
              Back to Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 text-center">
        <p className="text-slate-500 font-medium italic">"Education is the most powerful weapon which you can use to change the world."</p>
        <p className="text-slate-400 text-sm mt-4">© 2026 Abhinav - Teach For India Fellow</p>
      </footer>
    </div>
  );
}
