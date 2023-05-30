import Image from 'next/image'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { Banner } from '@/components';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Banner />
    </main>
  )
}
