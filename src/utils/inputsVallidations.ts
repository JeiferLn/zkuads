export const validatePassword = (value: string, firstName: string) => {
    if (firstName && value.toLowerCase().includes(firstName.toLowerCase())) {
        return 'Password is too similar to the first name';
    }
    if (value.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    if (/^\d+$/.test(value)) {
        return 'Password cannot be entirely numeric';
    }
    return true;
};

export const validateDate = (value: string) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) {
        return 'Invalid date format (YYYY-MM-DD)';
    }
    const date = new Date(value);
    const today = new Date();
    if (date > today) {
        return 'Date cannot be in the future';
    }
    const age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
        return age - 1 >= 18 ? true : 'You must be at least 18 years old';
    }
    return age >= 18 ? true : 'You must be at least 18 years old';
};

export const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email format';
};

export const validatePhoneNumber = (value: string) => {
    const phoneRegex = /^\d{10,12}$/;
    
    if (!phoneRegex.test(value)) {
        return 'Phone number must contain only digits and be 10 to 12 digits long';
    }
    
    return true;
};
