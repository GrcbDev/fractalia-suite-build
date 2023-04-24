import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TruncateService
{

    truncateHTML(text: string, charlimit: number = 0): string
    {
        if (!text || text.length <= charlimit) {
            return text;
        }
        let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
        let shortened = without_html.substring(0, charlimit);
        return shortened;
    }

    removeHTML(text: string): string
    {
        if (!text ) {
            return text;
        }
        let without_html = text.replace(/<[^>]*>?/gm, '');
        return without_html;
    }
}
