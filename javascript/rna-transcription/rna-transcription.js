export const toRna = (dna) => {
  return Array.from(dna)
    .map((nucleotide) => dna2RnaNucleotideMap.get(nucleotide))
    .join('');
};

const dna2RnaNucleotideMap = new Map([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]);
