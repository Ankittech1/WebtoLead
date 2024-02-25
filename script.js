let captchchecked=false;
function callHandler(event)
{
   // debugger;
    console.log("callHandler Method"); 
    if(captchchecked)
    {
        let displaydata=document.querySelector(".leaddateout");
        let inputdata=document.querySelector(".leaddatein");
        console.log("displaydata",displaydata);
        console.log("inputdata",inputdata.value)
        let tmp=inputdata.value;
        console.log(typeof tmp);
        let formateddate=new Date(inputdata.value).toLocaleDateString("en-IN");
        displaydata.value=formateddate;
    }
    else{
        alert("Please check the recaptcha box to submit the lead !");
        event.preventDefault();
    }
   
}
function timestamp() 
{ var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


function captchasuccess()
{
    captchchecked=true;
}