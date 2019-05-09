const fs = require('fs');
const path = require('path');
const _configurations = require('../src/assets/configurationData/configuration.json');
const CultureResourceIncluder = require('./getCultureResources');

minifing()

function minifing() {
    let clientName;
    process.argv[2] === undefined ? clientName = 'ORXe3' : clientName = process.argv[2];
    terminalCommandRunner('xcopy src OriginalSrc /hievry');
    fileWalkerEngine("src");
    terminalCommandRunner("npm run build " + clientName);
    terminalCommandRunner('jscat ./dist/' + clientName + '/runtime.js ./dist/' + clientName + '/polyfills.js ./dist/' + clientName + '/scripts.js ./dist/' + clientName + '/main.js > ./dist/' + clientName + '/ORXe3-custom-components.js')
    terminalCommandRunner('xcopy OriginalSrc src /hievry');
    //terminalCommandRunner('rmdir /Q /S OriginalSrc');
}

function terminalCommandRunner(commandtoRun) {
    const exec = require('child_process').execSync
    exec(commandtoRun, (err, stdout, stderr) => {
        console.log("error occured", stderr);
        process.stdout.write(stderr)
    })
    return 1;
}

function fileWalkerEngine(dir) {
    (function fileWalker(dir) {
        let results = [];
        let list = fs.readdirSync(dir)
        let pending = list.length;
        if (!pending) return 1;
        list.forEach((file) => {
            file = path.resolve(dir, file);
            try {
                let stat = fs.statSync(file);
                if (stat && stat.isDirectory()) {
                    results.push(file);
                    fileWalker(file, list);
                } else {
                    let file_name = file.toString();
                    if (file_name.includes('.ts') || file_name.includes('.css') || file_name.includes('.html') || file_name.includes('.scss')) {
                        fileRead(file);
                    }
                    // if (file_name.includes('CultureResources.json')) {
                    //     let moduleName = file_name.substring(0, file_name.indexOf('CultureResources.json'));
                    //     moduleName = moduleName.substring(moduleName.lastIndexOf("\\") + 1, moduleName.length);
                    //     console.log(moduleName)
                    //     CultureResourceIncluder.getModuleCulture(moduleName);
                    // }
                    results.push(file);
                    if (!--pending) {
                        return 1
                    }
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    })(dir);

}

function fileRead(file) {
   // console.log("file name", file)
    let file_content;
    let condition;
    let ClientName;
    if (process.argv[2] === undefined || process.argv[2] == null) {
        ClientName = '_root';
    } else {
        ClientName = process.argv[2];
    }
    let data = fs.readFileSync(file);
    file_content = data.toString();
    for (key in _configurations[ClientName]) {
        let identificationSyntax = "[Configuration Start] " + key;
        while (file_content.includes(identificationSyntax)) {
            let configurableString = file_content.substring(
                file_content.indexOf("[Configuration Start] " + key),
                file_content.indexOf("[Configuration End] " + key) + ("[Configuration End]" + key).length + 1);
            condition = configurableString.substring(configurableString.indexOf('(') + 1, configurableString.indexOf(')') + 1);
            console.log("Condition = ", typeof( _configurations[ClientName][key]));
            if(typeof( _configurations[ClientName][key]) === 'object' ) {
                console.log("changed ", _configurations[ClientName][key].replaceText);
                write_text = file_content.replace(configurableString, _configurations[ClientName][key].replaceText);
            } else {
                write_text = file_content.replace(configurableString, '');
            }
            if (eval(condition)) {
                file_content = write_text;
                console.log("eval condition", condition);
                fs.writeFileSync(file, '');
                fs.writeFileSync(file, write_text);
            } else {
                break;
            }
        }
    }
}