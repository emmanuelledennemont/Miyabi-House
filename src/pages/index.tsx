import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button/button'
import { Typography } from '@/ui/design-system/typography/typography'


export default function Home() {
  return (
    <>
      <Seo title='Miyabi House' description='Miyabi House' />
      <div className='flex items-center gap-4 p-10'>
        <Button size='sm' variant='secondary'>Order now</Button>
        <Button size='md' variant='primary'>Order now</Button>
        <Button size='lg' variant='disabled'>Order now</Button>
        <Button variant='beige'>Order now</Button>
        <Button variant='outline'>Outline</Button>
      </div>

      <main>
        <Typography text="primary" variant="display" component="h1">
          Tastes the tradition of Japan
        </Typography>
      </main>
    </>
  )
}
