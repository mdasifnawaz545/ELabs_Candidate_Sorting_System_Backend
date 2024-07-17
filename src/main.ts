let quote = `Salaam`
console.log(quote);

interface transactionObject{
    [key:string]:string|number|boolean
}

interface newTransactionObject extends transactionObject{
    name:string,
    batch:number
}

const obj:newTransactionObject={
    name:'MOHAMMAD ASIF NAWAZ',
    batch:2026
}

for(let transaction in obj){
    console.log(obj[transaction]);
}