//const fs = require('fs');
import fs from 'fs';

export const restHandler = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8', (err, data) => {
    res.send(data);
  });
};

//module.export = restHandler;
//export default resHandler; sadece tek bir dosya için kullanılabilir.
