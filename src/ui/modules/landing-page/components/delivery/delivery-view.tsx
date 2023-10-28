import { Container } from '@/ui/components/container/container';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Typography } from '@/ui/design-system/typography/typography';

const DeliveryContent = {
  text: {
    title: 'Delivery everywhere in your city',
    description:
      'Hungry ? You are in the right place ...? Order from!',
  },

  image: {
    img1: '/assets/svg/fondpromo 1.svg',
    img2: '/assets/svg/calig.svg',
  },
};

export const DeliveryPart = () => {
  return (
    <div className="bg-beigebg-200/30">
      <Container className='py-20 relative mt-10'>
        <div className="mx-auto">
          <Image
            src={DeliveryContent.image.img2}
            alt="illustration caligraphie japonaise"
            width={550}
            height={90}
            className="object-cover w-full absolute -z-50 top-0 left-0 right-0 bottom-0 mx-auto"
            priority
          />
          <div className="grid grid-cols-12 gap-6">
            <div className="w-full col-span-8 bg-beigebg-200 p-4 rounded mb-6 h-full">
              <div className='flex ml-4'>
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/4a71b6e2-2ff4-46b7-b74a-5831f78ea031/z6yDCsww1z.json"
                  style={{ height: '210px', width: '210px', margin: '0', padding: '0' }}
                >
                </Player>
                <div className="h-full flex-col items-center justify-center ml-16">
                  <Typography
                    variant="h3"
                    component="h2"
                    className="flex items-start justify-center text-4xl lg:text-5xl font-bold h-full"
                  >
                    {DeliveryContent.text.title}
                  </Typography>
                  <Typography
                    variant="body-base"
                    component="p"
                    className="mt-4 mb-4 lg:text-md text-center lg:text-left h-full"
                  >
                    {DeliveryContent.text.description}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-full col-span-4 bg-primary-100/80 p-4 rounded h-full">

              <div className='flex'>
                <Image
                  src={DeliveryContent.image.img1}
                  alt="illustration paysage japonais"
                  width={209}
                  height={209}
                  className="object-cover"
                  priority
                />
                <p>Contenu de la deuxième partie</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

