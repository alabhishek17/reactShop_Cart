import style from "./css_nav.module.css"
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
function Nav(){
    return(
        <div>
        <section className={style.main}>
            <div className={style.left}>
              <li>About</li>
              <li>Contect</li>
              <li>Help</li>
              <li>FAQs</li>
            </div>
            <div className={style.right}>
             
             <button>Account</button>
             <button>USD</button>
             <button>EN</button>
            </div>
        </section>

        <section className={style.searchContainer}>
            <div className={style.searc1}>
            <h1 style={{backgroundColor:"#3d464d",color:"#ffd333"}}>MULTI</h1>
            <h1 style={{backgroundColor:"#ffd333",color:"#3d464d"}}>SHOP</h1>
            </div>
            <div className={style.searc2}>
            <input type="text" placeholder="Search for products" />
            <span style={{fontSize:"1.2rem",border:"2px solid",alignItems:"center",}}><BiSearch /></span>
            </div>
            <div className={style.searc3}>
            <p>Customer Service</p>
            <span>+012345678</span>
            </div>
        </section>
        <section className={style.categorices}>
            <div className={style.categoriesLeft}>
            <FaBars />
            <h3>Categories</h3>
            <FaAngleDown style={{marginLeft:"50px"}}/>
            </div>
            <div className={style.categorieMiddle}>
                 <li>Home</li>
                 <li>Shop</li>
                 <li>Shop Detail</li>
                 <li>Pages</li>
                 <li>Contact</li>
            </div>
            <div className={style.categoriesRight}>
            <FaHeart />
            <FaCartShopping />
            </div>
        </section>
        </div>
    )
}
export default Nav;