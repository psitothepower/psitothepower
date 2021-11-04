const FtpDeploy = require("ftp-deploy");
const path = require('path');
const dotenvPath = path.join(__dirname, '.', '.env');

require('dotenv').config({ path: dotenvPath });

const ftpDeploy = new FtpDeploy();
const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_SERVER,
    port: process.env.FTP_PORT,
    localRoot: __dirname + "/build",
    remoteRoot: "/htdocs",
    include: ["*", "**/*"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true,
    sftp: false,
};

// uploading | uploaded | log
ftpDeploy.on("uploading", function (data) {
    console.log(data); // { totalFilesCount, transferredFileCount, filename }
});

ftpDeploy.on("upload-error", function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));
