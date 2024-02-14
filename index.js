const body = document.querySelector("#body");


let dataStudent = [];
const level = 'L1';


async function fetchData(){
    const response = await fetch(`./data/${level}/${level}.csv`);
    const data = await response.text();
    const dataLines = data.split('\n');
    for(let line of dataLines){
        const column = line.split(',');
        dataStudent.push({"numero":column[0] ,  "nom":column[1] , "ether":column[2] , "wifi":column[3] , "ref":column[4] , "serie":column[5], "etat":column[6] , "photo":column[0] , "ip":column[8]});
    }
    console.log(dataStudent)
    for(let student of dataStudent){
        const section = document.createElement('section');
        section.classList.add('main');
        
        const divImage = document.createElement('div');
        divImage.classList.add('image');
        
        const divLogo = document.createElement('div');
        divLogo.classList.add('logo');
        divLogo.style.backgroundImage = `url("./data/${level}/photo_${level}/${student.numero}.jpg")`;

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        
        const h1 = document.createElement('h1');
        h1.innerText = `${student.nom}`;
        
        const divQr = document.createElement('div');
        divQr.classList.add('qr');
        divQr.style.backgroundImage = `url("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${student.wifi}")`;
        
        divInfo.append(h1);
        divInfo.append(divQr);
        divImage.append(divLogo);
        
        section.append(divImage);
        section.append(divInfo);

        body.append(section);

    }

}

fetchData();



