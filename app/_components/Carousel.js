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
    { profil: "Etudiants", durée: "8 semaines", detail: "Logements étudiants" },
    { profil: "Salariés", durée: "7 semaines", detail: "Pour les salariés" },
    {
      profil: "Investisseurs",
      durée: "6 semaines",
      detail: "Pour les investisseurs",
    },
    {
      profil: "Entreprises",
      durée: "8 semaines",
      detail: "Pour les entreprises",
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
                  <p className="text-lg font-semibold">
                    {descriptions[index].profil}
                  </p>
                  <p>
                    Durée moyenne de la recherche:{" "}
                    <span className="font-semibold">
                      {descriptions[index].durée}
                    </span>
                  </p>
                  <button
                    className="inline-block mt-5 py-2 px-4 rounded-l-xl rounded-t-xl bg-[#EF7970] hover:bg-white hover:text-[#EF7970] focus:text-[#EF7970] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
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
      ;
    </div>
  );
};

export default Carousel;
