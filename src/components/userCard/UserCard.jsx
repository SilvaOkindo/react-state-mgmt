import user_1 from "../../assets/user-1.jpg";
import Button from "../button/Button";
import Form from '../userform/Form'

import { useState } from "react";

import "./userCard.css";

const UserCard = () => {

    const [color, setColor] = useState('#cc6868');

    const handleOnClick = () => {
        setColor(randomColor());
    }

    const randomColor = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

  return (
    <div className="container">
    <div className="usercard">
      <img src={user_1} alt="user-1" />
      <h2 className="name">Silva Okindo</h2>
      <h2 className="occupation">React Developer</h2>
      <p className="summary" style={{color: color}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        ipsum, eos saepe aperiam quod explicabo necessitatibus! Beatae vero
        error nulla?
      </p>
      <Button color="#cc6868" name="Change color" border_radius={12} onClick={handleOnClick}/>
    </div>

    <Form />
    </div>
  );
};

export default UserCard;
