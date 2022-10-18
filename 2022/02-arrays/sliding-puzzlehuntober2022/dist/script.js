const gameGrid = [["https://i.imgur.com/zhpfEVe.png", "https://i.imgur.com/u10nOUw.png", "https://i.imgur.com/sEQOcGq.png"], ["https://i.imgur.com/ggUqmPE.png", "https://i.imgur.com/0GB90f6.png", "https://i.imgur.com/nN4kAp6.png"], ["https://i.imgur.com/cj9s8XS.png", "https://i.imgur.com/G1kBgAO.png", "https://i.imgur.com/BOkhyd6.png"]];

const blankSpace = [0, gameGrid[0].length - 1];

const blankUrl = 'https://i.imgur.com/IGnmVTp.png';

const gridWithBlank = gameGrid.map((subArray, ind) => {
  if (ind === blankSpace[0]) {
    const sub = subArray.map(x => x);

    return sub.map((val, i) => {
      if (i === blankSpace[1]) {
        return blankUrl;
      }
      return val;
    });
  }
  return subArray.map(x => x);
});


const Winner = props => {
  return /*#__PURE__*/(
    React.createElement("h2", null, "You won! It took you ", props.moves, " moves!"));

};


const GameBoard = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "gameBoard" },
    props.grid.map((arr, arrInd) => {
      return (
        arr.map((val, valInd) => {
          return /*#__PURE__*/(
            React.createElement("div", { className: "gameSquare", onClick: () => {
                return props.onMove(arrInd, valInd);
              } }, /*#__PURE__*/
            React.createElement("img", { src: val, alt: `Tile ${valInd + 1}`, id: val })));


        }));

    })));


};

