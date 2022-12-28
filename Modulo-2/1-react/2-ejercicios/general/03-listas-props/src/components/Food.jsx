const Food = (props) => {
  return (
    <div>
    <h3>{props.name}</h3>
    <p>Tiene {props.calories} calorías.</p>
    <p>Proviene de {props.origin}</p>
    </div>
    )
}

export default Food