import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center py-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center">
        <h2 className="ft-8 text-center">
          Gracias por contactarnos, muy pronto uno de nuestros asesores te contactará con tu cotización
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center ft-4 mt-16">Si tienes dudas puedes contactarnos vía WhatsApp</p>
          <a
            className="button !bg-brand-5 ft-4 flex justify-center items-center mt-6"
            href={`https://wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
            target="_blank"
          >
            <span className="material-icons">arrow_forward</span>Da click aquí<span
            className="text-white material-icons">arrow_back</span>
          </a>
          <a
            className="ft-2 mt-12 py-3 px-6 rounded-lg items-center text-brand-1 cursor-pointer"
            href={info.surveyRedirect}
            target="_blank"
          >
            O programa una llamada <span className="font-semibold">aquí</span> ›
          </a>
        </div>

      </div>
    </section>
  );
}
