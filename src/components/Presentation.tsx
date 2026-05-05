import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Slide01 from '../slides/slide01';
import Slide02 from '../slides/slide02';
import Slide03 from '../slides/slide03';
import Slide04 from '../slides/slide04';
import Slide05 from '../slides/slide05';
import Slide06 from '../slides/slide06';
import Slide07 from '../slides/slide07';
import Slide08 from '../slides/slide08';
import Slide09 from '../slides/slide09';
import Slide10 from '../slides/slide10';
import Slide56 from '../slides/slide56';
import Slide59 from '../slides/slide59';
import Slide11 from '../slides/slide11';
import Slide12 from '../slides/slide12';
import Slide13 from '../slides/slide13';
import Slide14 from '../slides/slide14';
import Slide15 from '../slides/slide15';
import Slide16 from '../slides/slide16';
import Slide17 from '../slides/slide17';
import Slide18 from '../slides/slide18';
import Slide19 from '../slides/slide19';
import Slide20 from '../slides/slide20';
import Slide21 from '../slides/slide21';
import Slide22 from '../slides/slide22';
import Slide23 from '../slides/slide23';
import Slide57 from '../slides/slide57';
import Slide24 from '../slides/slide24';
import Slide25 from '../slides/slide25';
import Slide26 from '../slides/slide26';
import Slide58 from '../slides/slide58';
import Slide27 from '../slides/slide27';
import Slide28 from '../slides/slide28';
import Slide29 from '../slides/slide29';
import Slide30 from '../slides/slide30';
import Slide31 from '../slides/slide31';
import Slide32 from '../slides/slide32';
import Slide33 from '../slides/slide33';
import Slide34 from '../slides/slide34';
import Slide35 from '../slides/slide35';
import Slide36 from '../slides/slide36';
import Slide37 from '../slides/slide37';
import Slide38 from '../slides/slide38';
import Slide39 from '../slides/slide39';
import Slide40 from '../slides/slide40';
import Slide41 from '../slides/slide41';
import Slide42 from '../slides/slide42';
import Slide43 from '../slides/slide43';
import Slide44 from '../slides/slide44';
import Slide45 from '../slides/slide45';
import Slide46 from '../slides/slide46';
import Slide47 from '../slides/slide47';
import Slide48 from '../slides/slide48';
import Slide49 from '../slides/slide49';
import Slide50 from '../slides/slide50';
import Slide51 from '../slides/slide51';
import Slide52 from '../slides/slide52';
import Slide53 from '../slides/slide53';
import Slide54 from '../slides/slide54';
import Slide55 from '../slides/slide55';

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide56,
  Slide59,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
  Slide57,
  Slide24,
  Slide25,
  Slide26,
  Slide58,
  Slide27,
  Slide28,
  Slide29,
  Slide30,
  Slide31,
  Slide32,
  Slide33,
  Slide34,
  Slide35,
  Slide36,
  Slide37,
  Slide38,
  Slide39,
  Slide40,
  Slide41,
  Slide42,
  Slide43,
  Slide44,
  Slide45,
  Slide46,
  Slide47,
  Slide48,
  Slide49,
  Slide50,
  Slide51,
  Slide52,
  Slide53,
  Slide54,
  Slide55,
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(String(current + 1));

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
      setInputValue(String(current + 2));
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
      setInputValue(String(current));
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const CurrentSlide = slides[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FBFBFD]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Controls overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4 md:p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="pointer-events-auto flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full apple-glass text-[#1D1D1F] transition-all hover:bg-white hover:shadow-lg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none shrink-0"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isEditing ? (
            <input
              type="number"
              min="1"
              max={slides.length}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => {
                const num = parseInt(inputValue, 10);
                if (!isNaN(num) && num >= 1 && num <= slides.length) {
                  setDirection(num - 1 > current ? 1 : -1);
                  setCurrent(num - 1);
                } else {
                  setInputValue(String(current + 1));
                }
                setIsEditing(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const num = parseInt(inputValue, 10);
                  if (!isNaN(num) && num >= 1 && num <= slides.length) {
                    setDirection(num - 1 > current ? 1 : -1);
                    setCurrent(num - 1);
                  }
                  setIsEditing(false);
                } else if (e.key === 'Escape') {
                  setInputValue(String(current + 1));
                  setIsEditing(false);
                }
              }}
              className="pointer-events-auto apple-glass rounded-full px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium text-center w-24 outline-none"
              autoFocus
            />
          ) : (
            <div
              className="pointer-events-auto apple-glass rounded-full px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium text-[#86868B] cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              {current + 1} / {slides.length}
            </div>
          )}

          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="pointer-events-auto flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full apple-glass text-[#1D1D1F] transition-all hover:bg-white hover:shadow-lg disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none shrink-0"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
