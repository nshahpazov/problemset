#include <stdio.h>
#include <iostream>
#include <set>
using namespace std;

int main(int argc, const char * argv[]) {
    cout << " ";
    int numbers[4];
    for (int i = 0; i < 4; i++) {
        scanf("%d", &numbers[i]);
    }
    
    set<int> mySet(numbers, numbers + 4);
    cout << 4 - mySet.size() << endl;
}
