import QuestionItem from "@/app/_components/QuetionItem";

const questions = [
  {
    question: "Qu’est-ce qu’un chasseur immobilier ?",
    reponse:
      "Un chasseur immobilier est un professionnel de l'immobilier qui agit en tant que mandataire de l'acheteur ou du locataire (et non du vendeur ou propriétaire, contrairement à un agent immobilier classique). Son rôle principal est de rechercher, sélectionner et négocier des biens immobiliers pour le compte de ses clients, en fonction de leurs besoins, de leurs préférences et de leur budget.",
  },
  {
    question: "Quelle est la différence avec un agent immobilier classique ?",
    reponse:
      "L’agent immobilier représente le vendeur, mais doit veiller à la fois aux intérêts du vendeur et de l’acheteur. Le chasseur immobilier représente uniquement l’acheteur. En toute impartialité, il le conseille et l’accompagne jusqu’à la signature de l’acte authentique ou du bail. Il veille sur les intérêts de son client acheteur ou locataire",
  },
  {
    question: "A qui s’adressent les services du chasseur immobilier ?",
    reponse: `– Aux personnes qui désirent être accompagnées d’un expert afin d’éviter les erreurs dues à la méconnaissance du marché et/ou á la barrière de la langue \n– Aux personnes qui n’ont pas beaucoup de temps à consacrer à leur recherche\n– Aux personnes qui veulent maximiser leurs chances sur un marché immobilier tendu`,
  },
  {
    question: "Quel est le coût de votre service ?",
    reponse:
      "Le tarif est forfaitaire, sans frais d’agence supplémentaires.​ Chaque recherche est unique : le coût dépend de plusieurs critères tels que votre profil (étudiant, salarié avec contrat local ou non…), vos besoins (extérieur, avec animaux…) et le type de contrat recherché (achat ou location, durée du bail…). ",
  },
  {
    question: "Quelle est la durée d'une recherche ?",
    reponse:
      "La durée moyenne d’une recherche dépend du profil, des critères, mais surtout de l’état d’avancement de votre projet.",
  },
  {
    question: "Que se passe-t-il si vous ne trouvez pas ?",
    reponse:
      " Le premier contact me permet de déterminer mon engagement. Si j’accepte la mission, c’est avec la conviction que je pourrai aboutir : mon engagement est réel, et toujours orienté résultat.",
  },
];

export default function Page() {
  return (
    <div className="flex justify-center m-5">
      <div className=" lg:w-[50%] sm:w-[80%] flex flex-col justify-start xl:mb-[80px]">
        <h1 className=" text-[2.5em] text-stone-800 font-bold mb-5">
          Questions fréquentes
        </h1>
        <div className="divide-y divide-stone-200">
          {questions.map((question, index) => (
            <QuestionItem
              key={index}
              question={question.question}
              response={question.reponse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
