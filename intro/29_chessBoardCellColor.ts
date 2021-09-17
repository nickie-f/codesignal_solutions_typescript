function isBlack(c: string): boolean    {
    if ((c[0].match(/[BDFH]/) && +c[1] %2 !== 0) || (!c[0].match(/[BDFH]/) && +c[1] % 2 === 0)) return false;
}
const chessBoardCellColor = (c1: string, c2: string): boolean =>
    isBlack(c1) === isBlack(c2)