n = int(input())
a = []

for i in range(n):
    x = int(input())
    a.append(x)

for i in range(0, n, 2):
    print(a[i])