import pickle
PeopleGrades=[]
PeopleNames=[]
numStudents=int(input('How Many Kids Are In Your Class: '))
for i in range(0, numStudents, 1):
    name=(input('Please Enter The Students Name: '))
    PeopleNames.append(name)
    grade=(input('Please Enter His/Her Average Grade: '))
    PeopleGrades.append(grade)

with open('myNameAndNumberData.pkl','wb') as f:
    pickle.dump(PeopleNames,f)
    pickle.dump(PeopleGrades,f)

with open('myNameAndNumberData.pkl','rb') as f2:
    PeopleNames=pickle.load(f2)
    PeopleGrades=pickle.load(f2)

for i in range(0, numStudents, 1):
    print(PeopleNames[i], PeopleGrades[i])
