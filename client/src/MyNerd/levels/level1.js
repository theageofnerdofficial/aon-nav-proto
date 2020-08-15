const level1 = [
  {
    gaming: {
      isEnabled: false,
      isExpanded: false,
      children: ['retroGaming', 'modernGaming', 'tabletopGaming'],
      gchildren: [
        // Retro
        'arcade',
        'atari',
        'commodore',
        'nintendo',
        'sega',
        'zx',
        // Modern
        'microsoft',
        'nintendoModern',
        'pc',
        'sony',
        // Tabletop
        'dand',
      ],
    },
  },
  {
    comics: {
      isEnabled: false,
      isExpanded: false,
      children: ['marvel', 'dc'],
      gchildren: [],
    },
  },
  {
    tvFilm: {
      isEnabled: false,
      isExpanded: false,
      children: ['television', 'film'],
      gchildren: [],
    },
  },
  {
    toys: {
      isEnabled: false,
      isExpanded: false,
      children: ['lego', 'actionFigures'],
      gchildren: [],
    },
  },
  {
    wrestling: {
      isEnabled: false,
      isExpanded: false,
      children: ['wwe', 'tna'],
      gchildren: [],
    },
  },
];

export default level1;
