function getName() {
    return 'Jonas Pimentel';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName)