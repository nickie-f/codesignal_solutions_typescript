function areEquallyStrong(l1: number, r1: number, l2: number, r2: number): boolean {
    return ((l1===l2) || (l1===r2)) && ((r1===r2) || (r1===l2));
}    