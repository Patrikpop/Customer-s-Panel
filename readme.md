<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# React &ndash; egzamin

## Wytyczne

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

## Uwagi dotyczące rozwiązywania zadań

Zadania te są testowane za pomocą **specjalnych testów automatycznych**. Zwróć zatem uwagę na następujące rzeczy:

* Jeśli w treści zadania jest wspomniane, aby konkretny tekst został wpisany/zwrócony/wyśwetlony, to powinien być to dokładnie taki sam tekst jak w treści zadania.

* Pamiętaj również o tym, aby nazwy funkcji/komponentów były dokładnie takie same jak w treści zadania. 

* Zadania rozwiązuj w odpowiednich plikach **jsx**.

* Zawsze sprawdzaj, czy Twoje rozwiązanie działa, jeśli powoduje ono błędy w konsoli nie zostanie ocenione. W takim wypadku lepiej zakomentuj wrażliwe części.

* **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad któym obecnie pracujesz w _entry_.**


---------------------------------------------------------------------

## Zadania

### Zadanie 1
(2 pkt)

Wyrenderuj w komponencie ```App``` następujące elementy:
- `h1` z napisem "Hello World",
- `span` z napisem "Egzamin".

### Zadanie 2
(3 pkt)

Stwórz komponent `Address`. Przez props ma przyjmować: imię (`name`), nazwisko (`lastname`), adres ulicy (`street`), nr domu (`housenumber`), kod pocztowy (`postcode`) oraz miejstowość (`city`).

Komponent ma renderować (przykład w HTML):
```HTML
<h1>{Imię} {nazwisko}</h1>
<p>{Adres ulicy} {nr domu}</p>
<p>{Kod pocztowy} {miejscowość}</p>
```

Imię, nazwisko, adres, nr domu i miejscowość mają być **niepustymi stringami**. Kod pocztowy ma się składać z **dokładne 5 lub 6 znaków**. Jeżeli którykolwiek z warunków nie jest spełniony, to zablokuj wyświetlanie komponentu.

Wyrenderuj ten komponent dla dowolnych danych.

### Zadanie 3
(3 pkt)

Stwórz komponent `Surprise`. Ma renderować element `h1` z napisem "Wait for it...". Po 5 sekundach tekst w `h1` ma zmieniać się na "Surprise!".

### Zadanie 4
(5,5 pkt)

Stwórz komponent `PizzaToppings`. Ma wyświetlać dwie listy `ul` w elemencie `div`.
Na pierwszej domyślnie znajdują się: Sos pomidorowy, Ananas, Kukurydza, Pomidor. Na drugiej nic.
Po kliknięciu na dowolny element przenosi on się z pierwszej listy na drugą.

### Zadanie 5
(6,5 pkt)

Stwórz komponent `ContactForm`. Ma on zawierać formularz z następującymi (kontrolowanymi) elementami:
* `input` na imię, 
* `select` z wydziałem: BOK, Dział techniczny, Marketing, 
* `input type=email`  na adres email, 
* `textarea` na treść wiadomości, 
* przycisk `input type="submit"` wysłania.

Kiedy formularz zostanie przesłany, to ma zostać wykonana walidacja:
* imię ma być niepustym stringiem - jeśli warunek nie jest spełniony nad fomularzem wypisz informację: " Pole imię musi zostać uzupełnione"
* e-mail ma zawierać znak "@"  - jeśli warunek nie jest spełniony nad fomularzem wypisz informację: "Pole email musi zostać uzupełnione i zawierać znak @"
* wiadomość ma być niepustym stringiem - jeśli warunek nie jest spełniony nad fomularzem wypisz informację: "Pole wiadomość musi zostać uzupełnione"

Jeżeli wszystkie warunki są spełnione to wyświetl nad formularzem na zielono informację "Dziękujemy za wiadomość. Wysłano do wydziału: " i nazwa wydziału.

**Powodzenia :)**


<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
