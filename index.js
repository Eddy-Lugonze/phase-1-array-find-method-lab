// index.js
function superbowlWin(record) {
    // Use the Array.prototype.find method to locate the first win
    const winningRecord = record.find(game => game.result === "W");
    // Return the year if a winning record is found, otherwise return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  
  // Export the function for use in other files
  module.exports = superbowlWin;