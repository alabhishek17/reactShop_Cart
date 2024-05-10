import style from "./css_offer.module.css"
import img from "../../../public/offer-1.jpg"
import img1 from "../../../public/offer-2.jpg"
function Offer(){
return(
    <div style={{display:"flex" , justifyContent:"space-around",margin:"100px 0px"}}>
        <div className={style.right}>
           <img src={img} alt="" />
        </div>
        <div className={style.left}>
        <img src={img1} alt="" />
        </div>
    </div>
    
)
}
export default Offer;