function isUniform(array){
	for (var i = 1; i < array.length; i++) {
		if(array[i]===array[i-1]){
			continue;
		}
		return false;
	}
	return true;
}

function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function sumArray(array){
	var sum =0;
	array.forEach(x=>sum+=sum+x);
	return sum;
}

function max(array){
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if(array[i]>=max){
			max = array[i];
		}
	}
	return max;
}


var list = [1,8,2,500,-1];

printReverse(list);
console.log(isUniform(list));
console.log(sumArray(list));
console.log(max(list));