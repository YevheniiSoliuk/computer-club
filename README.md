### Opis projektu

Dana strona jest stroną, przedstawiającą klub komputerowy PING (wymyśliłem sobie taką nazwę).

Zawiera 5 sekcji: **główna**, **komputery**, **pokoje**, **recenzje** oraz **kontakt**.

Dane o komputerach, pokojach oraz recenzjach są pobierane z backendu i są dynamicznie umieszczane na stronie.

W sekcji kontakt jest formularz, pozwalający na zarezerwowanie terminu do pogrania w klubie.
Dane z formularza są wysyłane na serwer i zapisywane w bazie danych.

### [Link do szaty graficznej w Figmie](https://www.figma.com/file/qUy5IHIYyWC9JK1hhkoBFz/Computer-club?type=design&node-id=0%3A1&mode=design&t=piArFFT9seKSu5wV-1)

### Drzewo projektu:
 - client
 - server

```diff
!Przed uruchomieniem klienta oraz serwera trzeba śćągnąć biblioteki opisane w pliku "package.json" polecenim
```

```
npm install
```

Folder "client" zawiera część frontendową projektu.
Uruchomienie komendą 
```
npm run dev
```

Folder "server" zawiera część backendową projektu.
Uruchomienie komendą 
```
npm start
```
