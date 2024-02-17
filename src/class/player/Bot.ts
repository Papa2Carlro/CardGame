import Player from "./Player";
import {Card, Rank} from "../../utils/types";
import {Record} from "../../utils/utilsTypes";
import {entries, random} from "../../utils/helper";

type Memory = {
  rank: Rank
  card: 1 | 2 | 3
}

class Bot extends Player {
  memory:Memory[]

  constructor() {
    super();

    this.memory = []
  }

  intelligentCardGuess() {
    let count = 0
    let maxLength = 0
    const group = {} as Record<Rank, Card[]>

    while (true) {
      count+1
      const ok = this.checkHandAndMemory()
      if (count === 3 || ok) break
    }

    this.hand
      .filter(({rank}) => !this.memory.some((value) => value.rank === rank))
      .map((item) => {
        if (!group[item.rank]) group[item.rank] = []
        group[item.rank].push(item);
        if (maxLength < group[item.rank].length) maxLength = group[item.rank].length
      })

    const priorityList = entries(group)
      .map(([rank, list]) => ({rank, length: list.length}))
      .filter(({length}) => maxLength === length)

    if (priorityList.length === 0) {
      debugger
    }

    const rank = priorityList.length === 1
      ? priorityList[0].rank
      : priorityList[random(0, priorityList.length-1)].rank

    this.addRangToMemory(rank)

    return rank
  }

  private checkHandAndMemory() {
    let handRang = this.hand.map(({rank}) => rank)

    this.memory.map(({rank}) => {
      handRang = handRang.filter((item) => item === rank)
    })

    if (!handRang.length) {
      this.reduceMemoryCount()
      return false
    }
    return true
  }

  private addRangToMemory(rank:Rank) {
    this.memory.push({rank, card: 3})
  }

  reduceMemoryCount() {
    this.memory = this.memory.map(({rank, card}) => {
      if (card - 1 === 0) return undefined
      return {rank, card: card-1}
    }).filter(Boolean) as Memory[]
  }

  public getHandCount() {
    return this.hand.length
  }
}

export default Bot
