# Claude Instructions - SZZ Příprava Project

## Přehled projektu

Dvouvrstvý interaktivní systém pro přípravu na státní závěrečnou zkoušku:
1. **Dashboard** (`index.html`) - sledování pokroku s checkboxy
2. **Poznámkové stránky** (`subjects/*.html`) - detailní studijní materiály

## Klíčové informace

### Struktura dat
- **17 předmětů**: 8 teoretických + 9 specializačních (Business Informatics)
- **Předměty teoretické**: ZDM, MAA, LAG, OMO, DSA, PRA, KAB, DBS
- **Předměty specializační**: ZWA, TS1, PM2, PSI, INS, ISP, ZDA, TPA, MPR

### Tech stack
- Bootstrap 5.3.2 (CDN)
- Font Awesome 6.4.2 (CDN)
- MathJax 3 (CDN)
- Vanilla JavaScript
- localStorage pro persistence
- Žádný build process - vše self-contained

### Design principy
- **Single-file approach**: Dashboard je jeden HTML soubor bez externích závislostí
- **CDN only**: Žádné lokální knihovny
- **FIT ČVUT styl**: Poznámky stylované jako skripta z FIT
- **Responzivní**: Mobile-first design
- **Tmavý režim**: Plná podpora dark mode

## Soubory projektu

### index.html (900+ řádků)
**Účel**: Hlavní dashboard s checkboxy pro sledování pokroku

**Klíčové sekce**:
- **Lines 1-200**: HTML struktura + CSS styling (custom properties, dark mode)
- **Lines 200-260**: Navbar + sidebar + main content struktura
- **Lines 270-630**: JavaScript `subjects` objekt s tématy pro všechny předměty
- **Lines 630-750**: Rendering funkcí (renderSubjects, loadSubject, renderTopics)
- **Lines 750-850**: Progress tracking (localStorage, toggleTopic, updateProgress)
- **Lines 850+**: Event handlers (theme, export, search)

**Důležité funkce**:
```javascript
renderSubjects()           // Vykreslí sidebar s předměty
loadSubject(code)          // Načte a zobrazí předmět
renderTopics()             // Vykreslí checkboxy pro témata
toggleTopic(subjectCode, topicIndex)  // Zaškrtne/odškrtne téma
updateSubjectProgress()    // Aktualizuje progress bar
```

**CSS Custom Properties**:
```css
--sidebar-width: 360px;
--navbar-height: 60px;
```

### subjects/*.html (17 souborů)
**Účel**: Detailní studijní poznámky pro každý předmět

**Základní šablona**:
- Fixed navbar s back linkem na dashboard
- Hlavní obsah area (max-width 900px)
- Alert box "Ve výstavbě"
- MathJax konfigurace (stejná jako dashboard)
- Dark mode support
- Bootstrap styling

**Barevné kódování**:
- **Teoretické předměty**: modrá navbar (`bg-primary`)
- **Specializační předměty**: zelená navbar (`bg-success`)

## Pracovní postupy

### Přidání nového tématu do předmětu

1. **Najdi předmět** v `subjects` objektu (okolo line 270-630)
2. **Přidej téma** do pole `topics`:
```javascript
{
    code: 'ZDM',
    name: 'Diskrétní matematika a logika',
    topics: [
        'Teorie grafů',
        'Kombinatorika',
        'NOVÉ TÉMA ZDE'  // ← přidat zde
    ]
}
```
3. **Nemusíš nic dalšího** - rendering se aktualizuje automaticky

### Vytvoření obsahu poznámkové stránky

1. **Otevři příslušný soubor** v `subjects/`
2. **Najdi alert box** "Ve výstavbě"
3. **Nahraď/doplň** obsahem ve formátu:

```html
<section class="topic-section">
    <h3>Název tématu</h3>
    
    <div class="alert alert-primary">
        <strong>Definice:</strong> Text definice s možností $matematiky$
    </div>
    
    <p>Normální text s inline vzorcem $f(x) = x^2$</p>
    
    <div class="alert alert-info">
        <strong>Příklad:</strong> Ukázkový příklad
    </div>
    
    <p>Block vzorec:</p>
    $$
    \int_a^b f(x) dx = F(b) - F(a)
    $$
</section>
```

