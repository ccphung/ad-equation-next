"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Partners() {
  const images = Array.from(
    { length: 10 },
    (_, i) => `/images/companies/${i + 1}.png`
  );

  return (
    <div className="m-10">
      <h2 className="text-center text-[1.8em] text-stone-700 font-semibold mb-3">
        Ils m&apos;ont fait confiance
      </h2>

      <div className="overflow-hidden py-8 bg-white">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: ["-0%", "-400%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <span
              key={idx}
              className="inline-block mx-6 xl:w-[300px] xl:h-[150px] w-[100px] h-[75px] relative align-middle"
            >
              <Image
                src={src}
                alt={`Partner ${idx + 1}`}
                fill
                className="object-contain"
              />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Partners;
