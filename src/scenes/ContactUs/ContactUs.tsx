import { SelectedPage } from "@/shared/types"
import {motion} from 'framer-motion'
import YogaPose from '@/assets/YogaPose.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    

  return (
    <section id='contactus' className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div className="md:3/5"
                        initial='hidden' 
                        whileInView='visible' 
                        viewport={{once: true, amount: 0.5}} 
                        transition={{delay: 0.5, duration: 1}}
                        variants={{hidden:{opacity: 0, x:-50},
                        visible: {opacity: 1, x: 0}
                        }}>
                <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
                    <span className="text-primary-500">
                        JOIN NOW
                    </span> TO GET IN SHAPE
                </h1>            
                <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
            </motion.div>
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                initial='hidden' 
                whileInView='visible' 
                viewport={{once: true, amount: 0.5}} 
                transition={{delay: 0.5, duration: 1}}
                variants={{hidden:{opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
                }}>
                    <form target="_blank"
                          action="https://formsubmit.co/razgrisss41@gmail.com" method="POST"
                    >
                        <input className="mb-5 w-full rounded-lg bg-gray-700 px-5 py-3 placeholder-white" 
                                type="text" name="name"
                                placeholder="NAME"
                                
                                />
                                
                               
                        <input className="mb-5 w-full rounded-lg bg-gray-700 px-5 py-3 placeholder-white" 
                                type="text" 
                                placeholder="EMAIL"
                                
                                />
                                
                                
                                <textarea className="mb-5 w-full rounded-lg bg-gray-700 px-5 py-3 placeholder-white" 
                                 rows={4}
                                 cols={50}
                                placeholder="MESSAGE"
                                
                                />
                            
                                <button type="submit" className="mt-5 rounded-lg bg-blue-600 px-20 py-3 transition duration-500 hover:text-white">
                                    Submit
                                </button>
                    </form>
                </motion.div>
                <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                initial='hidden' 
                whileInView='visible' 
                viewport={{once: true, amount: 0.5}} 
                transition={{delay: 0.5, duration: 1}}
                variants={{hidden:{opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
                }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-rigth-10 before:z-[-1]">
                        <img className="w-full" src={YogaPose} alt="contactpicture" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
        <div >
</div>
    </section>
    
  )
}

export default ContactUs