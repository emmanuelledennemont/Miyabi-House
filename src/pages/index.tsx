import { Seo } from '@/ui/components/seo'
import { Typography } from '@/ui/design-system/typography/typography'


export default function Home() {
  return (
    <>
      <Seo title='Miyabi House' description='Miyabi House' />
      <main>
        <Typography variant="display" component="h1">
          Miyabi House !!!
        </Typography>
      </main>
    </>
  )
}
