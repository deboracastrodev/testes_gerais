
const array = ['ab4', 'cdcb', 'ef', 'gh', 'ij', 'kl', 'mn', 'opb', 'qr', 'st', 'uv', 'wxb', 'yz', 'hhhh', 'bah', 'hudasuhd', 'bashah']

// retorna os 5 primeiros itens que contem o valor de search
function findFirstItens(search, numberOfItens = 5) {
  if (!search) throw 'Informe um valor válido';
  //valida se o array é valido
  if (!Array.isArray(array)) throw 'Informe um array válido';
  //um contador vai garantir que não percorra todo o array, caso o valor de search seja encontrado N (numberOfItens) vezes
  let count = 0;
  return array.filter((item, i) => { 
    if (count == numberOfItens) return false;
    const match = item.includes(search);
    if (match) count++;
    return match;
  });
}

console.log(findFirstItens('b'));
