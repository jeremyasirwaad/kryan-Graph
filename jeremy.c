#include <stdio.h>

int main()
{
    int a = 8, f;
    int b = 10;
    int *c = &a, d = &b;
    f = c - d;
    printf("%d", &f);
}