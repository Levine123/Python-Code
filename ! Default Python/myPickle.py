import pickle
fruits=['apples', 'bananas', 'oranges']
x=7
y=3.14
nuts=['pecans', 'almond']
grades=[99,100,56,77,85]
dataSet=[fruits,x,y,nuts,grades]
with open('myData.pkl','wb') as f:
    pickle.dump(dataSet,f)
    pickle.dump(x,f)
    pickle.dump(y,f)
    pickle.dump(nuts,f)
    pickle.dump(grades,f)
with open('myData.pkl','rb') as f2:
    BigKuhana=pickle.load(f2)
    b=pickle.load(f2)
    c=pickle.load(f2)
    d=pickle.load(f2)
    e=pickle.load(f2)

for i in BigKuhana:
    print(i)