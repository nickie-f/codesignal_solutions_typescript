function reverseInParentheses(o: string): string {
    while(true){
        const b = o.lastIndexOf("("); if(b < 0) break;
        const e = o.indexOf(")", b); if(e < 0) break;
        
        o = o.substr(0, b)
            + o.substring(b + 1, e).split("").reverse().join("")
            + o.substr(e + 1);
    }
    return o;
}  
