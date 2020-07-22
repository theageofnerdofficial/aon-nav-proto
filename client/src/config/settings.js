const settings = {
  network: {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
  },
  ui: {
    defaultPostThumbs: {
      general: './img/thumbnails/aon-default.svg',
      reddit: {
        gaming: './img/thumbnails/gaming-reddit-2.svg',
      },
      twitter: {
        gaming: './img/thumbnails/gaming-twitter-2.svg',
      },
    },
    style: {
      sectionTab: {
        featured: '#f44336',
        mynerd: '#8bc34a',
        tvfilm: '#009688',
        gaming: {
          retro: '#cddc39',
          modern: '#795548',
          board: '#673ab7',
        },
        comics: '#ffc107',
      },
    },
  },
};

export default settings;
