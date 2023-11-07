import { Container } from "@/ui/components/container/container";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Card } from "@/ui/design-system/cards/card";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

interface TestimonialInterface {
  img: string;
  alt: string;
  name: string;
  description: string;
}

const TestimonialData: TestimonialInterface[] = [
  {
    img: '/assets/svg/Group 22.svg',
    alt: 'illustration caligraphie japonaise',
    name: 'Charlie, Editor, NY Times',
    description: '“The food is delicious and the staff is always friendly. I highly recommend it!”'
  },
  {
    img: '/assets/svg/Group 29.svg',
    alt: 'illustration caligraphie japonaise',
    name: 'Martha, Chef, Nobu',
    description: '“Miyabi House is my favorite restaurant in the city. I love their sushi and ramen!”'
  },
  {
    img: '/assets/svg/Group 30.svg',
    alt: 'illustration caligraphie japonaise',
    name: 'Zachery, Sous Chef, Stars',
    description: '“The food at Miyabi House is amazing! I love their sushi and ramen!”'
  },
]


export const TestimonialPart = () => {
  const testimonialList = TestimonialData.map((testimonial) => (

    <Card key={uuidv4()} size="xs" variant='secondary'>

      <div className="flex flex-col items-center justify-center m-6 gap-6">
        <div className="flex flex-col items-center justify-center mt-8 text-center">
          <Typography variant="body-base" component="p" weight="regular">
            {testimonial.description}
          </Typography>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 mb-6 mt-14'>
          <Avatar size='lg' src={testimonial.img} alt={testimonial.alt} />
          <Typography variant="body-lg" component="h3" weight="bold">
            {testimonial.name}
          </Typography>
        </div>
      </div>
    </Card>
  ));

  return (
    <div className="bg-beigebg-200/30">
      <Container className='py-20 relative mt-10'>
        <div className='grid grid-cols-12'>
          <div className="col-span-10 h-full rounded">
            <div className='flex flex-row justify-center gap-6'> {testimonialList}</div>
          </div>
          <div className="col-span-2 bg-secondary-200/40 h-full rounded"></div>
        </div>
      </Container>
    </div>
  )
}