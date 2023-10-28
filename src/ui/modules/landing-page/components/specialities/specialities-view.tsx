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
      <div className=" grid grid-row-2 grid-cols-3 gap-6 w-full h-96">
        <div className="row-span-2 col-span-2  bg-secondary-200/80 h-full rounded">Hello</div>
        <div className="col-span-1 bg-secondary-200/40 rounded h-full"></div>
        <div className="col-span-1 bg-secondary-200/40 rounded h-full"></div>
      </div>
    </Container>
  </div>)
}
