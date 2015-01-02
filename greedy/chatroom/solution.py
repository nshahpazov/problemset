import re
w = raw_input()
# print ["YES", "NO"][re.search(r"h.*e.*l.*l.*o.*", w) is None]
print "YES" if re.search(r"h.*e.*l.*l.*o.*", w) else "NO"
