import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardHover = {
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: { type: "spring", stiffness: 300 }
  }
};

export const About = () => {
  return (
    <section
      id="sobre"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/site_edh/images/BG1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Adiciona um fundo branco semi-transparente
        backgroundBlendMode: "overlay", // Mistura o fundo com a imagem
      }}
    >
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aboutWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#35328f' }} /> {/* purple-200 */}
              <stop offset="100%" style={{ stopColor: '#221f70' }} /> {/* purple-100 */}
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#aboutWaveGradient1)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="text-center pt-10"
        >
          {/* Cards principais com hover effect */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={cardHover}
              whileHover="hover"
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition-all duration-300"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[#121D2B] mb-6">Quem Somos</motion.h2>
              <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                Somos uma instituição que se preocupa com o bem-estar das pessoas, oferecendo serviços de qualidade em diversas áreas da saúde, com a finalidade de promover o desenvolvimento integral de nossos clientes. Nascemos do sonho de ter um espaço dialógico de busca por qualidade de vida, que fosse acolhedor e ético, mas basicamente humanizado, reconhecendo a diversidade existente em nossa sociedade e a singularidade que cada um constrói a partir de sua trajetória de vida, sobre si mesmo e seu lugar no mundo. Por isso, somos gente cuidando de gente!!
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-[#121D2B] mb-6">Missão</motion.h2>
              <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                Oferecer aos clientes EDH serviços de qualidade em saúde e educação que promovam o desenvolvimento pleno e
                constante das pessoas desde a infância, considerando as potencialidades e singularidades de cada um, num espaço
                dialógico de construção de conhecimento sobre si mesmo e sobre o mundo que o cerca.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#121D2B] mb-6">Visão</h2>
              <p className="text-black leading-relaxed text-left">
                Reconhecemos a pessoa como sujeito que se desenvolve ao longo da vida, de maneira constante e nas vivências do
                cotidiano, construindo uma dinâmica relacional singular com a sociedade. Com isso, queremos ser referência na
                promoção deste processo ininterrupto de desenvolvimento do humano, auxiliando as pessoas a obterem qualidade de
                vida em qualquer faixa etária.
              </p>
            </motion.div>
          </div>

          {/* Seção de Valores */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="mt-12 bg-white/0 backdrop-blur-sm p-10 rounded-xl shadow-lg"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-6xl font-bold text-[#BEA151] mb-8 text-center"
              style={{
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3), -2px -2px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              Valores
            </motion.h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.h3 variants={fadeInUp} className="font-bold text-[#121D2B] text-2xl mb-4">Ética</motion.h3>
                <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                  Atuamos com respeito, sigilo, responsabilidade e alteridade, garantindo práticas profissionais alinhadas aos
                  princípios legais e morais que norteiam a saúde e a educação.
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.h3 variants={fadeInUp} className="font-bold text-[#121D2B] text-2xl mb-4">Compromisso</motion.h3>
                <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                  Buscamos a excelência no cuidado, com o desenvolvimento contínuo da equipe e com a confiança
                  depositada por cada pessoa que busca nosso espaço, honrando essa confiança com seriedade e dedicação.
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.h3 variants={fadeInUp} className="font-bold text-[#121D2B] text-2xl mb-4">Acolhimento</motion.h3>
                <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                  Acolher cada indivíduo com escuta ativa, empatia e sensibilidade, respeitando sua história, suas dores e
                  seus tempos, é nossa prioridade.
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.h3 variants={fadeInUp} className="font-bold text-[#121D2B] text-2xl mb-4">Cientificidade</motion.h3>
                <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                  Nossas práticas são orientadas pelo saber científico, e buscamos constante atualização,
                  fundamentando nossas condutas em evidências científicas, assegurando a qualidade e a segurança no cuidado.
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <motion.h3 variants={fadeInUp} className="font-bold text-[#121D2B] text-2xl mb-4">Humanização</motion.h3>
                <motion.p variants={fadeInUp} className="text-black leading-relaxed text-left">
                  Acreditamos que o atendimento humanizado, que reconheça e respeite a singularidade de cada um
                  deva ser a essência dos serviços em saúde e educação, e desta forma procuramos atender nossos clientes.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Onda Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aboutWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#221f70' }} /> {/* purple-100 */}
              <stop offset="100%" style={{ stopColor: '#221f70' }} /> {/* purple-200 */}
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#aboutWaveGradient2)"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: 'calc(100% + 1.3px)', height: '74px' as any }}>
          <defs>
            <linearGradient id="aboutWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ddd', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="aboutWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgba(103,58,183,0.5)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.5)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0,0 C29.97,62.77 70.9,120 121.63,120 C172.36,120 219.73,64.17 270.63,23.17 C321.53,-17.83 372.2,-6.17 423.43,34.83 C474.66,75.83 525.63,120 576.36,120 C627.09,120 677.66,77.83 728.03,36.83 C778.4,-4.17 828.63,-13.33 878.73,27.67 C928.83,68.67 978.73,120 1028.43,120 C1078.13,120 1127.63,64.5 1177,28.83 C1186.5,22.5 1196.17,16.33 1200,14 L1200,0 L0,0 Z" fill="url(#aboutWaveGradient1)"></path>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#aboutWaveGradient2)"></path>
        </svg>
      </div>
    </section>
  );
};