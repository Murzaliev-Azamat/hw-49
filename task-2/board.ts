const printBoard = (size: number) => {
    let boardView = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            (i + j) % 2 ? boardView += '██' : boardView += '  '
        }

        boardView += '\n'
    }

    console.log(boardView);
}

printBoard(8);