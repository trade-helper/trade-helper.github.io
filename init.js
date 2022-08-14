const { execSync } = require("child_process");

const main = () => {
    try {
        // clone fork
        execSync('git clone https://github.com/trade-helper/awakened-poe-trade-web-version.git')

        // build app and move it to page root
        execSync('cd awakened-poe-trade-web-version/renderer && npm install && npm run make-index-files && npm run build');
        execSync('cp -r awakened-poe-trade-web-version/renderer/dist/. .');
    } finally {
        // cleanup
        execSync('rm -rf awakened-poe-trade-web-version')
    }
};

process.on('SIGTERM', () => {
    // cleanup in case of app termination
    execSync('rm -rf awakened-poe-trade-web-version')
});

main();