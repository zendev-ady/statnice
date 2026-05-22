# SZZ Příprava - Business Informatics

Interaktivní studijní prostředí pro přípravu na státní závěrečnou zkoušku (SZZ) na FEL ČVUT, program Softwarové inženýrství, specializace Business Informatics.

## 📋 O projektu

Dvouvrstvý systém pro efektivní přípravu na státnice:
- **Dashboard** s checkboxy pro sledování postupu
- **Poznámkové stránky** s detailními studijními materiály

## 🎯 Funkce

### Dashboard (`index.html`)
- ✅ **Sledování pokroku** - checkboxy pro každé téma s automatickým ukládáním do localStorage
- 📊 **Vizualizace** - celkový progress bar a statistiky pro každý předmět
- 🔍 **Vyhledávání** - rychlé filtrování témat
- 🌓 **Tmavý režim** - přepínání mezi světlým a tmavým tématem
- 💾 **Export** - záloha pokroku do JSON
- 📱 **Responzivní** - funguje na desktop i mobilu

### Poznámkové stránky (`subjects/*.html`)
- 📚 Detailní studijní materiály pro každý předmět
- 📐 MathJax podpora pro matematické vzorce
- 🎨 Stylované boxy (definice, věty, příklady) jako FIT ČVUT skripta
- 🧭 Navigace mezi tématy
- 🌓 Konzistentní tmavý režim

## 📂 Struktura projektu

```
statnice/
├── index.html              # Hlavní dashboard s checkboxy
├── subjects/               # Poznámkové stránky
│   ├── zdm.html           # Diskrétní matematika a logika
│   ├── maa.html           # Matematická analýza
│   ├── lag.html           # Lineární algebra
│   ├── omo.html           # Objektové modelování
│   ├── dsa.html           # Datové struktury a algoritmy
│   ├── pra.html           # Pravděpodobnost a statistika
│   ├── kab.html           # Kryptografie a bezpečnost
│   ├── dbs.html           # Databázové systémy
│   ├── zwa.html           # Webové aplikace
│   ├── ts1.html           # Testování softwaru
│   ├── pm2.html           # Projektové řízení
│   ├── psi.html           # Počítačové sítě
│   ├── ins.html           # Informační systémy
│   ├── isp.html           # Informační systémy a procesy
│   ├── zda.html           # Datová analýza
│   ├── tpa.html           # Technologie podnikových aplikací
│   └── mpr.html           # Metody pro rozhodování
├── *.md                    # Původní markdown soubory s tématy
├── README.md              # Tento soubor
└── CLAUDE.md              # Instrukce pro AI asistenta

```

## 🚀 Použití

### Rychlý start
1. Otevři `index.html` v prohlížeči
2. Vyber předmět z levého sidebaru
3. Zaškrtávej témata, která jsi se naučil
4. Klikni na 📝 **Poznámky** pro detailní studijní materiály

### Tipy
- **Progress se automaticky ukládá** do prohlížeče (localStorage)
- **Exportuj si pokrok** pravidelně pro zálohu
- **Použij vyhledávání** pro rychlé nalezení tématu
- **Tmavý režim** aktivuj ikonou 🌙 v pravém horním rohu

## 🛠️ Technologie

### Frontend Stack
- **Bootstrap 5.3.2** - responzivní layout a komponenty
- **Font Awesome 6.4.2** - ikony
- **MathJax 3** - matematické vzorce s českými makry
- **Vanilla JavaScript** - bez závislostí, čistý JS
- **CSS Custom Properties** - pro snadné téma přizpůsobení

### Datová persistence
- **localStorage** - ukládání pokroku a preferencí
- **JSON export** - záloha dat

## 📚 Předměty

### Teoretická část (8 předmětů)
1. **ZDM** - Diskrétní matematika a logika
2. **MAA** - Matematická analýza
3. **LAG** - Lineární algebra
4. **OMO** - Objektové modelování
5. **DSA** - Datové struktury a algoritmy
6. **PRA** - Pravděpodobnost a statistika
7. **KAB** - Kryptografie a bezpečnost
8. **DBS** - Databázové systémy

### Specializace Business Informatics (9 předmětů)
1. **ZWA** - Webové aplikace
2. **TS1** - Testování softwaru
3. **PM2** - Projektové řízení
4. **PSI** - Počítačové sítě
5. **INS** - Informační systémy
6. **ISP** - Informační systémy a procesy
7. **ZDA** - Datová analýza
8. **TPA** - Technologie podnikových aplikací
9. **MPR** - Metody pro rozhodování

## 🎨 Design principy

- **Čistý a moderní** - minimalistický design s důrazem na čitelnost
- **FIT ČVUT styl** - poznámkové stránky inspirované skrity z FIT
- **Přístupnost** - vysoký kontrast, sémantické HTML
- **Responzivní** - funguje na všech zařízeních
- **Bezbarierový** - klávesová navigace, screen reader friendly

## 📝 Přidávání obsahu

### Editace poznámek
1. Otevři příslušný soubor v `subjects/`
2. Přidej sekce pomocí `<section class="topic-section">`
3. Použij stylované boxy pro důležité informace:

```html
<!-- Definice -->
<div class="alert alert-primary">
    <strong>Definice:</strong> Text definice...
</div>

<!-- Příklad -->
<div class="alert alert-info">
    <strong>Příklad:</strong> Text příkladu...
</div>

<!-- Matematika -->
<p>Inline vzorec: $f(x) = x^2$</p>
<p>Block vzorec:</p>
$$
\int_a^b f(x) dx = F(b) - F(a)
$$
```

### Přidávání témat do dashboardu
V `index.html` najdi objekt `subjects` a přidej témata do pole `topics`:

```javascript
{
    code: 'ZDM',
    name: 'Diskrétní matematika a logika',
    topics: [
        'Teorie grafů',
        'Kombinatorika',
        // ... další témata
    ]
}
```

## 🔧 Customizace

### Změna barev
V `index.html` uprav CSS custom properties:

```css
:root {
    --sidebar-width: 360px;
    --navbar-height: 60px;
}
```

### Změna layoutu
- **Sidebar šířka**: Změň `--sidebar-width`
- **Navbar výška**: Změň `--navbar-height`
- **Dark mode barvy**: Uprav `.dark-mode` selektory

## 💡 Budoucí vylepšení

- [ ] Export do PDF
- [ ] Import/export z markdown souborů
- [ ] Flashcards režim pro opakování
- [ ] Statistiky učení (čas strávený, streaky)
- [ ] Pomodoro timer integrace
- [ ] Synchronizace přes cloud
- [ ] Poznámky a označení v textech
- [ ] Quiz režim pro testování znalostí

## 📄 Licence

Projekt vytvořen pro osobní studijní účely.

## 🤝 Přispívání

Projekt je primárně pro osobní použití, ale připomínky a návrhy jsou vítány!

---

**Hodně štěstí u státnic! 🎓**
