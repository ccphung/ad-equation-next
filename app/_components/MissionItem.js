import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";

function MissionItem({
  onClick,
  isServiceModalOpen,
  isWorkModalOpen,
  isReferencesModalOpen,
}) {
  const services = {
    img: "1.jpg",
    title: "Services proposés",
    desc: "Voici mes services",
  };
  const work = {
    img: "2.jpg",
    title: "Mon métier",
    desc: "Voici mon métier",
  };
  const references = {
    img: "3.jpg",
    title: "Mes références",
    desc: "Voici mes références",
  };

  return (
    <button
      onClick={() => onClick((prev) => !prev)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50"
    >
      <div
        className="bg-stone-700 rounded-lg p-10 h-[600px] overflow-auto  scroll-smooth z-10   
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700 relative"
      >
        {isServiceModalOpen && (
          <img
            className="rounded-lg w-[500px]"
            src={`/images/missions/${services.img}`}
            alt="appartment"
          />
        )}
        {isWorkModalOpen && (
          <img
            className="rounded-lg w-[500px]"
            src={`/images/missions/${work.img}`}
            alt="appartment"
          />
        )}
        {isReferencesModalOpen && (
          <img
            className="rounded-lg w-[500px]"
            src={`/images/missions/${references.img}`}
            alt="appartment"
          />
        )}

        <h3 className="xl:text-[1.5em] text-lg font-semibold text-[#EF7970] my-2">
          {isServiceModalOpen && services.title}
          {isWorkModalOpen && work.title}
          {isReferencesModalOpen && references.title}
        </h3>

        <p className="text-white">
          {" "}
          {isServiceModalOpen && services.desc}
          {isWorkModalOpen && work.desc}
          {isReferencesModalOpen && references.desc}
        </p>
      </div>
    </button>
  );
}

export default MissionItem;
