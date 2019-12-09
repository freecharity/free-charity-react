export const validatePasswords = (p1: string, p2: string) => {
    if (p1 === p2) {
        return true;
    } else {
        alert("Passwords do not match!");
        return false;
    }
};

export const validateEmail = (email: string): boolean => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    alert("The email you have entered is invalid!");
    return false;
};

export const validateUsername = (username: string): boolean => {
    if (/^[a-z0-9]+$/i.test(username)) {
        return true;
    }
    alert("User name can only contain letters and numbers!");
    return false;
};