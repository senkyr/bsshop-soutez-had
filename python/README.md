# Implementace hada v Pythonu

Tento had vyžaduje pro svůj běh [Flask](https://flask.palletsprojects.com/) (odzkoušeno na verzi 2.2.3).

Pro instalaci závislostí nejprve spusťte příkaz `python -m pip install Flask`

Samotného hada lze spustit souborem `run.cmd` nebo příkazem `python main.py`

Do konfiguračního soubor `config.py` vyplňte údaje (např. pro hada týmu #8)
```
ID = 8
IP = "127.0.0.1"
PORT = 6008
NAME = "Had týmu #8"
```

Samotného hada najdete v souboru `snake.py`, kde změníte tělo funkce `move`
