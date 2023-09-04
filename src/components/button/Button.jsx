/* eslint-disable react/prop-types */
import './button.css'
const Button = ({color, name, border_radius, onClick}) => {

  const styles = {
    backgroundColor: color,
    borderRadius: border_radius
  }

  return (
    <button className="change-color" style={styles} onClick={onClick}>{name}</button>
  )
}

export default Button