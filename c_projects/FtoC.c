#include <stdio.h>

int main ()

{
  
    float fahrenheit;
    float celsius;

    printf("Temperature in Fahrenheit?\n");
    fahrenheit = getchar();
    while(fahrenheit!=EOF)
    {
        putchar(fahrenheit);
        fahrenheit = getchar();
    }
    celsius = 5.0*(fahrenheit-32)/9;
        printf ("La temperatura equivalente en Celsius es:\n");  
        printf ("%.2f", celsius);
        printf ("\n");
}