class Operation {
    constructor(name,symbol,ascii,func/*,pronounceFunc*/) {
        this.name = name;
        this.symbol = symbol;
        this.ascii = ascii;
        this.func = func;
        
    }
    
}

const operations = [
    new Operation("Addition","+","+",(augend,addend=0)=>augend+addend),
    new Operation("Subtraction","&x2212;","-",(minuend,subtrahend=0)=>minuend-subtrahend),
    new Operation("Multiplication","&times","*",(multiplier,multiplicand=1)=>multiplier*multiplicand),
    new Operation("Division","&div;","/",(dividend,divisor=1)=>dividend/divisor),
    new Operation("Exponentation","**"/*TODO*/,"^",(base,exponent=1)=>base**exponent),
    new Operation("Root","&x221a;","\//",(radicand,degree=1)=>radicand**(1/degree)),
    new Operation("Logarithm","log","log",(anti-logarithm,base=10)=>Math.log(anti-logarithm)/Math.log(base))
];
