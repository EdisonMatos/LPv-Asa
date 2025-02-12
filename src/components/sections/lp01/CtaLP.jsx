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
        backgroundImage: `url(${contentLp01.cta.bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="flex justify-center w-full text-white bg-opacity-10 bg-primary">
        <div className="flex justify-center w-full bg-black bg-opacity-80">
          <SectionArea className="">
            <SectionWrapper>
              <SectionHeader
                className="text-center"
                miniTitle={contentLp01.cta.sectionHeader.miniTag}
                sectionHeaderTitle={contentLp01.cta.sectionHeader.title}
                sectionHeaderSubtitle={contentLp01.cta.sectionHeader.subtitle}
                color=""
              />
              <MotionDivDownToUp>
                <Button
                  aria-label={contentLp01.hero.textArea.ctaButtonAriaLabel}
                  label={contentLp01.cta.buttonLabel}
                  buttonLink="https://pay.hotmart.com/J64115249S?sck=HOTMART_PRODUCT_PAGE&off=wxbg6nlh&hotfeature=32&_gl=1*1ynbosl*_ga*NTMzNzAzMTcwLjE3MDUyMzQ4NzQ.*_ga_GQH2V1F11Q*MTcxMDQxNDU1Mi4yMS4xLjE3MTA0MTYyMTIuNTcuMC4w&bid=1710416223061"
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
                      class="lucide lucide-images"
                    >
                      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                      <circle cx="12" cy="8" r="2" />
                      <rect width="16" height="16" x="6" y="2" rx="2" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>
            </SectionWrapper>
          </SectionArea>
        </div>
      </div>
    </div>
  );
}
