var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newArray = []
for(var i = 0;i < array.length;i++){
    var numString=array[i].toString()
    if(numString[0]==='2'||numString[0]==='5')
        newArray.push(array[i])
}

console.log(newArray)