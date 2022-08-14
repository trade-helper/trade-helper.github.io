const { execSync } = require("child_process");

const main = () => {
    // backup modified index.html
    execSync("cp index.html index-backup.html");
    // install, build, copy dist to root
    execSync("rm -rf ./awakened-poe-trade");
    execSync('git clone https://github.com/SnosMe/awakened-poe-trade.git');
    execSync('cd awakened-poe-trade/renderer && npm install && npm run make-index-files && npm run build');
    execSync('cp -r awakened-poe-trade/renderer/dist/. .');
    // revert index.html
    execSync("cp index-backup.html index.html");
    // clean up
    execSync("rm -rf ./awakened-poe-trade index-backup.html");
};

main();