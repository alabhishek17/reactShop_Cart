import Cards from "../ProCard/cards";
import data from "./data"
function ProIteam(){
    return(
        <div style={{backgroundColor:"#f5f5f5",display:"flex",border:"2px solid",justifyContent:"space-between",flexWrap:"wrap",textAlign:"center"}}>
            {
                data.map((iteam,index)=>(
                    <Cards key={index} url={iteam.URL} name={iteam.Name} price={iteam.Price} />
                ))
            }
    
        </div>
    )
}
export default ProIteam;