//import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "@/assets/Logo.png"
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from "@/hooks/useMedia";
import { useState } from 'react';
import ActionButton from '@/shared/actionButton';

type Props = {
    isTop : boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Navbar = ({isTop, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const [menuToggle, setMenuToggle] = useState<boolean>(false)
    const aboveMedium = useMediaQuery("(min-width: 1060px)");
    const backGround = isTop ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
        <div className={`${backGround} ${flexBetween} fixed top-0 z-30 w-full py-5`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left sile */}
                    <img alt='logo' src={Logo}/>
                    {/* right side */}
                    { aboveMedium ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page= 'Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page= 'Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                    ) : (
                        <button
                        className="rounded-full bg-secondary-500 p-2"
                        onClick={() => setMenuToggle(!menuToggle)}
                        >
                            <Bars3Icon className='h-6 w-6 text-white'/>
                        </button>
                    )}
                </div>
            </div>
        </div>
        {/*Mobile*/}
        {!aboveMedium && menuToggle && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                <div className='flex justify-end p-12'>
                    <button onClick={() => setMenuToggle(!menuToggle)}>
                        <XMarkIcon className= 'h-6 w-6 text-gray-400'/>
                    </button>
                </div>
                <div className= "ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page= 'Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page= 'Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar