
const printLog = false;

export function logging(tag, message){
    printLog &&
    console.log(tag, " ", message);
}