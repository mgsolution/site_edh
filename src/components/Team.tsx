import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Team.module.css';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

// Define an interface for team members for type safety and clarity
interface TeamMember {
  id: string;
  image: string;
  title: string;
  profession: string;
  description: string;
}

// Animation variants for Framer Motion (can be used for title or other elements if needed)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Updated teamImages array with all members from public/images
const teamImages: TeamMember[] = [
  {
    id: "aldrian-jube",
    image: "Aldrian-Jube.jpg",
    title: "Aldrian Jube",
    profession: "Psicóloga",
    description: "Atendo pelo TCC com uma visão integralista da saúde físia e psicológica a partir do 15 anos: LGBTQIAPN+, Mulheres com comorbidades entre saúde física e psicológica a partir do 15 anos: LGBTQIAPN+, Mulheres com comorbidades entre saúde física e auto conhecimento psicológico, ideação suicida ou depressão grave de qualquer idade."
  },
  {
    id: "aline-menezes",
    image: "Aline-Menezes.jpg",
    title: "Aline Menezes",
    profession: "Psicóloga",
    description: "Meu objetivo é ajudar mulheres, oferecendo suporte na sua vida pessoal e profissional, através do cuidado de suas emoções. Os atendimentos podem ser individuais ou em grupos. Utilizo a abordagm Terapia Cognitivo Comportamental-TCC Ofereço também psicoterapia com foco na carreira, orientação profissional para escolha ou mudança de carreira e avaliação psicossocial."
  },
  {
    id: "caline-dos-anjos",
    image: "Caline-dos-Anjos.jpg",
    title: "Caline dos Anjos",
    profession: "Psicóloga",
    description: "Ofereço psicoterapia de orientação analítica para crianças a partir de 6 anos e adultos. Esse atendimento busca explorar e compreender o inconsciente, os conflitos emocionais e os padrões de comportamento através da análise das experiências passadas e presentes." // Kept truncated from original
  },
  {
    id: "carllene-kukertt",
    image: "Carllene-Kukertt.jpg",
    title: "Carllene Kukertt",
    profession: "Psicopedagoga",
    description: "Sou Pedagoga, Psicopedagoga e acadêmica do curso de Psicologia. Trabalho na área da Psicopedagogia realizando avaliações com hipótese diagnósticas com foco em intervenções (alfabetização e raciocínio matemático) de crianças e adolescentes com dificultades de aprendizagem e idosos com declínio cognitivo. Especialista em atendimento de autismo com aplicação em ABA e TDAH."
  },
  {
    id: "deisymara-cavalini",
    image: "Deisymara-Cavalini.jpg",
    title: "Deysimara Cavalini", // Original title from code
    profession: "Neuropsicóloga",
    description: "Especialista em Avaliação Neuropsicológica e Reabilitação Neuropsicológica. Cursando especialização em Neurociencia, Comportamiento e Psicopatología e Intervenção ABA para Autismo e Deficiencia Intelectual. Serviços ofrecidos: Avaliação Neuropsicológica; Reabilitação Neuropsicológica; Avaliação Vocacional; Avaliação para Cirurgias; Psicoterapia Cognitiva-Comportamental; Estimulação Trancraniana por Corrente Continua (tDCS)."
  },
  {
    id: "diego-azevedo-costa",
    image: "Diego-Azevedo-Costa.jpg",
    title: "Diego Azevedo Costa",
    profession: "Psicólogo", // Placeholder - please update
    description: "Sou Psicólogo Clínico e pós-graduando en Terapia Analítico-Comportamental.Meu objetivo é promover a saúde mental por medio do desenvolvimento de repertórios comportamentais, auxiliando em questões como ansiedade, depressão, vícios, fobias, desenvolvimento de habilidades e relações interpessoais. Tenho formação em Evaliação Psicológica e Neuropsicologia,além de experiencia em registros e informações em saúde. Meu compromisso ofrecer um ambiente acolhedor e fundamentado no conhrcimrnto baseado em evidências, para que as mudanças aconteçam de forma genuina.Atendo adolescentes, adultos e idosos." // Placeholder - please update
  },
  {
    id: "eloiza-bazoti",
    image: "Eloiza-Bazoti.jpg",
    title: "Eloiza Bazoti",
    profession: "Psicóloga Infantil e Neuropsicóloga", // Placeholder - please update
    description: "Ofereço atendimento especializado em Psicoterapia Infantil e Avaliação Neuropsicológica para crianças de até 12 anos, auxiliando no desenvolvimento emocional, comportamental e cognitivo dos pequenos, promovendo um espaço seguro e acolhedor para o crescimento saudável."
  },
  {
    id: "jozenia-lisboa",
    image: "Jozenia-Lisboa.jpg",
    title: "Jozenia Lisboa",
    profession: "Psicóloga", // Placeholder - please update
    description: "Ofereço atendimento psicológico para famílias, casais (adultos, adolescentes, crianças), com foco em promover um ambiente de acolhimento e transformação. Utilizo a abordagem da Terapia do Esquema, que integra elementos de várias técnicas terapêuticas para entender e modificar padrões de comportamiento e cognições desadaptativas, visando a melhora na qualidade de vida e no bem-estar emocional de cada paciente."
  },
  {
    id: "kariny-lemes",
    image: "Kariny-Lemes.jpg",
    title: "Kariny Lemes",
    profession: "Psicóloga Infantil", // Placeholder - please update
    description: "Atendo crianças de até 14 anos utilizando a abordagem da Terapia Cognitivo-Comportamental (TCC). Meu foco está em casos de ansiedade, depressão, dificultades de relacionamento e cnflitos parentais, proporcionando suporte e estratégias para enfrentar desafios emocionais e comportamentales."
  },
  {
    id: "loraynne-gontijo",
    image: "Loraynne-Gontijo.jpg",
    title: "Loraynne Gontijo",
    profession: "Fonoaudióloga", // Placeholder - please update
    description: "Sou formada pela UNIPLAN desde 2010 e no momento estou cursando pós graduação em distúrbio da fala e da linguagem. Capacitações: Aba, deficiência múltiplas, Tdah. Áreas de atuação: Linguagem, leitura e escrita, motricidade, processamento auditivo central (pac). Exames: Audiometria, Impedanciometria e PAC."
  },
  {
    id: "maisa-brito",
    image: "Maisa-Brito.jpg",
    title: "Maisa Brito",
    profession: "Psicóloga", // Placeholder - please update
    description: "Ofereço suporte especializado para questões de ansiedade, depressão e conflitos interpessoais. Minha abordagem inclui trabalhar com relacionamentos, ajudando a resolver desafios e promover a comunicação eficaz. Além disso, ofereço orientação e suporte às mães, abordando os desafios e adaptabilidades associadas à maternidade."
  },
  {
    id: "maraiz-siqueira",
    image: "Maraiz-Siqueira.jpg",
    title: "Maraiz Siqueira",
    profession: "Psicóloga Clínica", // Placeholder - please update
    description: "Sou psicóloga clínica e pós graduanda em Teoria Cognitiva Comportamental e Análise do comportamento aplicada (ABA). Atendo crianças, adolescentes e adultos no formato presencial. Meu foco é o tratamento da ansiedade, desenvolvimento de habilidades, autonomia e bem-estar."
  },
  {
    id: "matheus-wisniewski",
    image: "Matheus-Wisniewski.jpg",
    title: "Matheus Wisniewski",
    profession: "Psicólogo", // Placeholder - please update
    description: "Atendo casos de ansiedade, depressão, transtornos de personalidad, emagrecimento, dificuldades de relacionamento e fobias, utilizo a Terapia Cognitivo-Comportamental (TCC) para promover mudanças nos padões de pensamento e comportamiento, visando melhorar a qualidade de vida."
  },
  {
    id: "samuel-oliveira",
    image: "Samuel-Oliveira.jpg",
    title: "Samuel Oliveira",
    profession: "Fisioterapeuta e Quiropraxista", // Placeholder - please update
    description: "Minha principal função é o bem-estar, utilizando técnicas específicas para tratar dores musculoesqueléticas, melhorar a nobilidade, e prevenir lesões. Sempre focando em restaurar o equilíbrio do corpo e melhorar a qualidade de vida."
  },
  {
    id: "tauany-moreira",
    image: "Tauany-Moreira.jpg",
    title: "Tauany Moreira",
    profession: "Psicóloga", // Placeholder - please update
    description: "Graduada em Psicologia, estudo os fundamentos da Psicanálise com foco crítico e social. Busco comprender a psicologia de forma integrada, considerando as vivências de cada pessoa, especialmente de mulheres e do público LGBTQIA+. Acredito na importância de uma escuta atenta e inclusiva, que acolha e contribua para a transformação diante de questões de gênero, sexualidade e desigualdades sociales."
  },
  {
    id: "telma-oliveira-cerutti-schmidt",
    image: "Telma-Oliveira-Cerutti-Schmidt.jpg",
    title: "Telma Oliveira C. Schmidt", // Kept shortened title from original code
    profession: "Psicóloga, Especialista en Educação Especial, Me. Processos de Desenvolvimanto Humano e Saúde. Idealizadora e Gestora do EDAH. CRP: 09/0081411",
    description: "Ofereço suporte a individuos e grupos, incluindo famílias e casais, em questões como desenvolvimento pessoal, relacionamentos e desafios emocionais. Utilizo técnicas modernas e abordagens baseadas em evidencias para promover o bem-estar e o crescimento psicológico de cada pessoa."
  }
];

