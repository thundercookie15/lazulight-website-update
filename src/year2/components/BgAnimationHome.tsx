import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import lazuElira from '../assets/background/LZL-Elira.png'
import lazuPomu from '../assets/background/LZL-Pomu.png'
import lazuFinana from '../assets/background/LZL-Finana.png'

export default function BgAnimationFinana (): JSX.Element {
  return (
    <>
      <Image src={lazuElira} className={pw['page-bg-animation-elira']} />
      <Image src={lazuPomu} className={pw['page-bg-animation-pomu']} />
      <Image src={lazuFinana} className={pw['page-bg-animation-finana']} />
    </>
  )
}
