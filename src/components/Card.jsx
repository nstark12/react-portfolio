const Card = props => {
    console.log(props.img)
    return (
        <div className="card">
            <img 
                src={props.img} 
                alt={`Picture of ${props.name}`} 
                className="card-img-top"
            />
            
            <div className="card-body">
                <h3 className="card-title">
                    {props.name}
                </h3>
                <p className="card-text">
                    {props.description}
                    {props.github}
                </p>
            </div>
        </div>
    )
}

export default Card