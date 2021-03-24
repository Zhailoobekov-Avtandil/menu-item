import React from 'react'
import css from './Card.module.css'

export const Card = ({data}) => {
    return <div className={css.container}>
        <div className={css.block}>
        <img src={data.img} alt=''/>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <h2>{data.price}</h2>
        <span>{data.pieces}</span>
        <h3>{data.composition}</h3>
        <div className={css.item}>
            <button >+</button>
            <button>{data.quantity}</button>
            <button>-</button>
        </div>
        <button>{data.take}</button>
        </div>
    </div>
}