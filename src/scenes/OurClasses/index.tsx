import { SelectedPage } from "@/shared/types"
import Weight from '@/assets/Weigth.jpg'
import Yoga from '@/assets/Yoga.jpg'
import Abs from '@/assets/Abs.webp'
import Adventure from '@/assets/Adventure.jpg'
import Program from '@/assets/Program.jpg'
import Training from '@/assets/Training.jpg'
import { motion } from 'framer-motion'
import Class from '@/scenes/Class'

interface Classes {
  name:string;
  description:string;
  image:string;
}

const classes : Array<Classes> = [{
  name: "Weight Training Classes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: Weight
},
{
  name: "Yoga Classes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: Yoga
},
{
  name: "Ab Core Classes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: Abs
},
{
  name: "Adventure Classes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: Adventure
},
{
  name: "Fitness Classes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: Program
},
{
  name: "Training Classes",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: Training
}
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-gray-700 py-40">
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div className="mx-auto w-5/6"
        initial='hidden' 
        whileInView='visible' 
        viewport={{once: true, amount: 0.5}} 
        transition={{delay: 0.5, duration: 1}}
        variants={{hidden:{opacity: 0, x:-50},
        visible: {opacity: 1, x: 0}
    }}     
        >
            <div>
              <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
                    Our Classes
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                 
                    </p>
              </h1>
            </div>
        </motion.div>
        <div className="mt-10 h-[350] w-full overflow-x-auto overflow-y-hidden">
          <ul className='w-[2800px] h-[300px] whitespace-nowrap'>
              {classes.map((item: Classes, index) => (
              <Class
                key={`${item.name} - ${index}}`}
                name= {item.name}
                description={item.description}
                image={item.image}
              />
              ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses