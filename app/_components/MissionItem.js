import {
  CalendarIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"; // Importation des icônes Heroicons
import Image from "next/image";

function MissionItem({
  onClick,
  isServiceModalOpen,
  isWorkModalOpen,
  isReferencesModalOpen,
}) {
  const services = {
    img: "1.jpg",
    title: "Services proposés",
    desc: [
      {
        icon: <CheckCircleIcon className="w-8 h-8 text-[#EF7970]" />,
        title: "Écouter des besoins",
        content:
          " Je commence toujours par une discussion approfondie pour comprendre votre besoin (type de bien, emplacement, budget, style…).",
      },
      {
        icon: <UserIcon className="w-8 h-8 text-[#EF7970]" />,
        title: "Recherche personnalisée",
        content:
          "Je m’appuie sur un réseau d’agents immobiliers professionnels et d’investisseurs particuliers pour vous trouver les meilleures opportunités sur le marché de Porto.",
      },
      {
        icon: <MagnifyingGlassIcon className="w-8 h-8 text-[#EF7970]" />,
        title: "Prise de contact proactive",
        content:
          "J’étudie l’intégralité du marché pour vous garantir les meilleures offres disponibles.",
      },
      {
        icon: <CalendarIcon className="w-8 h-8 text-[#EF7970]" />,
        title: "Organisation des visites",
        content:
          "Je prends en charge l’organisation de vos visites, vous permettant de gagner du temps et de visiter les biens les plus pertinents en toute sérénité.",
      },
      {
        icon: <DocumentTextIcon className="w-8 h-8 text-[#EF7970]" />,
        title: "Relecture du bail",
        content:
          "Afin d’assurer votre sécurité juridique, je relis attentivement chaque contrat de location pour vous éviter toute mauvaise surprise.",
      },
      {
        icon: <UsersIcon className="w-8 h-8 text-[#EF7970]" />,
        title: "Mise en relation avec des professionnels francophones",
        content:
          "Pour vous accompagner dans vos démarches, je vous mets en relation avec des professionnels francophones.",
      },
    ],
  };

  const work = {
    img: "2.jpg",
    title: "Mon métier",
    desc: (
      <>
        <p>
          Un{" "}
          <span className="font-semibold text-[#EF7970]">
            chasseur immobilier
          </span>{" "}
          est un professionnel de l&apos;immobilier qui agit en tant que{" "}
          <span className="text-[#5F66AC] font-semibold">
            mandataire de l&apos;acheteur ou du locataire
          </span>{" "}
          (et non du vendeur ou propriétaire, contrairement à un agent
          immobilier classique). Son rôle principal est de{" "}
          <span className="text-[#5F66AC] font-semibold">
            rechercher, sélectionner
          </span>{" "}
          et <span className="text-[#5F66AC] font-semibold">négocier </span> des
          biens immobiliers{" "}
          <span className="text-[#5F66AC] font-semibold">
            pour le compte de ses clients
          </span>
          , en toute impartialité, en fonction de leurs besoins, de leurs
          préférences et de leur budget.
        </p>

        <p>
          Rémunéré par l&apos;acheteur ou le locataire, il est un
          <span className="text-[#5F66AC] font-semibold">
            {" "}
            « intermédiaire de confiance »
          </span>{" "}
          qui facilite la recherche d&apos;un bien, tout en offrant une
          expertise et une aide dans les négociations et les démarches
          administratives.
        </p>
      </>
    ),
  };

  const references = {
    img: "3.jpg",
    title: "Mes références",
    desc: [
      {
        content: "Les entreprises qui me font confiance pour leurs salariés : ",
        images: ["1.png", "2.png", "3.png"],
      },

      {
        content:
          "Le réseau d’agents immobiliers avec qui je travaille entre autres : ",
        images: [
          "4.png",
          "5.png",
          "6.png",
          "7.png",
          "8.png",
          "9.png",
          "10.png",
        ],
      },
    ],
  };

  return (
    <button
      onClick={() => onClick((prev) => !prev)}
      className="fixed inset-0 backdrop-blur-md bg-black/30 bg-opacity-50 flex items-center justify-center p-5 z-50"
    >
      <div
        className="bg-white rounded-lg p-10 max-w-4xl w-full max-h-[600px] overflow-auto scroll-smooth z-10
        xl:[&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700 relative"
      >
        <h3 className="xl:text-[1.5em] text-lg font-semibold text-[#EF7970] my-2 text-center">
          {isServiceModalOpen && services.title}
          {isWorkModalOpen && work.title}
          {isReferencesModalOpen && references.title}
        </h3>

        <div className="space-y-6">
          {/* Services Modal */}
          {isServiceModalOpen && (
            <div className="space-y-6">
              {services.desc.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-4 p-4 rounded-lg shadow-lg bg-[#f9fafb]"
                >
                  {/* Icône */}
                  <div className="flex-shrink-0">{item.icon}</div>
                  {/* Description */}
                  <div className="flex-1">
                    <p className="font-semibold text-lg text-center">
                      {item.title}
                    </p>
                    <div className="text-sm text-gray-600 whitespace-pre-line text-justify">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Work Modal */}
          {isWorkModalOpen && (
            <div className="text-center">
              <div className="whitespace-pre-line text-justify">
                {work.desc}
              </div>
            </div>
          )}

          {/* References Modal */}
          {isReferencesModalOpen && (
            <div className="space-y-6">
              {references.desc.map((section, index) => (
                <div key={index}>
                  <p className="font-semibold text-lg text-center mb-4">
                    {section.content}
                  </p>
                  <div className="flex flex-wrap justify-center space-x-6">
                    {section.images.map((image, idx) => (
                      <div className="relative w-35 h-35" key={idx}>
                        <Image
                          fill
                          src={`/images/companies/${image}`}
                          alt={`Référence ${idx + 1}`}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

export default MissionItem;
