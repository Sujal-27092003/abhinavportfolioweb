import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Teaching & Facilitation',
    skills: ['Classroom Management', 'Lesson Planning', 'Differentiated Instruction', 'Student Assessment', 'Learner-Centred Planning', 'Workshop Design'],
  },
  {
    icon: Database,
    title: 'Program Development',
    skills: ['Curriculum Design', 'STEM Education', 'Financial Literacy', 'Language Development', 'Training & Development', 'Community Engagement'],
  },
  {
    icon: Layout,
    title: '21st Century Skills',
    skills: ['Critical Thinking', 'Communication', 'Collaboration', 'Creative Problem-Solving', 'Cultural Competence', 'Social-Emotional Learning'],
  },
  {
    icon: Smartphone,
    title: 'Systems & Strategy',
    skills: ['Data Analysis', 'Program Evaluation', 'Policy Alignment', 'Stakeholder Management', 'Evidence-Based Practice', 'Educational Equity'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-pink-100 rounded-full">
            <span className="text-pink-700 text-sm font-medium">🎯 What I bring</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 mb-12">
            Core competencies developed through teaching, training, and educational program work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg">
                  <category.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}