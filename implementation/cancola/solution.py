names = [ "Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
n = input() - 1
while n >= 5:
    n -= 5 # goes back one drinking cycle
    n /= 2 # reduces doubles
print names[n]
