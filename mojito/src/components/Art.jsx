import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Art = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 })
    const start = isMobile?'top 20%':'top top'

    useGSAP(()=>{
        const scrollTl=gsap.timeline({
            scrollTrigger: {
                trigger:'#art',
                start,
                end: 'bottom center',
                scrub:1.5,
                pin: true
            }
        })
        scrollTl.to('.will-fade',{
            opacity:0,
            ease:'power1.inOut',
            stagger:.2
        })
        .to('.masked-img',{
            scale:1.3,
            maskSize:'400%',
            maskPosition: 'center',
            duration: 1,
            ease:'power1.inOut',

        })
        .to('#masked-content',{
            opacity:1,
            ease:'power1.inOut',
            duration:1
        })
    })

  return (
    <div id='art'>
        <div className="container mx-auto pt-20 h-full">
            <h2 className='will-fade'>The ART</h2>
            <div className="content">
                <ul className="will-fade space-y-4">
                    {goodLists.map((feature,index)=>(
                        <li key={index} className='flex items-center gap-2'>
                            <img src="/images/check.png" alt="check" />
                            <p>{feature}</p> 
                        </li>
                    ))}
                </ul>
                <div className="cocktail-img">
                    <img src="/images/under-img.jpg" alt="cocktail"  className='abs-center size-full object-contain masked-img'/>
                </div>
                 <ul className="will-fade space-y-4">
                    {featureLists.map((feature,index)=>(
                        <li key={index} className='flex items-center justify-start gap-2'>
                            <img src="/images/check.png" alt="check" />
                            <p className='md:w-fit w-60'>{feature}</p> 
                        </li>
                    ))}
                </ul>
            </div>
            <div className="masked-container">
                <h2 className='will-fade'>Sip-Worthy Perfection</h2>
                <div id="masked-content">
                    <h3>Made with craft,Poured with passion</h3>
                    <p>This isn't just a drink,Its a carefully crafted moment just for you!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art