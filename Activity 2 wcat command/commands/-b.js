let fs=require("fs");
function bFn(contentArr){
    let count=1;
        for(let i=0;i<contentArr.length;i++)
        {
            if(contentArr[i]!=""){
            contentArr[i]=count+". "+contentArr[i];
            count++;
            }
        }
        contentArr=contentArr.join("\n");
        console.log(contentArr);
}
module.exports={
    minusB:bFn
}