export const customStringValidation = (lowerLimit: number, str: string, name: string, upperLimit?: number) => {
    if (str.length < lowerLimit) {
        return name + " should be longer than " + lowerLimit + " characters."
    }
    if(upperLimit && str.length > upperLimit) {
        return name + " should be shorter than " + upperLimit + " characters."
    }
    return "";
}

export const phoneNumberValidation = (phoneNo: string) => {
    let phoneNumberRegex1 = /^06[789]\d{7}$/;
    let phoneNumberRegex2 = /^\+3556[789]\d{7}$/;
    return (phoneNumberRegex1.test(phoneNo) || phoneNumberRegex2.test(phoneNo)) ? '' : 'Phone number format is incorrect.';
}