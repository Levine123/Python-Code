xs=[]
g1=float(input('What is your first grade?: '))
xs.append(g1)
g2=float(input('What is your second grade?: '))
xs.append(g2)

g3=(input('What is your third grade? (type a if you have no more): '))
if (g3!='a'):
    xs.append(g3)

g4=(input('What is your fourth grade? (type a if you have no more): '))
if (g4!='a'):
    xs.append(g4)

g5=(input('What is your fifth and final grade? (type a if you have no more): '))
if (g5!='a'):
    xs.append(g5)

print('Your Grades Are:')
for x in xs:
    print(float(x))