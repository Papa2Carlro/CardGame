import {Back, Rank, Suit} from "../../utils/types";
import {Record} from "../../utils/utilsTypes";

type DeckThumbCard = Record<Rank, Record<Suit, string>>

interface DeckThumb extends DeckThumbCard {
  back: Record<Back, string>
}

import clubs_2 from '../../assets/2/clubs.svg'
import diamonds_2 from '../../assets/2/diamonds.svg'
import hearts_2 from '../../assets/2/hearts.svg'
import spades_2 from '../../assets/2/spades.svg'

import clubs_3 from '../../assets/3/clubs.svg'
import diamonds_3 from '../../assets/3/diamonds.svg'
import hearts_3 from '../../assets/3/hearts.svg'
import spades_3 from '../../assets/3/spades.svg'

import clubs_4 from '../../assets/4/clubs.svg'
import diamonds_4 from '../../assets/4/diamonds.svg'
import hearts_4 from '../../assets/4/hearts.svg'
import spades_4 from '../../assets/4/spades.svg'

import clubs_5 from '../../assets/5/clubs.svg'
import diamonds_5 from '../../assets/5/diamonds.svg'
import hearts_5 from '../../assets/5/hearts.svg'
import spades_5 from '../../assets/5/spades.svg'

import clubs_6 from '../../assets/6/clubs.svg'
import diamonds_6 from '../../assets/6/diamonds.svg'
import hearts_6 from '../../assets/6/hearts.svg'
import spades_6 from '../../assets/6/spades.svg'

import clubs_7 from '../../assets/7/clubs.svg'
import diamonds_7 from '../../assets/7/diamonds.svg'
import hearts_7 from '../../assets/7/hearts.svg'
import spades_7 from '../../assets/7/spades.svg'

import clubs_8 from '../../assets/8/clubs.svg'
import diamonds_8 from '../../assets/8/diamonds.svg'
import hearts_8 from '../../assets/8/hearts.svg'
import spades_8 from '../../assets/8/spades.svg'

import clubs_9 from '../../assets/9/clubs.svg'
import diamonds_9 from '../../assets/9/diamonds.svg'
import hearts_9 from '../../assets/9/hearts.svg'
import spades_9 from '../../assets/9/spades.svg'

import clubs_10 from '../../assets/10/clubs.svg'
import diamonds_10 from '../../assets/10/diamonds.svg'
import hearts_10 from '../../assets/10/hearts.svg'
import spades_10 from '../../assets/10/spades.svg'

import clubs_J from '../../assets/J/clubs.svg'
import diamonds_J from '../../assets/J/diamonds.svg'
import hearts_J from '../../assets/J/hearts.svg'
import spades_J from '../../assets/J/spades.svg'

import clubs_Q from '../../assets/Q/clubs.svg'
import diamonds_Q from '../../assets/Q/diamonds.svg'
import hearts_Q from '../../assets/Q/hearts.svg'
import spades_Q from '../../assets/Q/spades.svg'

import clubs_K from '../../assets/K/clubs.svg'
import diamonds_K from '../../assets/K/diamonds.svg'
import hearts_K from '../../assets/K/hearts.svg'
import spades_K from '../../assets/K/spades.svg'

import clubs_A from '../../assets/A/clubs.svg'
import diamonds_A from '../../assets/A/diamonds.svg'
import hearts_A from '../../assets/A/hearts.svg'
import spades_A from '../../assets/A/spades.svg'

import abstract from '../../assets/back/abstract.svg'
import abstract_clouds from '../../assets/back/abstract_clouds.svg'
import abstract_scene from '../../assets/back/abstract_scene.svg'
import astronaut from '../../assets/back/astronaut.svg'
import blue from '../../assets/back/blue.svg'
import blue2 from '../../assets/back/blue2.svg'
import cars from '../../assets/back/cars.svg'
import castle from '../../assets/back/castle.svg'
import fish from '../../assets/back/fish.svg'
import frog from '../../assets/back/frog.svg'
import red from '../../assets/back/red.svg'
import red2 from '../../assets/back/red2.svg'

const thumb: DeckThumb = {
  '2': {clubs: clubs_2, diamonds: diamonds_2, hearts: hearts_2, spades: spades_2},
  '3': {clubs: clubs_3, diamonds: diamonds_3, hearts: hearts_3, spades: spades_3},
  '4': {clubs: clubs_4, diamonds: diamonds_4, hearts: hearts_4, spades: spades_4},
  '5': {clubs: clubs_5, diamonds: diamonds_5, hearts: hearts_5, spades: spades_5},
  '6': {clubs: clubs_6, diamonds: diamonds_6, hearts: hearts_6, spades: spades_6},
  '7': {clubs: clubs_7, diamonds: diamonds_7, hearts: hearts_7, spades: spades_7},
  '8': {clubs: clubs_8, diamonds: diamonds_8, hearts: hearts_8, spades: spades_8},
  '9': {clubs: clubs_9, diamonds: diamonds_9, hearts: hearts_9, spades: spades_9},
  '10': {clubs: clubs_10, diamonds: diamonds_10, hearts: hearts_10, spades: spades_10},
  'J': {clubs: clubs_J, diamonds: diamonds_J, hearts: hearts_J, spades: spades_J},
  'Q': {clubs: clubs_Q, diamonds: diamonds_Q, hearts: hearts_Q, spades: spades_Q},
  'K': {clubs: clubs_K, diamonds: diamonds_K, hearts: hearts_K, spades: spades_K},
  'A': {clubs: clubs_A, diamonds: diamonds_A, hearts: hearts_A, spades: spades_A},
  back: {
    'abstract': abstract,
    'abstract_clouds': abstract_clouds,
    'abstract_scene': abstract_scene,
    'astronaut': astronaut,
    'blue': blue,
    'blue2': blue2,
    'cars': cars,
    'castle': castle,
    'fish': fish,
    'frog': frog,
    'red': red,
    'red2': red2,
  }
}

export default thumb
