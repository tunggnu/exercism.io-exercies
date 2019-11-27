const codon2Protein = codon => {
  const codonsProteinMap = new Map([
    [["AUG"], "Methionine"],
    [["UUU", "UUC"], "Phenylalanine"],
    [["UUA", "UUG"], "Leucine"],
    [["UCU", "UCC", "UCA", "UCG"], "Serine"],
    [["UAU", "UAC"], "Tyrosine"],
    [["UGU", "UGC"], "Cysteine"],
    [["UGG"], "Tryptophan"],
    [["UAA", "UAG", "UGA"], "STOP"]
  ]);

  for (const [codons, protein] of codonsProteinMap) {
    for (const cd of codons) {
      // Codon is valid.
      if (cd === codon) return protein;
    }
  }

  // Codon is invalid.
  throw new Error("Invalid codon");
};

const rna2Codons = rna => {
  const codons = [];

  for (let i = 0; i + 3 <= rna.length; i += 3) {
    codons.push(rna.substring(i, i + 3));
  }

  return codons;
};

export const translate = rna => {
  if (typeof rna !== "string") return [];

  const proteins = [];
  const codons = rna2Codons(rna);

  for (const codon of codons) {
    const protein = codon2Protein(codon);

    if (protein === "STOP") break;

    proteins.push(protein);
  }

  return proteins;
};
