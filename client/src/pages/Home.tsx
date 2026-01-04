import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { insertContactSchema } from "@shared/schema";
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Briefcase,
  Terminal,
  CheckCircle2,
  Linkedin,
  Clock,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 text-sm text-secondary animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              New Cohort Starting Nov '25
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter mb-8 leading-[1.1]">
              Supercharge Your <br className="hidden md:block" />
              <span className="text-gradient">Career in AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Unlock Your Potential: Master AI Today to Lead Future Innovations.
              Hands-on programs designed to help you create production-ready AI systems from scratch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ScrollLink to="courses" smooth={true} offset={-80}>
                <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} offset={-80}>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm">
                  Learn More
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About/Vision Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                align="left"
                label="Our Vision"
                title="Transforming How AI is Taught"
                description=""
              />
              <div className="space-y-8 text-lg text-muted-foreground">
                <p>
                  At <span className="text-white font-semibold">Neural Learning Hub</span>, we bridge the gap between theory and production. Our mission is to enable AI career aspirants with knowledge, tools, and real-world project experience.
                </p>
                <div className="p-6 rounded-2xl bg-card border border-white/5 shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-3">Our Philosophy</h3>
                  <p className="italic border-l-4 border-secondary pl-4 text-white/80">
                    "We want to achieve this by making learning AI a fun and interactive activity. It should enable you to learn concepts that you never forget."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { icon: Clock, title: "100+ Hours", desc: "Story-based learning" },
                { icon: Code2, title: "Best Practices", desc: "Production-grade ML" },
                { icon: Terminal, title: "Real Projects", desc: "Guided implementation" },
                { icon: Users, title: "Mentorship", desc: "Industry leaders" },
                { icon: Briefcase, title: "Career Support", desc: "Resume & referrals" },
                { icon: Award, title: "Certificate", desc: "Industry recognized" },
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group">
                  <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 bg-black/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Programs"
            title="Industry-Grade AI Curriculum"
            description="Designed by experts from Microsoft, Intel, and IBM to take you from foundational concepts to deploying LLM agents."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Active Course */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-card border border-primary/20 overflow-hidden relative group neon-glow"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase">
                    Session Nov '25
                  </span>
                  <BookOpen className="text-white/20 w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-primary transition-colors">
                  Applied AI (NLP) Phase 1
                </h3>
                <p className="text-muted-foreground mb-8">
                  Hands-on course focusing on foundations of generative AI from deep learning to agents. Perfect for beginners willing to put in the work.
                </p>

                <div className="space-y-3 mb-8">
                  {['Deep Learning Basics', 'LLM Architectures & Training', 'Prompt Engineering', 'RAG Systems', 'AI Agents', 'Capstone Project'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-primary/20">
                  Enroll Now
                </Button>
              </div>
            </motion.div>

            {/* Coming Soon Course */}
            <motion.div
              className="rounded-3xl bg-card/50 border border-white/5 overflow-hidden relative opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase">
                    Coming Soon
                  </span>
                  <Users className="text-white/20 w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-4">
                  Applied AI (Multi-modal)
                </h3>
                <p className="text-muted-foreground mb-8">
                  Hands-on course focusing on multi-modal AI with latest in-demand industry-demanding techniques.
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 text-center">
                  <p className="text-sm text-muted-foreground font-medium">Join waitlist to get notified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section id="tutors" className="py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Mentorship"
            title="Learn from Industry Leaders"
            description="Our tutors bring experience from top-tier tech giants and research institutions."
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Unsplash image of a professional man, with alt text */}
              <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/30 shadow-2xl">
                {/* Professional headshot */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                  alt="Dr. Vinay Joshi"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white font-display">Dr. Vinay Joshi</h3>
                  <a href="#" className="p-2 rounded-full bg-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5]/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-secondary font-medium mb-4">Principal Scientist at Microsoft</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Previously at AMD, Intel, and IBM. Dr. Joshi drives AI innovations and hardware acceleration.
                  A contributor to top-tier AI publications, he is passionate about sharing his expertise and preparing candidates for AI roles with targeted teaching and interview guidance.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">PhD Holder</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">Ex-AMD</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">Ex-Intel</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">Ex-IBM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-black/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading label="FAQ" title="Common Questions" />

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                What happens if I can't attend a live session?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Every live session is recorded. If you can't attend a live session, you can catch up asynchronously later using the recording at your own pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                I'm a complete beginner. Will this be helpful?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                This program is not an introduction to machine learning basics. However, our tutors will provide curated homework and prerequisite materials so you can catch up. If you are willing to put in the extra hours, you will thrive.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                What does "lifetime access" mean?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                You only pay once. You get immediate access to every past, present, and future cohort. Many students re-join later cohorts to learn updated material without paying again.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-xl relative z-10">
          <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl neon-border">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold font-display mb-3 text-white">Get In Touch</h2>
              <p className="text-muted-foreground">Have questions about the curriculum or eligibility? Send us a message.</p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactForm() {
  const form = useForm<import("@shared/schema").InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: import("@shared/schema").InsertContact) => {
    const subject = encodeURIComponent(`Inquiry from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:contact@neurallearninghub.in?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Input
          placeholder="Your Name"
          {...form.register("name")}
          className="bg-background/50 border-white/10 focus:border-primary h-12 rounded-xl"
        />
        {form.formState.errors.name && (
          <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          placeholder="Email Address"
          type="email"
          {...form.register("email")}
          className="bg-background/50 border-white/10 focus:border-primary h-12 rounded-xl"
        />
        {form.formState.errors.email && (
          <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea
          placeholder="How can we help you?"
          {...form.register("message")}
          className="bg-background/50 border-white/10 focus:border-primary min-h-[120px] rounded-xl resize-none"
        />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-white/90 font-bold h-12 rounded-xl transition-all"
      >
        Send Message (via Email)
      </Button>
    </form>
  );
}
