// Datele pentru grupele disponibile
const availableGroups = [
    {
        id: 1,
        subject: 'Matematică',
        class: 5,
        profile: 'Real',
        language: 'Română',
        format: 'group6',
        schedule: 'Marți și Joi, 17:00-18:00',
        availableSpots: 2,
        totalSpots: 6,
        status: {
            type: 'active',
            completedLessons: 10,
            totalLessons: 40
        },
        teacher: {
            name: 'Maria Popescu',
            gender: 'female',
            experience: '20 ani experiență în predare',
            specialization: 'Olimpic național la matematică'
        },
        price: 168
    },
    {
        id: 2,
        subject: 'Matematică',
        class: 6,
        profile: 'Real',
        language: 'Rusă',
        format: 'group3',
        schedule: 'Luni și Miercuri, 15:00-16:00',
        availableSpots: 1,
        totalSpots: 3,
        status: {
            type: 'pending',
            startDate: '15 Februarie 2024'
        },
        teacher: {
            name: 'Ion Rusu',
            gender: 'male',
            experience: '15 ani experiență în predare',
            specialization: 'Specialist în pregătirea pentru examene'
        },
        price: 218
    },
    {
        id: 3,
        subject: 'Matematică',
        class: 7,
        profile: 'Uman',
        language: 'Română',
        format: 'individual',
        schedule: 'Vineri, 14:00-15:00',
        availableSpots: 1,
        totalSpots: 1,
        status: {
            type: 'active',
            completedLessons: 5,
            totalLessons: 20
        },
        teacher: {
            name: 'Elena Munteanu',
            gender: 'female',
            experience: '12 ani experiență în predare',
            specialization: 'Profesor pentru elevi cu necesități speciale'
        },
        price: 318
    },
    {
        id: 4,
        subject: 'Matematică',
        class: 8,
        profile: 'Real',
        language: 'Engleză',
        format: 'group6',
        schedule: 'Marți și Joi, 16:00-17:00',
        availableSpots: 3,
        totalSpots: 6,
        status: {
            type: 'pending',
            startDate: '20 Februarie 2024'
        },
        teacher: {
            name: 'Alexandru Cojocaru',
            gender: 'male',
            experience: '18 ani experiență în predare',
            specialization: 'Specialist în matematică aplicată'
        },
        price: 168
    },
    {
        id: 5,
        subject: 'Matematică',
        class: 9,
        profile: 'Real',
        language: 'Română',
        format: 'group3',
        schedule: 'Luni și Miercuri, 17:00-18:00',
        availableSpots: 2,
        totalSpots: 3,
        status: {
            type: 'active',
            completedLessons: 15,
            totalLessons: 40
        },
        teacher: {
            name: 'Daniela Rotaru',
            gender: 'female',
            experience: '25 ani experiență în predare',
            specialization: 'Profesor pentru elevi olimpici'
        },
        price: 218
    }
];

// Funcție pentru filtrarea grupelor
function filterGroups(filters) {
    return availableGroups.filter(group => {
        return (!filters.class || group.class === parseInt(filters.class)) &&
               (!filters.profile || group.profile === filters.profile) &&
               (!filters.language || group.language === filters.language) &&
               (!filters.format || filters.format.includes(group.format));
    });
}

// Funcție pentru generarea HTML-ului unei grupe
function generateGroupHTML(group) {
    const statusClass = group.status.type === 'active' ? 'status-active' : 'status-pending';
    const statusText = group.status.type === 'active' 
        ? `În desfășurare (${group.status.completedLessons}/${group.status.totalLessons} ore)`
        : `Începe pe ${group.status.startDate}`;

    return `
        <div class="group-card">
            <div class="group-header">
                <h3>Grupa de ${group.subject} - Clasa ${group.class}</h3>
                <span class="group-status ${statusClass}">${statusText}</span>
            </div>

            <div class="group-schedule">
                <strong>Orar:</strong> ${group.schedule}
                <br>
                <strong>Locuri disponibile:</strong> ${group.availableSpots} din ${group.totalSpots}
            </div>

            <div class="teacher-info">
                <div class="teacher-avatar">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="${group.teacher.gender === 'female' ? 
                            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' : 
                            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'}"/>
                    </svg>
                </div>
                <div>
                    <strong>${group.teacher.name}</strong>
                    <br>
                    <span>${group.teacher.experience}</span>
                    <br>
                    <span>${group.teacher.specialization}</span>
                </div>
            </div>

            <div class="price-info">
                <strong>Preț:</strong> ${group.price} MDL/oră
            </div>

            <a href="#" class="action-button">Înregistrează-te la oră de probă</a>
        </div>
    `;
}

// Funcție pentru actualizarea listei de grupe
function updateGroupsList(filters = {}) {
    const filteredGroups = filterGroups(filters);
    const groupsListContainer = document.querySelector('.groups-list');
    groupsListContainer.innerHTML = filteredGroups.map(generateGroupHTML).join('');
}

// Funcție pentru inițializarea filtrelor
function initializeFilters() {
    const filterInputs = document.querySelectorAll('.filters-panel input');
    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            const filters = {
                class: document.querySelector('input[name="class"]:checked')?.value,
                profile: document.querySelector('input[name="profile"]:checked')?.value,
                language: document.querySelector('input[name="language"]:checked')?.value,
                format: Array.from(document.querySelectorAll('input[name="format"]:checked'))
                    .map(cb => cb.value)
            };
            updateGroupsList(filters);
        });
    });
}

// Inițializare când documentul este gata
document.addEventListener('DOMContentLoaded', () => {
    updateGroupsList();
    initializeFilters();
});