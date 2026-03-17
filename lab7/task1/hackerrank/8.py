from itertools import combinations

s, k = input().split()
k = int(k)
s = sorted(s)
for r in range(1, k + 1):
    for comb in combinations(s, r):
        print(''.join(comb))