import style from "./css_card.module.css"
function Card({url,name,p}){
    return(
        <div style={{backgroundColor:""}}>
           
            <section className={style.cards} > 

            <img src={url} alt="" />
            <div>
            <h3>{name}</h3>
            <p>{p}</p>
            </div>
             </section>
            
        </div>
    )
}
export default Card;