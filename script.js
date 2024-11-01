const allMatches = [
    {
        teamA: { name: 'فريقَ A', logo: 'teamA_logo.png' },
        teamB: { name: 'فريق B', logo: 'teamB_logo.png' },
        time: '14:00',
        date: '2024-11-02',
        link: '#',
        important: true
    },
    {
        teamA: { name: 'فريق C', logo: 'teamC_logo.png' },
        teamB: { name: 'فريق D', logo: 'teamD_logo.png' },
        time: '16:00',
        date: '2024-11-02',
        link: '#',
        important: true
    },
    {
        teamA: { name: 'فريق E', logo: 'teamE_logo.png' },
        teamB: { name: 'فريق F', logo: 'teamF_logo.png' },
        time: '18:00',
        date: '2024-11-02',
        link: '#'
    },
    {
        teamA: { name: 'فريق G', logo: 'teamG_logo.png' },
        teamB: { name: 'فريق H', logo: 'teamH_logo.png' },
        time: '20:00',
        date: '2024-11-02',
        link: '#'
    }
];

// وظيفة العد التنازلي
function calculateCountdown(matchDate, matchTime) {
    const matchDateTime = new Date(`${matchDate}T${matchTime}:00`);
    const now = new Date();
    const diff = matchDateTime - now;

    if (diff <= 0) {
        return "المباراة بدأت!";
    } else {
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return `${hours} س ${minutes} د ${seconds} ث`;
    }
}

// عرض المباريات المهمة فقط
function displayImportantMatches() {
    const matchList = document.getElementById('importantMatches');
    if (!matchList) return;

    matchList.innerHTML = '';
    allMatches.filter(match => match.important).forEach(match => {
        const matchItem = document.createElement('div');
        matchItem.className = 'match';
        matchItem.innerHTML = `
            <div class="team">
                <img src="${match.teamA.logo}" alt="${match.teamA.name} شعار" class="team-logo">
                <span class="team-name">${match.teamA.name}</span>
            </div>
            <span class="vs">VS</span>
            <div class="team">
                <img src="${match.teamB.logo}" alt="${match.teamB.name} شعار" class="team-logo">
                <span class="team-name">${match.teamB.name}</span>
            </div>
            <br>
            <span>الوقت المتبقي: <span class="countdown">${calculateCountdown(match.date, match.time)}</span></span> <br>
            <a href="${match.link}">شاهد البث</a>
        `;
        matchList.appendChild(matchItem);
    });
}

// عرض جميع المباريات في جدول المباريات
function displayAllMatches() {
    const matchList = document.getElementById('allMatches');
    if (!matchList) return;

    matchList.innerHTML = '';
    allMatches.forEach(match => {
        const matchItem = document.createElement('div');
        matchItem.className = 'match';
        matchItem.innerHTML = `
            <div class="team">
                <img src="${match.teamA.logo}" alt="${match.teamA.name} شعار" class="team-logo">
                <span class="team-name">${match.teamA.name}</span>
            </div>
            <span class="vs">VS</span>
            <div class="team">
                <img src="${match.teamB.logo}" alt="${match.teamB.name} شعار" class="team-logo">
                <span class="team-name">${match.teamB.name}</span>
            </div>
            <br>
            <span>الوقت المتبقي: <span class="countdown">${calculateCountdown(match.date, match.time)}</span></span> <br>
            <a href="${match.link}">شاهد البث</a>
        `;
        matchList.appendChild(matchItem);
    });
}

setInterval(() => {
    displayImportantMatches();
    displayAllMatches();
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    displayImportantMatches();
    displayAllMatches();
});
