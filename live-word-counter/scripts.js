let count=document.getElementById('count');
count.innerText=0;

function getWordCount(){
    let txtAreaMain=document.getElementById('textArea');
    let count=document.getElementById('count');
    let content=txtAreaMain.value;
    let arr=content.split(/[\s,.\/?:\"]+/);
    count.innerText=arr.length;
}