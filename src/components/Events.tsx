import { Button } from "@/components/ui/button";

export const Events = () => {
  return (
    <section
      id="eventos"
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 relative"
      style={{ backgroundImage: `url('/docs/images/mosaico.jpg')` }}
    >
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
    </section>
  );
};