const { execSync } = require("child_process");

const main = () => {
    // backup modified index.html and clear possible leftover files
    execSync("cp index.html index-backup.html");

    // rename assets to avoid problems with github pages
    execSync("sed -i 's/index.bin/bin/g' awakened-poe-trade/renderer/src/assets/make-index-files.mjs")
    execSync("sed -i 's/index.bin/bin/g' awakened-poe-trade/renderer/src/assets/data/index.ts")

    // build app and move it to page root
    execSync('cd awakened-poe-trade/renderer && npm install && npm run make-index-files && npm run build');
    execSync('cp -r awakened-poe-trade/renderer/dist/. .');

    // revert index.html to original
    execSync("mv index-backup.html index.html");

    // rename files to avoid problems with github pages
    execSync("cd awakened-poe-trade/renderer/src/assets && sed -i 's/index.bin/bin/g' ./make-index-files.mjs && sed -i 's/index.bin/bin/g' ./data/index.ts")

    // remove hashes from css and js file names so our index.html won't change
    execSync('cd assets && rm -rf index.js index.css && ren *.js index.js && ren *.css index.css');
};

main();