function getWinner(player1, player2) {
  const winnerGame = Math.random();
  return winnerGame < 1 / 3 ? player1 : winnerGame < 2 / 3 ? player2 : null;
}
module.exports = { getWinner };
