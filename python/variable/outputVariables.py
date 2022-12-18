#print()
#Best way for printing multiple values is using comma (,) . plus(+) is less useful
x="python"
y="is"
z="awesome"

print(x,y,z)
#python is awesome

#also can use + instead of ,
print(x + y + z)
#pythonisawesome

print(x+' '+y+' '+z)
#python is awesome

#you cannot print number and string using + operator
#It will throw error
#eg: print("helo"+5) \
#
#So best practice is to use comma
str="Apple"
num=5
print("I have",num,str)
#I have 5 Apple
