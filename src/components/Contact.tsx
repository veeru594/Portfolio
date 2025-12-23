import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const N8N_WEBHOOK_URL =
  "https://n8n.yoimedia.fun/webhook/5d7c4fa8-e60b-47b8-9084-6d3c98d31e86";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("https://n8n.yoimedia.fun/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        source: "portfolio-contact-form",
        timestamp: new Date().toISOString(),
      }),
    });

    // 🔴 DO NOT assume JSON
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    // ✅ SUCCESS — even if body is empty
    toast({
      title: "Message Sent ✨",
      description: "I’ll get back to you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (err) {
    console.error("Contact form error:", err);

    toast({
      title: "Failed",
      description: "Message not sent. Try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-yellow-400" />
            <span className="text-gray-400">Get In Touch</span>
            <Sparkles className="text-yellow-400" />
          </div>
          <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let’s Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-6">
            <InfoCard icon={Mail} label="Email" value="veerandrak49@gmail.com" />
            <InfoCard icon={Phone} label="Phone" value="+91 9618084594" />
            <InfoCard icon={MapPin} label="Location" value="Hyderabad, India" />

            <div className="flex gap-4 pt-6">
              <Social href="https://github.com/veeru594" icon={Github} />
              <Social
                href="https://www.linkedin.com/in/veerendra-kumar0618/"
                icon={Linkedin}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-lg py-6"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 bg-slate-800 p-6 rounded-xl">
    <Icon className="text-indigo-400" />
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </div>
);

const Social = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-slate-800 rounded-xl hover:scale-110 transition"
  >
    <Icon className="text-white" />
  </a>
);

export default Contact;
