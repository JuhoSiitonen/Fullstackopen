
const Button = ({handleClick, country}) => {
    return (
        <button onClick={() => handleClick(country)}>
        Show
        </button>
    )
}

export default Button