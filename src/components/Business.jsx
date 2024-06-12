import { services } from '../constants';
import styles, { layout } from "../style";
import Button from './Button';

const ServiceCard = ({ icon, title, content, index}) => (
  
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== services.length - 1 ? 
                  "mb-6" : "mb-0"} service-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-Blue `}>

      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />

    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-popppins font-semibold text-white 
                     text-[18px] leading-[22px] mb-1'>
        {title}
      </h4>

      <p className='font-poppins font-normal text-dimWhite 
                    text-[16px] leading-[24px] mb-1'>
        {content}
      </p>

    </div>

  </div>

)


const Business = () => {

  return (

    <section id='services' className={layout.section}>

      <div className={`${layout.sectionInfo} ml-[5%]`}>
        <h2 className={styles.heading2}>
          Why do our clients prefer 
          <br className='sm:block hidden' /> our Services ?
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

        Our detergent manufacturing company is preferred and chosen by many users due to our commitment 
        to quality, innovation, user-friendliness, sustainability, and customer satisfaction. 
        We consistently produce high-performance detergents that deliver exceptional cleaning results. 
        By embracing innovation and investing in research and development, 
        we offer cutting-edge formulations that effectively tackle various stains.
        We prioritize sustainability by incorporating eco-friendly practices into our manufacturing processes. 
        Above all, we value customer feedback and continuously strive to meet and exceed their expectations.

        </p>
      </div>


      <div className={`${layout.sectionImg} flex-col `}>

        {services.map( (service, index) => (

          <ServiceCard key={service.id} {... service} />

        ))}

      </div>



    </section>




  )
}

export default Business