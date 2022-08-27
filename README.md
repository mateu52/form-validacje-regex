Zadanie o treści:

. Rejestracja konta użytkownika
Przygotuj formularz, który będzie służył do zakładania konta użytkownika. Niech formularz składa się z 3 pól:

e-mail

hasło

potwierdź hasło

 

Logika, jaka za tym stoi powinna sprawdzać, czy wprowadzone hasło:

zawiera co najmniej jedną małą literę

zwiera co najmniej jedną dużą literę

zawiera co najmniej jedną liczbę

zawiera co najmniej jeden znak specjalny (np. # $ %)

jego długość to co najmniej 8 znaków

 

Jeśli hasło nie spełnia poniższych kryteriów wyświetl o tym informacje w postaci:

v hasło zawiera co najmniej jedną małą literę

x hasło nie zawiera przynajmniej jednej dużej litery

v hasło zawiera co najmniej jedną liczbę

x hasło nie zawiera znaków specjalnych

x hasło powinno składać się z co najmniej 8 znaków

 

Pole "potwierdź hasło" służy do sprawdzenia, czy w tym polu wprowadziliśmy takie samo hasło jak w polu poprzednim.

 

Walidacja:

Po kliknięciu przycisku submit niech aplikacja sprawdzi, czy w bazie istnieje użytkownik o podanym adresie e-mail. Ponieważ nie mieliśmy jeszcze mockowania, to możemy zasymulować w aplikacji, że łączymy się za backendem i otrzymujemy odpowiedź, czyli np. wprowadzić gdzieś na sztywno taką informację w kodzie aplikacji.
