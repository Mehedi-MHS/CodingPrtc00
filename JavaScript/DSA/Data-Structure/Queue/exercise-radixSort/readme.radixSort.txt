Number sorting using queue : radixSort

*Note:Radix sort is not useful method but used here to implement Queue data structure

Details:
=======
Queues are not only useful for simulations; they can also be used to sort data. Back in
the old days of computing, programs were entered into a mainframe program via punch
cards, with each card holding a single program statement. The cards were sorted using
a mechanical sorter that utilized bin-like structures to hold the cards. We can simulate
this process by using a set of queues. This sorting technique is called a radix sort (see
Data Structures with C++ [Prentice Hall]). It is not the fastest of sorting algorithms,
but it does demonstrate an interesting use of queues.
The radix sort works by making two passes over a data set, in this case the set of integers
from 0 to 99. The first pass sorts the numbers based on the 1s digit, and the second pass
sorts the numbers based on the 10s digit. Each number is placed in a bin based on the
digit in each of these two places. Given these numbers:
91, 46, 85, 15, 92, 35, 31, 22
the first pass of the radix sort results in the following bin configuration:
Bin 0:
Bin 1: 91, 31
Bin 2: 92, 22
Bin 3:
Bin 4:
Bin 5: 85, 15, 35
Bin 6: 46
Bin 7:
Bin 8:
Bin 9:
Now the numbers are sorted based on which bin they are in:
91, 31, 92, 22, 85, 15, 35, 46
Next, the numbers are sorted by the 10s digit into the appropriate bins:
Bin 0:
Bin 1: 15
Bin 2: 22
Bin 3: 31, 35
Bin 4: 46
Bin 5:
Bin 6:
Bin 7:
Bin 8: 85
Bin 9: 91, 92

Finally, take the numbers out of the bins and put them back into a list, and you get the
following sorted list of integers:
15, 22, 31, 35, 46, 85, 91, 92
We can implement this algorithm by using queues to represent the bins. We need nine
queues, one for each digit. We will store the queues in an array. We uses the modulus
and integer division operations for determining the 1s and 10s digits. The remainder
of the algorithm entails adding numbers to their appropriate queues, taking the numbers
out of the queues to re-sort them based on the 1s digit, and the repeating the process
for the 10s digit. The result is a sorted set of integers.
