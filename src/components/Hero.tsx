import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src="/site_edh/videos/Página inicial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 bg-gradient-to-b from-gray-300/20 to-blue-900/70 backdrop-blur-sm min-h-screen w-full">
        <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
          <div className="text-center text-white py-20">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src="/site_edh/images/logo1.png"
              alt="Logo EDH"
              className="mx-auto mb-8 w-48 md:w-72 h-auto max-w-full drop-shadow-[-5px_-5px_5px_rgba(0,0,0,0.9)]"
            />
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500 drop-shadow-[-4px_-4px_5px_rgba(0,0,0,0.9)]"
            >
              Excelência em Desenvolvimento Humano
            </motion.h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transformando vidas através do desenvolvimento humano integral. 
              Oferecemos atendimento especializado em diversas áreas da saúde mental e desenvolvimento.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Agende sua Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Adicionando o efeito de onda com degradê */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" style={{ stopColor: '#3b38a8' }} />
              <stop offset="50%" style={{ stopColor: '#3b38a8' }} />
              <stop offset="100%" style={{ stopColor: '#3b38a8' }} />
            </linearGradient>
          </defs>
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
};