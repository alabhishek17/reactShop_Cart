import style from "./css_pro.module.css"

function Cards({url,name,price}){
    return(
        <div className={style.main}>
            <img src={url} alt="" />
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
    )
}
export default Cards;