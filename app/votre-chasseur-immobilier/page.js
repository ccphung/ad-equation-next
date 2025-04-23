import Image from "next/image";
import Flag from "@/app/_components/Flag";

export default function Page() {
  return (
    <>
      <h1 className="m-5 text-center text-[2.5em] text-stone-800 font-bold mb-5">
        Adeline, votre chasseur immobilier 
      </h1>
      <Flag />
      <div className="flex items-end justify-center m-5">
        <div className="flex flex-col justify-end items-center lg:flex-row max-w-[1048px]">
          <div>
            <Image
              width={300}
              height={500}
              src="/images/hunter/1.jpg"
              alt="chasseur immobilier"
            />
          </div>
          <div className="ml-5 max-w-[500px]">
            <p className="lg:text-[5em] text-[4em] text-indigo-400 mb-[-20px]">
              &ldquo;
            </p>
            <p className=" italic lg:text-[1.2em] text-[1em] text-stone-600 text-justify">
              Française d&apos;origine vietnamienne, mariée à un Portugais, avec
              un parcours international, je parle plusieurs langues : le
              français, le vietnamien, l’anglais, l’allemand et le portugais.
              Ces expériences m’ont offert une{" "}
              <span className="text-[#5F66AC] font-semibold">
                ouverture culturelle précieuse
              </span>{" "}
              et une{" "}
              <span className="text-[#5F66AC] font-semibold">
                grande capacité d’adaptation
              </span>
              .
              <br />
              <br />
              ​S&apos;installer dans un nouveau pays peut sembler simple, mais{" "}
              <span className="text-[#5F66AC] font-semibold">
                trouver le lieu parfait pour débuter une nouvelle vie
              </span>{" "}
              demande beaucoup plus que de simples démarches administratives.
              C&apos;est là que j&apos;interviens ! ​
              <br />
              <br />
              Ingénieure de formation, j’aime allier{" "}
              <span className="text-[#5F66AC] font-semibold">
                rigueur et sens pratique
              </span>{" "}
              pour faciliter chaque étape de cette transition. Mon objectif est
              de vous{" "}
              <span className="text-[#5F66AC] font-semibold">
                faire gagner du temps
              </span>
              , de vous{" "}
              <span className="text-[#5F66AC] font-semibold">
                éviter le stress inutile
              </span>{" "}
              et de vous permettre de vous concentrer sur l’essentiel.​ Si vous
              envisagez de vous installer à Porto et souhaitez être
              accompagné(e) avec{" "}
              <span className="text-[#5F66AC] font-semibold">
                bienveillance et efficacité
              </span>
              , je serais ravie de vous guider dans cette belle aventure.
            </p>
            <p className="lg:text-[5em] text-[4em] text-right text-indigo-400">
              &rdquo;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
