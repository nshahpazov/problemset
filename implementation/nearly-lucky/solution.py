s = raw_input()
c4, c7 = s.count('4'), s.count('7')
print ['NO', 'YES'][c4 + c7 in [4, 7]]
