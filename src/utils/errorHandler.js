export function errorFormatter(error, splitBy, keyWord){
    const formattedError = error.split(splitBy)
    const itContainsError = formattedError.includes(keyWord)
    return itContainsError
}

export function errorHandler (errorName, isError) {
    if(errorName === "minimumChar" && isError){
        return "Username and password must be at least 4 characters long."
    } else if (errorName === "uniqueUser" && isError) {
        return "User Already exist"
    } else {
        return
    }
}
