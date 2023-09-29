class Student:
    def __init__(self,f,l):
        self.first_name=f
        self.last_name=l
    def input(self, ng):
        self.ng=ng
        self.grades=[]
        for i in range(0, ng, 1):
            prompt='Please Enter ' +self.first_name+"'s Grade: "
            grd=float(input(prompt))
            self.grades.append(grd)
        return self.grades
    def printGrades(self):
            print('His Grades Are:')
            for i in range(0,self.ng, 1):
                print(self.grades[i])
            print('')
    def avGrades(self):
        bucket=0
        for i in range(0, self.ng, 1):
            bucket=bucket+self.grades[i]
        avg=bucket/self.ng
        return avg
    def highLow(self):
        highGrade=0
        lowGrade=100
        for i in range(0,self.ng, 1):
            if self.grades[i]>highGrade:
                highGrade=self.grades[i]
            if self.grades[i]<lowGrade:
                lowGrade=self.grades[i]
        return highGrade, lowGrade

myStude1=Student('Liam', 'Levine')
myStude2=Student('Jason', 'Chen')
myStude3=Student('Alex', 'Guzman')

myStude1.input(4) # amount of grades
myStude1.printGrades()
avg=myStude1.avGrades()
highG,lowG=myStude1.highLow()

print(myStude1.first_name, 'Average=', avg)
print(myStude1.first_name, 'Highest Grade=', highG)
print(myStude1.first_name, 'Lowest Grade=', lowG)
print('')
myStude2.input(6) # amount of grades
myStude2.printGrades()
avg=myStude2.avGrades()
highG,lowG=myStude2.highLow()


print(myStude2.first_name, 'Average=', avg)
print(myStude2.first_name, 'Highest Grade=', highG)
print(myStude2.first_name, 'Lowest Grade=', lowG)