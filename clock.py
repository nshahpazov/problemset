n = 14

stars = n - 1
dots = 0
def func(stars, dots, step1, step2, n = 0):
        for _ in range(n):
            print '.' * dots + '*' * stars + '.' * dots
            stars+=step1
            dots+=step2

func(stars, dots, -2, 1, n/2)
func(4 if n % 2 else 3, 4, 2, -1, n/2-1)

