grades=[]
bucket=0
lowGrade=100
highGrade=0
numGrades=int(input('How Many Grades Do You Have: '))
for i in range(0,numGrades, 1):
    grade=int(input('Please Enter Your Grade: '))
    grades.append(grade)
print('')
print('')
for i in range(0,numGrades,1):
    bucket=bucket+grades[i]
    average=bucket/numGrades
for i in range(0,numGrades,1):
    if grades[i]<lowGrade:
        lowGrade=grades[i] 
    if grades[i]>highGrade:
        highGrade=grades[i]
print('Your Grades Are:', grades)
print('The Average Grade: ', average)
print('Your Highest Grade: ', highGrade)
print('Your Lowest Grade: ', lowGrade)      

for i in range(0,numGrades-1,1):
    for i in range(0,numGrades-1,1):
        if grades[i]>grades[i+1]:
            swap=grades[i]
            grades[i]=grades[i+1]
            grades[i+1]=swap

print('Sorted Lowest Highest: ', grades)

for i in range(0,numGrades-1,1):
    for i in range(0,numGrades-1,1):
        if grades[i]<grades[i+1]:
            swap=grades[i]
            grades[i]=grades[i+1]
            grades[i+1]=swap

print('Sorted Highest To Lowest: ', grades)
