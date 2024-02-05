let result = document.getElementById('result');
let result2 = document.getElementById('result2');

const worker = new Worker("worker.js");

const arraysize=10000000;
function StartSorting_without_WebWorkers() {
    console.log("you clicked the button without web workers")
    const dataArray = generateLargeArray(arraysize);

    const startTime = performance.now();
    const sortedarray = sort(dataArray);
    console.log(sortedarray);
    const endTime = performance.now();
    const processingTime = endTime - startTime;

    // Send the processing time back to the main thread

    result.innerText = `Processing time : ${processingTime} seconds`;
}
function changebackground(){
    if (document.body.style.background !== "lightblue") {
        document.body.style.background = "lightblue";
      } else {
        document.body.style.background = "pink";
      }
}

function sort(dataArray) {
    return sortedArray = dataArray.slice().sort();
}
function StartSorting_with_WebWorkers() {
    
    const dataArray = generateLargeArray(arraysize);  
    worker.postMessage(dataArray);
}


worker.onmessage = function (e) {
    const processingtime=e.data;
    result2.innerText = `Processing time : ${processingtime} seconds`;


}


function generateLargeArray(arraysize) {
    return Array.from({ length: arraysize }, (_, index) => index + 1);
}
