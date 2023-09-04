import { useState } from "react"
import Button from "../button/Button";
const AddToList = () => {
    const [fruits, setAddFruit] = useState([]);
    const [fruit, setFruit] = useState('');

    const addFruitToList = () => {
        if (fruit=='') return;
        if (!fruits.includes(fruit)) {
            setAddFruit([...fruits, fruit]);
        }
        setFruit('');
    }

    const handleOnchange = (e) => {
        setFruit(e.target.value);
       
    }
  return (
    <div className="container">
        <h1>Add to List</h1>
        <ul className="container">
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
        <input type="text" name="fruit" value={fruit} id="add-fruit" placeholder="enter fruit" onChange={handleOnchange}/>
        <Button onClick={addFruitToList} name='Add fruit' color='red'/>
    </div>
  )
}


export default AddToList