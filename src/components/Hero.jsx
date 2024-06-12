
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {

  return (

    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[6px] px-1 
                        bg-dicount-gradient
                        rounded-[10px] mb-2'>

          {/* <img src={discount} alt="dicount"
          className='w-[32px h-[32px]' /> */}
           
          <p className={`${styles.paragraph} ml-0`}>

          <span className='text-white'>Excellence   
          </span> in every {" "}
          <span className='text-white'>scoop. 
          </span>

          </p>

        </div>

      <div className='flex flex-row justify-between items-center w-full'>

        <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px]
                       text-white ss:leading-[100px] leading-[70px]'>

            Clean<br className='sm-blockhidden' /> {" "}
            <span
            className='text-gradient'>Refresh 
            </span> {" "}<br className='sm-blockhidden' />
            Shine
        </h1>



      <div className='ss:flex hidden md:mr-4 mr-0'>

          <GetStarted />

      </div>


      </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

        Welcome to us, a leading detergent manufacturing company dedicated to 
        providing high-quality cleaning solutions for homes and businesses.
        Our website aims to showcase our wide range of products, their benefits, 
        and the expertise of our dedicated staff.

        </p>  

      </div>


      <div className={`flex-1 flex ${styles.flexcenter} md:my-0 my-10 relative`}>

        <img src={robot} alt="billing"
            className='w-[100%] h-[100%] relative z-[5]' />


        <div className='absolute z-[0] w-[40%] h-[35%] top-[10%] right-[30%] pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-[5%] top-[40%] right-[0%] white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%]  bottom-[25%] top-[0%] right-[30%] blue__gradient' />
      

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>


    </section>



    
  )

}

export default Hero