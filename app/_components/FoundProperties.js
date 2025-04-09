import { useState } from "react";
import Carousel from "./Carousel";

function FoundProperties() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detail, setDetail] = useState("");

  const OPTIONS = {};
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="relative bg-stone-100 p-4">
      {/* Appliquer le blur uniquement si le modal est ouvert */}
      <div className={`${isModalOpen ? "blur-md" : ""}`}>
        <h2 className="text-center text-[1.5em] text-stone-700 mb-6 font-semibold">
          Biens trouvés pour
        </h2>
        <Carousel
          slides={SLIDES}
          options={OPTIONS}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setDetail={setDetail}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Détails</h2>
            <p>{detail}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoundProperties;
