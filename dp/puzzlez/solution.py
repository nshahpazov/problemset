I = lambda: map(int, raw_input().split())
n, m= I()
numbers = sorted(I())

print min(k - i for i, k in zip(numbers, numbers[n-1:]))

#min_val = 1e10
#for i in range(len(numbers) - n + 1):
#    min_val = min(min_val, numbers[i + n - 1] - numbers[i])
#print min_val
