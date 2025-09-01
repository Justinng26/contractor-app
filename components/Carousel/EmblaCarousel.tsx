"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  image: string;
  title: string;
  link: string;
};

interface CarouselProps {
  slides: string[] | Slide[];
  options?: EmblaOptionsType;
  isControlsVisible?: boolean;
}

const EmblaCarousel: React.FC<CarouselProps> = (props) => {
  const { slides, options, isControlsVisible = true } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide overflow-hidden" key={`slide${index}`}>
              <div className="embla__slide__number">
                {typeof slide === "string" ? (
                  <Image
                    src={slide}
                    alt="Carousel image"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Link href={slide.link}>
                    <Image
                      src={slide.image}
                      alt="Carousel image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <h3 className="text-white text-xl font-bold m-6 p-3 bg-black/60 rounded-lg backdrop-blur-sm">
                        {slide.title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isControlsVisible && (
        <div className="embla__controls">
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

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
