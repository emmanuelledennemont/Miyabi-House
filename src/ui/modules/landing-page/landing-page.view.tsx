import { DeliveryPart } from "./components/delivery/delivery-view"
import { HeroTopView } from "./components/hero-top/hero-top-view"
import { SpecialitiesPart } from "./components/specialities/specialities-view"
import { TestimonialPart } from "./components/testimonial/testimonial-view"

export const LadingPageView = () => {
  return (
    <>
      <HeroTopView />
      <DeliveryPart />
      <SpecialitiesPart />
      <TestimonialPart />
    </>
  )
}