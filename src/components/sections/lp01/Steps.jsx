import contentLp01 from "../../../content/contentLp01";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function Steps({ className }) {
  return (
    <>
      <SectionArea paddingtop={false}>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.steps.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentLp01.steps.sectionHeader.title}
            sectionHeaderSubtitle={contentLp01.steps.sectionHeader.subtitle}
            color="dark"
          />
          <div className="flex flex-col items-center justify-center">
            <MotionDivDownToUp>
              <div className="flex text-center flex-col items-center desktop1:flex-wrap desktop1:flex-row justify-evenly w-full gap-[36px] tablet1:gap-[24px] font-mainFont mt-[42px] desktop1:mt-0">
                <div className="flex flex-col justify-center items-center w-[270px] hover:scale-110 transition mb-[32px] desktop1:mb-0">
                  <div className="bg-primary mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[25px] w-[25px] text-white text-title3 font-semibold">
                    {contentLp01.steps.cards.card1.number}
                  </div>
                  <h1 className="text-[21px] font-semibold mb-[24px]">
                    {contentLp01.steps.cards.card1.title}
                  </h1>
                  <p className="text-[16px] opacity-65 text-center">
                    {contentLp01.steps.cards.card1.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[270px] hover:scale-110 transition mb-[32px] desktop1:mb-0">
                  <div className="bg-primary mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[25px] w-[25px] text-white text-title3 font-semibold">
                    {contentLp01.steps.cards.card2.number}
                  </div>
                  <h1 className="text-[21px] font-semibold mb-[24px]">
                    {contentLp01.steps.cards.card2.title}
                  </h1>
                  <p className="text-[16px] opacity-65 text-center">
                    {contentLp01.steps.cards.card2.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[270px] hover:scale-110 transition mb-[32px] desktop1:mb-0">
                  <div className="bg-primary mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[25px] w-[25px] text-white text-title3 font-semibold">
                    {contentLp01.steps.cards.card3.number}
                  </div>
                  <h1 className="text-[21px] font-semibold mb-[24px]">
                    {contentLp01.steps.cards.card3.title}
                  </h1>
                  <p className="text-[16px] opacity-65 text-center">
                    {contentLp01.steps.cards.card3.description}
                  </p>
                </div>
              </div>
            </MotionDivDownToUp>
            <MotionDivDownToUp className="mt-[28px] desktop1:mt-[62px]">
              <Button
                aria-label={contentLp01.hero.textArea.ctaButtonAriaLabel}
                label={contentLp01.steps.ctaButtonLabel}
                buttonLink={contentLp01.links.ctaWhatsapp}
                animation
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
