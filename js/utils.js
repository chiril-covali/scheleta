export const formValidation = {
    validateCardNumber: (number) => /^[0-9]{16}$/.test(number.replace(/\s/g, '')),
    validateExpiry: (expiry) => /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiry),
    validateCVV: (cvv) => /^[0-9]{3,4}$/.test(cvv),
    formatCardNumber: (input) => {
        let value = input.value.replace(/\s/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        input.value = value;
    }
};

export const imageOptimization = {
    lazyLoad: (img) => {
        img.loading = 'lazy';
        img.decoding = 'async';
    },
    setDefaultSize: (img) => {
        img.width = img.getAttribute('width') || 300;
        img.height = img.getAttribute('height') || 200;
    }
};
