module.exports = {
    request: require('sync-request'),
    fs: require('fs'),
    cultureArray: [
        {
            instanceId: 2,
            cultureName: 'english'
        },
        {
            instanceId: 7,
            cultureName: 'spanish'
        },
        {
            instanceId: 9,
            cultureName: 'arabic'
        },
        {
            instanceId: 10,
            cultureName: 'chinese'
        }],
    baseUrl: 'http://localhost:2000/api/CultureResources/',
    // Set the headers
    customheaders: {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    },

    // Configure the request
    options: {
        method: 'GET',
        headers: this.customheaders
    },

    getModuleCulture: function (moduleName) {
        console.log("getModuleCulture", moduleName);
        this.getCultureResources(0, moduleName)
    },

    getCultureResources: function (index, moduleName) {
        console.log("getCultureResources", moduleName);
        var self = this;
        if (index < self.cultureArray.length) {
            let reqUrl = self.baseUrl + self.cultureArray[index].instanceId;
            let res = self.request('GET', reqUrl, self.options.headers);
            if (res.statusCode == 200) {
                self.updateJson(JSON.parse(res.body), moduleName, self.cultureArray[index].cultureName, self)
                self.getCultureResources(index + 1, moduleName)
            } else {
                console.log("faill");
            }

        }
    },

    updateJson: function (CultureResources, targetModule, cultureName, self) {
        console.log("updateJson ", cultureName);
        let finalcultureobject = {};
        const CultureModule = require('../src/app/' + targetModule + '/' + targetModule + 'CultureResources.json');
        for (culture in CultureModule) {
            let cultureObject = CultureResources.find(x => x.Key == culture);
            if (cultureObject != null) {
                cultureObject.Value = self.convertToi18nFormat(cultureObject.Value);
            }
            finalcultureobject[culture] = cultureObject === undefined ? null : cultureObject.Value
        }
        let json = JSON.stringify(finalcultureobject);
        let cultureFilePath = 'src/assets/i18n/' + targetModule + '/' + targetModule + '-' + cultureName + '-' + 'culture.json';

        if (self.fs.existsSync(cultureFilePath)) {
            self.fs.writeFileSync(cultureFilePath, '');
            self.fs.writeFileSync(cultureFilePath, json);
        } else {
            self.fs.writeFileSync(cultureFilePath, json);
        }
    },
    convertToi18nFormat: function (cultureKey) {
        if (cultureKey.includes('{{') && cultureKey.includes('}}')) {
            return cultureKey;
        } else if (cultureKey.includes('{') && cultureKey.includes('}')) {
            cultureKey = cultureKey.replace("{", "{{");
            cultureKey = cultureKey.replace("}", "}}");
        }
        return cultureKey;
    }
}