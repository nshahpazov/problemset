input()
groups = map(int, raw_input().split())

a, b, c, d = map(groups.count, range(1, 5))

a = max(a - c, 0)
print d + c + (b / 2) + (a + (b % 2) * 2 + 3) / 4 
