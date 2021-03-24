import React from 'react'
import css from './Card.module.css'

export const Card = ({data}) => {
    return <div className={css.container}>
        <img src={data.img} alt='' className={css.img}/>
        <h2 className={css.title}>{data.title}</h2>
        <p>{data.text}</p>
        <h2>{data.price}</h2>
        <span>{data.pieces}</span>
        <h3>{data.composition}</h3>
        <div className={css.item}>
            <button className={css.btn}>+</button>
            <button className={css.main_btn}>{data.quantity}</button>
            <button className={css.btn}>-</button>
        </div>
        <button class={css.shopping}>{data.take}</button>
        </div>
}