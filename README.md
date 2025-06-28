# solid-telegram
node-angular fullstack application

## Running with Docker Compose

```bash
docker-compose up --build
```

Backend API: http://localhost:3000

Frontend app: http://localhost:4200





## 🧪 Feladatok

### 1. Eszközök megjelenítése táblázatban
- Angular `p-table` komponenssel
- Oszlopok: Name, Type, Status, Location
- Törlés gomb hozzáadása soronként
- Adatok lekérése automatikusan 4 másodpercenként

### 2. Új eszköz hozzáadása
- Angular form segítségével
- `POST` kérés backend felé
- Eszköz mezők: name, type, ip, location

### 3. Eszközök státuszainak követése
- Frissülő vonaldiagram (line chart)
- Megjeleníti, hogy hány eszköz volt `active`, `error`, `inactive` minden frissítéskor

### Bónusz feladatok
- Az adatkezelés adatbázisban történjen (pl. mssql vagy mongodb)
- Toggle button használata, amellyel ki-be kapcsolható a folyamatos diagramm frissítés

### Beadás menete
Készíts egy publikus/privát GitHub repository-t, amely tartalmazza a megoldás teljes forráskódját
A repo tartalmazzon egy rövid README.md-t is, hogyan hogyan lehet elindítani a frontendet és a backendet
A kész projekt GitHub repo linkjét küldd el nekünk emailben
---

### Példa adatszerkezet

```ts
interface Device {
  id: number;
  name: string;
  type: string;
  ip: string;
  status: 'active' | 'error' | 'inactive';
  location: string;
}

