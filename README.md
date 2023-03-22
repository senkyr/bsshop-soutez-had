# BSSHOP soutěž v programování 2023

## Hadi pro různé platformy

Tento repozitář obsahuje skelety hadů v několika jazycích.
- Python
- C Sharp
- JavaScript

### Vstupy
Každý skelet je jednoduchou serverovou aplikací, která podle jednotného URL schématu čeká na HTTP request ze serveru, kde běží hra. Herní server odesílá v `body` requestu data o současném stavu hry. Data hry jsou ve formátu JSON.
- URL `/`, žádná data v `body` --> HTTP response se jménem hada
- URL `/init`, data hry v `body` --> standardní HTTP `200 OK` response
- URL `/move`, data hry v `body` --> HTTP response se směrem pohybu hada pro příští iteraci

### Výstupy
Směr pohybu hada je ve formátu JSON se čtyřmi přípustnými hodnotami.
- ``` {"direction": "Right"} ```
- ``` {"direction": "Left"} ```
- ``` {"direction": "Up"} ```
- ``` {"direction": "Down"} ```
