#include <stdio.h>
#include <iostream>
#include <set>
#include <math.h> 

using namespace std;

int main(int argc, const char * argv[]) {
    
    int n;
    int m;

    scanf("%d %d", &n, &m);
    int s = n * m;
    printf("%d\n", (int)floor(s / 2));
}
