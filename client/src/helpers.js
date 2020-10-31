export const getRandonId = () => {
    return Math.random().toString().substring(2, 8);
}

export const upperCaseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);