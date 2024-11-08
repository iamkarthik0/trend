"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Flower, LoaderPinwheel } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const timeline = gsap.timeline({});

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1280px)",
          isMobile: "(max-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context:any) => {
          const { isDesktop,isMobile } = context.conditions;
          if(isDesktop){


// ------CARD ANIMATION

gsap.set(".img-x", {
  xPercent: -15,
  yPercent: 25,
});

timeline.from(".img-x", {
  scale: 1.2,
  duration: 0.4,

  ease: "power2.inOut",
});
timeline.to(".img-x", {
  xPercent: 0,
  yPercent: 0,

  duration: 0.7,
  ease: "power2.in",
});

gsap.from(".hero1", {
  scale: 0,
  xPercent: 50,

  duration: 1,
  delay: 0.6,
});

gsap.from(".hero2", {
  scale: 0,
  xPercent: 70,
  yPercent: -60,
  duration: 1,
  delay: 0.6,
});

gsap.fromTo(
  ".hero-img",
  {
    opacity: 0,
    y: -20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 1.3,
  }
);

gsap.from(".hero3", {
  scale: 0,
  zIndex: 0,
  yPercent: -40,
  duration: 1,
  delay: 0.6,
});

gsap.from(".hero4", {
  scale: 0,
  xPercent: -70,

  duration: 1,
  delay: 0.6,
});

gsap.from(".hero5", {
  scale: 0,
  yPercent: -70,
  xPercent: -50,
  duration: 1,
  delay: 0.6,
});
// ------CARD ANIMATION

// TEXT ANIMATION
gsap.fromTo(
  ".spin",
  {
    opacity: 0,
  },
  {
    rotate: 360,
    delay: 1.5,
    duration: 2,
    opacity: 0.5,
  }
);

gsap.fromTo(
  ".arrow",
  {
    opacity: 0,
    x: -10,
    y: 10,
  },
  {
    x: 0,
    y: 0,
    delay: 1.5,
    duration: 1,
    opacity: 0.5,
  }
);

gsap.from("#paragraph", {
  opacity: 0,
  y: 20,
  delay: 1.5,
  stagger: 0.1,
});

gsap.fromTo(
  ".para1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 1.5,
    duration: 1,
  }
);

gsap.fromTo(
  ".f-link",
  {
    y: 20,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    delay: 1.5,
    duration: 1,
    stagger: 0.2,
  }
);

gsap.fromTo(
  ".contact-me",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 1.5,
    duration: 1,
    stagger: 0.5,
  }
);

gsap.fromTo(
  ".bt",
  {
    width: "0%",
  },
  {
    width: "100%",
    delay: 2,
    stagger: 0.1,
  }
);

