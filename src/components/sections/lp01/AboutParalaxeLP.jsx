import content from "../../../content/content";
import contentLp01 from "../../../content/contentLp01";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function AboutParalaxeLP() {
  return (
    <div
      className="bg-scroll bg-center bg-cover desktop1:bg-fixed"
      style={{
        backgroundImage: `url(${contentLp01.about.bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="flex justify-center w-full text-white bg-opacity-10 bg-primary">
        <div className="flex justify-center w-full bg-black bg-opacity-80">
          <SectionArea>
            <SectionWrapper>
              <div className="gap-y-[60px]  flex flex-col items-center desktop1:flex-row desktop1:w-[100%] desktop1:justify-between desktop1:gap-[120px]">
                <MotionDivDownToUp className="flex justify-center ">
                  {/* Logo */}
                  {/* 
                  <img
                    src={contentLp01.about.logo.logoImg}
                    alt={contentLp01.about.logo.alt}
                    className="w-[90%] desktop1:w-[70%]"
                  /> */}

                  {/* Foto  */}

                  <img
                    src={content.texts.about.imagem.img}
                    alt={content.texts.about.imagem.alt}
                    className="w-[90%] desktop1:w-[90%] rounded-xl shadow-custom-opacity shadow-secondary/50"
                  />
                </MotionDivDownToUp>

                {/* Sendo logo */}

                {/* <div className="desktop1:w-[60%]"> */}
                {/* Sendo foto */}

                <div className="desktop1:w-[100%] ">
                  <SectionHeader
                    className="text-center"
                    miniTitle={contentLp01.about.sectionHeader.miniTag}
                    sectionHeaderTitle={contentLp01.about.sectionHeader.title}
                    color=""
                    type="article"
                  />
                  <MotionDivDownToUp>
                    <p className="font-mainFont mb-[36px]">
                      {contentLp01.about.paragraph}
                    </p>
                  </MotionDivDownToUp>
                  <MotionDivDownToUp>
                    <div className="w-full">
                      <Button
                        aria-label={
                          contentLp01.hero.textArea.ctaButtonAriaLabel
                        }
                        label={contentLp01.about.buttonLabel}
                        buttonLink="https://pay.kiwify.com.br/oFO7lpj?fbclid=PAZXh0bgNhZW0CMTEAAabF6m99YRYGaz8-bREaa8gqvnyWTQYOuDmDDg6vwLyn2mQmCO5aQR1AezM_aem_3yMEgDaDWKQ9EOUNqtiymA"
                        animation
                        className=""
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-trophy"
                          >
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                            <path d="M4 22h16" />
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                          </svg>
                        }
                      />
                    </div>
                  </MotionDivDownToUp>
                </div>
              </div>
            </SectionWrapper>
          </SectionArea>
        </div>
      </div>
    </div>
  );
}
