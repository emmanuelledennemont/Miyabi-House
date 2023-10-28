import { Container } from "@/ui/components/container/container";

const SpecialitiesData = [
  {
    img: "/assets/svg/ramen.svg",
    alt: "ramen",
    title: "Ramen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim. "
  }
]

export const SpecialitiesPart = () => {

  const SpecialitiesList = ""

  return (<div className="">

    <Container className='py-20 relative mt-10'>
      <div className=" grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-secondary-200/80 h-96 rounded"></div>
        <div className="col-span-4 bg-secondary-200/40 h-96 rounded"></div>

      </div>
    </Container>
  </div>)
}
