n = int(input())
k = 0
power_of_2 = 1

while power_of_2 < n:
    power_of_2 *= 2
    k += 1

print(k)