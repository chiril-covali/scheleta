// Configurație globală pentru aplicație
export const config = {
    // Setări API
    api: {
        baseUrl: 'https://api.matematica.md',
        timeout: 5000
    },

    // Setări calendar
    calendar: {
        defaultView: 'dayGridWeek',
        locale: 'ro',
        buttonText: {
            today: 'Astăzi',
            month: 'Lună',
            week: 'Săptămână',
            day: 'Zi'
        }
    },

    // Setări imagine
    image: {
        defaultWidth: 300,
        defaultHeight: 200,
        placeholderUrl: 'https://via.placeholder.com/300x200'
    },

    // Setări UI
    ui: {
        animationDuration: 300,
        toastDuration: 3000,
        errorDisplayDuration: 5000
    },

    // Setări cache
    cache: {
        maxAge: 3600,
        version: '1.0.0'
    }
};

// Constante pentru mesaje de eroare
export const errorMessages = {
    networkError: 'A apărut o eroare de rețea. Vă rugăm verificați conexiunea.',
    authError: 'Sesiunea a expirat. Vă rugăm autentificați-vă din nou.',
    validationError: 'Date invalide. Vă rugăm verificați câmpurile completate.',
    paymentError: 'Eroare la procesarea plății. Vă rugăm încercați din nou.'
};

// Constante pentru evenimente
export const events = {
    AUTH_CHANGE: 'authChange',
    PROFILE_UPDATE: 'profileUpdate',
    PAYMENT_SUCCESS: 'paymentSuccess',
    PAYMENT_ERROR: 'paymentError'
};