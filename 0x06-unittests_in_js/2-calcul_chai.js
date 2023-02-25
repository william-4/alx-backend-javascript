/* 2-calcul.js */

function calculateNumber(type, a, b) {
  let ans = 0;
  switch (type) {
    case 'SUM':
      ans = Math.round(a) + Math.round(b);
      break;
    case 'SUBTRACT':
      ans = Math.round(a) - Math.round(b);
      break;
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        return ("Error");
      }
      ans = Math.round(a) / Math.round(b);
      break;
  }
  return (ans);
}

module.exports = calculateNumber;
