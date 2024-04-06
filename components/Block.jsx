import Image from "next/image"

const Block = ({title,para}) => {
  return (
    <div className=" border-r border-gray-300 w-50 h-full flex items-center px-3">
        <Image 
        src={"/demo.svg"}
        alt="demo"
        width={100}
        height={100}
        className="w-8 h-8 rounded-full mr-5"
        />

<div>
        <h3 className=" font-bold">{title}</h3>
        <p className=" text-gray-400 text-xs line-clamp-1">
          {para}
        </p>
</div>

    </div>
  )
}

export default Block