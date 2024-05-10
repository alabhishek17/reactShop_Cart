import style from "./css_foot.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function Foot(){
    return(
        <div className={style.main}>
         <section>
            <h2>GET IN TOUCH</h2>
            <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
             <span><FaLocationDot style={{color:"#ffd333"}}/>123 Street, New York,USA</span><br />
             <span><MdEmail style={{color:"#ffd333"}} />info@example.com</span><br />
             <span><MdPhoneInTalk style={{color:"#ffd333"}} />+012 345 67890</span>
         </section>
         <section>
            <h3>QUICK SHOP</h3>
            <ul style={{display:"flex",flexDirection:"column"}}> 
            <span><AiFillCaretRight />Home</span>
            <span><AiFillCaretRight />Our shop</span>
            <span><AiFillCaretRight />Shop Detail</span>
            <span><AiFillCaretRight />Shopping Cart</span>
            <span><AiFillCaretRight />Checkout</span>
            <span><AiFillCaretRight />Contact Us</span>
            </ul>
         </section>
         <section>
            <h3>MY ACCOUNT</h3>
            <ul style={{display:"flex",flexDirection:"column"}}> 
            <span><AiFillCaretRight />Home</span>
            <span><AiFillCaretRight />Our shop</span>
            <span><AiFillCaretRight />Shop Detail</span>
            <span><AiFillCaretRight />Shopping Cart</span>
            <span><AiFillCaretRight />Checkout</span>
            <span><AiFillCaretRight />Contact Us</span>
            </ul>
         </section>
         <section>
            <h3>NEWSLETTER</h3>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <input type="text" placeholder="Your Email Address"/>
            <h3 style={{marginTop:"20px"}}>Follow us</h3>
            
            <FaLinkedin style={{color:"#ffd333"}} />
            <FaFacebook style={{color:"#ffd333"}}/>
            <FaInstagramSquare style={{color:"#ffd333"}}/>
            <FaTwitter style={{color:"#ffd333"}}/>
         </section>
        </div>
    )
}
export default Foot;