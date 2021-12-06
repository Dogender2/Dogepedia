/*const firebaseConfig = {
    apiKey: "AIzaSyALROqikqgBW4V3bNhwJ6FGZojuKaIC_bA",
    authDomain: "doge-7aae7.firebaseapp.com",
    databaseURL: "https://doge-7aae7-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "doge-7aae7",
    storageBucket: "doge-7aae7.appspot.com",
    messagingSenderId: "922622265105",
    appId: "1:922622265105:web:f572c6820f47755acfaeb0",
    measurementId: "G-B43XZQ2J9G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

function sendMessage()
{

    var opis=document.getElementById("email").value;
    var title=document.getElementById("name").value;
    var imageURL=document.getElementById("wiadomosc").value;

    var newMessageKey = database.ref().child('titles').push().key;

    database.ref('titles/'+newMessageKey+'/opis').set(opis);
    database.ref('titles/'+newMessageKey+'/title').set(title);
    database.ref('titles/'+newMessageKey+'/imageURL').set(imageURL);
    window.location.reload();


}


function submitForm(e) {
    e.preventDefault();
}

var leadsRef = database.ref('titles');

leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();


        var title = document.createTextNode(childData.title);
        var opis = document.createTextNode(childData.opis);
        var imageURL = document.createTextNode(childData.imageURL);


        const imgUrl = imageURL;



        var ult = document.getElementById("scoreList");
        var lit = document.createElement("li");
        lit.setAttribute('class','uls');
        lit.appendChild(title);
        lit.appendChild(document.createElement('br'));
        lit.appendChild(opis);


        lit.appendChild(document.createElement('br'));
        ult.appendChild(lit);

        var img = $('<img />', {
            src: childData.imageURL
        });
        img.appendTo(lit);
    });
});

 */

