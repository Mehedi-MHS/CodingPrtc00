Using the Queue Class: Assigning Partners at a Square Dance
===========================================================
As we mentioned earlier, queues are often used to simulate situations when people have to wait in line.

Once scenario we can simulate with a queue is a square dance for singles.
When men and women arrive at this square dance, they enter the dance hall and stand
in the line for their gender. As room becomes available on the dance floor, dance partners
are chosen by taking the first man and woman in line. The next man and woman move
to the front of their respective lines. As dance partners move onto the dance floor, their
names are announced. If a couple leaves the floor and there is not both a man and a
woman at the front of each line, this fact is announced.

This simulation will store the names of the men and women participating in the square
dance in a text file.Here is the file we will use for the simulation:

F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney

Each dancer is stored in a Dancer object:

function Dancer(name, sex) {
 this.name = name;
this.sex = sex;
}

Next we need a function to load the dancers from the file into the program:

function getDancers(males, females) {
 var names = read("dancers.txt").split("\n");
 for (var i = 0; i < names.length; ++i) {
 names[i] = names[i].trim();
 }
 for (var i = 0; i < names.length; ++i) {
 var dancer = names[i].split(" ");
 var sex = dancer[0];
 var name = dancer[1];
 if (sex == "F") {
 females.enqueue(new Dancer(name, sex));
 }
 else {
 males.enqueue(new Dancer(name, sex));
 }
 }
}

The names are read from the text file into an array. The function then trims the newline
character from each line. The second loop splits each line into a two-element array, by
sex and by name. Then the function examines the sex element and assigns the dancer
to the appropriate queue.

The next function pairs up the male and female dancers and announces the pairings:

function dance(males, females) {
 print("The dance partners are: \n");
 while (!females.empty() && !males.empty()) {
 person = females.dequeue();
 putstr("Female dancer is: " + person.name);
 person = males.dequeue();
 print(" and the male dancer is: " + person.name);
 }
 print();
}
