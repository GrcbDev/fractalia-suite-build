import { saveAs } from 'file-saver';
export class ImageUtils {
    static compressImage(src, newX, newY) {
        return new Promise<string>((res, rej) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const elem = document.createElement('canvas');
                elem.width = newX;
                elem.height = newY;
                const ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, newX, newY);
                const data = ctx.canvas.toDataURL();
                res(data);
            }
            img.onerror = error => rej(error);
        })
    }

    static getBase64(file: any) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }

    static noCacheImagen(path: string): string {
      return `${path}?nocache=${new Date().getTime()}`;
    }


    static async donwloadFileFromURL(url: string, filename: string) {
      const file = await fetch(url);
      if(file) {
        const fileBlob = await file.blob()
        saveAs(fileBlob, filename);
      }
    }
}
