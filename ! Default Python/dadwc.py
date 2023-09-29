grades=[]
numGrades=int(input('How Many Grades Do You Have: '))
for i in range(0,numGrades, 1):
    grade=int(input('Please Enter Your Grade: '))
    grades.append(grade)
for i in range(0,numGrades,1):
    print(grades[i])
