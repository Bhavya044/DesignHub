import React from 'react'
import IconWrapper from '../Wrapper/IconWrapper'

interface ISocialMediaIconsProps{
    fromFooter?:boolean
}

const SocialMediaIcons:React.FC<ISocialMediaIconsProps> = ({fromFooter}) => {
    const handleRedirect=(link:string)=>window.open(link,"_blank")
  return (
    <div className={ fromFooter ? "flex gap-6":`hidden sm:flex gap-3 mr-3 mt-6`}>
    <IconWrapper  onClick={()=> handleRedirect(`https://in.pinterest.com/bnbindiafurnitures/`)} iconPath="/assets/svgs/pinterest.svg" />
    <IconWrapper onClick={()=> handleRedirect(`https://www.instagram.com/bnbindia/`)} iconPath="/assets/svgs/instagram.svg" />
    <IconWrapper onClick={()=>handleRedirect(`https://www.facebook.com/bnbindiafurnitures/`)} iconPath="/assets/svgs/facebook.svg" />
    <IconWrapper onClick={()=> handleRedirect(`https://www.linkedin.com/company/14490757`)} iconPath="/assets/svgs/linked-in.svg" />
  </div>
  )
}

export default SocialMediaIcons