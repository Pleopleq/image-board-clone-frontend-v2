export function errorFormatter(error){
    const formattedError = error.split(":")
    const result = formattedError.slice(0, 1)
    return result.join("") 
}

export function errorHandler (errorStr) {
    if(errorStr === "User validation failed"){
        return "User must be unique."
    }
    return
}
