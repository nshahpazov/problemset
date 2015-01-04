# calculate the height of a tree
# "for e in employees" causes a runtime error
n = input()
employees = [input() for _ in range(n)]
height = 0
for e in range(n):
    h = 0
    while e >= 0:
        e = employees[e] - 1
        h = h + 1
    height = max(height, h)
print height
