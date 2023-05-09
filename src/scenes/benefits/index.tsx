import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid'
import BenefitsPageGraphics from '@/assets/BenefitsPageGraphic.png'
import {SelectedPage}  from '@/shared/types'
import { motion } from 'framer-motion'
import Benefit from './benefits'
import ActionButton from '@/shared/actionButton'

type BenefitType = {
    icon: JSX.Element;
    title: string;
    description: string;
}

const benefits : Array<BenefitType> = [{
    icon: <HomeModernIcon className='h-6 w-6'/>,
    title: 'State of the Art Facilities',
    description: 'Random description'
},{
    icon: <UserGroupIcon className='h-6 w-6'/>,
    title: "100's of Diverse Classes",
    description: "Another description"
},{
    icon: <AcademicCapIcon className='h-6 w-6'/>,
    title: "Expert and Pro Trainers",
    description: "last description"
}
]

const container = {
    hidden:{},
    visible: {
        transition:{
            staggerChildren: 0.2
        }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section
   id= 'benefits'
   className='mx-auto min-h-full w-5/6 py-20'
   >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        <motion.div className='mt-8 flex items-center gap-8'
                       initial='hidden' 
                       whileInView='visible' 
                       viewport={{once: true, amount: 0.5}} 
                       transition={{duration: 1}}
                       variants={{hidden:{opacity: 0, x:-50},
                       visible: {opacity: 1, x: 0}
                   }}>
            <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
                More than just a gym
            </h1>
            <p className='my-5 text-sm'>Text with description</p>
        </motion.div>
        <motion.div className='mt-5 items-center justify-between gap-8 md:flex'
                    initial= "hidden"
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    variants={container}>
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>
        <div className='mt-16 items-center justify-between gap-20 md:flex'>
            <img className='mx-auto' src={BenefitsPageGraphics} alt="image" />
            <div>
                <div className='relative'>
                    <div className='before:absolute before:-top-20 before-left-20 before:z-[1] before content-abstractwaves'>
                        <motion.div 
                        className='mt-8 flex items-center gap-8'
                        initial='hidden' 
                        whileInView='visible' 
                        viewport={{once: true, amount: 0.5}} 
                        transition={{delay: 0.5, duration: 1}}
                        variants={{hidden:{opacity: 0, x:-50},
                        visible: {opacity: 1, x: 0}
                    }}
                        >
                            <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
                                MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                <span className='text-primary-500'>FIT</span> 
                            </h1>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                className='mt-8 flex items-center gap-8'
                initial='hidden' 
                whileInView='visible' 
                viewport={{once: true, amount: 0.5}} 
                transition={{delay: 0.5, duration: 1}}
                variants={{hidden:{opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}>
                   <p className='my-5 mb-5'> Long Description Long Description Long Description Long Description 
                   Long Description Long Description Long Description Long 
                   Description Long Description Long Description</p>
                </motion.div>
                <div className='relative mt-14'>
                    <div className='before:absolute before:right-40 before:z-[-1] before:content-sparkles'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now 
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
   </section>
  )
}

export default Benefits