function isValidSudoku(board: string[][]): boolean {
    const size = 9;
    const boxSize = 3;

    const rows = new Map<number, Set<string>>();
    const cols = new Map<number, Set<string>>();
    const box = new Map<string, Set<string>>();

    // Check for unique rows, columns, and boxes
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = board[i][j];

            // mapping the 3x3 box boundary to an string index
            // direct use of array as key returns undefined since array key is referencial
            let rIndex = Math.floor(i / boxSize);
            let cIndex = Math.floor(j / boxSize);
            let boxKey = `${rIndex}-${cIndex}`;

            if (cell === '.') continue;

            // init row, col, box sets within the hasmap if not initialized
            if (!rows.has(i)) rows.set(i, new Set<string>());
            if (!cols.has(j)) cols.set(j, new Set<string>());
            if (!box.has(boxKey)) box.set(boxKey, new Set<string>());

            // check the row, col, set for unique values
            if (rows.get(i)!.has(cell) ||
                cols.get(j)!.has(cell) ||
                box.get(boxKey)!.has(cell)) return false;

            rows.get(i)!.add(cell);
            cols.get(j)!.add(cell);
            box.get(boxKey)!.add(cell);
        }
    }
    return true;
}
