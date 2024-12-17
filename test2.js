let furniture = ['Table', 'Chairs', 'Couch'];

for (let item of furniture) {
  console.log(`Letters in "${item}":`);
  for (let letter of item) {
    console.log(letter);
  }
}
