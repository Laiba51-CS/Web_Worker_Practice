self.onmessage=function(e){
    console.log("response  is sent to the worker");
    const dataArray = e.data;

   
    const startTime = performance.now();
    const sortedArray = dataArray.slice().sort();
    const endTime = performance.now();
    const processingTime = endTime - startTime;

    // Send the processing time back to the main thread.js
    self.postMessage(processingTime);
}


