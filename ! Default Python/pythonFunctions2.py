def inputGrades(nm):
    grades=[]
    for i in range(0,nm,1):
        grd=float(input('Please Enter Your Grade: '))
        grades.append(grd)
    return grades
numGrades=int(input('How Many Total Grades: '))
myGrades=inputGrades(numGrades)

def printGrades(nm,x):
    for i in range(0,nm,1):
        print(x[i])

print('Your Grades Are: ')
printGrades(numGrades,myGrades)


def averageGrades(nm,x): 
    tot=0
    for i in range(0,nm,1):
        tot=tot+x[i]
    average=tot/nm
    return average 
avg=averageGrades(numGrades,myGrades)
print('Your Class Average is: ',avg)

def LowGrade(nm,x):
    tot=(x[0])
    for i in range(0,nm-1,1):
        if (x[i]>=x[i+1] and tot>x[i+1]):
            tot=(x[i+1])

    return tot
        
lowGrade=LowGrade(numGrades,myGrades)
print('Your Lowest Grade Is:  ', lowGrade)

def HighGrade(nm,x):
    tot=(x[0])
    for i in range(0,nm-1,1):
        if (x[i]<=x[i+1] and tot<x[i+1]):
            tot=(x[i+1])

    return tot

highGrade=HighGrade(numGrades,myGrades)
print('Your Highest Grade Is:  ', highGrade)