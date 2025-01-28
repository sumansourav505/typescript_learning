var inpNum1=document.getElementById('num1') as HTMLInputElement;
var inpNum2=document.getElementById('num2') as HTMLInputElement;
var addbtn=document.querySelector('button')!;

const numResult :Array<number>=[];
const textResult :string[]=[];

type NumOrString=number|string;
type Result={val:number,timestamp:Date};

interface ResultObj{
    val:number;
    timestamp:Date;
}
function add(num1:NumOrString,num2:NumOrString){
    if(typeof num1==="number" && typeof num2==="number"){
        return num1+num2;
    } else if(typeof num1==="string" && typeof num2==="string"){
        return num1 + ' '+ num2;
    }
    return +num1+ +num2;
}
function printResult(resObj:ResultObj){
    console.log(resObj.val);
}

addbtn.addEventListener("click",()=>{
 const num1=inpNum1.value;
 const num2=inpNum2.value;
 const result=add(+num1,+num2);
 numResult.push(result as number);
 const stringResult=add(num1,num2);
 textResult.push(stringResult as string);
 printResult({val:result as number,timestamp: new Date()});
 console.log(numResult,textResult);
});

const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked!');
    },1000);

});
myPromise.then((result)=>{
    console.log(result.split('w'));
})
