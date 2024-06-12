
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';


const Billing = () => (
    

    <section id='product' className={`${styles.paddingY} 
    ${styles.flexCenter} flex-col relative`}>

    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] 
           rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center 
                      md:flex-row flex-col sm:mb-16 mb-6 
                      relative z-[1] ml-[10%]'>

        <h1 className={styles.heading2}>
          Products
        </h1>

      </div>

      <div className='flex flex-wrap sm:justify-start 
             justify-center w-full feedback-container 
             relative z-[1]'>  

        <div className='flex justify-between flex-col px-10 py-12 
        rounded-[30px] max-w-[440px] md:mr-10 sm:mr-5 mr-0 my-5 
        product-card ml-[3.5%]' >  

            <div className={layout.sectionInfo}>
              <h2 className='text_des'>
                Detergent 
              </h2>
            </div>

            <div className={layout.sectionImgReverse}>
              <img src={bill} alt="billing" 
              className='w-[100%] h-[100%] relative z-[5]' />

              <div className='absolute z-[3] -left-1/2
              top-0 w-[50%] h-[50%] rounded-full
              white-gradient' />
              <div className='absolute z-[0] -left-1/2
              bottom-0 w-[50%] h-[50%] rounded-full
              pink__gradient' />

          </div>

          <div>

            <p className={`${styles.paragraph} 
            max-w-[470px] mt-5`}>
              suitable for anything that needsd cleaning and make it as 
              bright as possible this detergent id the one for you nigga.

          </p>

           </div>


      </div>

     </div>



    </section>



)

export default Billing