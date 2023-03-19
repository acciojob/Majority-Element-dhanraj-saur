//your code here
function majorityElement() {
	let max = 0, count = 0;
	for(let i=0;i<num.lenght;i++){
		if(count == 0) max = num[i];
		if(num[i] == max) count++;
		else count--;
	}
	return max;
	
}