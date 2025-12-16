import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, ArrowRight, CheckCircle2, User, BookOpen, GraduationCap } from 'lucide-react';

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
      // Construct detailed message
      const waMessage = `*New Student Profile - UniTor*%0A%0A` +
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
      const mailBody = `Student Details Submission\n\n` +
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
      
      const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=unitorservices@gmail.com&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      // Show success state
      setIsSubmitted(true);

      // Open WhatsApp as primary instant contact
      window.open(waUrl, '_blank');

      // Attempt Gmail redirect for sending the full form
      setTimeout(() => {
        window.open(mailUrl, '_blank');
      }, 1000);

      // Reset form
      setFormData({ 
        name: '', age: '', email: '', phone: '', 
        educationLevel: '', stream: '', score: '', 
        targetCourse: '', message: '' 
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
            
            <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
               {/* Decorative Circles */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div>
                  <h2 className="text-3xl font-extrabold sm:text-4xl">
                    Get Your Free Profile Evaluation
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Submit your academic details. Our experts will analyze your profile and suggest the best German universities for you.
                  </p>
                </div>
                
                <div className="mt-12 space-y-8 flex-grow">
                  <a href="tel:+917893392769" className="flex items-center group transition-transform hover:translate-x-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400 group-hover:text-red-300 transition-colors">Call Us</p>
                      <p className="text-lg font-semibold group-hover:text-red-100 transition-colors">+91 7893392769</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=unitorservices@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group transition-transform hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400 group-hover:text-red-300 transition-colors">Email Us</p>
                      <p className="text-lg font-semibold break-all group-hover:text-red-100 transition-colors">unitorservices@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=5-100%2F25%2F1%2C+Satsang+Building%2C+Nandana+Enclave%2C+Dammaiguda%2C+Hyderabad-500083"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center group transition-transform hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                       <p className="text-sm text-gray-400 group-hover:text-red-300 transition-colors">Visit Us (Click for Directions)</p>
                      <p className="text-lg font-semibold whitespace-pre-line group-hover:text-red-100 transition-colors">
                        5-100/25/1, Satsang Building,{'\n'}
                        Nandana Enclave, Dammaiguda,{'\n'}
                        Hyderabad-500083
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                       <p className="text-sm text-gray-400">Follow Us</p>
                       <a 
                        href="https://www.instagram.com/sankeerth__008?igsh=MW95OWdheTZhd3Y1NA%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Follow us on Instagram @sankeerth__008"
                        className="text-lg font-semibold hover:text-red-400 transition-colors inline-flex items-center"
                       >
                        @sankeerth__008 <ArrowRight className="ml-1 h-4 w-4" />
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-white relative">
              {isSubmitted ? (
                <div role="status" aria-live="polite" className="h-full flex flex-col justify-center items-center text-center animate-fadeIn p-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Received!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                    We have redirected you to Gmail to send your details. We have also opened WhatsApp for faster communication.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
                  >
                    Submit another response <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn" noValidate>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-red-600" />
                    Personal Details
                  </h3>
                  
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Full Name *"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  {/* Age & Phone Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.age ? 'border-red-500' : ''}`}
                        placeholder="Age *"
                        />
                        {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age}</p>}
                    </div>
                    <div className="col-span-2">
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="Phone Number *"
                        />
                         {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Email Address *"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-red-600" />
                    Educational Background
                  </h3>

                  {/* Education & Score Row */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="col-span-2 sm:col-span-1">
                         <select
                            name="educationLevel"
                            value={formData.educationLevel}
                            onChange={handleChange}
                            className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.educationLevel ? 'border-red-500' : ''}`}
                        >
                            <option value="">Current Degree *</option>
                            <option value="High School (12th)">High School (12th)</option>
                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="Master's Degree">Master's Degree</option>
                        </select>
                        {errors.educationLevel && <p className="mt-1 text-xs text-red-600">{errors.educationLevel}</p>}
                     </div>
                     <div className="col-span-2 sm:col-span-1">
                        <input
                            type="text"
                            name="score"
                            value={formData.score}
                            onChange={handleChange}
                            className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.score ? 'border-red-500' : ''}`}
                            placeholder="CGPA / % *"
                        />
                        {errors.score && <p className="mt-1 text-xs text-red-600">{errors.score}</p>}
                     </div>
                  </div>

                  {/* Stream */}
                  <div>
                    <input
                      type="text"
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.stream ? 'border-red-500' : ''}`}
                      placeholder="Stream/Branch (e.g. Computer Science) *"
                    />
                    {errors.stream && <p className="mt-1 text-xs text-red-600">{errors.stream}</p>}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-red-600" />
                    Study Plans
                  </h3>

                  {/* Target Course */}
                  <div>
                    <input
                      type="text"
                      name="targetCourse"
                      value={formData.targetCourse}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors ${errors.targetCourse ? 'border-red-500' : ''}`}
                      placeholder="Course you want to study in Germany *"
                    />
                    {errors.targetCourse && <p className="mt-1 text-xs text-red-600">{errors.targetCourse}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 bg-gray-50 transition-colors"
                      placeholder="Any additional questions? (Optional)"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center items-center py-4 px-6 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg transform transition-all active:scale-95"
                    >
                      Submit Profile for Evaluation <Send className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
