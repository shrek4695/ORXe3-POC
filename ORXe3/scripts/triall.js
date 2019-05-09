function terminalCommandRunner(commandtoRun) {
    const exec = require('child_process').execSync
    exec(commandtoRun, (err, stdout, stderr) => {
        console.log("error occured", stderr);
        process.stdout.write(stderr)
    })
    return 1;
}

var obj = {
    'check': 'hi',
    'abc': 'cde'
}

var commandtorun = 'echo '+ JSON.stringify(obj) +' > src/assets/localisation/header/header-english-culture.json'; 

terminalCommandRunner(commandtorun);