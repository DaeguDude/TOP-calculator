const sheeps = ['🐑', '🐑'];

const sheeps2 = [...sheeps];

console.log(sheeps2)
console.log(`sheeps = sheeps2 -> ${(sheeps === sheeps2) ? true : false}`);

// Let's change our sheeps2 array
sheeps2.push('🐺');

console.log(sheeps2);
// [ '🐑', '🐑', '🐺' ]

// ✅ Yay, our original sheeps is not affected!
console.log(sheeps);
// [ '🐑', '🐑' ]