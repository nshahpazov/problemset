sum = 0
for _ in range(input()):
    if "+" in raw_input():
        sum = sum + 1
    else:
        sum = sum - 1
print sum

# best solution
# print sum(44 - ord(raw_input()[1])for _ in range(input()))
