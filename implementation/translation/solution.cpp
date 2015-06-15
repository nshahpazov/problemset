#include <stdio.h>
#include <algorithm>
#include <iostream>
using namespace std;
const int MAXN = 1000000;

char f[MAXN];
char s[MAXN];

int main(int argc, const char * argv[]) {
    scanf("%s", f);
    scanf("%s", s);
    size_t len = strlen(f);
    for (int i = 0; i < len; i++) {
        if (f[i] != s[len - 1 - i]) {
            printf("NO\n");
            return 0;
        }
    }
    printf("YES\n");
    return 0;
}
