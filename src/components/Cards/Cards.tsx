import {FC} from "react";

import scss from './Cards.module.scss'
import classNames from 'classnames/bind'
const cn = classNames.bind(scss)

import thumb from "./thumb";
import {Card, Rank} from "../../utils/types";

type Cards = {
  count?: number
  cards?: Card[]
  onClick?: (card:Rank) => void
}

const Cards: FC<Cards> = ({cards, count, onClick}) => {

  if (count) {
    return <div className={cn('Cards')}>
      {Array(count).fill(1).map((_, index) => (
        <div key={index} className={cn('Cards__card')}>
          <img src={thumb.back.blue} alt=""/>
        </div>))}
    </div>
  }

  return <div className={cn('Cards')}>
    {cards?.map(({suit, rank}) => (
      <div onClick={() => onClick?.(rank)}
           key={rank + suit}
           className={cn('Cards__card', 'player')}>
        <img src={thumb[rank][suit]} alt=""/>
      </div>))}
  </div>
}

export {Cards}
