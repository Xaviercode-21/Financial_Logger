//interfaces
/*interface isPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}

const me:isPerson={
    name:'xavi',
    age:21;
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number): number{
        console.log('I spent',amount);
        return amount;
    }
};
console.log(me);*/




import {Invoice} from './classes/invoice.js';
import {payment} from './classes/payment.js';
import {HasFormatter} from '../src/Interfaces/HasFormatter.js';
import { listTemplate } from './classes/listTemplate.js';
const invOne=new Invoice('xavi','website development',267);
const invTwo=new Invoice('Jerry','website development',457);

let invoices: Invoice[]=[];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client,inv.amount,inv.format());
})


const form=document.querySelector('.new-item-form')as HTMLFormElement;
console.log(form.children);

const type=document.querySelector('#type') as HTMLSelectElement;
const toFrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul=document.querySelector('ul')!;
const list=new listTemplate(ul);

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();

   let doc: HasFormatter;
   if(type.value==='invoice'){
    doc=new Invoice(toFrom.value,details.value,amount.valueAsNumber)
   }else{
    doc=new payment(toFrom.value,details.value,amount.valueAsNumber)
   }

   list.render(doc,type.value,'end');
})
