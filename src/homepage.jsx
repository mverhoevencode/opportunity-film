import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import guy_filming from "./assets/guy_filming.jpg";
import reel from "./assets/opportunity_film_reel.mp4";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function homepage() {
  return (
    <>
      <main>
        <section className="">
          <div className="relative h-screen w-full">
            <video
              autoPlay
              muted
              loop
              className="absolute h-full w-full object-cover"
            >
              <source src={reel} type="video/mp4" />
            </video>
            <div className="relative flex h-full w-full flex-col items-center justify-end px-4 sm:px-8">
              <div className="flex h-1/2 w-full flex-col items-center justify-between py-[20px] pt-16">
                <div className="text-center text-3xl sm:text-4xl">
                  <h1>Wij maken jouw verhaal</h1>
                  <h1 className="font-[800]">zichtbaar</h1>
                </div>
                <a
                  href="javascript:;"
                  className="mb-16 w-max cursor-pointer rounded-full border px-8 py-3"
                >
                  Ontdek de mogelijkheden
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-darkgreen/20 relative box-border overflow-x-clip px-4 py-8 sm:px-8">
          <div className="max-w-container mx-auto flex w-full justify-between">
            <div className="z-20 h-28 w-36 min-w-0 bg-white"></div>
            <div className="z-20 h-28 w-36 min-w-0 bg-white"></div>
            <div className="z-20 h-28 w-36 min-w-0 bg-white"></div>
            <div className="z-20 h-28 w-36 min-w-0 bg-white"></div>
            <div className="z-20 h-28 w-36 min-w-0 bg-white"></div>
            <div className="z-20 h-28 w-36 min-w-0 bg-white"></div>
          </div>
          <div className="from-darkgreen absolute top-1/2 right-0 aspect-square w-[600px] translate-x-1/2 -translate-y-1/2 bg-radial to-70% opacity-50"></div>
        </section>
        <section className="overflow-x-clip px-4 py-40 sm:px-8">
          <div className="max-w-container mx-auto flex flex-col-reverse items-center justify-end gap-y-8 md:flex-row">
            <div className="relative flex-1 md:-mr-16">
              <div className="from-darkgreen absolute top-1/2 right-0 aspect-square w-[600px] translate-x-1/2 -translate-y-1/2 bg-radial to-70% opacity-50"></div>
              <ParallaxImg
                src={guy_filming}
                className="relative"
                start={100}
                end={-100}
                offset={["start start", "end start"]}
              ></ParallaxImg>
            </div>
            <motion.div className="z-10 flex-1 md:max-w-1/2" {...defaultEntry}>
              <div className="mb-4 text-3xl sm:text-4xl">
                <h2>Onze</h2>
                <h2 className="font-[800]">werkwijze</h2>
              </div>
              <p className="leading-8">
                Bij Opportunity Film draait alles om jouw verhaal. We combineren
                creativiteit en vakmanschap met een eigentijdse stijl die je
                nergens anders vindt. Iedere productie is een maatwerk project,
                waarin we jouw boodschap vertalen naar beeld dat raakt,
                inspireert en blijft hangen.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="relative overflow-x-clip py-40">
          <div>
            <motion.div
              className="mb-16 text-center text-3xl sm:text-4xl"
              {...defaultEntry}
            >
              <h2>Bekijk ons werk en laat je</h2>
              <h2 className="font-[800]">inspireren</h2>
            </motion.div>
          </div>
          <Carousel
            responsive={responsive}
            showDots
            renderDotsOutside
            dotListClass=""
            draggable={true}
            swipeable={true}
            className="z-10"
          >
            <div className="z-20 h-80 w-56 min-w-56 rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 -rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 -rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 -rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 -rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
            <div className="z-20 h-80 w-56 min-w-56 rotate-[5deg]">
              <img
                src={guy_filming}
                alt=""
                className="pointer-events-none h-full w-full object-cover select-none"
              />
            </div>
          </Carousel>
          <div className="left-0 overflow-x-clip">
            <div className="animate-slider relative flex justify-start gap-10"></div>
          </div>
          <div className="flex justify-center">
            <div className="bg-darkgreen/20 max-w-container absolute top-0 mx-auto h-full w-full">
              <div className="from-darkgreen absolute top-2/5 left-0 -z-10 aspect-square w-[700px] -translate-x-1/2 -translate-y-1/2 bg-radial to-70% opacity-50"></div>
              <div className="from-darkgreen absolute top-3/4 right-0 -z-10 aspect-square w-[700px] translate-x-1/2 -translate-y-1/2 bg-radial to-70% opacity-50"></div>
            </div>
          </div>
        </section>
        <section className="px-4 py-40 sm:px-8">
          <div className="max-w-container mx-auto">
            <motion.div
              className="mb-4 text-center text-3xl sm:text-4xl"
              {...defaultEntry}
            >
              <h2>Alles in huis voor jouw</h2>
              <h2 className="font-[800]">perfecte productie</h2>
            </motion.div>
            <motion.p
              className="mx-auto mb-16 max-w-4xl text-center leading-8"
              {...defaultEntry}
            >
              Met onze state-of-the-art gear en passie voor detail maken we van
              jouw productie een meesterwerk. Jouw verhaal verdient niets minder
              dan het allerbeste.
            </motion.p>
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              <div className="from-darkgreen absolute left-0 -z-10 aspect-square w-[300px] -translate-x-1/2 -translate-y-1/2 bg-radial to-70% opacity-50"></div>
              <div className="flex flex-col justify-between gap-8 sm:flex-row">
                <div className="bg-darkgreen/20 flex flex-col items-center gap-y-12 px-6 py-12">
                  <div className="aspect-square w-1/2 bg-white"></div>
                  <div className="space-y-4 text-center">
                    <h3 className="font-[800]">Camera's van topkwaliteit</h3>
                    <p className="text-center">
                      Voor haarscherpe beelden die jouw visie perfect
                      vastleggen.
                    </p>
                  </div>
                </div>
                <div className="bg-darkgreen/20 flex flex-col items-center gap-y-12 px-6 py-12">
                  <div className="aspect-square w-1/2 bg-white"></div>
                  <div className="space-y-4 text-center">
                    <h3 className="font-[800]">Camera's van topkwaliteit</h3>
                    <p className="text-center">
                      Voor haarscherpe beelden die jouw visie perfect
                      vastleggen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 sm:flex-row">
                <div className="bg-darkgreen/20 flex flex-col items-center gap-y-12 px-6 py-12">
                  <div className="aspect-square w-1/2 bg-white"></div>
                  <div className="space-y-4 text-center">
                    <h3 className="font-[800]">Camera's van topkwaliteit</h3>
                    <p className="text-center">
                      Voor haarscherpe beelden die jouw visie perfect
                      vastleggen.
                    </p>
                  </div>
                </div>
                <div className="bg-darkgreen/20 flex flex-col items-center gap-y-12 px-6 py-12">
                  <div className="aspect-square w-1/2 bg-white"></div>
                  <div className="space-y-4 text-center">
                    <h3 className="font-[800]">Camera's van topkwaliteit</h3>
                    <p className="text-center">
                      Voor haarscherpe beelden die jouw visie perfect
                      vastleggen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 pt-40 sm:px-8">
          <div className="max-w-container mx-auto">
            <motion.div
              className="mb-16 text-center text-3xl sm:text-4xl"
              {...defaultEntry}
            >
              <h2>Geen standaard oplossingen</h2>
              <h2 className="font-[800]">maar maatwerk</h2>
            </motion.div>
            <div className="flex flex-col justify-between gap-16 px-8 lg:flex-row">
              <ParallaxContainer start={0} end={-50}>
                <div className="max-w-[500px] lg:max-w-none">
                  <img src={guy_filming} alt="" />
                  <div className="relative flex justify-end">
                    <div className="relative w-5/6">
                      <p className="absolute left-0 -translate-x-full -translate-y-1/2 pr-3 text-8xl font-bold">
                        1.
                      </p>
                      <h3 className="mt-3 mb-2 text-3xl font-bold">
                        Jouw idee <br />
                        Onze focus
                      </h3>
                      <p>
                        We starten met een persoonlijk gesprek om jouw visie
                        helder te krijgen. Geen standaard oplossingen—alleen
                        maatwerk.
                      </p>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
              <ParallaxContainer start={100} end={-150}>
                <div className="flex justify-end">
                  <div className="max-w-[500px] lg:mt-40 lg:max-w-none">
                    <img src={guy_filming} alt="" />
                    <div className="relative flex justify-end">
                      <div className="relative w-5/6">
                        <p className="absolute left-0 -translate-x-full -translate-y-1/2 pr-3 text-8xl font-bold">
                          2.
                        </p>
                        <h3 className="mt-3 mb-2 text-3xl font-bold">
                          Jouw idee <br />
                          Onze focus
                        </h3>
                        <p>
                          We starten met een persoonlijk gesprek om jouw visie
                          helder te krijgen. Geen standaard oplossingen—alleen
                          maatwerk.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
              <ParallaxContainer start={200} end={-225}>
                <div className="max-w-[500px] lg:mt-80 lg:max-w-none">
                  <img src={guy_filming} alt="" />
                  <div className="relative flex justify-end">
                    <div className="relative w-5/6">
                      <p className="absolute left-0 -translate-x-full -translate-y-1/2 pr-3 text-8xl font-bold">
                        3.
                      </p>
                      <h3 className="mt-3 mb-2 text-3xl font-bold">
                        Jouw idee <br />
                        Onze focus
                      </h3>
                      <p>
                        We starten met een persoonlijk gesprek om jouw visie
                        helder te krijgen. Geen standaard oplossingen—alleen
                        maatwerk.
                      </p>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const defaultEntry = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 100 },
  transition: {
    ease: "easeInOut",
    duration: 0.75,
  },
  viewport: { amount: 0.75, once: true },
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px)`;
  return (
    <motion.img
      className={className}
      src={src}
      ref={ref}
      style={{ transform }}
    ></motion.img>
  );
};

const ParallaxContainer = ({ children, className, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px)`;
  return (
    <motion.div className={className} ref={ref} style={{ transform }}>
      {children}
    </motion.div>
  );
};

export default homepage;
