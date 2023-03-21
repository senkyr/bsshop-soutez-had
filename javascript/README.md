# Implementace hada v JavaScriptu

Tento had vyžaduje pro svůj běh [Node.js](https://nodejs.org/) (odzkoušeno na verzi 18.14.2 LTS).

Pro instalaci závislostí nejprve spusťte příkaz `npm install`

Samotného hada lze spustit souborem `run.cmd` nebo příkazem `npm run dev`

Do adresáře přidejte konfigurační soubor `.env` obsahující údaje (např. pro hada týmu #8)
```
ID = 8
IP = "127.0.0.1"
PORT = 6008
NAME = "Had týmu #8"
```

Samotného hada najdete v souboru `app/snake.js`, kde změníte tělo funkce `exports.move`
