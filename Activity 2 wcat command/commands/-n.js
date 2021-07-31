let fs=require("fs");
function nFn(contentArr){
        let count=1;
        for(let i=0;i<contentArr.length;i++)
        {
            contentArr[i]=count+". "+contentArr[i];
            count++;
        }
        contentArr=contentArr.join("\n");
        console.log(contentArr);
}
module.exports={
    minusNum:nFn
}