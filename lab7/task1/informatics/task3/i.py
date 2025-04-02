x = int(input())
count = 0

for d in range(1, int(x**0.5) + 1):
    if x % d == 0:
        count += 1
        if d != x // d:  # Чтобы не считать корень дважды
            count += 1

print(count)