function areSimilar(a: number[], b: number[]): boolean {
    let s = [];
    for(let i = 0; i < a.length;i++){
        if(a[i] != b[i]){
             s.push(i);
        }
    }     
    if(s.length == 0 || s.length == 2 && a[s[0]] == b[s[1]] && b[s[0]] == a[s[1]]){
         return true;
    }
    return false;  
}