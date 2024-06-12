import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';


const Footer = () => (

  <section id='contact' className={`${styles.paddingY} 
  ${styles.flexCenter} flex-col relative`}>
    
  <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] 
         rounded-full blue__gradient' />

    <div className='flex justify-between items-center 
                    md:flex-row flex-col sm:mb-16 mb-6 
                    relative z-[1] '>

      <h1 className={styles.heading2}>
        Contact
      </h1>

    </div>


<div className='contact'>

  <div className="container">

    <div className="row">
      
      <div className="contact_left">

          <p className={`${styles.paragraph} 
                  max-w-[470px] mt-5`}>

          <i class="fa-regular fa-envelope"></i>
              meron_amanuel@gmail.com
          </p>

          <p className={`${styles.paragraph} 
                  max-w-[470px] mt-5`}>
          <i class="fa-sharp fa-solid fa-square-phone">
          </i>+251923790730</p>

          <div className="social_icons">
              <a className="twitter"  href="#"><i class="fa-brands fa-twitter"></i></a>
              <a className="github"   href="https://github.com/ameha1"><i class="fa-brands fa-github"></i></a>
              <a className="linkedin" href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BquGv2iZ2TJCL1BxsB5xddw%3D%3D"><i class="fa-brands fa-linkedin-in" ></i></a>
              <a className="telegram" href="https://t.me/godaccess"><i class="fa-brands fa-telegram"></i></a>
          </div>

      </div>

      
 
        <div className="contact_right">

            <form name="submit-to-google-sheet">
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Email" required />
                <textarea name="Message" id=""  rows="6" placeholder="Your Message"></textarea>
                <button type="submit" class={`py-4 px-6 bg-blue-gradient 
                font-poppins font-medium text-[18px] text-primary outline-none
                rounded-[10px]`}> 
                Submit
                </button>
            </form>
            <span id="msg"></span>
        </div>

    </div>

  </div>

</div>    

    <div class="copyright">

        <p className={`${styles.paragraph}`}> 
                  © 2023 </p>

    </div>
    
  
</section>


)

export default Footer