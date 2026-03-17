from itertools import permutations
s, k = input().split()
k = int(k)

s = sorted(s)
for perm in permutations(s, k):
    print(''.join(perm))