const Game = () => {
  const [grid, setGrid] = React.useState([...gridWithBlank].map(x => [...x]));
  const [isWin, setIsWin] = React.useState(false);
  const [moveCount, setMoveCount] = React.useState(0);

  const blankSubArr = grid.findIndex(x => x.includes(blankUrl));
  const blankIndex = grid[blankSubArr].indexOf(blankUrl);

  // insert Day1 function 'checkWin' here
  // instead of return true or return false, use setIsWin(true) or setIsWin(false)
  const checkWin = (arrA, arrB) => {
    if (arrA.length !== arrB.length) {
      setIsWin(false);
      return;
    }
    if (arrA[0].length !== arrB[0].length) {
      setIsWin(false);
      return;
    }
    for (let i = 0; i < arrA.length; i++) {
      for (let j = 0; j < arrA[i].length; j++) {
        if (arrA[i][j] !== arrB[i][j]) {
          setIsWin(false);
          return;
        }
      }
    }
    setIsWin(true);
    return;
  };


  // insert Day2 move left function 'moveBlankLeft(curGrid, blankChar)' here
  // just before return, add this 'checkWin(gridWithBlank, curGrid)'
  // should return mutated array that was passed in (curGrid)

  const moveBlankLeft = (curGrid, blankChar) => {
    const elIndex = curGrid.indexOf(blankChar);
    if (elIndex - 1 < 0) {
      return curGrid;
    }
    const prevElement = curGrid[elIndex - 1];
    curGrid[elIndex - 1] = blankChar;
    curGrid[elIndex] = prevElement;
    checkWin(gridWithBlank, curGrid);
    return curGrid;
  };


  // insert Day2 move right function 'moveBlankRight(curGrid, blankChar)' here
  // just before return, add this 'checkWin(gridWithBlank, curGrid)'
  // should return mutated array that was passed in (curGrid)
  const moveBlankRight = (curGrid, blankChar) => {
    const elIndex = curGrid.indexOf(blankChar);
    if (elIndex + 1 > curGrid.length - 1) {
      return curGrid;
    }
    const nextElement = curGrid[elIndex + 1];
    curGrid[elIndex + 1] = blankChar;
    curGrid[elIndex] = nextElement;
    checkWin(gridWithBlank, curGrid);
    return curGrid;
  };

  // insert Day4 move up function 'moveBlankUp(curGrid, blankGrid) here'
  // just before return, add this 'checkWin(gridWithBlank, curGrid)'
  // should return mutated array that was passed in (curGrid)
  const moveBlankUp = (curGrid, blankGrid) => {
    for (let i = 0; i < curGrid.length; i++) {
      for (let j = 0; j < curGrid[i].length; j++) {
        const currRow = curGrid[i];
        if (currRow[j] === blankGrid) {
          const prevRowIndex = i - 1;
          if (prevRowIndex < 0) {
            return curGrid;
          }
          const prevRowArr = curGrid[prevRowIndex];
          const prevElement = prevRowArr[j];
          prevRowArr[j] = blankGrid;
          currRow[j] = prevElement;
          checkWin(gridWithBlank, curGrid);
          return curGrid;
        }
      }
    }
  };

  // insert Day4 move down function 'moveBlankDown(curGrid, blankGrid) here'
  // just before return, add this 'checkWin(gridWithBlank, curGrid)'
  // should return mutated array that was passed in (curGrid)
  const moveBlankDown = (curGrid, blankGrid) => {
    for (let i = 0; i < curGrid.length; i++) {
      for (let j = 0; j < curGrid[i].length; j++) {
        const currRow = curGrid[i];
        if (currRow[j] === blankGrid) {
          const nextRowIndex = i + 1;
          if (nextRowIndex > curGrid.length - 1) {
            return curGrid;
          }
          const nextRowArr = curGrid[nextRowIndex];
          const nextElement = nextRowArr[j];
          nextRowArr[j] = blankGrid;
          currRow[j] = nextElement;
          checkWin(gridWithBlank, curGrid);
          return curGrid;
        }
      }
    }
  };

  // My found and modified Day5 shuffle function
  // Uses Durstenfeld shuffle algorithm
  const shuffleGrid = () => {
    setIsWin(false);
    const tempFlatGrid = [...grid].map(x => [...x]).flat();

    for (let i = tempFlatGrid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tempFlatGrid[i];
      tempFlatGrid[i] = tempFlatGrid[j];
      tempFlatGrid[j] = temp;
    }

    const tempGrid = [];
    while (tempFlatGrid.length) {
      tempGrid.push(tempFlatGrid.splice(0, 3));
    }

    setGrid(tempGrid);
  };

  const resetGame = () => {
    setGrid([...gridWithBlank].map(x => [...x]));
    setIsWin(false);
    setMoveCount(0);
  };

  const handleMove = (arrInd, valInd) => {
    const newGrid = [...grid].map(x => [...x]);

    if (arrInd === blankSubArr) {
      const gridDimension = newGrid.length;
      if (valInd - blankIndex === 1) {
        // move right
        const modifiedArr = [];
        for (let i = 0; i < newGrid.length; i++) {
          if (i === blankSubArr) {
            modifiedArr.push(moveBlankRight(newGrid[i], blankUrl));
          } else {
            modifiedArr.push(newGrid[i]);
          }
        }

        checkWin(gridWithBlank, modifiedArr);
        setGrid([...modifiedArr].map(x => x));
        setMoveCount(moveCount + 1);
      } else if (valInd - blankIndex === -1 && blankIndex % gridDimension) {
        // move left
        const modifiedArr = [];
        for (let i = 0; i < newGrid.length; i++) {
          if (i === blankSubArr) {
            modifiedArr.push(moveBlankLeft(newGrid[i], blankUrl));
          } else {
            modifiedArr.push(newGrid[i]);
          }
        }

        checkWin(gridWithBlank, modifiedArr);
        setGrid([...modifiedArr].map(x => x));
        setMoveCount(moveCount + 1);
      }
    } else if (arrInd !== blankSubArr && valInd === blankIndex) {
      if (arrInd - blankSubArr === 1) {
        // move down
        setGrid([...moveBlankDown(newGrid, blankUrl)].map(x => x));
        setMoveCount(moveCount + 1);
      } else if (arrInd - blankSubArr === -1) {
        // move up
        setGrid([...moveBlankUp(newGrid, blankUrl)].map(x => x));
        setMoveCount(moveCount + 1);
      }
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { onClick: () => shuffleGrid() }, "Shuffle"), /*#__PURE__*/
    React.createElement("button", { onClick: () => resetGame() }, "New Game"),
    isWin ? /*#__PURE__*/
    React.createElement(Winner, { moves: moveCount }) : /*#__PURE__*/
    React.createElement(GameBoard, { onMove: (arrInd, valInd) => handleMove(arrInd, valInd), grid: grid })));



};

ReactDOM.render( /*#__PURE__*/React.createElement(Game, null), document.getElementById("root"));

//