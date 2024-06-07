/*
Lab 07
*/
class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}

function throwGenericError() {
    throw new Error("Generic Error");
}

function throwCustomError() {
    throw new CustomError("Custom Error");
}

try {
    console.log("Force generic error");
    console.log(throwGenericError() + " try block");
} catch (error) {
    console.log("Generic error catch block");
    console.log(`${error.name}: ${error.message}`);
} finally {
    console.log("Generic error finally block");
}

try {
    console.log("Force custom error");
    console.log(throwCustomError() + " try block");
} catch (error) {
    console.log("Custom error catch block");
    console.log(`${error.name}: ${error.message}`);
} finally {
    console.log("Custom error finally block");
}
