#a, b, c, d = map(int, input().split())
#print(min(a, b, c, d))

#2
#a, n = map(float, input().split())  
#n = int(n)                           
#result = 1
#for i in range(n):
    #result = result * a


#print(result)


#3
#def xor(x, y):
    #return (x == 1 and y == 0) or (x == 0 and y == 1)
#x, y = map(int, input().split())
#result = xor(x, y)
#print(1 if result else 0)

#4
#def majority(x, y, z):
    #total = x + y + z
    #return 1 if total >= 2 else 0
#x, y, z = map(int, input().split())
#print(majority(x, y, z))


#5
#a=int(input())
#if(a%2==1):
    #print("prime")
#else:
    #print("composite")


#6
#def power(a, n):
   # if n == 0:
        #return 1
   # elif n < 0:
       # return 1 / power(a, -n)
    #else:
        #return a * power(a, n - 1)

#a, n = input().split()
#a = float(a)
#n = int(n)
#print(power(a, n))


#7
#x = float(input())
#y = float(input()) 

#day = 1 
#distance = x  

#while distance < y:
    #distance = distance * 1.1  
    #day += 1
#print(day)

#8

#a = int(input())
#b = int(input())
#print(a**b)

