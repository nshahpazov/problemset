n = input()
c = sorted(map(int, raw_input().split()), key=int, reverse=True)
print len([i for i in range(n) if sum(c[:i]) < sum(c[i:])])
