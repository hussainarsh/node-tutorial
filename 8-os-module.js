const os = require('os')

//infor about current user
const user = os.userInfo()


//method return the system time
console.log(`Time ${os.uptime}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)