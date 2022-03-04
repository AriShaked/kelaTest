let basePath = 'C:\\';
const fs = require('fs');
const path = require( "path" );



module.exports = {

    getFoldersFromBase: () => {
        basePath = 'C:\\';
        console.log('entered a service');
        const folders = [];
        fs.readdirSync(basePath).forEach(file => {
        const absolutePath = path.resolve( basePath, file );
         
         console.log(`${file}`);
         let isDir = fs.existsSync(absolutePath) && fs.lstatSync(absolutePath).isDirectory();


         folders.push({name:`${file}`, isDir , absolutePath})
       });
       console.log('lstArr: ' , folders);
       return folders;
 },
    

    getFolders: () => {
           console.log('entered a service');
           const folders = [];
           fs.readdirSync(basePath).forEach(file => {
            const absolutePath = path.resolve( basePath, file );
            
            console.log(`${file}`);
            let isDir = fs.existsSync(absolutePath) && fs.lstatSync(absolutePath).isDirectory();
            folders.push({name:`${file}`, isDir , absolutePath})
          });
          console.log('lstArr: ' , folders);
          return folders;
    },

    
    enterDir: (fullPath) => {
        console.log('DDDDDDDDDD' , fullPath);
        basePath = fullPath;
 },
    

    createDir: (fullPathWithDirNmae) => {
        if (fs.existsSync(fullPathWithDirNmae)) { // check if file exits if not create it
            console.log('already exists');
        } else {
            // creat new folder(directory)
            fs.mkdir(fullPathWithDirNmae , err => {
                if (err) {
                    throw err;
                }
                console.log('directory crated')
            })
        }
        basePath = fullPathWithDirNmae;
    },
    renameDir: (id, name) => {
        // const user = getUserById(id);
        // user.name = name;
        // return user;
    },
    deleteDirr: (id) => {
        // const countUsersBefore = users.length;
        // users = users.filter(user => parseInt(user.id) !== parseInt(id));
        // const countUsersAfter = users.length;
        // return countUsersAfter < countUsersBefore;
    }
}