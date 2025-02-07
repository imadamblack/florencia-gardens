import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import iLocation from '../../public/landing/location.png';
import isketch from '../../public/landing/sketch.png';
import ialberca from '../../public/landing/alberca.png';
import igym from '../../public/landing/gym.png';
import iterraza from '../../public/landing/terraza.png';
import iskybar from '../../public/landing/skybar.png';
import ilobby from '../../public/landing/lobby.png';
import ijacuzzi from '../../public/landing/jacuzzi.png';
import binvest from '../../binvest-logo.avif';
import creato from '../../creato-logo.avif';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Regístrate, da clic',
    description: 'Regístrate para entrar a la etapa 1 de Preventa',
  };

  return (
    <>
      <section className="relative min-h-[80vh] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-full absolute bg-gradient-to-t from-brand-1 md:from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container w-full text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-bold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Por fin, un edificio en Providencia con diseño de verdad
          </h1>
          <p className="ft-3 mt-4">Departamentos desde $4.5 mdp</p>
          <div className="flex flex-col justify-start items-start mt-12">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-2 md:text-left">{cta.description}</p>
          </div>
          <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>

        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 my-16">
        <div className="relative">
          <Image src={i01} layout="fill" objectFit="cover"/>
        </div>
        <div className="reading-container">
          <p className="ft-2">
            Porque en Florencia Gardens, no hablamos de "propiedades". Hablamos de legado.
            <br/><br/>
            Florencia Gardens no es solo un desarrollo inmobiliario; es exclusividad, diseño y rentabilidad. Diseñamos
            este proyecto en el corazón de Providencia para asegurar que tu patrimonio sea rentable.
          </p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué Florencia Gardens es tu próxima inversión?"
        description="Ahí te van tres razones para invertir aquí (no vas a necesitar más):"
        image={i02}
      />
      <section className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-16">
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Plusvalía que no necesita presentación</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i03} className="object-cover"/>
            </div>
            <p className="order-3">Providencia es una zona en constante crecimiento, así que, tu depa va a aumentar su
              valor hasta un 20%</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Providencia nunca falla</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={iLocation} className="object-cover"/>
            </div>
            <p className="order-3">Acceso inmediato a hospitales, escuelas y zonas comerciales, bares, restaurantes y
              entretenimiento, todo para hacer crecer el valor de tu propiedad</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Diseño de primer mundo</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={isketch} className="object-cover"/>
            </div>
            <p className="order-3">Diseñado por <b>Creato Arquitectos</b> (con proyectos realizados en Emiratos Árabes, Francia, Brasil, entre otros)
              que crea espacios con tecnología avanzada y acabados boutique que no les puedes poner un “pero”</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Amenidades"
        title="Con todo lo necesario para que vivas increíble o lo rentes de volada"
        image={i06}
      />
      <section className="container my-16 md:space-y-32">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full items-stretch">
            <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
              <Image src={ilobby} layout="fill" className="object-cover"/>
            </div>
            <h3 className="order-1 md:order-2 mt-8 ft-5 font-bold">Lobby</h3>
          </div>
          <div className="w-full items-stretch">
            <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
              <Image src={ialberca} layout="fill" className="object-cover"/>
            </div>
            <h3 className="order-1 md:order-2 mt-8 ft-5 font-bold">Alberca</h3>
          </div>
          <div className="w-full items-stretch">
            <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
              <Image src={igym} layout="fill" className="object-cover"/>
            </div>
            <h3 className="order-1 md:order-2 mt-8 ft-5 font-bold">Gimnasio</h3>
          </div>
          <div className="w-full items-stretch">
            <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
              <Image src={iskybar} layout="fill" className="object-cover"/>
            </div>
            <h3 className="order-1 md:order-2 mt-8 ft-5 font-bold">Skybar</h3>
          </div>
          <div className="w-full items-stretch">
            <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
              <Image src={iterraza} layout="fill" className="object-cover"/>
            </div>
            <h3 className="order-1 md:order-2 mt-8 ft-5 font-bold">Terrazas</h3>
          </div>
          <div className="w-full items-stretch">
            <div className="relative w-full pt-[100%] rounded-xl overflow-hidden">
              <Image src={ijacuzzi} layout="fill" className="object-cover"/>
            </div>
            <h3 className="order-1 md:order-2 mt-8 ft-5 font-bold">Jacuzzi</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title="No lo decimos nosotros. Lo dicen quienes ya confían en Binvest y Creato"
        image={i07}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white mx-auto">
            <div className="w-full flex flex-col bg-brand-1 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-2">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2">
                  Binvest y Creato siempre son garantía de buenos proyectos. No me cabe duda que Florencia Gardens será un gran proyecto, con excelentes rendimientos.
                </p>
                <div className="mt-auto">
                  <p className="text-brand-2 ft-4 font-bold">CARLOS M</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-1 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-2">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2">
                  Conozco muy bien el trabajo del arquitecto Javier Cuevas de Creato, cada proyecto es una obra maestra. Florencia Gardens
                  es un proyecto que entiende el lujo y lo traduce en ROI. Invertir aquí va a ser la mejor decisión del año.
                </p>
                <div className="mt-auto">
                  <p className="text-brand-2 ft-4 font-bold">ANA M.</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-1 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-2">
                  <div className="material-icons ft-11">format_quote</div>
                </div>
                <p className="ft-2">
                  Esto no es solo una propiedad, es una declaración de una gran alianza. Ya estoy esperando la preventa para comprar mi depa en Florencia Gardens
                </p>
                <div className="mt-auto">
                  <p className="text-brand-2 ft-4 font-bold">LUIS G.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/*<Blockbuster*/}
      {/*  overhead="Modelos"*/}
      {/*  title="Tenemos la envasadora que necesitas para tus productos"*/}
      {/*  image={i11}*/}
      {/*/>*/}
      {/*<section className="container my-16">*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*    <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-gray-400">*/}
      {/*      <div className="relative w-full h-[30rem]">*/}
      {/*        <Image src={i12} layout="fill" objectFit="cover"/>*/}
      {/*      </div>*/}
      {/*      <div className="p-8">*/}
      {/*        <h3 className="ft-3">Envasadora Premium Chica</h3>*/}
      {/*        <p className="ft-2 mb-8 font-bold">$350,000.00 MXN</p>*/}
      {/*        <hr/>*/}
      {/*        <ul className="mt-8 space-y-4">*/}
      {/*          <li className="before:content-['›'] before:mr-4">Para presentaciones pequeñas</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Hasta 16,000 bolsas por día*</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Granulados pequeños, polvos, semi líquidos o pastosos.*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-gray-400">*/}
      {/*      <div className="relative w-full h-[30rem]">*/}
      {/*        <Image src={i13} layout="fill" objectFit="cover"/>*/}
      {/*      </div>*/}
      {/*      <div className="p-8">*/}
      {/*        <h3 className="ft-3">Envasadora Premium Grande</h3>*/}
      {/*        <p className="ft-2 mb-8 font-bold">$1’000,000.00 MXN</p>*/}
      {/*        <hr/>*/}
      {/*        <ul className="mt-8 space-y-4">*/}
      {/*          <li className="before:content-['›'] before:mr-4">Para presentaciones grandes</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Hasta 10,000 bolsas por día*</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Frituras, granulados, polvos, semi líquidos o pastosos.*/}
      {/*          </li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Capacidad de hasta 1.2kg** de producto.</li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-gray-400">*/}
      {/*      <div className="relative w-full h-[30rem]">*/}
      {/*        <Image src={i14} layout="fill" objectFit="cover"/>*/}
      {/*      </div>*/}
      {/*      <div className="p-8">*/}
      {/*        <h3 className="ft-3">Envasadora Multicabezal</h3>*/}
      {/*        <p className="ft-2 mb-8 font-bold">$1’500,000.00 MXN</p>*/}
      {/*        <hr/>*/}
      {/*        <ul className="mt-8 space-y-4">*/}
      {/*          <li className="before:content-['›'] before:mr-4">Para presentaciones pequeñas y grandes</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Hasta 15,000 bolsas por día*</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Granulados pequeños, frituras voluminosas.</li>*/}
      {/*          <li className="before:content-['›'] before:mr-4">Capacidad de hasta 3kg** de producto.</li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex flex-col justify-center items-center mt-16">*/}
      {/*    <Link href="#contact">*/}
      {/*      <a onClick={() => setLastClick('models')} className="button mb-4">{cta.main}</a>*/}
      {/*    </Link>*/}
      {/*    <p className="-ft-2 text-center">{cta.description}</p>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <Blockbuster
        overhead="Garantías"
        title="Invertir en Florencia Gardens es tan lógico como inevitable."
        image={i08}
      />
      <section className="py-16 bg-[#1c1c1c]">
        <div className="reading-container mb-16">
          <p className="ft-6 text-center text-white">Florencia Gardens es un proyecto desarrollado por:</p>
          <div className="grid grid-cols-2 my-16">
            <div className="relative">
              <Image src={creato} objectPosition="bottom"/>
            </div>
            <div className="relative">
              <Image src={binvest} objectPosition="bottom"/>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">Proyectos en Dubai, Arabia Saudita,
              New York, Francia y el Reino Unido.</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">Plusvalía de 20% en promedio en Providencia.</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">Diseñado por desarrolladores con trayectoria internacional.</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">Garantía de entrega y calidad superior.</p>
          </div>
        </div>

        <div className="reading-container flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      {/*<Blockbuster*/}
      {/*  overhead="Alianzas"*/}
      {/*  title="Ser parte de la evolución y mejora en la producción de nuestros clientes es nuestro mayor logro."*/}
      {/*  image={i16}*/}
      {/*/>*/}
      {/*<section className="container my-40 grid grid-cols-2 md:grid-cols-3 gap-20">*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo01} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo02} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo03} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo04} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo05} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*  <div className="relative w-full h-[12rem]">*/}
      {/*    <Image src={logo06} layout="fill" objectFit="contain"/>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<Blockbuster*/}
      {/*  overhead="Preguntas frecuentes"*/}
      {/*  title="Si tienes dudas, probablemente estén aquí"*/}
      {/*  image={i17}*/}
      {/*/>*/}
      {/*<section className="container py-8">*/}
      {/*  <Faqs/>*/}
      {/*</section>*/}

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="!font-bold text-white">
              Ya llegaste hasta aquí, agenda una sesión gratuita para entrar en nuestra primera etapa de preventa.
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Déjanos tus datos para enviarte información exclusiva sobre Florencia Gardens.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
