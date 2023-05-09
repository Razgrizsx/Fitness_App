
type Props = {
  name:string;
  description:string;
  image:string;
}

const Class = ({name, description, image}: Props) => {
    const overlay = 'p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-black text-center text-white opacity-0 transition duration-500 hover:opacity-90'
  
    return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlay}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img className="w-100 h-[270px]" src={image} alt="image" />
    </li>
  )
}

export default Class