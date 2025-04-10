import ProcessItem from "./ProcessItem";

function Process() {
  return (
    <div className="flex justify-center bg-indigo-50 ">
      <div className="py-7 w-[1048px]">
        <h2 className="text-center text-[1.5em] text-stone-700 font-semibold">
          Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <ProcessItem
            file="partner-handshake-icon"
            title="Etape 1 : Rencontre"
            desc={
              <>
                Votre projet immobilier est unique, tout comme vos envies et
                votre mode de vie.
              </>
            }
            size="12"
          />
          <ProcessItem
            file="search-icon"
            title="Etape 2 : Recherche"
            desc={
              <>
                Une sélection ciblée pour aider à choisir en toute sérénité. Un
                véritable gain de temps pour vous !
              </>
            }
            size="12"
          />
          <ProcessItem
            file="speaking-bubbles-line-icon"
            title="Etape 3 : Conseils"
            desc={
              <>
                Des conseils objectifs et avisés pour vous guider dans votre
                choix en toute confiance.
              </>
            }
            size="12"
          />
        </div>
      </div>
    </div>
  );
}

export default Process;
