//your code here
function majorityElement() {
	let max = 0, count = 0;
	for(let i=0;i<nums.length;i++){
		if(count == 0) max = nums[i];
		if(nums[i] == max) count++;
		else count--;
	}
	return max;
	
}