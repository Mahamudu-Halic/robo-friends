import { Component } from "react";

import './card-style.css'

const Card = (props) => {
    const { id, name, email } = props.monster
    return(
        <div key={id} className="card-container">
            <img src={`https://robohash.org/${id}?set=set2`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card