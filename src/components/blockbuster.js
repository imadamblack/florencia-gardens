import Image from 'next/image';

export default function Blockbuster({overhead, title, description, image}) {
  return (
    <section className="relative flex flex-col justify-end min-h-[60vh] w-screen md:mb-0 mx-auto pt-12 md:py-20">
      {/*<div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-60 z-10"/>*/}

      <div className="container mx-auto z-20">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch">
          <div className="w-full md:w-2/3 p-8 md:p-14">
            {/*<p className="overhead">{overhead}</p>*/}
            <h2
              dangerouslySetInnerHTML={{__html: title}}
              className="my-auto ft-10 font-normal"
            />
            <p className="ft-3 mt-8">{description}</p>
          </div>
        </div>
      </div>

      <div className="w-full pt-[60%] absolute bottom-0 bg-gradient-to-t from-white via-white md:via-transparent to-transparent opacity-90 z-10"/>
      <Image src={image} layout="fill" className="object-cover"/>
    </section>
  );
}