gsap.fromTo(
  ".para2",
  {
    y: 20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 2,
    stagger: 0.2,
  }
);
// TEXT ANIMATION


          }


          if(isMobile){
            // ------CARD ANIMATION

          gsap.set(".img-x", {
        
            yPercent: 25,
          });

          timeline.from(".img-x", {
            scale: 1.2,
            duration: 0.4,

            ease: "power2.inOut",
          });
          timeline.to(".img-x", {
            xPercent: 0,
            yPercent: 0,

            duration: 0.7,
            ease: "power2.in",
          });

          gsap.from(".hero1", {
            scale: 0,
            xPercent: 50,

            duration: 1,
            delay: 0.6,
          });

          gsap.from(".hero2", {
            scale: 0,
           
            yPercent: -60,
            duration: 1,
            delay: 0.6,
          });

          gsap.fromTo(
            ".hero-img",
            {
              opacity: 0,
              y: -20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              delay: 1.3,
            }
          );

          gsap.from(".hero3", {
            scale: 0,
            zIndex: 0,
          
            duration: 1,
            delay: 0.6,
          });

          gsap.from(".hero4", {
            scale: 0,
          

            duration: 1,
            delay: 0.6,
          });

          gsap.from(".hero5", {
            scale: 0,
            yPercent: -70,
            xPercent: -50,
            duration: 1,
            delay: 0.6,
          });
          // ------CARD ANIMATION

          // TEXT ANIMATION
          gsap.fromTo(
            ".spin",
            {
              opacity: 0,
            },
            {
              rotate: 360,
              delay: 1.5,
              duration: 2,
              opacity: 0.5,
            }
          );

          gsap.fromTo(
            ".arrow",
            {
              opacity: 0,
              x: -10,
              y: 10,
            },
            {
              x: 0,
              y: 0,
              delay: 1.5,
              duration: 1,
              opacity: 0.5,
            }
          );

          gsap.from("#paragraph", {
            opacity: 0,
            y: 20,
            delay: 1.5,
            stagger: 0.1,
          });

          gsap.fromTo(
            ".para1",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: 1.5,
              duration: 1,
            }
          );

          gsap.fromTo(
            ".f-link",
            {
              y: 20,
              opacity: 0,
            },
            {
              opacity: 1,
              y: 0,
              delay: 1.5,
              duration: 1,
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".contact-me",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: 1.5,
              duration: 1,
              stagger: 0.5,
            }
          );

          gsap.fromTo(
            ".bt",
            {
              width: "0%",
            },
            {
              width: "100%",
              delay: 2,
              stagger: 0.1,
            }
          );

          gsap.fromTo(
            ".para2",
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay: 2,
              stagger: 0.2,
            }
          );
          // TEXT ANIMATION
          }




        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className=" flex flex-col lg:flex-row  gap-4 pt-4  font-cormorant   "
    >
      <div className="    flex flex-col  basis-8/12 gap-x-4   ">
        <div className=" flex gap-4  flex-col sm:flex-row">
          {/* ------------------CONTENT------------ */}
          <div className=" hero1 bg-[#4B4F3C]  basis-8/12   flex-col justify-between  rounded-[12px] flex p-4   pb-16 ">
            <div className=" flex justify-end">
              {" "}
              <LoaderPinwheel className=" spin h-9 w-9 md:w-14 md:h-14 opacity-50 text-[#DBC0A4] " />
            </div>

            <h1 className="para1 pt-9 lg:pt-0  text-[#DBC0A4]  font-cormorant h1 ">
              Style that speaks softly but leaves a lasting impression
            </h1>
          </div>
          {/* ---------------IMAGE-------------- */}
          <div className=" img-x z-20 h-full basis-4/12   my-auto  w-full ">
            <Image
              src="/image/hero.png"
              alt="hero"
              width={400}
              height={100}
              className=" rounded-[12px]"
            />
          </div>
        </div>
        {/* 
        -----------------SECOND DIV-------------------- */}
        <div className=" flex pt-4 gap-4 h-full  flex-col lg:flex-row ">
          <div className=" hero2 bg-[#4B4F3C] basis-2/4 rounded-[12px]  p-4 text-[#DBC0A4] flex flex-col    justify-between">
            <Flower className="spin h-10 w-10 opacity-50" />
            <p id="paragraph" className=" py-4 lg:py-0">
              {" "}
              Old money isn't about living loud; it's about living well. A life
              refined by tradition, where every detail tells a story of taste
              and restraint. True class stands the test of time.
            </p>
          </div>

          <div className="  hero3 basis-2/4 bg-[#99744C] rounded-[12px] p-4  flex flex-col justify-between  text-zinc-900">
            <div className="flex w-full   justify-between     font-semibold">
              <p className=" contact-me py-4 lg:py-0">
                {" "}
                True class stands <br /> the test of time
              </p>
              <ArrowUpRight className=" arrow h-8 w-8  " />
            </div>

            <h2 className=" contact-me h1  opacity-80">Contact me</h2>
          </div>
        </div>
      </div>

      {/* -----------------------------MAIN DIV----------------------- */}
      <div className="  w-full     basis-4/12  h-full  space-y-4">
        <div className=" hero4 bg-[#4B4F3C] flex flex-col  h-full w-full   basis-8/12 justify-center rounded-[12px] p-4 space-y-6">
          <div className=" my-10 lg:my-0  ">
            <div className=" mx-8 lg:mx-0 flex justify-between text-[#DBC0A4] py-4 ">
              <h4 className="para1 h5 pb-4"> Vintage Vogue</h4>
              <ArrowUpRight className=" arrow h-8 w-8  " />
            </div>

            <div className="flex w-full  justify-center">
              <Image
                src="/image/hero2.png"
                alt="hero2 "
                width={400}
                height={100}
                className=" hero-img rounded-[12px]"
              />
            </div>
          </div>

          <div className=" py-8">
            <div className="   paragraph font-medium text-[#DBC0A4]    ">
              <span className=" bt w-[100%]  block border-t border-[#DBC0A4]"></span>
              <h4 className=" para2 py-4 "> Classic Couture Chronicles</h4>
            </div>
            <div className="   paragraph font-medium text-[#DBC0A4]    ">
              <span className=" bt w-[100%]  block border-t border-[#DBC0A4]"></span>
              <h4 className="py-4  para2"> Refined Residences</h4>
            </div>
            <div className="   paragraph font-medium text-[#DBC0A4]    ">
              <span className=" bt w-[100%]  block border-t border-[#DBC0A4]"></span>
              <h4 className="py-4 para2 "> Heritage House</h4>
            </div>
          </div>
        </div>
        <div className=" hero5 justify-around items-center  bg-[#4B4F3C]  flex  px-4    py-4 text-[#DBC0A4]  rounded-[12px]  ">
          <p className="f-link">Instagram </p>
          <p className="f-link">Tweeter </p>
          <p className="f-link">Facebook </p>
        </div>
      </div>
    </div>
  );
}
