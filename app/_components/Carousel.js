"use client";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const Carousel = ({
  slides,
  options,
  isModalOpen,
  setIsModalOpen,
  setDetail,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const descriptions = [
    {
      profil: "Etudiants",
      detail: (
        <>
          <p>
            Vous êtes (futurs){" "}
            <span className="text-[#EF7970] font-semibold">étudiants</span> à
            Porto :
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              en <span className="text-[#5F66AC] font-semibold">Erasmus</span>{" "}
              pour 6 mois ou 1 an au{" "}
              <span className="text-[#5F66AC] font-semibold">FEUP</span>{" "}
              (ingénieur), au{" "}
              <span className="text-[#5F66AC] font-semibold">FAUP</span>{" "}
              (architecture), à la{" "}
              <span className="text-[#5F66AC] font-semibold">
                Católica Porto Business School
              </span>{" "}
              (commerce),{" "}
              <span className="text-[#5F66AC] font-semibold">ISCAP</span>{" "}
              (économie, finances)
            </li>
            <li>
              pour{" "}
              <span className="text-[#5F66AC] font-semibold">
                toute la durée de vos études
              </span>{" "}
              en santé (médecine, dentaire, pharmacie, kinésithérapie…) à{" "}
              <span className="text-[#5F66AC] font-semibold">
                Fernando Pessoa
              </span>
            </li>
          </ul>

          <br />

          <p>
            Et vous recherchez en{" "}
            <span className="text-[#EF7970] font-semibold">location</span> :
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              une chambre en{" "}
              <span className="text-[#5F66AC] font-semibold">colocation</span>{" "}
              pour limiter les coûts et faire connaissance avec d’autres
              étudiants locaux ou étrangers
            </li>
            <li>
              un{" "}
              <span className="text-[#5F66AC] font-semibold">
                appartement seul
              </span>{" "}
              pour étudier dans les meilleures conditions
            </li>
            <li>
              un{" "}
              <span className="text-[#5F66AC] font-semibold">
                appartement avec plusieurs chambres
              </span>{" "}
              pour faire de la colocation avec vos amis
            </li>
          </ul>
        </>
      ),
    },
    {
      profil: "Salariés",
      detail: (
        <>
          <p>
            Vous êtes{" "}
            <span className="font-semibold text-[#EF7970]">salarié(s)</span> et
            :
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              avez signé un{" "}
              <span className="text-[#5F66AC] font-semibold">
                contrat de travail local
              </span>{" "}
              pour un changement de vie
            </li>
            <li>
              avez un{" "}
              <span className="text-[#5F66AC] font-semibold">
                contrat de travail français
              </span>{" "}
              mais souhaitez faire du télétravail à Porto
            </li>
          </ul>

          <br />

          <p>
            Et vous recherchez en{" "}
            <span className="text-[#EF7970] font-semibold">location</span> :
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              un appartement ou une maison{" "}
              <span className="text-[#5F66AC] font-semibold">
                près de votre lieu professionnel
              </span>
            </li>
            <li>
              un appartement ou une maison pour de{" "}
              <span className="text-[#5F66AC] font-semibold">
                bonnes conditions de vie
              </span>{" "}
              pour toute votre famille
            </li>
          </ul>
        </>
      ),
    },
    {
      profil: "Investisseurs",
      detail: (
        <p>
          Vous êtes{" "}
          <span className="text-[#EF7970] font-semibold">
            investisseur(s) français{" "}
          </span>
          et vous recherchez un{" "}
          <span className="text-[#5F66AC] font-semibold">pied à terre</span> à
          Porto ou un{" "}
          <span className="text-[#5F66AC] font-semibold">
            investissement locatif.
          </span>
        </p>
      ),
    },
    {
      profil: "Entreprises",
      detail: (
        <p>
          Vous êtes une{" "}
          <span className="text-[#EF7970] font-semibold">entreprise </span>
          et vous recherchez un logement{" "}
          <span className="text-[#5F66AC] font-semibold">
            pour votre salarié.e
          </span>{" "}
          à Porto.
        </p>
      ),
    },
  ];

  return (
    <div className={`embla ${isModalOpen ? "blur-md" : ""} `}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img transition-all duration-300"
                src={`/images/found-properties/${slide + 1}.jpg`}
                alt={`Slide ${index + 1}`}
              />
              <div className="embla__slide__text">
                <div className="text-center">
                  <p className="text-lg font-semibold mt-2">
                    {descriptions[index].profil}
                  </p>
                  <button
                    className="inline-block mt-5 py-2 px-4 rounded-l-xl rounded-t-xl bg-[#5F66AC] hover:bg-[#5f65ac9b]  focus:text-[#5F66AC] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(true);
                      setDetail(descriptions[index].detail);
                    }}
                  >
                    En savoir plus
                  </button>
                  {isModalOpen && <p>OUVERT</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="embla__controls ">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
