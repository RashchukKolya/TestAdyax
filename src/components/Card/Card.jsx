import React from 'react';
import style from './Card.module.css'
import Trash from './noun-323476-cc.png';
import Plus from './group.png';
import Minus from './scroll.png';


const Card = ({image, id, title, text, number, totalPrice, funcDec, funcInc, funcDelet}) => {
    return (
        <div className={style.main}>
            <img src={image} alt="img" className={style.img}/>
            <div>
                <h2 className={style.title}>{title}</h2>
                <p className={style.text}>{text}</p>
                <select className={style.select}>
                    <option value="Label">Label</option>
                    <option value="Image">Image</option>
                    <option value="Price">Price</option>
                    <option value="Minimum quantity">Minimum quantity</option>
                    <option value="Maximum quantity">Maximum quantity</option>
                </select>
            </div>
            <div className={style.div_price}>
                 <div className={style.quantity}>
                    <button id={id} className={style.button} onClick={funcDec}>
                        <img id={id} src={Minus} alt="minus"/>
                    </button>
                    <h3 className={style.number}>{number}</h3>
                    <button id={id} className={style.button} onClick={funcInc}>
                        <img id={id} src={Plus} alt="plus"/>
                    </button>
                </div>
                <div className={style.total_price}>
                    <img id={id} src={Trash} alt="trash" className={style.trash} onClick={funcDelet}/>
                    <h3 className={style.price}>{totalPrice}.00 €</h3>
                </div>
            </div> 
        </div>
    );
};

export default Card;