s = raw_input()
print sum(s[i] == s[i + 1] for i in range(input() - 1))
