import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

const internships = [
  {
    title: 'Tribes For Good',
    role: 'Program Facilitator and Trainer',
    description: 'Worked as a program facilitator and trainer, supporting school and college students to design and lead workshops for learners from marginalized communities and rural villages. The workshops covered STEM, design, language, and financial literacy, requiring strong facilitation, contextual adaptation, and learner-centred planning.',
  },
  {
    title: 'BMC Education Department (PPP Cell)',
    role: 'Summer Intern',
    description: 'Interned as a summer intern, supervising summer libraries for secondary-grade students and contributing to evaluation reports on the functioning and reliability of NGOs working in the education sector.',
  },
];

export function Internships() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
            <span className="text-pink-700 text-sm font-medium">💼 Professional journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Internships & Experience</h2>
          <p className="text-lg text-slate-600">Building expertise through diverse educational roles</p>
        </div>
        
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{internship.title}</CardTitle>
                    <CardDescription className="text-lg text-slate-600 italic mb-3">
                      {internship.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600">{internship.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}