export const Team = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const totalItems = teamImages.length;

  useEffect(() => {
    if (!carouselRef.current) return;

    const items = document.querySelectorAll(`.${styles.carousel__item}`);
    const radius = 700; // Raio do arco
    const theta = (2 * Math.PI) / items.length;

    items.forEach((item, index) => {
      const relativePosition = index - activeIndex;
      
      // Calcular posição no arco
      const angle = theta * relativePosition;
      const x = Math.sin(angle) * radius;
      const z = (Math.cos(angle) * radius) - radius;
      
      gsap.to(item, {
        x: x,
        z: z,
        rotationY: (relativePosition * 45), // Rotação suave dos cards
        scale: index === activeIndex ? 1 : 0.8,
        opacity: index === activeIndex ? 1 : 0.6,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, [activeIndex]);

  const prevCard = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  return (
    <section id="equipe" className="relative min-h-screen w-full bg-slate-900 overflow-hidden py-10 md:py-20">
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-sky-100 mb-10 md:mb-16"
        >
          Nossa Equipe
        </motion.h2>

        <div className={styles.carousel}>
          <div ref={carouselRef} className={styles.carousel__container}>
            {teamImages.map((member, index) => (
              <div
                key={member.id}
                className={`${styles.carousel__item} ${index === activeIndex ? styles.active : ''}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/${member.image}`}
                  alt={`Foto de ${member.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-semibold">{member.title}</h3>
                  <p className="text-white/80">{member.profession}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.carousel__button} ${styles['carousel__button--left']}`}
            onClick={prevCard}
            aria-label="Anterior"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            className={`${styles.carousel__button} ${styles['carousel__button--right']}`}
            onClick={nextCard}
            aria-label="Próximo"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Nova seção para descrição do membro ativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-sky-100 mb-2">
            {teamImages[activeIndex].title}
          </h3>
          <p className="text-lg text-sky-100/80 mb-4">
            {teamImages[activeIndex].profession}
          </p>
          <p className="text-sky-100/70 leading-relaxed">
            {teamImages[activeIndex].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};