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
    style: {
      sectionTab: {
        featured: '#f44336',
        tv: '#8bc34a',
        film: '#009688',
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
