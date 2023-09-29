n=float(input('What is your favorite number: '))
if (n>0):
    print('Your Number Is Positive') 
if (n<0):
    print('Your Number Is Negative') 
if (n==0):
    print('Your Number Is Not Positive Or Negative')

rem=float(n%2) 
if (rem==0):
    print('And You Have An Even Number')
if (rem>0):
    print('And You Have An Odd Number')