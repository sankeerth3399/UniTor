import React from 'react';
import { Eye, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      title: 'Transparency',
      description: 'We operate transparently, sharing our success stories with the team and accepting our business failures. This core value is an integral part of our work culture that teaches us to learn from shortcomings, to grow and thrive.',
      icon: <Eye className="h-8 w-8 text-white" />
    },
    {
      title: 'Integrity',
      description: 'We work with honesty, transparency and commitment towards our common goal. We value our workplace, colleagues and customers and hold no tolerance for politics, discrimination or aggression. We take ownership of our actions and learn from oversights.',
      icon: <ShieldCheck className="h-8 w-8 text-white" />
    },
    {
      title: 'Progressive',
      description: 'We pride ourselves in motivating employees to grow and prosper through dynamic work experience and regular training sessions. We believe in moving ahead by improving our systems and processes and ultimately aim towards overall progress.',
      icon: <TrendingUp className="h-8 w-8 text-white" />
    },
    {
      title: 'Customer-Centric',
      description: 'We take utmost responsibility in delivering quality service to our customers. We shall promise only what we can deliver, and we will deliver what we promise!',
      icon: <Users className="h-8 w-8 text-white" />
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The values that drive our work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our values define us and the way we function. Each of our core values is in sync with our vision and mission!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-red-600 shadow-md">
                    {value.icon}
                  </div>
                  <span className="text-xl">{value.title}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;