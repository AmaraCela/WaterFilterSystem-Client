export const customStringValidation = (lowerLimit: number, str: string, name: string, upperLimit?: number) => {
    if (str.length < lowerLimit) {
        return name + " should be longer than " + lowerLimit + " characters"
    }
    if(upperLimit && str.length > upperLimit) {
        return name + " should be shorter than " + upperLimit + " characters"
    }
    return "";
}