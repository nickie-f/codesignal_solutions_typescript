function boxBlur(image: number[][]): number[][] {
    let output: number[][] = []
    for (let i:number = 0; i < image.length - 2; i++)  {
    output[i] = []
        for (let j:number = 0; j < image[0].length - 2; j++)    {
            output[i][j] = Math.floor((
                  image[i][j] + image[i][j+1] + image[i][j+2]            
                + image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
                + image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
            )/9)
        }
    }
    return output
}