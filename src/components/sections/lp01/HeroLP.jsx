import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../animation/MotionDivDownToUp";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import contentLp01 from "../../../content/contentLp01";

export default function HeroLP() {
  return (
    <div
      className="w-full bg-top bg-no-repeat bg-cover font-mainFont"
      style={{
        backgroundImage: `url(${contentLp01.hero.bgImg})`,
      }}
    >
      <SectionArea
        paddingTopAndBottom={false}
        className="bg-black bg-opacity-70"
      >
        <SectionWrapper className="">
          <div className="flex w-full ">
            <div className="flex phone1:flex-col-reverse gap-[40px]  desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] pt-[46px] desktop1:pt-[68px] desktop1:pb-[96px]">
              <div className="flex  flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
                <MotionDivDownToUp className="flex justify-center desktop1:justify-start">
                  <img
                    src={contentLp01.hero.logo.logoImg}
                    alt={contentLp01.hero.logo.alt}
                    className="mb-[60px] max-w-[280px] phone2:max-w-[320px] phone3:max-w-[270px]"
                  />
                </MotionDivDownToUp>
                {/* <MotionDivDownToUp>
                    <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont phone1:text-paragraph4">
                      <p className="mb-[16px] bg-white bg-opacity-20 text-white rounded-2xl px-[16px] py-[6px] inline-block text-paragraph2">
                        {content.texts.hero.miniTag}
                      </p>
                    </div>
                  </MotionDivDownToUp> */}
                <MotionDivDownToUp>
                  <div className="flex text-lighter justify-center desktop1:justify-start font-bold leading-[45px] phone3:leading-[50px] tablet1:leading-[65px] desktop1:leading-[70px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 mb-[24px] [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                    {contentLp01.hero.textArea.title}
                  </div>
                </MotionDivDownToUp>
                <MotionDivDownToUp>
                  <div className="flex justify-center text-center text-lighter desktop1:text-left desktop1:justify-start phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                    <p className="mb-[40px] opacity-100 [text-shadow:_2px_2px_1px_rgb(0_0_0_/_100%)]">
                      {contentLp01.hero.textArea.subtitle}
                    </p>
                  </div>
                </MotionDivDownToUp>
                <div className="w-full phone2:w-full tablet2:w-auto">
                  <div className="flex justify-center w-full desktop1:justify-start">
                    <MotionDivDownToUp>
                      <Button
                        aria-label={
                          contentLp01.hero.textArea.ctaButtonAriaLabel
                        }
                        label={contentLp01.hero.textArea.buttonLabel}
                        buttonLink="https://pay.kiwify.com.br/oFO7lpj?fbclid=PAZXh0bgNhZW0CMTEAAabF6m99YRYGaz8-bREaa8gqvnyWTQYOuDmDDg6vwLyn2mQmCO5aQR1AezM_aem_3yMEgDaDWKQ9EOUNqtiymA"
                        animation
                        className="w-[100%]"
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
                            class="lucide lucide-award"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                            <circle cx="12" cy="8" r="6" />
                          </svg>
                        }
                      />
                    </MotionDivDownToUp>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
