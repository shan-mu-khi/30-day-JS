
let count=0;
let charWithoutSplCharc='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charWithSplCharc='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*-@!#$%^&*(){}[]';
let generatedPassword='';
let isspl=false;
let displayPwdElem=document.getElementById('pwd');
let btn=document.getElementById('submitbutton');

//This listens to click of the generate button
btn.addEventListener('click',()=>{
    this.generatePassword();
})

//This function stores the length of password in global variable
function countGeneration(){
    let countElem=document.getElementById('count');
    count=Number(countElem.value);
    console.log(count);
}

//This function generates random password based on count and toggle
function generatePassword(){
    let charSet=''
    if(isspl==false) charSet=charWithoutSplCharc;
    else charSet=charWithSplCharc;
    for(let i=0;i<count;i++){
        let ind=Math.floor(Math.random()*charSet?.length);
        generatedPassword=generatedPassword+charSet[ind];
    }
    console.log(generatedPassword,'generate pwd');
    displayPwdElem.value=generatedPassword;
}