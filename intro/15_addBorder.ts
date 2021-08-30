function addBorder(picture: string[]): string[] {
    let s ='*'.repeat(picture[0].length +2);
    let d =[s];
    picture.map(x => {d.push(`*${x}*`)});
    d.push(s);
    return d;
}   
