import Image from "next/image";

export const Payment = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <button
        tabIndex={0}
        type="button"
        className="w-full h-9 bg-blue-500 text-white font-medium text-compact-sm rounded-md hover:bg-blue-600 active:bg-blue-700 focus:ring-4 ring-blue-100 ring-offset-2 focus:outline-none transition-all"
      >
        Pagar
      </button>
      <p className="text-compact-xs text-subtle text-center">
        Al confirmar el pago, autorizas a Henry Educación S.A. a cobrarte
        futuros pagos de acuerdo con sus condiciones
      </p>

      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-[5px]">
          <p className="text-compact-xs text-subtle">Facilitado por</p>
          <a
            href="https://www.rebill.com/en"
            target="_blank"
            rel="noreferrer"
            className="grayscale hover:grayscale-0 transition-all outline-none"
          >
            <Image
              alt="Rebill logo"
              width={57}
              height={12}
              src={"/rebill-letter-logo.png"}
            />
          </a>
        </div>

        <hr className="w-px h-3 bg-black/[0.06]" />

        <p className="text-compact-xs text-subtle">Términos y condiciones</p>
      </div>
    </div>
  );
};
