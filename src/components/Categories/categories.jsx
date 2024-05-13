import data from "./data";
import Card from "../CardIteam/Card";
function Category(){
return(
    <>
    {/* <div >
        
        <h1>Category</h1>
        <hr/ >
    </div> */}
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"80px 50px",backgroundColor:"#f5f5f5"}}>
      
       {
        data.map((iteam,index)=>(
            <Card key={index} url={iteam.URL} name={iteam.Name} p={iteam.Products} style={{width:"30%"}}/>
        ))
}
    </div>
    </>
)
}
export default Category;