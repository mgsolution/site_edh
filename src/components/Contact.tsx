import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para agendar sua consulta ou tirar dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <p className="text-gray-600">(61) 99624-3828</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">edh.espacodedesenvolvimento@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Endereço</h3>
                <p className="text-gray-600">
                  rua 35, 179, setor Bosque<br />
                  formosa, GO, 73802-075
                  </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.501397792138!2d-47.3401738!3d-15.5509199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a2659f0eee9b%3A0x4ee7a820c579fb9!2sRua%2035%2C%20179%20-%20St.%20Bosque%2C%20Formosa%20-%20GO%2C%20Brazil!5e0!3m2!1sen!2sus!4v1637164829112"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};