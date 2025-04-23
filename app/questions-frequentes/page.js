import QuestionItem from "@/app/_components/QuetionItem";

const questions = [
  {
    question: "Qu’est-ce qu’un chasseur immobilier ?",
    reponse: (
      <p>
        Un <strong>chasseur immobilier</strong> est un professionnel de
        l&apos;immobilier qui agit en tant que{" "}
        <strong>mandataire de l&apos;acheteur ou du locataire</strong> (et non
        du vendeur ou propriétaire, contrairement à un agent immobilier
        classique). Son rôle principal est de rechercher, sélectionner et
        négocier des biens immobiliers pour le compte de ses clients, en
        fonction de leurs <strong>besoins</strong>, de leurs{" "}
        <strong>préférences</strong> et de leur <strong>budget</strong>.
      </p>
    ),
  },
  {
    question: "Quelle est la différence avec un agent immobilier classique ?",
    reponse: (
      <>
        L&apos;agent immobilier représente le vendeur, mais doit veiller à la
        fois aux intérêts du vendeur et de l&apos;acheteur.{" "}
        <strong>Le chasseur immobilier </strong>représente{" "}
        <strong>uniquement l&apos;acheteur</strong>. En toute impartialité, il
        le conseille et l&apos;accompagne jusqu&apos;à la signature de
        l&apos;acte authentique ou du bail. Il{" "}
        <strong>veille sur les intérêts de son client</strong> acheteur ou
        locataire
      </>
    ),
  },
  {
    question: "A qui s’adressent les services du chasseur immobilier ?",
    reponse: (
      <ul>
        <li>
          - Aux personnes qui{" "}
          <strong>désirent être accompagnées d’un expert</strong> afin d’éviter
          les erreurs dues à la méconnaissance du marché et/ou á la barrière de
          la langue
        </li>
        <li>
          - Aux personnes qui n’ont <strong>pas beaucoup de temps</strong> à
          consacrer à leur recherche
        </li>
        <li>
          - Aux personnes qui veulent <strong>maximiser leurs chances</strong>{" "}
          sur un marché immobilier tendu
        </li>
      </ul>
    ),
  },
  {
    question: "Quel est le coût de votre service ?",
    reponse: (
      <p>
        Le tarif est <strong>forfaitaire</strong>, sans frais d’agence
        supplémentaires.​ Chaque recherche est unique : le coût dépend de
        plusieurs critères tels que votre profil (étudiant, salarié avec contrat
        local ou non…), vos besoins (extérieur, avec animaux…) et le type de
        contrat recherché (achat ou location, durée du bail…).
      </p>
    ),
  },
  {
    question: "Quelle est la durée d'une recherche ?",
    reponse: (
      <p>
        La durée moyenne d’une recherche dépend du profil, des critères, mais
        surtout de l’état d’avancement de votre projet.
      </p>
    ),
  },
  {
    question: "Que se passe-t-il si vous ne trouvez pas ?",
    reponse: (
      <p>
        Le premier contact me permet de déterminer mon engagement. Si j’accepte
        la mission, c’est avec la conviction que je pourrai aboutir : mon
        engagement est réel, et toujours orienté résultat.
      </p>
    ),
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
