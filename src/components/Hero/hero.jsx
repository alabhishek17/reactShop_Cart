import style from "./css_hero.module.css"
import img1 from "../../../public/hero1.jpg"
import img3 from "../../../public/hero3.jpg"
import { FaCarRear } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
function Hero() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>

            <div className={style.heroContainer} >
                <section className={style.left}>
                    {/* <img src={img} alt="" /> */}
                    <div className={style.leftText}>
                        <h1>Women Fashion</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laudantium laboriosam</p>
                        <p> veritatis minus amet, iure maxime suscipit deserunt. Veritatis natus autem alias non saepe quasi nesciunt magni nemo distinctio illum.</p>
                        <button>Shop Now</button>
                    </div>

                </section>
                <section className={style.right}>
                    <section className={style.right1}>
                        {/* <img src={img1} alt="" style={{width:"100%"}} /> */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "50px", textAlign: "center", lineHeight: "2.5rem", color: "#fff" }}>
                            <h3 style={{ fontWeight: "bolder", fontSize: "20px" }}>Sava 20%</h3>
                            <h2>Special Offer</h2>
                            <button style={{ padding: "10px", width: "30%", textAlign: "center", marginLeft: "130px", backgroundColor: "#ffd333" }}>Shop Now</button>
                        </div>
                    </section>
                    <section className={style.right2}>
                        {/* <img src={img3} alt=""  style={{width:"100%"} }/> */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "50px", textAlign: "center", lineHeight: "2.5rem", color: "#fff" }}>
                            <h3 style={{ fontWeight: "bolder", fontSize: "20px" }}>Sava 20%</h3>
                            <h2>Special Offer</h2>
                            <button style={{ padding: "10px", width: "30%", textAlign: "center", marginLeft: "130px", backgroundColor: "#ffd333" }}>Shop Now</button>
                        </div>
                    </section>
                </section>

            </div>
            <section className={style.bottom} >
                <div className={style.icons}>
                    <FaCheck style={{ color: "#ffd333", fontSize: "30px" }} />
                    <h1>Free Shipping</h1>
                </div>
                <div className={style.icons}>
                    <FaCarRear style={{ color: "#ffd333", fontSize: "30px" }} />
                    <h1>Free Shipping</h1>
                </div>
                <div className={style.icons}>
                    <MdCompareArrows style={{ color: "#ffd333", fontSize: "30px" }} />
                    <h1>Free Shipping</h1>
                </div>
                <div className={style.icons}>
                    <PiPhoneCallFill style={{ color: "#ffd333", fontSize: "30px" }} />
                    <h1>Free Shipping</h1>
                </div>
            </section>
        </div>
    )
}
export default Hero;