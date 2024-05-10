
import Nav from "../Nav/nav"
import Hero from "../Hero/hero";
import Category from "../Categories/categories";
import ProIteam from "../Products/productItem";
import Offer from "../Offer/offer";
import Foot from "../Footer/footer";
function Index(){
    return (
        <div>
            <Nav/>
            <Hero/>
            <Category/>
            <ProIteam/>
            <Offer/>
            <ProIteam/>
            <Foot/>
        </div>
    )
}
export default Index;