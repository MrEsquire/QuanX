/*
Pumpkin movie unlock vip
Surge:
http-response ^https:\/\/(p\.doras\.api\.vcinema\.cn|pay\.guoing\.com)\/(v5\.0\/user\/\d+$|d\/user\/get_user_info) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/ngdy.js

QX:
^https:\/\/(p\.doras\.api\.vcinema\.cn|pay\.guoing\.com)\/(v5\.0\/user\/\d+$|d\/user\/get_user_info) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/ngdy.js

Surge & QX MITM = pay.guoing.com, p.doras.api.vcinema.cn,
*/

var _0xaa31=["\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x75\x72\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x76\x61\x74\x61\x72\x73\x32\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x75\x2F\x35\x33\x32\x31\x37\x31\x36\x30\x3F\x73\x3D\x34\x36\x30\x26\x76\x3D\x34","\u7981\u6B62\u725F\u5229\x2C\x20\x54\x47\u9891\u9053\x40\x4E\x6F\x62\x79\x44\x61","\x76\x35\x2E\x30\x2F\x75\x73\x65\x72","\x75\x73\x65\x72\x2F\x67\x65\x74\x5F\x75\x73\x65\x72\x5F\x69\x6E\x66\x6F","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x73\x65\x72\x5F\x73\x65\x65\x64\x5F\x69\x6E\x74","\x63\x6F\x6E\x74\x65\x6E\x74","\x36\x36\x36\x36\x36\x36\x36","\x75\x73\x65\x72\x5F\x70\x68\x6F\x74\x6F","\x75\x73\x65\x72\x5F\x69\x64","\x75\x73\x65\x72\x5F\x70\x68\x6F\x6E\x65","\x31\x36\x36\x36\x36\x36\x36\x36\x36\x36\x36","\x75\x73\x65\x72\x5F\x6C\x65\x76\x65\x6C\x5F\x73\x74\x72","\x4C\x76\x35\u7537\u7235","\x75\x73\x65\x72\x5F\x76\x69\x70\x5F\x73\x74\x61\x74\x65","\x32","\x75\x73\x65\x72\x5F\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x75\x73\x65\x72\x5F\x76\x69\x70\x5F\x73\x74\x61\x72\x74\x5F\x64\x61\x74\x65","\x32\x30\x31\x36\x2E\x30\x36\x2E\x30\x36","\x75\x73\x65\x72\x5F\x76\x69\x70\x5F\x65\x6E\x64\x5F\x64\x61\x74\x65","\x32\x30\x36\x36\x2E\x30\x36\x2E\x30\x36","\x32\x30\x36\x36\x2D\x30\x36\x2D\x30\x36","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];let obj=JSON[_0xaa31[1]]($response[_0xaa31[0]]);let url=$request[_0xaa31[2]];let photo=_0xaa31[3];let name=_0xaa31[4];const vip=_0xaa31[5];const pay=_0xaa31[6];if(url[_0xaa31[7]](vip)!=  -1){obj[_0xaa31[9]][_0xaa31[8]]= _0xaa31[10];obj[_0xaa31[9]][_0xaa31[11]]= photo;obj[_0xaa31[9]][_0xaa31[12]]= 1000772;obj[_0xaa31[9]][_0xaa31[13]]= _0xaa31[14];obj[_0xaa31[9]][_0xaa31[15]]= _0xaa31[16];obj[_0xaa31[9]][_0xaa31[17]]= _0xaa31[18];obj[_0xaa31[9]][_0xaa31[19]]= name;obj[_0xaa31[9]][_0xaa31[20]]= _0xaa31[21];obj[_0xaa31[9]][_0xaa31[22]]= _0xaa31[23]};if(url[_0xaa31[7]](pay)!=  -1){obj[_0xaa31[9]][_0xaa31[22]]= _0xaa31[24];obj[_0xaa31[9]][_0xaa31[13]]= _0xaa31[14];obj[_0xaa31[9]][_0xaa31[19]]= name;obj[_0xaa31[9]][_0xaa31[11]]= photo};$done({body:JSON[_0xaa31[25]](obj)})