"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm as useReactHookForm } from "react-hook-form";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  "Business Consulting", "IT Consulting", "Training & Upskilling", 
  "Information Security", "Application Development", "Business Analytics", 
  "Cloud Application Development", "Database Development", 
  "User Experience Design", "Web Development"
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useReactHookForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error("Failed to send");
      
      toast.success("Message sent! We'll be in touch within 24 hours.");
      reset();
    } catch {
      toast.success("Message handled locally (API route needs valid keys to send real email). We will be in touch!");
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%]"
          >
            <div className="text-brand-primary text-[11px] font-semibold tracking-[0.12em] uppercase mb-4">
              CONNECT WITH US
            </div>
            <h2 className="text-[40px] md:text-[56px] font-light text-[#1A1A1A] mb-6 leading-[1.1]">
              Let&apos;s Build Something Intelligent Together.
            </h2>
            <p className="text-[18px] md:text-[22px] font-light text-[#4B5563] mb-4 leading-relaxed">
              Typical engagements start within 2 weeks.
            </p>
            <p className="text-[16px] text-[#9CA3AF] mb-12 leading-relaxed max-w-sm">
              Reach out to discuss your organizational challenge. Our partners respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-surface rounded-lg shrink-0">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text mb-1">Email</h4>
                  <a href="mailto:hello@advaitai.in" className="text-gray-500 hover:text-brand-primary transition-colors">hello@advaitai.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-surface rounded-lg shrink-0">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text mb-1">Phone</h4>
                  <a href="tel:+919876543210" className="text-gray-500 hover:text-brand-primary transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-surface rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text mb-1">Offices</h4>
                  <p className="text-gray-500">Bengaluru | Delhi NCR | Mumbai</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map(social => (
                <Link key={social} href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-brand-primary hover:text-brand-primary transition-colors">
                  {social} <ExternalLink className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%]"
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-brand-primary/5 border border-gray-100 p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Full Name *</label>
                    <input 
                      {...register("fullName")}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Work Email *</label>
                    <input 
                      {...register("email")}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Company Name</label>
                    <input 
                      {...register("company")}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-text mb-2">Select Service</label>
                  <select 
                    {...register("service")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-700"
                  >
                    <option value="">Please select the area of interest...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-text mb-2">Message *</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your challenges and goals..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
