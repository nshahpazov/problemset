//
//  main.cpp
//  queue-at-school

#include <stdio.h>

const int MAXN = 10000;

char arr[MAXN];
char *q;

void swap(char &a, char &b)
{
    char temp = a;
    a = b;
    b = temp;
}

void sort(char *queue, int length)
{
    for (int i = 0; i < length - 1; i++) {
        if (queue[i] == 'B' && queue[i + 1] == 'G') {
            swap(queue[i], queue[i + 1]);
            i++;
        }
    }
}

int main(int argc, const char * argv[]) {
    int n ,t;
    scanf("%d %d", &n, &t);
    scanf("%s", arr);
    while (t--) sort(arr, n);
    printf("%s\n", arr);
    return 0;
}
