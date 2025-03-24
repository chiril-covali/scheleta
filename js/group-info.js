document.addEventListener('DOMContentLoaded', function() {
    // Funcție pentru preluarea parametrilor din URL
    function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            groupName: params.get('group') || '',
            schedule: params.get('schedule') || '',
            teacher: params.get('teacher') || '',
            price: params.get('price') || ''
        };
    }

    // Funcție pentru afișarea informațiilor despre grupă
    function displayGroupInfo() {
        const params = getUrlParams();
        const groupInfoDiv = document.getElementById('groupInfo');

        if (groupInfoDiv) {
            const groupName = document.getElementById('groupName');
            const groupSchedule = document.getElementById('groupSchedule');
            const groupTeacher = document.getElementById('groupTeacher');
            const groupPrice = document.getElementById('groupPrice');

            if (groupName && groupSchedule && groupTeacher && groupPrice) {
                groupName.textContent = params.groupName;
                groupSchedule.textContent = params.schedule;
                groupTeacher.textContent = params.teacher;
                groupPrice.textContent = params.price;

                if (params.groupName || params.schedule || params.teacher || params.price) {
                    groupInfoDiv.style.display = 'block';
                } else {
                    groupInfoDiv.style.display = 'none';
                }
            } else {
                console.error('One or more required elements not found');
            }
        } else {
            console.error('Group info container not found');
        }
    }

    // Inițializare
    displayGroupInfo();
});
