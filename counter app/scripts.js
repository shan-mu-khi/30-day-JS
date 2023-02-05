let count=document.getElementsByClassName('display_count')[0];
count.textContent=0;

function addCount(){
    count.textContent=Number(count.textContent)+1;
}


function reduceCount(){
    if(Number(count.textContent)>0){
        count.textContent=Number(count.textContent)-1;
    }
}

function refreshCount(){
    count.textContent=0;
}