### Úprava UI/UX

**Sidebar**:
- Šířka: změň `--sidebar-width`
- Padding: uprav `#sidebar { padding: ... }`
- Item styling: uprav `.subject-item` CSS

**Barvy**:
- Dark mode: uprav `body.dark-mode` selektory
- Progress bars: změň `.progress-bar` classes
- Badges: uprav `badge bg-primary` / `bg-success`

**Fonts a velikosti**:
- Kategorie hlavičky: `.category-header { font-size: ... }`
- Předměty: `.subject-item .subject-name { font-size: ... }`
- Search box: `.search-box .form-control { font-size: ... }`

### Přidání nového předmětu

1. **Přidej do `subjects` objektu** v index.html:
```javascript
subjects.theoretical.push({
    code: 'XXX',
    name: 'Nový předmět',
    topics: ['Téma 1', 'Téma 2']
});
```

2. **Vytvoř HTML soubor** `subjects/xxx.html` z šablony
3. **Prolinkuj**: odkazy se generují automaticky z kódu předmětu

## Coding style

### JavaScript
- **ES6 syntax**: arrow functions, template literals, const/let
- **Vanilla JS**: žádné frameworky, čistý DOM manipulation
- **localStorage**: `JSON.parse(localStorage.getItem('key'))` pattern
- **Event listeners**: `addEventListener` na DOMContentLoaded

### CSS
- **Custom properties**: používat pro opakované hodnoty
- **Mobile-first**: media queries s `@media (max-width: 768px)`
- **Transitions**: `transition: all 0.2s` pro smooth UX
- **Dark mode**: separate selectors pro `body.dark-mode`

### HTML
- **Semantic HTML**: `<nav>`, `<main>`, `<aside>`, `<section>`
- **Bootstrap classes**: preferovat utility classes před custom CSS
- **Accessibility**: `role`, `title`, `aria-*` atributy kde potřeba

## Častá úprava

### Změna šířky sidebaru
```css
:root {
    --sidebar-width: 360px;  /* změň tuto hodnotu */
}
```

### Přidání nového stylu boxu pro poznámky
```html
<div class="alert alert-warning">
    <strong>Upozornění:</strong> Text...
</div>
```

Dostupné Bootstrap barvy: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

### Export/Import funkce rozšíření

Export je již implementován (JSON download). Pro import:
```javascript
function importProgress(jsonData) {
    try {
        const data = JSON.parse(jsonData);
        localStorage.setItem('szzProgress', JSON.stringify(data));
        location.reload();
    } catch (e) {
        alert('Chyba při importu dat');
    }
}
```

## Důležité poznámky

### ⚠️ Při editaci index.html
- **Vždy zachovej context**: include 3-5 řádků před a po změně
- **Nepoškozuj subjects objekt**: je to jediný zdroj dat (není externí JSON)
- **Testuj dark mode**: každá UI změna musí fungovat i v dark mode
- **localStorage klíče**: `szzProgress`, `szzTheme`

### ⚠️ Při vytváření poznámek
- **MathJax delimitery**: `$...$` inline, `$$...$$` block
- **Makra**: `\N`, `\R`, `\Z`, `\Q`, `\C` jsou nakonfigurované
- **Responzivita**: Bootstrap container má max-width 900px
- **Konzistence**: stejný navbar a styling napříč všemi subjects/*.html

### ⚠️ Best practices
- **Single-file**: Dashboard zůstává jeden soubor bez dependencies
- **CDN links**: nikdy neměň na lokální soubory
- **localStorage**: vždy wrap v try-catch
- **Progress tracking**: nikdy mazat data bez potvrzení

## Quick commands

### Otevřít v prohlížeči
```powershell
Start-Process "C:\Users\Adam\Desktop\statnice\index.html"
```

### Reset progress (console)
```javascript
localStorage.removeItem('szzProgress');
location.reload();
```

### Export current state (console)
```javascript
console.log(JSON.stringify(JSON.parse(localStorage.getItem('szzProgress')), null, 2));
```

---

**Když pracuješ na projektu**:
1. Vždy čti kontext z conversation summary
2. Testuj změny v prohlížeči
3. Zachovej single-file architekturu
4. Používej multi_replace pro batch edits
5. Dark mode support je povinný!
