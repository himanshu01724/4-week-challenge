import "./MenuCard.css"
function MenuCard(props){
    return(
        <div className="card">
        <img src={props.image} alt="phtography" />
        <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{props.id}$</p>
        </div>
        </div>
        
    )
}
export default MenuCard