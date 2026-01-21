import { TrendingUp, Users, BookOpen, Heart } from 'lucide-react';

export function Impact() {
  return (
    <section id="impact" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
            <span className="text-pink-700 text-sm font-medium">📊 Making a difference</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">My Impact</h2>
          <p className="text-lg text-slate-600">Measurable outcomes from dedicated classroom work</p>
        </div>
        
        {/* Student Outcomes - Before/After */}
        <div className="mb-20">
          <h3 className="text-3xl mb-8 text-slate-900 text-center flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-pink-600" />
            Student Outcomes
          </h3>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-pink-200">
            <div className="grid md:grid-cols-2">
              {/* Beginning of Fellowship */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-r border-pink-200">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-slate-200 rounded-full mb-2">
                    <span className="text-slate-700 font-medium">Beginning of Fellowship</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl md:text-6xl mb-2 text-slate-700">21%</div>
                    <p className="text-slate-600">Parental engagement</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl mb-2 text-slate-700">83%</div>
                    <p className="text-slate-600">Students below grade level</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl mb-2 text-slate-700">37%</div>
                    <p className="text-slate-600">Believed they had access to skill-building opportunities</p>
                  </div>
                </div>
              </div>
              
              {/* End of Fellowship */}
              <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-pink-200 rounded-full mb-2">
                    <span className="text-pink-700 font-medium">End of Fellowship</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl md:text-6xl mb-2 text-pink-600 font-bold">83%</div>
                    <p className="text-slate-600">Parental engagement increased</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl mb-2 text-rose-600 font-bold">76%</div>
                    <p className="text-slate-600">Students now at grade level</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl mb-2 text-purple-600 font-bold">67%</div>
                    <p className="text-slate-600">Now believe they have access to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-slate-900 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-pink-600" />
            Community Context
          </h3>
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-pink-100">
            <p className="text-lg text-slate-600 mb-4">
              The students I work with come primarily from <strong>Dongar</strong>, Andheri West, with some families 
              residing in <strong>Yadav Nagar</strong>. The community is largely composed of migrant families, with parents 
              originating from Karnataka, Tamil Nadu, Uttar Pradesh, and Bihar.
            </p>
            <p className="text-lg text-slate-600">
              Most caregivers are engaged in informal or low-income occupations such as auto-rickshaw 
              driving, domestic work, or running small local shops. These families bring with them diverse 
              languages, cultures, and lived experiences, shaping a rich but complex social environment for 
              students.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-8 text-slate-900 text-center flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-pink-600" />
            Community Challenges
          </h3>
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-100 space-y-4">
            <p className="text-lg text-slate-600">
              Despite strong resilience, the community faces persistent structural challenges. Many families 
              have limited or inconsistent access to basic amenities, including clean drinking water, reliable 
              electricity, adequate sanitation, and healthcare services. Issues related to hygiene and nutrition 
              are common, directly impacting children's health, attendance, and learning readiness.
            </p>
            <p className="text-lg text-slate-600">
              Women in the community are particularly vulnerable, with many experiencing domestic violence, 
              poor nutritional intake, and limited access to health and support systems. These realities 
              significantly influence family stability and children's socio-emotional well-being, often extending 
              into the classroom through fatigue, insecurity, and interrupted learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}