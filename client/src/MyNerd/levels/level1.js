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
      description:
        'Groingrabbingly good gaming content from retro to modern to tabletop',
    },
  },
  {
    comics: {
      isEnabled: false,
      isExpanded: false,
      children: ['marvel', 'dc'],
      gchildren: [],
      description: 'Awesomely great information trending about comicbooks',
    },
  },
  {
    tvFilm: {
      isEnabled: false,
      isExpanded: false,
      children: ['television', 'film'],
      gchildren: [],
      description: 'Top sources on televisual and cinematic media',
    },
  },
  {
    toys: {
      isEnabled: false,
      isExpanded: false,
      children: ['lego', 'actionFigures'],
      gchildren: [],
      description: 'Some fun news and information regarding toys',
    },
  },
  {
    wrestling: {
      isEnabled: false,
      isExpanded: false,
      children: ['wwe', 'impact'],
      gchildren: [],
      description: "The People's professional wrestling content",
    },
  },
];

export default level1;
