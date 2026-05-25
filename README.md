# SZZ Příprava - Business Informatics

Interaktivní studijní prostředí pro přípravu na státní závěrečnou zkoušku (SZZ) na FEL ČVUT, program Softwarové inženýrství, specializace Business Informatics.

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
8. **TPA** - Tvorba podnikových aplikací
9. **MPR** - Metody pro rozhodování

## Psaní HTML poznámek

Každá stránka používá layout: sidebar vlevo (`col-lg-3`) + obsah vpravo (`col-lg-9`). Vzor viz `lag.html` nebo `maa.html`.

### Komponenty (`subjects/shared.css`)

```html
<!-- Sekce -->
<section class="topic-section" id="topic-1">
    <h3>1. Název tématu</h3>
    <h4>Podnadpis</h4>

    <!-- Boxy — vždy začínají <strong>Label:</strong> -->
    <div class="def-box"><strong>Definice:</strong> ...</div>      <!-- modrá -->
    <div class="thm-box"><strong>Věta:</strong> ...</div>          <!-- zelená -->
    <div class="ex-box"><strong>Příklad:</strong> ...</div>        <!-- cyan -->
    <div class="warn-box"><strong>Upozornění:</strong> ...</div>   <!-- žlutá -->
    <div class="insight-box"><strong>Insight:</strong> ...</div>   <!-- fialová -->
    <div class="summary-box"><strong>Shrnutí:</strong> ...</div>   <!-- full border -->

    <!-- Vzorec na samostatném řádku -->
    <div class="formula-block">$$f(x) = x^2$$</div>

    <!-- Tabulka se zvýrazněným headerem -->
    <table class="table table-bordered summary-table">...</table>
</section>
```

### MathJax
- Inline: `$f(x)$`
- Block: `$$\int_a^b f(x)\,dx$$`
- Makra: `\N \R \Z \Q \C`

### Sidebar — odkaz na každou sekci
```html
<li><a class="nav-link py-1" href="#topic-1">1. Název</a></li>
```

### Předměty
- **Teoretické** (modrá `bg-primary`): ZDM, MAA, LAG, OMO, DSA, PRA, KAB, DBS
- **Specializační** (zelená `bg-success`, `<body class="page-specialization">`): ZWA, TS1, PM2, PSI, INS, ISP, ZDA, TPA, MPR

## 📄 Licence

Projekt vytvořen pro osobní studijní účely.

## 🤝 Přispívání

Projekt je primárně pro osobní použití, ale připomínky a návrhy jsou vítány!

---

**Hodně štěstí u státnic! 🎓**
