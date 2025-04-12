import Link from 'next/link'
import React from 'react'

const Button = ({
    buttonName,
    className,
    url,
    btnType

}:{
    buttonName: string,
    className?: string,
    url?:string,
    btnType?:BtnType
}) => {

    const type = btnType === 'primary' || !btnType ? 'text-white bg-black  lg:text-black lg:bg-transparent lg:hover:bg-black lg:hover:text-white  border border-black' : 'bg-[#FFE100] text-black hover:bg-black hover:text-[#FFE100]'

  return (
    <Link href={url?url:"/"} className={`${type} transition-colors duration-300  rounded-md min-w-fit p-[10px] text-center ${className}`}>
        {buttonName}
    </Link>
  )
}

type BtnType = 'primary' | 'secondary'

export default Button