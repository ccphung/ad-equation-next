"use client";

import { XCircleIcon } from "@heroicons/react/24/outline";
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

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-md bg-black/30 z-10 max-w-[100vw] ">
          <div className="bg-white p-6 rounded-lg shadow-lg relative ">
            <h2 className="text-xl font-semibold mb-4">Détails</h2>
            <div className="whitespace-pre-line text-gray-700 text-sm">
              {detail}
            </div>
            <button
              className="mt-4 px-4 py-2 absolute text-[#5F66AC] rounded cursor-pointer top-[-10px] right-0 hover:text-[#5F66AC95]"
              onClick={() => setIsModalOpen(false)}
            >
              <XCircleIcon className="w-10" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoundProperties;
