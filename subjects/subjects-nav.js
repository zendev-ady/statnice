/**
 * subjects-nav.js — sdílený rozcestník předmětů
 * Přidá kompaktní navigaci předmětů do sidebaru každé stránky.
 * Čte pokrok z localStorage (klíč 'szzProgress', formát CODE-index: true).
 */
(function () {
    const SUBJECTS = [
        // Teoretické
        { code: 'ZDM', name: 'Diskrétní matematika', file: 'zdm.html', count: 24 },
        { code: 'MAA', name: 'Matematická analýza',  file: 'maa.html', count: 16 },
        { code: 'LAG', name: 'Lineární algebra',      file: 'lag.html', count: 17 },
        { code: 'OMO', name: 'Objektové modelování',  file: 'omo.html', count: 24 },
        { code: 'DSA', name: 'Datové struktury a alg.',file: 'dsa.html', count: 20 },
        { code: 'PRA', name: 'Pravděpodobnost',        file: 'pra.html', count: 12 },
        { code: 'KAB', name: 'Kryptografie',           file: 'kab.html', count: 12 },
        { code: 'DBS', name: 'Databázové systémy',     file: 'dbs.html', count: 19 },
        // Specializační
        { code: 'ZWA', name: 'Webové aplikace',        file: 'zwa.html', count: 11 },
        { code: 'TS1', name: 'Testování softwaru',     file: 'ts1.html', count: 20 },
        { code: 'PM2', name: 'Projektové řízení',      file: 'pm2.html', count: 4  },
        { code: 'PSI', name: 'Počítačové sítě',        file: 'psi.html', count: 24 },
        { code: 'INS', name: 'Informační systémy',     file: 'ins.html', count: 7  },
        { code: 'ISP', name: 'IS a procesy',           file: 'isp.html', count: 13 },
        { code: 'ZDA', name: 'Datová analýza',         file: 'zda.html', count: 0  },
        { code: 'TPA', name: 'Tech. podnik. aplikací', file: 'tpa.html', count: 0  },
        { code: 'MPR', name: 'Metody pro rozhodování', file: 'mpr.html', count: 0  },
    ];

    const THEORETICAL_CODES = ['ZDM','MAA','LAG','OMO','DSA','PRA','KAB','DBS'];

    function getProgress() {
        try { return JSON.parse(localStorage.getItem('szzProgress')) || {}; }
        catch { return {}; }
    }

    function countDone(code, total, prog) {
        let done = 0;
        for (let i = 0; i < total; i++) {
            if (prog[`${code}-${i}`] === true) done++;
        }
        return done;
    }

    function currentFile() {
        return window.location.pathname.split('/').pop() || '';
    }

    function pct(done, total) {
        return total === 0 ? 0 : Math.round((done / total) * 100);
    }

    function render() {
        const nav = document.querySelector('.topic-nav');
        if (!nav) return;

        const prog = getProgress();
        const active = currentFile();
        const isDark = document.body.classList.contains('dark-mode');

        const wrap = document.createElement('div');
        wrap.id = 'subjects-nav-panel';
        wrap.style.cssText = 'margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--sn-border,#dee2e6);';

        // Header — link zpět na dashboard
        const header = document.createElement('h6');
        header.style.cssText = 'font-size:0.7rem;text-transform:uppercase;font-weight:700;letter-spacing:.05em;margin-bottom:.5rem;';
        header.innerHTML = `<a href="../index.html" class="text-decoration-none" style="color:inherit;">
            <i class="fas fa-th-list me-1"></i>Rozcestník
        </a>`;
        wrap.appendChild(header);

        // Skupiny
        const groups = [
            { label: 'Teoretické', codes: THEORETICAL_CODES },
            { label: 'Specializační', codes: SUBJECTS.filter(s => !THEORETICAL_CODES.includes(s.code)).map(s => s.code) },
        ];

        groups.forEach((group, gi) => {
            const groupItems = SUBJECTS.filter(s => group.codes.includes(s.code));

            const groupLabel = document.createElement('div');
            groupLabel.style.cssText = `font-size:0.65rem;text-transform:uppercase;letter-spacing:.06em;color:#888;
                font-weight:600;margin:${gi === 0 ? '0' : '.75rem'} 0 .2rem;`;
            groupLabel.textContent = group.label;
            wrap.appendChild(groupLabel);

            const ul = document.createElement('ul');
            ul.style.cssText = 'list-style:none;padding:0;margin:0;';

            groupItems.forEach(s => {
                const isActive = active === s.file;
                const done = countDone(s.code, s.count, prog);
                const p = pct(done, s.count);
                const hasTopics = s.count > 0;

                const li = document.createElement('li');
                li.style.cssText = 'margin-bottom:1px;';

                const a = document.createElement('a');
                a.href = s.file;
                a.style.cssText = `display:flex;align-items:center;gap:.4rem;padding:.18rem .45rem;
                    border-radius:4px;text-decoration:none;font-size:.78rem;line-height:1.35;
                    transition:background .15s;
                    ${isActive
                        ? 'background:rgba(13,110,253,.12);color:#0d6efd;font-weight:600;'
                        : 'color:inherit;'}`;

                // Code badge
                const badge = document.createElement('span');
                badge.textContent = s.code;
                badge.style.cssText = `flex-shrink:0;font-size:.65rem;font-weight:700;padding:.1rem .3rem;
                    border-radius:3px;min-width:2.5rem;text-align:center;
                    ${isActive
                        ? 'background:#0d6efd;color:#fff;'
                        : 'background:rgba(128,128,128,.15);color:inherit;'}`;
                a.appendChild(badge);

                // Name
                const nameSpan = document.createElement('span');
                nameSpan.style.cssText = 'flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
                nameSpan.textContent = s.name;
                a.appendChild(nameSpan);

                // Progress indicator
                if (hasTopics) {
                    const pip = document.createElement('span');
                    pip.style.cssText = `flex-shrink:0;font-size:.6rem;color:${p === 100 ? '#198754' : '#aaa'};`;
                    pip.textContent = p === 100 ? '✓' : `${p}%`;
                    a.appendChild(pip);
                }

                a.addEventListener('mouseenter', () => {
                    if (!isActive) a.style.background = 'rgba(128,128,128,.1)';
                });
                a.addEventListener('mouseleave', () => {
                    if (!isActive) a.style.background = '';
                });

                li.appendChild(a);
                ul.appendChild(li);
            });

            wrap.appendChild(ul);
        });

        nav.appendChild(wrap);
    }

    // Spusť po načtení DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }

    // Reaguj na přepnutí dark-mode (observer na class změnu body)
    const observer = new MutationObserver(() => {
        const panel = document.getElementById('subjects-nav-panel');
        if (panel) {
            panel.style.setProperty('--sn-border', document.body.classList.contains('dark-mode') ? '#404040' : '#dee2e6');
        }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();
