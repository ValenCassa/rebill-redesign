import { ArrowLeftIcon } from "@/components/icons/arrow-left-icon";
import Image from "next/image";

export const DesktopProductDescription = () => {
  return (
    <div className="sm:flex hidden flex-col items-end px-16 pt-16 flex-1 bg-subtle">
      <div className="max-w-[480px] w-full space-y-8 sticky top-16">
        <div className="inline-flex items-center relative gap-1.5">
          <ArrowLeftIcon className="absolute top-1/2 -left-6 -translate-y-1/2 text-[#18181B]/20" />
          <div className="size-5 rounded grid place-content-center bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12),_0px_0px_0px_1px_rgba(0,_0,_0,_0.08)]">
            <Image
              alt="SoyHenry Logo"
              src={"/henry-logo.jpeg"}
              width={16}
              height={16}
              className="rounded-sm"
            />
          </div>
          <p className="text-compact-sm font-medium flex items-center">
            SoyHenry
          </p>
        </div>

        <div className="flex items-center justify-between text-compact-xl">
          <p className="font-medium">Upskilling-AI for BI-Henry</p>
          <p className="text-subtle">$ 134.00</p>
        </div>

        <Image
          alt="SoyHenry thumbnail"
          src="/henry-blog.jpg"
          className="w-full h-[280px] rounded object-cover object-center"
          width={2000}
          height={575}
        />

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-compact font-medium">
              Lleva tu carrera al próximo nivel de la mano de expertos
            </p>
            <p className="text-md">
              El contenido está diseñado y validado por referentes de la
              industria con más de 10 años de experiencia. Aprende de la mano de
              nuestros instructores expertos que guiarán tu aprendizaje
              aportando una visión actualizada y práctica del mercado laboral.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-compact font-medium">
              Qué vas a aprender en este curso
            </p>
            <p className="text-md">
              Genera código automáticamente, documenta más rápido y automatiza
              pruebas unitarias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
