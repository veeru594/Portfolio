import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://n8n.yoimedia.fun/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "portfolio-contact-form",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast({
        title: "Message Sent ✨",
        description: "I’ll get back to you shortly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
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
    <div className="relative z-10">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-orange-600 mb-4">
          <Sparkles size={16} />
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold">Initialize Inquiry</span>
        </div>
        <h2 className="text-3xl font-bold text-amber-950">Direct Message</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-amber-900/40 uppercase tracking-widest ml-1 font-bold">Full Name</label>
            <Input
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/80 border-amber-200 text-amber-950 placeholder:text-amber-900/20 h-14 focus:border-orange-500/50 focus:bg-white transition-all shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-amber-900/40 uppercase tracking-widest ml-1 font-bold">Email Address</label>
            <Input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/80 border-amber-200 text-amber-950 placeholder:text-amber-900/20 h-14 focus:border-orange-500/50 focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono text-amber-900/40 uppercase tracking-widest ml-1 font-bold">Subject</label>
          <Input
            name="subject"
            placeholder="Project Inquiry"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-white/80 border-amber-200 text-amber-950 placeholder:text-amber-900/20 h-14 focus:border-orange-500/50 focus:bg-white transition-all shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono text-amber-900/40 uppercase tracking-widest ml-1 font-bold">Message Detail</label>
          <Textarea
            name="message"
            placeholder="Describe your automation needs..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white/80 border-amber-200 text-amber-950 placeholder:text-amber-900/20 focus:border-orange-500/50 focus:bg-white transition-all resize-none shadow-sm"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          {isSubmitting ? "Transmitting..." : "Send Message"}
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
