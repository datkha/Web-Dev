n = int(input())

a = list(map(int, input().split()))

left = 0
right = n - 1
while left < right:
    a[left], a[right] = a[right], a[left]
    left += 1
    right -= 1

print(" ".join(map(str, a)))
