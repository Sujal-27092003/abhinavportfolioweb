import { Users, Heart, BookOpen, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '99',
    label: 'Students Impacted',
    color: 'pink',
  },
  {
    icon: Heart,
    number: '83%',
    label: 'Parental Engagement',
    color: 'rose',
  },
  {
    icon: BookOpen,
    number: '76%',
    label: 'Students at Grade Level',
    color: 'purple',
  },
  {
    icon: Award,
    number: '2+',
    label: 'Years of Teaching',
    color: 'blue',
  },
];

const colorClasses = {
  pink: 'from-pink-500 to-pink-600',
  rose: 'from-rose-500 to-rose-600',
  purple: 'from-purple-500 to-purple-600',
  blue: 'from-blue-500 to-blue-600',
};

export function Stats() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">
                {stat.number}
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
