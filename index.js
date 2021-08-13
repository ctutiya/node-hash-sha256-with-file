'use strict'

const checkArguments = argument => {

}

// check number of arguments
// if (process.argv.length < 2) {
    const fs = require('fs')

    // reading the content of the file
    const filename = "./src/data.txt"
    const newfile = "./src/data.txt.enc"
    const newfile2 = "./src/data.txt.dec"
    // var file_data = fs.ReadStream(filename)
    
    const readStream = fs.createReadStream(filename)
    const writeStream = fs.createWriteStream(newfile)

    const crypto = require('crypto'),
        algorithm = 'aes-256-ctr',
        password = 'd6F3Efeq'

    const encrypt = crypto.createCipher(algorithm, password)

    readStream.pipe(encrypt).pipe(writeStream)

    // // passing the data to be hashed
    // file_data.on('data', function(data) {
    //     hash.update(data)
    // })

    // // creating the hash in the required format and writing it in file
    // file_data.on('end', function() {
    //     var gen_hash = hash.digest('hex')

    //     console.log('Hash generated using ' + algorithm + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + filename);

    //     fs.writeFileSync(filename, gen_hash)
    // })
// }
// else console.log('Insufficient arguments')