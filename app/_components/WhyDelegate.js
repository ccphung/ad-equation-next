import ListItem from "./ListItem";

function WhyDelegate() {
  return (
    <div className="m-4 flex justify-center">
      <div className="border-4 border-[#5F66AC]  rounded-lg w-[500px] p-7">
        <h2 className="text-center text-[1.5em] text-stone-700 mb-6">
          Pourquoi déléguer ma recherche ?
        </h2>
        <ul className="m-2">
          <ListItem
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
          />
          <ListItem
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
          />
          <ListItem
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
          />
        </ul>
      </div>
    </div>
  );
}

export default WhyDelegate;
