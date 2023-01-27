import { ObjectId } from 'bson';

export default {
  insert: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    },
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      type: '',
      gender: 'Female',
      origin: 'Abadango',
      location: 'Abadango',
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
    },
    {
      id: 7,
      name: 'Abradolf Lincler',
      status: 'unknown',
      species: 'Human',
      type: 'Genetic experiment',
      gender: 'Male',
      origin: 'Earth (Replacement Dimension)',
      location: 'Testicle Monster Dimension',
      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg'
    },
    {
      id: 9,
      name: 'Agency Director',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg'
    },
    {
      id: 10,
      name: 'Alan Rails',
      status: 'Dead',
      species: 'Human',
      type: 'Superhuman (Ghost trains summoner)',
      gender: 'Male',
      origin: 'unknown',
      location: "Worldender's lair",
      image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg'
    },
    {
      id: 11,
      name: 'Albert Einstein',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg'
    },
    {
      id: 12,
      name: 'Alexander',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Anatomy Park',
      image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg'
    },
    {
      id: 13,
      name: 'Alien Googah',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'unknown',
      origin: 'unknown',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg'
    },
    {
      id: 14,
      name: 'Alien Morty',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg'
    },
    {
      id: 15,
      name: 'Alien Rick',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg'
    },
    {
      id: 16,
      name: 'Amish Cyborg',
      status: 'Dead',
      species: 'Alien',
      type: 'Parasite',
      gender: 'Male',
      origin: 'unknown',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg'
    },
    {
      id: 17,
      name: 'Annie',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: 'Earth (C-137)',
      location: 'Anatomy Park',
      image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
    },
    {
      id: 18,
      name: 'Antenna Morty',
      status: 'Alive',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg'
    },
    {
      id: 19,
      name: 'Antenna Rick',
      status: 'unknown',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: 'unknown',
      location: 'unknown',
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
    },
    {
      id: 20,
      name: 'Ants in my Eyes Johnson',
      status: 'unknown',
      species: 'Human',
      type: 'Human with ants in his eyes',
      gender: 'Male',
      origin: 'unknown',
      location: 'Interdimensional Cable',
      image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg'
    }
  ],
  create: {
    _id: new ObjectId('627e82e22d58ad3ec3f3e9f8'),
    id: 21,
    name: 'aqua morty',
    status: 'unknown',
    species: 'humanoid',
    type: 'fish-person',
    gender: 'Male',
    origin: 'unknown',
    location: 'citadel of ricks',
    image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg'
  }
};
