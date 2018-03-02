function Fizzbuzz(num){
    var str = '';
    for ( var i = 1; i < num; i++ ){
        
        if ( i % 3 === 0 ){
            str += 'fizz';
            if (i % 5 === 0){
                str += 'buzz';
            }
        }else if ( i % 5 === 0 ){
            str += 'buzz';
        }
        console.log(str);
        str = '';
    }
}

console.log('================');

function abc(num){
    var arr = [];
    var str = '';
    for ( var j = 0; j < num; j++){
        arr[j] = j + 1;

    }
    console.log(arr);
   arr = arr.map(function(item,index,array){
       str = '';
        if (item % 3 === 0) {
            str += 'fizz';
        }
        if (item % 5 === 0){
            str += 'buzz';
        }
        return (!str) ? item : str;
    })
    console.log(arr);
}

console.log(abc(50));