export const tripFilter = {
  locations: ['Jizerky', 'Krkonoše', 'Beskydy'],
  difficulty: ['lehká', 'střední', 'těžká'],
  lengthRange: ['<10', '10-15', '15-20', '20>'],
  terrainType: [
    'asfalt',
    'lesní cesta',
    'dřevěný chodník',
    'kamenitá cesta',
    'skály',
    'řetězy',
    'žebříky',
  ],
  features: [
    'výhledy',
    'vodopády',
    'naučné stezky',
    'občerstvení',
    'pitná voda',
    'přístřešky',
    'piknik',
    'klid',
  ],
  suitableFor: ['kočárky', 'děti', 'psi'],
};
export const tripTypes = [
  {
    name: 'Vezmu i psa (nebo tchyni)',
    filter: '?suitableFor=psi%2C&features=vodopády%2C',
  },
  { name: 'Vzhůru na piknik!', filter: '?features=piknik%2Cvýhledy%2C' },
  { name: 'Z trasy rovnou na pivo', filter: '?features=občerstvení%2C' },
  { name: 'Romantika pro dva', filter: '?features=výhledy%2Cklid%2C' },
  { name: 'Rande s přírodou', filter: '?features=výhledy%2Cklid%2C' },
  {
    name: 'Chci si hrát (pro děti i hravé dospělé)',
    filter:
      '?suitableFor=děti%2Ckočárky%2C&terrain=asfalt%2C&features=naučné+stezky%2C',
  },
  {
    name: 'Zahojit zlomené srdce',
    filter: '?features=výhledy%2Cklid%2Cpřístřešky%2C',
  },
  {
    name: 'Ticho, klid a žádní lidé (pro introverty)',
    filter: '?features=výhledy%2Cklid%2C&suitableFor=psi%2C',
  },
  {
    name: 'Chci fotky, které vypadají jako z Alp',
    filter: '?features=výhledy%2Cvodopády%2C&terrain=žebříky%2C',
  },
  {
    name: 'Potřebuju se vybít',
    filter:
      '?terrain=kamenitá+cesta&difficulty=těžká&lengthRange=15-20&location=Krkonoše',
  },
];
