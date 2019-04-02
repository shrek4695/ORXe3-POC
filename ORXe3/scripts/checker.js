
function chec() {
    terminalCommandRunner('')
}

chec();

function terminalCommandRunner(commandtoRun) {
    const exec = require('child_process').execSync

                exec(commandtoRun, (err, stdout, stderr) => {
                    console.log("error occured",stderr);
                    process.stdout.write(stderr)
                })
    return 1;
}