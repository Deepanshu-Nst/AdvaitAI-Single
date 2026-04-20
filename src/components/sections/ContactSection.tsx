"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm as useReactHookForm } from "react-hook-form";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

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
  "AI System Architecture", "LLM Integration", "Data Pipeline Automation",
  "Risk & Compliance AI", "Supply Chain Analytics"
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useReactHookForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "dummy";

      if (accessKey !== "dummy") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: "New Contact Form Submission - AdvaitAI",
            ...data
          })
        });

        const result = await response.json();
        if (result.success) {
          toast.success("Message sent! We'll be in touch within 24 hours.");
          reset();
        } else {
          throw new Error(result.message || "Failed to send");
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Message handled locally. We will be in touch!");
        reset();
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden" id="contact">
      <ParticleNetwork idClassName="contact-particles" opacity={0.3} />
      {/* Abstract floating blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">

          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%] lg:sticky lg:top-32"
          >
            <div className="text-brand-primary text-[12px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8 inline-block border-b border-brand-primary/30 pb-2">
              INITIATE CONTACT
            </div>
            <h2 className="text-[36px] md:text-[64px] font-bold text-[#0C2D57] mb-6 md:mb-8 leading-[1.05] tracking-tight">
              Book a Consultation <br />
              <span className="text-[#5B7FA5]">to architect your future.</span>
            </h2>
            <p className="text-[17px] md:text-[22px] font-light text-[#5B7FA5] mb-8 md:mb-16 leading-relaxed">
              We prioritize precision and actionable insights. Schedule a consultation directly with our experts to receive a rigorous assessment of feasibility, implementation timelines, and projected ROI for your automation initiatives.
            </p>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 border border-[#BFDBFE] bg-[#F0F7FF] rounded-full flex items-center justify-center shrink-0 group-hover:border-brand-primary transition-all duration-500">
                <Mail className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5B7FA5] mb-1">Direct Line</h4>
                <a href="mailto:contact@advaita1.com" className="text-[17px] md:text-[18px] text-[#0C2D57] hover:text-brand-primary transition-colors">contact@advaita1.com</a>
              </div>
            </div>
          </motion.div>

          {/* Right - Floating Clean Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60%]"
          >

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 max-w-2xl mx-auto lg:mr-0 pt-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    {...register("fullName")}
                    className="w-full bg-transparent border-b border-[#BFDBFE] text-[#0C2D57] text-[18px] py-4 focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                    id="fullName"
                  />
                  <label htmlFor="fullName" className="absolute left-0 -top-3 text-[10px] font-bold uppercase tracking-widest text-[#5B7FA5] transition-all peer-placeholder-shown:text-[#94B4D4] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brand-primary">Full Name *</label>
                  {errors.fullName && <p className="text-red-500 text-xs mt-2 absolute">{errors.fullName.message}</p>}
                </div>
                <div className="relative group">
                  <input
                    {...register("email")}
                    className="w-full bg-transparent border-b border-[#BFDBFE] text-[#0C2D57] text-[18px] py-4 focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Work Email"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3 text-[10px] font-bold uppercase tracking-widest text-[#5B7FA5] transition-all peer-placeholder-shown:text-[#94B4D4] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brand-primary">Work Email *</label>
                  {errors.email && <p className="text-red-500 text-xs mt-2 absolute">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    {...register("company")}
                    className="w-full bg-transparent border-b border-[#BFDBFE] text-[#0C2D57] text-[18px] py-4 focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Company"
                    id="company"
                  />
                  <label htmlFor="company" className="absolute left-0 -top-3 text-[10px] font-bold uppercase tracking-widest text-[#5B7FA5] transition-all peer-placeholder-shown:text-[#94B4D4] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brand-primary">Company Name</label>
                </div>
                <div className="relative group">
                  <input
                    {...register("phone")}
                    className="w-full bg-transparent border-b border-[#BFDBFE] text-[#0C2D57] text-[18px] py-4 focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                    id="phone"
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3 text-[10px] font-bold uppercase tracking-widest text-[#5B7FA5] transition-all peer-placeholder-shown:text-[#94B4D4] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-brand-primary">Phone Number</label>
                </div>
              </div>

              <div className="relative">
                <select
                  {...register("service")}
                  className="w-full bg-transparent border-b border-[#BFDBFE] text-[#0C2D57] text-[16px] py-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none peer"
                  id="service"
                >
                  <option value="" className="bg-white text-[#0C2D57]">Select operational bottleneck...</option>
                  {services.map(s => <option key={s} value={s} className="bg-white text-[#0C2D57]">{s}</option>)}
                </select>
                <label htmlFor="service" className="absolute left-0 -top-3 text-[10px] font-bold uppercase tracking-widest text-brand-primary transition-all">Priority Area</label>
                {errors.service && <p className="text-red-500 text-xs mt-2 absolute">{errors.service.message}</p>}
              </div>

              <div className="relative pt-6">
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-transparent border-b border-[#BFDBFE] text-[#0C2D57] text-[18px] py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none peer placeholder-transparent"
                  placeholder="Details"
                  id="message"
                />
                <label htmlFor="message" className="absolute left-0 top-0 text-[10px] font-bold uppercase tracking-widest text-[#5B7FA5] transition-all peer-placeholder-shown:text-[#94B4D4] peer-placeholder-shown:top-6 peer-placeholder-shown:text-[16px] peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-primary">Operational Details *</label>
                {errors.message && <p className="text-red-500 text-xs mt-2 absolute">{errors.message.message}</p>}
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden bg-brand-primary text-white font-bold text-[14px] uppercase tracking-[0.2em] py-6 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-primary/20"
                >
                  <div className="absolute inset-0 w-0 bg-brand-secondary transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
