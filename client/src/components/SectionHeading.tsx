import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
          {label}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
