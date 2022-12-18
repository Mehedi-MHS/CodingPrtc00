#Global variable rules are same as javascript
#But in python , we can make a local variable (eg: variable inside a function) global using 'global' keyword


#General rule
x = "awesome"

def myFunc() :
    x = "fantastic"
    print('Python is',x)

myFunc()

print("Python is ",x)
#Python is fantastic 
#Python is awesome


#Using 'global' keyword to make a local variable global

def myFunc2() :
    global a 
    a="Mango"

myFunc2()

print("Fruit is : ",a)
#Fruit is : Mango


#Modifying global variable inside a function
fruit="cherry"

def myFunc3() :
    global fruit
    fruit='Jackfruit'

myFunc3()

print('Fruit name :',fruit)
#Fruit name : Jackfruit

