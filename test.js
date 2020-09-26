const generator = require('@sbj42/word-search-generator');

const words = ['cows', 'tracks', 'arrived', 'located', 'sir', 'seat',
  'division', 'effect', 'underline', 'view', 'annual',
  'anniversary', 'centennial', 'millennium', 'perennial',
  'artisan', 'apprentice', 'meteorologist', 'blizzard', 'tornado',
  'intensify','speed','count','consonant','someone',
  'sail','rolled','bear','wonder','smiled','angle', 'absent',
  'decadent', 'excellent', 'frequent', 'impatient', 'cell',
  'cytoplasm', 'organelle', 'diffusion', 'osmosis',
  'respiration'
];

console.log(generator);
const puzzle = generator.generate({
  words: words,
  height: 20,
  width: 20

});
console.info(puzzle.toString());

console.log("");
console.log("list of words used in the puzzle");
console.info(puzzle.words.join(','));

console.log("");
console.log("words that did not make it in the puzzle");
const wordsNotUsed = words.filter(word => !puzzle.words.includes(word));
console.log(wordsNotUsed);