export const Pokemon = ({ name, sprites }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={sprites?.front_default} alt={name} />
        </div>
    )
}
