a = int(input())
b = int(input())

for num in range(a, b + 1):
    if int(num**0.5) ** 2 == num:
        print(num)