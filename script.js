function callHandler(event)
{
    debugger;
    console.log("callHandler Method"); 
    let displaydata=document.querySelector(".leaddateout");
    let inputdata=document.querySelector(".leaddatein");
    console.log("displaydata",displaydata);
    console.log("inputdata",inputdata.value)
   let tmp=inputdata.value;
    console.log(typeof tmp);
    let formateddate=new Date(inputdata.value).toLocaleDateString("en-IN");
    displaydata.value=formateddate;
}