import { Button } from "@/components/ui/button";

interface EventsProps {
  topWaveColor: string;
  bottomWaveColor: string;
}

export const Events = ({ topWaveColor, bottomWaveColor }: EventsProps) => {
  return (
    <section
      id="eventos"
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-8 relative"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/BG2.jpg')` }}
    >
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: topWaveColor }}>
          <defs>
            <linearGradient id="serviceWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: topWaveColor }} />
              <stop offset="100%" style={{ stopColor: topWaveColor }} />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>1º Simpósio do EDH</h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>Neuropsicologia e Escola</h3>
        <p className="text-xl mb-8">28 de Junho • Das 08h30 às 18h</p>
        <a href="https://mgsolucao.github.io/1-SimposioEDH/" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Acessar o Simpósio
          </Button>
        </a>
      </div>
       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: bottomWaveColor }}>
          <defs>
            <linearGradient id="serviceWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: bottomWaveColor }} />
              <stop offset="100%" style={{ stopColor: bottomWaveColor }} />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};