let result = document.getElementById('result');
let result2 = document.getElementById('result2');

const worker = new Worker("worker.js");

const arraysize=10000;
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

function sort(dataArray) {
    return sortedArray = dataArray.slice().sort();
}
function StartSorting_with_WebWorkers() {
    console.log(" seene se tera sir ko lga ke sunta me rhu name apna")
    const dataArray = generateLargeArray(arraysize);
    const sortedarray = sort(dataArray);
    worker.postMessage(sortedarray);
}


worker.onmessage = function (e) {
    const processingtime=e.data;
    result2.innerText = `Processing time : ${processingtime} seconds`;


}


function generateLargeArray(arraysize) {
    return Array.from({ length: arraysize }, (_, index) => index + 1);
}
