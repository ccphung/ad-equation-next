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
              un parcours international qui m&apos;a conduite à étudier en
              Finlande, je parle couramment l&apos;anglais, l&apos;allemand, le
              portugais, le vietnamien et le français. Grâce à mes expériences
              et à ma vision globale, je me considère avant tout comme une
              <strong> citoyenne du monde</strong>. <br />
              S&apos;installer dans un nouveau pays peut sembler simple, mais
              <strong>
                {" "}
                trouver le lieu parfait pour débuter une nouvelle vie
              </strong>{" "}
              demande beaucoup plus que de simples démarches administratives.
              C&apos;est là que j&apos;interviens ! <br />
              Ingénieure de formation, mon objectif est d&apos;apporter
              <strong> efficacité et sérénité</strong> dans cette aventure. Le
              temps est précieux et il est essentiel de{" "}
              <strong>déléguer</strong> les tâches complexes à des experts pour
              se concentrer sur ce qui compte vraiment. <br />
              Si vous souhaitez commencer cette nouvelle étape de vie sans
              tracas et avec confiance, je suis là pour vous accompagner à
              chaque étape du processus. Ensemble, nous trouverons votre nouveau
              chez-vous à Porto de manière
              <strong> simple, rapide et efficace.</strong>
            </p>
            <p className="lg:text-[5em] text-[4em] text-right text-indigo-400">
              &rdquo;
            </p>
            <p className="text-[1.2em] text-stone-700 text-right">
              - Adeline, votre chasseur immobilier
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
