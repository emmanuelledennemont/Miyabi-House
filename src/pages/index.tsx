import { Seo } from '@/ui/components/seo'
import { Typography } from '@/ui/design-system/typography/typography'


export default function Home() {
  return (
    <>
      <Seo title='Miyabi House' description='Miyabi House' />
      <main>
        <Typography text="primary" variant="display" component="h1">
          Tastes the tradition of Japan
        </Typography>
      </main>
    </>
  )
}
