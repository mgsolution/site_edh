import styles from './Services.module.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Psychology, Hearing } from '@mui/icons-material';
import { Brain, Stethoscope, Baby } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import React, { useRef, useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const services = [
  {
    icon: Accessibility,
    title: "Fisioterapia",
    description: "Atuamos na prevenção, diagnóstico e tratamento de disfunções do movimento causadas por doenças, lesões ou alterações posturais. Tais disfunções podem ter origem em doenças, condições genéticas, acidentes, traumas e outros fatores prejudiciais à mobilidade. Nossos profissionais utilizam com recursos como exercícios terapêuticos, técnicas manuais e aparelhos específicos para promover a reabilitação funcional, melhorar a qualidade de vida e prevenir agravamentos",
    color: "bg-blue-100",
    image: "/images/Especialidades/Fisioterapia.png",
  },
  {
    icon: Baby,
    title: "Fisioterapia Infantil",
    description: "A fisioterapia infantil é voltada ao atendimento de bebês, crianças e adolescentes com atrasos no desenvolvimento motor, síndromes genéticas, paralisia cerebral, doenças neuromusculares, entre outras condições. O trabalho visa estimular o desenvolvimento motor e funcional por meio de técnicas lúdicas adaptadas à faixa etária. Cuidamos do seu bebê para que ele desenvolva de forma global e integrada.",
    color: "bg-blue-100",
    image: "/images/Especialidades/Fisoiterapia Infantil.jpeg",
  },
  {
    icon: Psychology,
    title: "Psicologia Clínica",
    description: "A psicologia clínica compreende a avaliação, diagnóstico e tratamento de questões emocionales, comportamentais e transtornos mentales. Nossos psicólogos clínicos utilizam diferentes abordagens terapêuticas (como Psicanálise, Terapia Cognitivo-Comportamental (TCC), Análise do Comportamento, Terapia do Esquema, Teoria da Subjetividade numa perspectiva Cultural-histórica) para promover o autoconhecimento, o bien-estar e o desenvolvimento pessoal dos pacientes.",
    color: "bg-blue-100",
    image: "/images/Especialidades/Psicologia Clinica.jpeg",
  },
  {
    icon: Baby,
    title: "Psicologia Infantil",
    description: "A psicologia infantil é uma área da psicologia clínica voltada para o acompanhamento de crianças e suas dificuldades emocionales, comportamentais ou de desarrollo. O trabajo involucra la escucha de la criança, orientação a los padres e intervenções específicas para promover um desenvolvimento psicológico saudável. Contamos com um espaço lúdico e adequado para o atendimento de crianças desde la mais tenra idade. E nuestros profissionais possuem amplia experiencia no atendimento deste público através dos más diversos recursos como brinquedos e brincadeiras, oficinas práticas, interacción familiar, literatura, entre otros.",
    color: "bg-blue-100",
    image: "/images/Especialidades/Psicologia Infantil.png",
  },
  {
    icon: Stethoscope,
    title: "Psicopedagogia",
    description: "A psicopedagogia atua na identificação e intervenção de dificuldades e distúrbios de aprendizagem. O psicopedagogo observa o processo de aquisição do conhecimento, considerando aspectos cognitivos, emocionales identifica obstáculos no aprendizado e propõe estrategias personalizadas que envolvem aspectos cognitivos, emocionales e sociales, usando conocimientos da pedagogia, psicologia, motricidade e otros campos, a fin de favorecer o processo de aprendizagem. Nossos profissionais estão habilitados para atender as diferentes faixas etárias (infância, adolescência, adultez e idosos), incluindo pacientes neurodivergentes ou com processos de declínios cognitivos.",
    color: "bg-blue-100",
    image: "/images/Especialidades/Psicopedagogia.jpeg",
  },
  {
    icon: Brain,
    title: "Neuropsicologia",
    description: "A neuropsicologia estuda a relação entre o cérebro e o comportamento humano, para compreender como o cérebro atua nas funções cognitivas, nas emoções e no modo de vida das pessoas através do conhecimento da neurociência e da psicologia, " +
      "conseguindo avaliar, diagnosticar e intervir alterações cognitivas e comportamentais resultantes de lesões ou disfunções cerebrais congênitas ou adquiridas. Na prática, o neuropsicólogo realiza avaliações cognitivas detalhadas " +
      "(atenção, memória, linguagem, funções executivas, etc.), avaliação dos diferentes transtornos mentales e/ou de personalidad, con uso de instrumentos validados pelo Conselho Federal de Psicologia, e auxiliam nos diagnósticos, " +
      "encaminhamentos e intervenções assertivas. Também atua na reabilitação cognitiva e neurofuncional, melhorando a qualidade de vida dos pacientes. Nossos profissionais possuem habilitação e instrumentos \"padrão ouro\", " +
      "além de se manterem em constante formação acadêmico-científica, para uma atuação ética e competente.",
    color: "bg-blue-100",
    image: "/images/Especialidades/neuropsicologia.jpeg",
  },
  {
    icon: Hearing,
    title: "Fonoaudiologia",
    description: "A fonoaudiologia tem sua atuação voltada para os distúrbios da comunicação humana, como dificuldades na fala, linguagem oral e escrita, audição, voz, fluência (gagueira) e motricidade orofacial e deglutição. Tem a finalidade de promover melhora na comunicação e linguagens, prevenir, diagnosticar e tratar questões relacionadas a estes aspectos, atuando na reabilitação e no desenvolvimento da comunicação e da alimentação, nas diferentes faixas etárias, desde bebês a idosos. Além disso, para alguns diagnósticos, contamos com exames específicos com audiometria, impedanciometria e avaliação do PAC. Contamos profissionais habilitados para realização dos exames, bem como para as intervenções adequadas, inclusive tratamento para o TPAC – Transtorno do Processamento Auditivo – com o uso de cabide acústica, e para acompanhamento de pacientes atípicos.",
    color: "bg-blue-100",
    image: "/images/Especialidades/Fonoaudiologia.jpeg",
  },
  {
    icon: Brain,
    title: "Terapia ABA (Análise do Comportamento Aplicada)",
    description: "ABA é uma abordagem baseada na ciência do comportamento, frequentemente aplicada no tratamento de pessoas com Transtorno do Espectro Autista (TEA). Utiliza reforços positivos e estratégias estruturadas para desenvolver habilidades sociais, cognitivas, acadêmicas e de comunicação, reduzindo comportamentos desadaptativos. Nossos profissionais possuem habilitação adequada para atuação com Terapia ABA, com certificação e ampla experiência",
    color: "bg-blue-100",
    image: "/images/Especialidades/ABA.jpeg",
  }
];

export const Services = () => {

  return (
    <section
      id="servicos"
      className={`${styles.main} relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200`}
    >
      {/* Conteúdo existente */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 pt-10"
        >
          <h2 className={`${styles.main_heading} text-4xl font-bold text-center mb-8 text-gray-800`}>Especialidades</h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xs md:max-w-full mx-auto"
        >
          <CarouselContent className="-ml-1">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 basis-5/12 md:basis-5/12 lg:basis-5/12">
                <div className="p-1">
                  <Card className={`${service.color || 'bg-white'} hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg`}>
                    <CardHeader className="pb-0 px-2 flex flex-row items-center gap-3 items-start">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                      >
                        {service.icon && <service.icon className="w-6 h-6 text-primary" />}
                      </motion.div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pt-0">
                      {service.image && (
                        <img src={service.image} alt={service.title} className="w-full h-80 object-cover mb-4 rounded-md" />
                      )}
                      <CardDescription className="text-left">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Onda Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="serviceWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#121D2B' }} />
              <stop offset="100%" style={{ stopColor: '#121D2B' }} />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#serviceWaveGradient2)"></path>
        </svg>
      </div>
    </section>
  );
}
