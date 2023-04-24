
export class StringUtils {
  static isValidString(str: string) {
      return str !== null && str !== undefined && typeof str === "string" && str.length > 0;
  }

  static validarEmail(email: string) {
    if (email.length <= 2) {
      return false;
    }
    if (email.indexOf("@") == -1) {
      return false;
    }
    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;
    if (dot == -1 || dot < 2 || dotCount > 2) {
      return false;
    }
    for (var i = 0; i < dotSplits.length; i++) {
      if (dotSplits[i].length == 0) {
        return false;
      }
    }
    return true;
  }

  static deepClone(arg) {
    return JSON.parse(JSON.stringify(arg));
  }

  static getCurrentDate(){
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date();
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

  static convertDateLatinFormat(date) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date(date);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

  static convertDateWithHour(date){
    function pad(s) { return (s < 10) ? '0' + s : s; }
    function parseHour(val) {
      if(val > 12){
        s = "pm"
        return pad(val-12)
      }else{
        s = "am"
        return val
      }
    }
    let s = ''
    let d = new Date(date);
    let h = parseHour(d.getHours())
    let parseDate = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    let res = parseDate + ' - ' + h + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + " " + s
    return res
  }

  static addDaysAndFormat(date, days){
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date(date);
    d.setDate(d.getDate() + days)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

  static groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  static sortByProperty(array:any, property:any, inverse = false ){
    const arraySortered = array.sort((a:any, b:any) => {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }

        return 0;
    });

    if(inverse) {
        return arraySortered.reverse();
    }
    return arraySortered;
  }

  static textareaReplaceLineBreaks(text: string) {
    if (!text) {
      return '';
    }
    return text.replace(/(\r\n|\n)/g, '<br/>');
  }

  static removeHTML(text: string): string {
    if (!text ) return text;
    let without_html = text.replace(/<[^>]*>?/gm, '');
    return without_html;
  }

  static truncateHTML(text: string, charlimit: number = 0): string  {
    if (!text || text.length <= charlimit) {
        return text;
    }
    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit);
    return shortened;
  }

  static isMobileOrTabletCheck() {
    let check = false;
    (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
    return check;
  };



}
