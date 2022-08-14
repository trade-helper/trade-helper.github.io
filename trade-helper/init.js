const { execSync } = require("child_process");

const main = () => {
    execSync("rm -rf ./awakened-poe-trade");
    execSync('git clone https://github.com/SnosMe/awakened-poe-trade.git');
    execSync('cd awakened-poe-trade/renderer && npm install && npm run make-index-files && npm run build');
    execSync('cp -r awakened-poe-trade/renderer/dist/. .');
    execSync("rm -rf ./awakened-poe-trade");
};

main();