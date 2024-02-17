import {Card, Rank, Suit} from "../../utils/types";
import {Record} from "../../utils/utilsTypes";
import {entries} from "../../utils/helper";

class Player {
  protected hand: Card[]
  protected group: Rank[] = []

  constructor() {
    this.hand = []
  }

  takeCard(card:Card) {
    this.hand.push(card)
  }

  takeManyCard(cards:Card[]) {
    this.hand = [...this.hand, ...cards]
  }

  checkGuessing(checkRank:Rank):Card[] | null {
    const guessing:Card[] = []
    const cards = this.hand.map((item) => {
      if (item.rank === checkRank) {
        guessing.push(item)
        return
      }
      return item
    }).filter(Boolean) as Card[]

    if (guessing.length) {
      this.hand = cards
      return guessing;
    }
    else return null
  }

  checkGroup() {
    const group = {} as Record<Rank, Suit[]>
    let isGroup = false;

    this.hand.map(({rank, suit}) => {
      if (!group[rank]) group[rank] = []
      group[rank].push(suit)
    })

    entries(group).map(([key, list]) => {
      if (list.length === 4) {
        isGroup = true;
        return
      }
      delete group[key]
    })

    if (isGroup) {
      this.addGroup(group)
      return group
    } else return null
  }

  addGroup(group:Record<Rank, Suit[]>) {
    const list = entries(group).map(([rank]) => rank);

    console.log('addGroup', list)

    this.hand = this.hand.filter(({rank}) => !list.some((item) => item === rank))

    this.group = [...this.group, ...list]
  }

  getHand() {
    return this.hand
  }
}

export default Player
