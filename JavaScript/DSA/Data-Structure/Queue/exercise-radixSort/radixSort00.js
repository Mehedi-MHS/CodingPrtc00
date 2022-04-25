//Number sorting using Queue data structure : radix sort
//This sorting program will sort 0-99 range numbers . To support more numbers we have to implement it(not implemented here)
//Suppose, we have to sort 9 numbers, so we have to create 9 queue's
// (i)num%10 returns rightMost(1s) digit for 10-99 range and the same digit for 0-9 range.
// eg: 25%10 returns 5 and 7%10 returns 7
// (ii)Math.floor(num/10) returns leftMost(10s) digit
//eg: Math.floor(25/10) returns 2 and Math.floor(7/20) returns 0

//we will not use unnecessary methods in Queue constructor function

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
}

function enqueue(data) {
  this.dataStore.push(data);
}

function dequeue() {
  return this.dataStore.shift();
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}
// .....     .....    .....
/*Intro:
 *num -> array of numbers to be sorted
 *queues -> array of queues where number will be distributed
 *n -> number of elements in the `num` array
 *digit ->which digit of current number to add in queue to sort. case:1,1s(rightmost) digit containing numbers will be sorted. case:10, 10s()
 */

function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; ++i) {
    if (digit == 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
  var arrlen = arr.length;
  for (var i = 0; i < arrlen; ++i) {
    console.log(arr[i] + " ");
  }
}

//main program
var queues = []; //creating 9 queues for sorting 9 numbers
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}

var nums = [];
for (var j = 0; j < 10; ++j) {
  nums[j] = Math.floor(Math.floor(Math.random() * 101));
}

console.log("Before radix sort:\n");
dispArray(nums);
distribute(nums, queues, 10, 1); //distributed amongn queues according to 1s digit
collect(queues, nums); //collected(assigned) the numbers from queues to nums (variable)array
distribute(nums, queues, 10, 10); //again distributed recently collected numbers in queues according to 10s digit
collect(queues, nums); //again collect(assigned) the numbers from queues to nums (variable) array.Now the nums array is sorted
console.log("\nAfter radix sort:\n");
dispArray(nums); //displaying sorted nums array.
/*
 Before radix sort:                      
89                                    
50
99                                    
94
86                           
56                                     
22
82                            
89
29


After radix sort:

22
29
50
56
82
86
89
89
94
99


 */
