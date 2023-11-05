import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Card } from "@/ui/design-system/cards/card";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

interface SpecialitiesInterface {
  img: string;
  alt: string;
  title: string;
  varieties: string;
}

const specialitiesData: SpecialitiesInterface[] = [
  {
    img: '/assets/svg/Group 10.svg',
    alt: 'illustration caligraphie japonaise',
    title: 'Sushi',
    varieties: '12 varieties'
  },
  {
    img: '/assets/svg/Group 15.svg',
    alt: 'illustration caligraphie japonaise',
    title: 'Mochi',
    varieties: '4 varieties'
  },
  {
    img: '/assets/svg/Group 16.svg',
    alt: 'illustration caligraphie japonaise',
    title: 'Ramen',
    varieties: '7 varieties'
  },
  {
    img: '/assets/svg/Group 8 (1).svg',
    alt: 'illustration caligraphie japonaise',
    title: 'Bubble Tea',
    varieties: '5 varieties'
  }
];

export const SpecialitiesPart = () => {
  const specialitiesList = specialitiesData.map((speciality) => (

    <Card key={uuidv4()} size="sm" variant='beigebg'>
      <div className="flex items-center justify-center h-[200px] max-h-60 m-8">
        <Image
          src={speciality.img}
          alt={speciality.alt}
          width={230}
          height={230}
          className="object-cover  max-h-full max-w-full m-6 "
          priority
        />
      </div>
      <div className="flex justify-between px-6 mb-6">
        <Typography variant="lead" component="h3" weight="medium">
          {speciality.title}
        </Typography>
        <Typography variant="body-base" component="p" weight="regular">
          {speciality.varieties}
        </Typography>
      </div>

      <div className="flex justify-center mt-5 mb-6 w-full">
        <Button size="lg" variant="beigebg" className="w-full" href="/">
          Order Now
        </Button>
      </div>
    </Card>
  ));

  return (
    <Container className='py-20 relative mt-10'>
      <div className="grid grid-cols-12 grid-row-2 gap-x-16 gap-y-6 py-6">
        <div className="row-span-2 grid grid-cols-2 col-span-7 gap-6">
          {specialitiesList}
        </div>
        <div className="col-span-5 bg-secondary-200/40 rounded h-full">hey</div>
        <div className="col-span-5 bg-secondary-200/40 rounded h-full">hey</div>
      </div>
    </Container>
  );
};
