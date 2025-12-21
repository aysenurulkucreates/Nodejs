const fs = require('fs');

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            // Eğer hata "Dosya Bulunamadı (ENOENT)" ise görmezden gel, sorun yok.
            if (err.code === 'ENOENT') {
                console.log('Dosya zaten yok, silme işlemi atlandı.');
                return; 
            }
            // Başka bir hataysa (örn: yetki hatası) o zaman fırlat.
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;