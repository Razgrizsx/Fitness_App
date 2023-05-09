import { SelectedPage } from "@/shared/types"
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import Class from '@/scenes/Class'

interface Classes {
  name:string;
  description:string;
  image:string;
}

const classes : Array<Classes> = [{
  name: "Weight Training Classes",
  description: "Description",
  image: image1
},
{
  name: "Yoga Classes",
  description: "Description",
  image: image2
},
{
  name: "Ab Core Classes",
  description: "Description",
  image: image3
},
{
  name: "Adventure Classes",
  description: "Description",
  image: image4
},
{
  name: "Fitness Classes",
  description: "Description",
  image: image5
},
{
  name: "Training Classes",
  description: "Description",
  image: image6
}
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
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
                      Texto de gimnasio Texto de gimnasio Texto de gimnasio Texto de gimnasio
                      Texto de gimnasio Texto de gimnasio Texto de gimnasio Texto de gimnasio                 
                    </p>
              </h1>
            </div>
        </motion.div>
        <div className="mt-10 h-[350] w-full overflow-x-auto overflow-y-hidden">
          <ul className='w-[2800px] whitespace-nowrap'>
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