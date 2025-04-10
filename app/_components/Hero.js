import Image from "next/image";
import Flag from "./Flag";

function Hero() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col mt-5 max-w-[1048px] m-4">
        <div className="flex flex-row justify-center align-middle">
          <div className="max-w-[500px] flex flex-col justify-end mr-2">
            <h1 className="text-center font-serif text-[2em] mb-2">
              Chasseur immobilier
            </h1>

            <h2 className="text-center m-2">
              Nous cherchons, vous trouvez... sans effort ! <br /> A vos côtés
              pour défendre vos intérêts et vous assere le meilleur choix, en
              toute sérénité.
            </h2>
            <div className="flex items-end h-50 relative">
              <Image
                className=" xl:block object-cover"
                fill
                src="/images/hero/hero4.jpg"
                alt="porto"
              />
            </div>
          </div>

          <div className="w-32 sm:w-48 md:w-64 size-96 object-cover hidden xl:block relative">
            <Image src="/images/hero/hero3.jpg" alt="inside appartment" fill />
          </div>
        </div>

        <div className="justify-center xl:justify-end flex mt-4"></div>
      </div>
    </div>
  );
}

export default Hero;
