function CreateObject(arr) {
    // Write your code here
    let object={}
    for(i=0;i<arr.length;i++){
        if (i%2===0){
            object[arr[i]]=arr[i+1];
        }
    }
    return object;
}

module.exports = CreateObject;