var _0x57ef=["\x41\x49\x7A\x61\x53\x79\x41\x4C\x52\x4F\x71\x69\x6B\x71\x67\x42\x57\x34\x56\x33\x62\x4E\x68\x77\x4A\x36\x46\x47\x5A\x6F\x6A\x75\x4B\x61\x49\x43\x5F\x62\x41","\x64\x6F\x67\x65\x2D\x37\x61\x61\x65\x37\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x67\x65\x2D\x37\x61\x61\x65\x37\x2D\x64\x65\x66\x61\x75\x6C\x74\x2D\x72\x74\x64\x62\x2E\x65\x75\x72\x6F\x70\x65\x2D\x77\x65\x73\x74\x31\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x64\x61\x74\x61\x62\x61\x73\x65\x2E\x61\x70\x70\x2F","\x64\x6F\x67\x65\x2D\x37\x61\x61\x65\x37","\x64\x6F\x67\x65\x2D\x37\x61\x61\x65\x37\x2E\x61\x70\x70\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x39\x32\x32\x36\x32\x32\x32\x36\x35\x31\x30\x35","\x31\x3A\x39\x32\x32\x36\x32\x32\x32\x36\x35\x31\x30\x35\x3A\x77\x65\x62\x3A\x66\x35\x37\x32\x63\x36\x38\x32\x30\x66\x34\x37\x37\x35\x35\x61\x63\x66\x61\x65\x62\x30","\x47\x2D\x42\x34\x33\x58\x5A\x51\x32\x4A\x39\x47","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x41\x70\x70","\x61\x6E\x61\x6C\x79\x74\x69\x63\x73","\x64\x61\x74\x61\x62\x61\x73\x65","\x76\x61\x6C\x75\x65","\x65\x6D\x61\x69\x6C","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6E\x61\x6D\x65","\x77\x69\x61\x64\x6F\x6D\x6F\x73\x63","\x6B\x65\x79","\x70\x75\x73\x68","\x74\x69\x74\x6C\x65\x73","\x63\x68\x69\x6C\x64","\x72\x65\x66","\x73\x65\x74","\x74\x69\x74\x6C\x65\x73\x2F","\x2F\x6F\x70\x69\x73","\x2F\x74\x69\x74\x6C\x65","\x2F\x69\x6D\x61\x67\x65\x55\x52\x4C","\x72\x65\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x74\x69\x74\x6C\x65","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x6F\x70\x69\x73","\x69\x6D\x61\x67\x65\x55\x52\x4C","\x73\x63\x6F\x72\x65\x4C\x69\x73\x74","\x6C\x69","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x63\x6C\x61\x73\x73","\x75\x6C\x73","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x72","\x3C\x69\x6D\x67\x20\x2F\x3E","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x66\x6F\x72\x45\x61\x63\x68","\x6F\x6E"];var _0x2afb=[_0x57ef[0],_0x57ef[1],_0x57ef[2],_0x57ef[3],_0x57ef[4],_0x57ef[5],_0x57ef[6],_0x57ef[7],_0x57ef[8],_0x57ef[9],_0x57ef[10],_0x57ef[11],_0x57ef[12],_0x57ef[13],_0x57ef[14],_0x57ef[15],_0x57ef[16],_0x57ef[17],_0x57ef[18],_0x57ef[19],_0x57ef[20],_0x57ef[21],_0x57ef[22],_0x57ef[23],_0x57ef[24],_0x57ef[25],_0x57ef[26],_0x57ef[27],_0x57ef[28],_0x57ef[29],_0x57ef[30],_0x57ef[31],_0x57ef[32],_0x57ef[33],_0x57ef[34],_0x57ef[35],_0x57ef[36],_0x57ef[37],_0x57ef[38],_0x57ef[39],_0x57ef[40],_0x57ef[41],_0x57ef[42],_0x57ef[43],_0x57ef[44],_0x57ef[45]];var _0xe88e=[_0x2afb[0],_0x2afb[1],_0x2afb[2],_0x2afb[3],_0x2afb[4],_0x2afb[5],_0x2afb[6],_0x2afb[7],_0x2afb[8],_0x2afb[9],_0x2afb[10],_0x2afb[11],_0x2afb[12],_0x2afb[13],_0x2afb[14],_0x2afb[15],_0x2afb[16],_0x2afb[17],_0x2afb[18],_0x2afb[19],_0x2afb[20],_0x2afb[21],_0x2afb[22],_0x2afb[23],_0x2afb[24],_0x2afb[25],_0x2afb[26],_0x2afb[27],_0x2afb[28],_0x2afb[29],_0x2afb[30],_0x2afb[31],_0x2afb[32],_0x2afb[33],_0x2afb[34],_0x2afb[35],_0x2afb[36],_0x2afb[37],_0x2afb[38],_0x2afb[39],_0x2afb[40],_0x2afb[41],_0x2afb[42],_0x2afb[43],_0x2afb[44],_0x2afb[45]];const firebaseConfig={apiKey:_0xe88e[0],authDomain:_0xe88e[1],databaseURL:_0xe88e[2],projectId:_0xe88e[3],storageBucket:_0xe88e[4],messagingSenderId:_0xe88e[5],appId:_0xe88e[6],measurementId:_0xe88e[7]};firebase[_0xe88e[8]](firebaseConfig);firebase[_0xe88e[9]]();var database=firebase[_0xe88e[10]]();function sendMessage(){var _0xff39x6=document[_0xe88e[13]](_0xe88e[12])[_0xe88e[11]];var _0xff39x7=document[_0xe88e[13]](_0xe88e[14])[_0xe88e[11]];var _0xff39x8=document[_0xe88e[13]](_0xe88e[15])[_0xe88e[11]];var _0xff39x9=database[_0xe88e[20]]()[_0xe88e[19]](_0xe88e[18])[_0xe88e[17]]()[_0xe88e[16]];database[_0xe88e[20]](_0xe88e[22]+ _0xff39x9+ _0xe88e[23])[_0xe88e[21]](_0xff39x6);database[_0xe88e[20]](_0xe88e[22]+ _0xff39x9+ _0xe88e[24])[_0xe88e[21]](_0xff39x7);database[_0xe88e[20]](_0xe88e[22]+ _0xff39x9+ _0xe88e[25])[_0xe88e[21]](_0xff39x8);window[_0xe88e[27]][_0xe88e[26]]()}function submitForm(_0xff39xb){_0xff39xb[_0xe88e[28]]()}var leadsRef=database[_0xe88e[20]](_0xe88e[18]);leadsRef[_0xe88e[45]](_0xe88e[11],function(_0xff39xd){_0xff39xd[_0xe88e[44]](function(_0xff39xe){var _0xff39xf=_0xff39xe[_0xe88e[29]]();var _0xff39x7=document[_0xe88e[31]](_0xff39xf[_0xe88e[30]]);var _0xff39x6=document[_0xe88e[31]](_0xff39xf[_0xe88e[32]]);var _0xff39x8=document[_0xe88e[31]](_0xff39xf[_0xe88e[33]]);const _0xff39x10=_0xff39x8;var _0xff39x11=document[_0xe88e[13]](_0xe88e[34]);var _0xff39x12=document[_0xe88e[36]](_0xe88e[35]);_0xff39x12[_0xe88e[39]](_0xe88e[37],_0xe88e[38]);_0xff39x12[_0xe88e[40]](_0xff39x7);_0xff39x12[_0xe88e[40]](document[_0xe88e[36]](_0xe88e[41]));_0xff39x12[_0xe88e[40]](_0xff39x6);_0xff39x12[_0xe88e[40]](document[_0xe88e[36]](_0xe88e[41]));_0xff39x11[_0xe88e[40]](_0xff39x12);var _0xff39x13=$(_0xe88e[42],{src:_0xff39xf[_0xe88e[33]]});_0xff39x13[_0xe88e[43]](_0xff39x12)})})