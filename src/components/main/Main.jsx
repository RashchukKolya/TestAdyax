import React from 'react';
import style from './Main.module.css'
import Card from '../Card/Card';

const Main = ({data, totalPrice, numbers, funcDec, funcInc, total, funcDelet}) => {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                {data.map(el => <Card id={el.id} key={el.id} title={el.title}  text={el.about} price={el.price} image={el.image} number={numbers[el.id - 1]} funcDec={funcDec} funcInc={funcInc} totalPrice={total[el.id - 1]} funcDelet={funcDelet}/>)}
                <h2 className={style.total}>{totalPrice}.00 €</h2>
            </div>
        </div>
    );
};

export default Main;