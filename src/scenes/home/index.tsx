import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMedia'
import Fitnes_Couple from '@/assets/Fitness_Couple.png'
import NicePng from '@/assets/NicePng.png'
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import ActionButton from '@/shared/actionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
const aboveMedium = useMediaQuery("(min-width:760px)")
  return (
    <section
    id="home"
    className='gap-16 bg-black py-10 md:h-full md:pb-0'
    >
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className='z-10 mt-32 md:basis-3/5'>
                <motion.div className='md:-mt-20' 
                initial='hidden' 
                whileInView='visible' 
                viewport={{once: true, amount: 0.5}} 
                transition={{duration: 1}}
                variants={{hidden:{opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                            <img alt='home-page-text' src={NicePng}/>
                        </div>
                    </div>
                    <p className='mt-8  text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </motion.div>
                <motion.div className='mt-8 flex items-center gap-8'
                       initial='hidden' 
                       whileInView='visible' 
                       viewport={{once: true, amount: 0.5}} 
                       transition={{delay: 0.5, duration: 1}}
                       variants={{hidden:{opacity: 0, x:-50},
                       visible: {opacity: 1, x: 0}
                   }}     
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink 
                    className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            <div className='flex basis-3/5 justify-center md:z-10 md:ml:40 md:mt-16 md:justify-items-end'>
                <img alt='home-pageGraphic' src={Fitnes_Couple}/>
            </div>
        </motion.div>
        {aboveMedium && (
            <div className='h-[150px] w-full bg-gray-700 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img alt='redbull' src={SponsorRedBull}/>
                        <img alt='forbes' src={SponsorForbes}/>
                        <img alt='fortune' src={SponsorFortune}/>
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home