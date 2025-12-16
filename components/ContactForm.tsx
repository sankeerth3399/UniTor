import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, User, BookOpen, GraduationCap } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    educationLevel: '',
    stream: '',
    score: '',
    targetCourse: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Full Name is required";

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 16 || Number(formData.age) > 60) {
      newErrors.age = "Valid age required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!formData.educationLevel) newErrors.educationLevel = "Select current qualification";
    if (!formData.stream.trim()) newErrors.stream = "Stream/Major is required";
    if (!formData.score.trim()) newErrors.score = "CGPA/Percentage is required";
    if (!formData.targetCourse.trim()) newErrors.targetCourse = "Target course is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const waMessage =
        `*New Student Profile - UniTor*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Age:* ${formData.age}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `------------------%0A` +
        `*Current Ed:* ${formData.educationLevel}%0A` +
        `*Stream:* ${formData.stream}%0A` +
        `*Score:* ${formData.score}%0A` +
        `------------------%0A` +
        `*Target Course:* ${formData.targetCourse}%0A` +
        `*Message:* ${formData.message}`;

      const waUrl = `https://wa.me/917893392769?text=${waMessage}`;

      const mailSubject = `Student Profile Evaluation: ${formData.name}`;
      const mailBody =
        `Student Details Submission\n\n` +
        `--- Personal Details ---\n` +
        `Name: ${formData.name}\n` +
        `Age: ${formData.age}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `--- Educational Background ---\n` +
        `Current Level: ${formData.educationLevel}\n` +
        `Stream/Major: ${formData.stream}\n` +
        `Score/CGPA: ${formData.score}\n\n` +
        `--- Study Plans ---\n` +
        `Target Course in Germany: ${formData.targetCourse}\n\n` +
        `--- Additional Message ---\n` +
        `${formData.message || 'No additional message'}`;

      const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=unitorservices@gmail.com&su=${encodeURIComponent(
        mailSubject
      )}&body=${encodeURIComponent(mailBody)}`;

      setIsSubmitted(true);
      window.open(waUrl, '_blank');
      setTimeout(() => window.open(mailUrl, '_blank'), 1000);

      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        educationLevel: '',
        stream: '',
        score: '',
        targetCourse: '',
        message: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* LEFT PANEL */}
            <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Get Your Free Profile Evaluation
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Submit your academic details. Our experts will analyze your profile and suggest the best German universities for you.
                </p>

                <div className="mt-12 space-y-8 flex-grow">
                  <a href="tel:+917893392769" className="flex items-center group hover:translate-x-1 transition-transform">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-lg font-semibold">+91 7893392769</p>
                    </div>
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=unitorservices@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Email Us</p>
                      <p className="text-lg font-semibold break-all">unitorservices@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5-100%2F25%2F1%2C+Satsang+Building%2C+Nandana+Enclave%2C+Dammaiguda%2C+Hyderabad-500083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Visit Us</p>
                      <p className="text-lg font-semibold whitespace-pre-line">
                        5-100/25/1, Satsang Building{'\n'}
                        Nandana Enclave, Dammaiguda{'\n'}
                        Hyderabad-500083
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (FORM) */}
            {/* unchanged */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
