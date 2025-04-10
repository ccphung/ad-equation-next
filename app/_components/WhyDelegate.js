import ListItem from "./ListItem";

function WhyDelegate() {
  return (
    <div className="m-4 flex justify-center">
      <div className="border-4 border-[#5F66AC]  rounded-lg w-[500px] p-7">
        <h2 className="text-center text-[1.5em] text-stone-700 mb-6">
          Pourquoi déléguer ma recherche ?
        </h2>
        <ul className="m-2">
          <ListItem text="Gagner du temps" />
          <ListItem text="Sécuriser votre achat immobilier ou location" />
          <ListItem text="Avoir un expert à vos côtés" />
          <ListItem text="Avoir un expert à vos côtés" />
          <ListItem text="Avoir un accès à un plus grand choix de biens" />
          <ListItem text="Être sûr d'acheter ou louer au juste prix" />
        </ul>
      </div>
    </div>
  );
}

export default WhyDelegate;
