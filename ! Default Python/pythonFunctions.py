def tally(x,y):
    tot=x+y
    dif=x-y
    prod=x*y
    div=x/y
    return tot,dif,prod,div
    
    
    #tot=0
    #for i in range(0, numnum, 1): 
    #    tot=tot+myArray[i]
    #return tot
    
numNum=float(input('Enter How Many Numbers: '))
a=float(input('Enter First Number'))
b=float(input('Enter Second Number'))
x=[2,4,6,8,10]
mySum=tally(a,b)
print('Array Total= ', mySum)




#a=float(input('Please Input Your First Number: '))
#b=float(input('Please Input Your Second Number: '))
#c=tally(a,b)
#print('a=',a) # outside of tally
#print('b=',b) # outside of tally
#print('c=',c)
#print(a, "+", b, '=', c)
# a is thrown x, b is thrown to y
# x+y=z, z is returned to tally as c