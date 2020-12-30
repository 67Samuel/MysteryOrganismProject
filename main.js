// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(pAequorIdx, DNA) {
  pAequor = {pAequorIdx, DNA};
  pAequor['mutate'] = (DNA) => {
    randomIdx = Math.floor(Math.random()*(DNA.length));
    oldBase = DNA[randomIdx];
    newBase = oldBase;
    while (oldBase === newBase) {
      newBase = returnRandBase();
    }
    DNA[randomIdx] = newBase;
    return DNA;
  }
  pAequor['compareDNA'] = function(pAequorToCompare) {
    let numMatch = 0;
    for (let i=0; i<this.DNA.length; i++) {
      if (this.DNA[i] === pAequorToCompare.DNA[i]) {
        numMatch ++;
      }
    }
    const percentageMatch = (numMatch/this.DNA.length)*100;
    console.log(`specimen #${this.pAequorIdx} and specimen #${pAequorToCompare.pAequorIdx} have ${percentageMatch}% DNA in common.`);
  }
  pAequor.willLikelySurvive = function() {
    let numCorG = 0;
    for (let base of this.DNA) {
      if (base === 'C' || base === 'G') {
        numCorG++;
      }
    }
    return numCorG>=9;
  }
  return pAequor;
}

/*
pAequor1 = pAequorFactory(1, ['C', 'C', 'C', 'G', 'C', 'C', 'G', 'T', 'C', 'G', 'C', 'C', 'G', 'C', 'C']);
pAequor1.mutate(pAequor1.DNA);
pAequor2 = pAequorFactory(2, ['A', 'T', 'C', 'G', 'T', 'C', 'G', 'T', 'C', 'G', 'T', 'C', 'G', 'T', 'C']);
pAequor2.mutate(pAequor2.DNA);
pAequor2.mutate(pAequor2.DNA);
pAequor2.mutate(pAequor2.DNA);
console.log(pAequor1);
console.log(pAequor2);
pAequor1.compareDNA(pAequor2);
console.log(pAequor1.willLikelySurvive());


let numSpeciments=0;
const SpecimentArray = [];
while (numSpeciments < 30) {
  pAequor = pAequorFactory(numSpeciments, mockUpStrand());
  if (pAequor.willLikelySurvive()) {
    SpecimentArray.push(pAequor);
    numSpeciments++;
  }
}
console.log(SpecimentArray.slice(25));
*/





