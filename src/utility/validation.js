const changeValidationMessage = (isValid, message, currMessage) => {
    if (!isValid && currMessage.length === 0) return message;
    return currMessage;
}

export const validation = (string, validationRules) => {
    let isValid = true;
    let validationMessage = '';

    if (validationRules.isRequred && isValid) {
        isValid = string.length > 0 && isValid;
        validationMessage = changeValidationMessage(isValid, 'Please, fill this field', validationMessage);
    }

    if (validationRules.isEmail && isValid) {
        const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = exp.test(string) && isValid;
        validationMessage = changeValidationMessage(isValid, 'Email is incorrect', validationMessage);
    }

    if (validationRules.minLength && isValid) {
        isValid = string.length > 5 && isValid;
        validationMessage = changeValidationMessage(isValid, 'Min password length is 6 symbols', validationMessage);
    }

    return [isValid, validationMessage];
}
