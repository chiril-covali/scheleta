import { formValidation, imageOptimization } from './utils.js';

// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Set active menu item
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Initialize calendar if exists
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridWeek',
            locale: 'ro',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,timeGridDay'
            },
            eventContent: function(arg) {
                let paidStatus = arg.event.extendedProps.paid ? '✓' : '!';
                let statusColor = arg.event.extendedProps.paid ? '#27ae60' : '#e74c3c';
                return {
                    html: `
                        <div class="fc-event-main-frame">
                            <div class="fc-event-title">${arg.event.title}</div>
                            <div class="fc-event-time">${arg.timeText}</div>
                            <div class="fc-event-location">${arg.event.extendedProps?.location || ''}</div>
                            <div class="fc-event-status" style="color: ${statusColor}">${paidStatus}</div>
                        </div>
                    `
                };
            }
        });
        calendar.render();
    }

    // Optimize all images
    document.querySelectorAll('img').forEach(img => {
        imageOptimization.lazyLoad(img);
        imageOptimization.setDefaultSize(img);
    });

    // Form validation
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        const cardInput = paymentForm.querySelector('input[placeholder*="Card"]');
        cardInput.addEventListener('input', () => formValidation.formatCardNumber(cardInput));
        
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            if (!formValidation.validateCardNumber(formData.get('cardNumber'))) {
                showError('Număr card invalid');
                return;
            }
            // Continue with payment processing
        });
    }

    // Calendar optimization
    const calendar = initializeCalendar();
    if (calendar) {
        calendar.setOption('eventDidMount', function(info) {
            info.el.setAttribute('data-paid', info.event.extendedProps.paid);
        });
    }
});

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    // Add error display logic
}
