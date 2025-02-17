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
                buttonLink="https://pay.hotmart.com/Q64049384N?sck=HOTMART_PRODUCT_PAGE&off=6gcljbnm&hotfeature=32&_gl=1*1nbsgb2*_ga*NTMzNzAzMTcwLjE3MDUyMzQ4NzQ.*_ga_GQH2V1F11Q*MTcxMDQxNDU1Mi4yMS4xLjE3MTA0MTYxMzcuNjAuMC4w&bid=1710416142121&fbclid=PAY2xjawIdgaJleHRuA2FlbQIxMAABpmsSVdDgN_pLg6y8ZetO8FZEaVb8GvASXDtN6nYhtki7y010TxTPsLZBcg_aem_hl4LBvvCERy9PNjSMuFKAg"
                animation
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
                    class="lucide lucide-book-open-check"
                  >
                    <path d="M12 21V7" />
                    <path d="m16 12 2 2 4-4" />
                    <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
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
