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
      detail: `Vous êtes (futurs) étudiants à Porto :
  - en Erasmus pour 6 mois ou 1 an au FEUP (ingénieur), au FAUP (architecture), à la Católica Porto Business School (commerce), ISCAP (économie, finances)
  - pour toute la durée de vos études en santé (médecine, dentaire, pharmacie, kinésithérapie…) à Fernando Pessoa
  
  Et vous recherchez en location :
  - une chambre en colocation pour limiter les coûts et faire connaissance avec d’autres étudiants locaux ou étrangers
  - un appartement seul pour étudier dans les meilleures conditions
  - un appartement avec plusieurs chambres pour faire de la colocation avec vos amis`,
    },
    {
      profil: "Salariés",
      detail: `Vous êtes salarié(s) et :
  - avez signé un contrat de travail local pour un changement de vie
  - avez un contrat de travail français mais souhaitez faire du télétravail à Porto
  
  Et vous recherchez en location :
  - un appartement ou maison près de votre lieu professionnel
  - un appartement ou maison pour de meilleures conditions de vie pour toute votre famille`,
    },
    {
      profil: "Investisseurs",
      detail: `Vous êtes une entreprise et vous recherchez en location :
  - un appartement ou maison pour votre salarié.e en mission à Porto`,
    },
    {
      profil: "Entreprises",
      detail: `Vous êtes investisseur(s) français et vous recherchez à l’achat :
  - un pied à terre à Porto
  - un investissement locatif`,
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
                    className="inline-block mt-5 py-2 px-4 rounded-l-xl rounded-t-xl bg-[#EF7970] hover:bg-white hover:text-[#EF7970] focus:text-[#EF7970] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 cursor-pointer"
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
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
