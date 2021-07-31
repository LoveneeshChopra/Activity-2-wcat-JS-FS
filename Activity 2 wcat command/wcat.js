let fs=require("fs");
let inputArr=process.argv.slice(2);
let sObj=require("./commands/-s");
let nObj=require("./commands/-n");
let bObj=require("./commands/-b");
// console.log(inputArr);
// segregate -> - -> option
// segregate ->   -> file
let optionArr= [];
let filesArr= [];
for(let i=0;i<inputArr.length;i++)
{   
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }
    else {
        filesArr.push(inputArr[i]);
    }
}
for(let i=0;i<filesArr.length;i++)
{
    let ans=fs.existsSync(filesArr[i]);
    // console.log(fs.readFileSync(inputArr[i])); This causes error because the string is not concatinating rather it prints buffer <> 
    if(!ans)
    {
        console.log("File does not exist!!!");
        return;
    }
}
let content="";
for(let i=0;i<filesArr.length;i++)
{
    content=content+fs.readFileSync(filesArr[i])+"\r\n";
}
console.log(content);
let contentArr=content.split("\r\n");
// console.log(optionArr);
if(optionArr.length!=0)
{
for(let i=0;i<optionArr.length;i++)
{
    if(optionArr[0]=="-n" && optionArr[1]=="-b")
    optionArr.splice(1,1);
    else if(optionArr[0]=="-b" && optionArr[1]=="-n")
    optionArr.splice(1,1);
    // console.log("------------------------");
    // console.log(contentArr);
switch(optionArr[i])
{
    case "-n":
        nObj.minusNum(contentArr);
        break;
    case "-b":
        bObj.minusB(contentArr);
        break;
    case "-s": 
        sObj.minusSbreak(contentArr);
        break;    
    default :
        console.log("No such command available");
        break;       
}
}
}