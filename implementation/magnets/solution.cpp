#include <stdio.h>
#include <iostream>
#include <set>
#include <math.h> 

using namespace std;

int main(int argc, const char * argv[]) {
    int n;
    int s;
    int temp = -1;
    int count = 0;
    scanf("%d", &n);
    while (n--) {
        scanf("%d", &s);
        if (s != temp) {
            
            count++;
        }
        temp = s;
    }
    printf("%d\n", count);
}
