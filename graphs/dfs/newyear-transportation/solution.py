R = lambda: map(int, raw_input().split())
dest = R()[1]
portals = [i + k for i, k in enumerate([-1] + R())]
curr = 1
while curr != dest and curr < len(portals):
    curr = portals[curr]
print ['NO', 'YES'][curr == dest]
