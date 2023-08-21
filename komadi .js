const fileInput = document.getElementById('inpout');

fileInput.addEventListener('change', handleFileInput);

const avtorstvo = {
  1: ['AKUSTIKA - easy orkestracija', 'ALEX VOLASKO / ROK JUREČIČ', 'ALEX VOLASKO / ROK JUREČIČ', 'ALEX VOLASKO / ROK JUREČIČ'],
  2: ['AKUSTIKE - igrivo orkestracija', 'ALEX VOLASKO / ROK JUREČIČ', 'ALEX VOLASKO / ROK JUREČIČ', 'ALEX VOLASKO / ROK JUREČIČ'],
  3: ['DRAMA', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  4: ['DRAMA AMBIENT', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  5: ['DRAMA AMBIENT', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  6: ['DRAMA NAPETOST', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  7: ['DRAMA SUSPENS (Drama suspens_podaljsan)', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  8: ['EDVARDOVA TEMA - klavir - spominjanje', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  9: ['EDVARDOVA TEMA - nostalgija_spominjanje - akustike', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  10: ['KLAVIR - AMBIENT LEIT MOTIV', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  11: ['KLAVIR - LEIT MOTIV', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  12: ['LEIT MOTIV   orkestracija - ODHAJAŠ', 'ALEX VOLASKO/ ROK JUREČIČ', 'ALEX VOLASKO/ROK JUREČIČ', 'ALEX VOLASKO/ROK JUREČIČ'],
  13: ['MISTERIJ', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  14: ['MORJE AKUSTIKA', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  15: ['MORSKA VILA', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  16: ['NOVA LIGHT DRAMA 1', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  17: ['ODPRTA DRAMA - ambient', 'ROK JUREČIĆ', 'ROK JURECIC', 'ROK JURECIC'],
  18: ['POLETNA AKUSTIKA - Skrita v raju - AKUSTIKA 3', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  19: ['POMLADNA AKUSTIKA', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  20: ['POZITIVNI AMBIENT', 'ROK JURECIC', 'ROK JURECIC', 'ROK JURECIC'],
  21: ['PRIČAKOVANJE - NAPETOST', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  22: ['SENTIŠ - OBALA', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO'],
  23: ['SVR CRIME (trailer)', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  24: ['SVR DRAMA (trailer)', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  25: ['SVR LOVE (trailer)', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  26: ['VESEL SUSPENS', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  27: ['VESELJE', 'ROK JUREČIČ', 'ROK JUREČIČ', 'ROK JUREČIČ'],
  28: ['POLETNA AKUSTIKA - Skrita v raju - AKUSTIKA', 'ALEX VOLASKO', 'ALEX VOLASKO', 'ALEX VOLASKO']
}

let csvContents;

let dataa;


function handleFileInput() {
  document.getElementById('text').innerHTML = "Getting files"
  const files = fileInput.files;
console.log(files.length);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(i);
    const reader = new FileReader();

    reader.onload = function (event) {
      const csvContents = event.target.result;
      const data = Papa.parse(csvContents, { header: false, encoding: 'UTF-8' }).data;
      console.log(main(data));
      // Perform any other actions with the parsed data
    };

    reader.readAsText(file);
  }
  document.getElementById('text').innerHTML = 'Finished everything'

}




function main(data, data2) {



  var title = JSON.stringify(data[0][0])
  var element = [
    "Skrito v raju - Špica",
    "Luka Basi",
    "",
    "",
    "Raay",
    "",
    "",
    "",
    "",
    "99",
    "",
    "",
    "",
    "", ""
  ];
  title = title.substring(1, title.length - 5)

  document.getElementById('text').innerHTML = title
  document.getElementById('text').innerHTML = 'Adding data to custom songs...'
  for (let i = 0; i < data.length - 1; i++) {
    const content = [...data[i]]; // Create a copy of the array
    let strt = [...data[i]];
    if (i === 5) { data.splice(i, 0, element); }
    if (content[0] == '') {
      document.getElementById('text').innerHTML = 'Adding data to custom song in ' + title

      var pesem = content

      pesem = pesem[10].substring(0, pesem[10].indexOf('.'))

      if (i > 4) {

        for (const key in avtorstvo) {

          if (avtorstvo[key][0].includes(pesem) || pesem.includes(avtorstvo[key][0])) {

            content[0] = avtorstvo[key][0]
            content[1] = avtorstvo[key][1]
            content[4] = avtorstvo[key][2]

          }
        }
        for (const key in avtorraay) {
          if (avtorraay.hasOwnProperty(key)) {

            var kk = avtorraay[key][0].split('-')

            let newStr = kk[1].replace(/\([^)]*\)/g, '');

            newStr = newStr.replace('Instrumental', '');

            newStr = newStr.replace('INSTR', '');
            newStr = newStr.replace('(Official Video)', '');
            newStr = newStr.replace(' - 6', '');
            var kk2 = pesem.split('-')
            var pesmica
            if (kk2.length == 2) {
              pesmica = kk2[1].replace(/\([^)]*\)/g, '');

              pesmica = pesmica.replace('Instrumental', '');

              pesmica = pesmica.replace('INSTR', '');
              pesmica = pesmica.replace('(Official Video)', '');
              pesmica = pesmica.replace(' - 6', '');

            } else {
              pesmica = kk2[0].replace(/\([^)]*\)/g, '')
            }
            if (newStr.toLowerCase().replace(/\s/g, "").includes(pesmica.toLowerCase().replace(/\s/g, "")) || pesmica.toLowerCase().replace(/\s/g, "").includes(newStr.toLowerCase().replace(/\s/g, ""))) {

              //  console.log(newStr.toLowerCase().replace(/\s/g, "") + '...' + pesmica.toLowerCase().replace(/\s/g, ""));
              // console.log(pesmica, key);
              content[4] = kk[0]
              content[0] = kk[1]
              content[1] = avtorraay[key][2]
              content[content.length] = 'Glasba v prvem planu'
            }
          }
        }
      }

      document.getElementById('text').innerHTML = 'Cleaning up...'

      if (content[0] == '') {
        if (i > 5) {
          data[i] = ''
        }
      } else {

        data[i] = content

      }
    }
    document.getElementById('text').innerHTML = 'Adding type...'

    if (data[i][data[i].length - 1] !== 'Glasba v prvem planu') {

      if (Array.isArray(data[i])) {
        if (i > 5) {
    
          data[i].push('Kulisna glasba')
        }
        if (i == 4) {
          data[i].push('Type')
        }
      }
    }
  }
  var element2 = [
    "Skrito v raju - Odjavna Špica",
    "Luka Basi",
    "",
    "",
    "Raay",
    "",
    "",
    "",
    "",
    "10",
    "",
    "",
    "",
    "", ""
  ];

  data.push(element2);
  const keys = Object.keys(data);
  const latestKey = keys[keys.length - 3];


  if (data[latestKey][0] == '&&') {
    data[latestKey] = ''
  }
  document.getElementById('text').innerHTML = 'Converting to xls'

  var csvStr = Papa.unparse(data, {
    delimiter: ';',
    encoding: 'UTF-8',
    download: true,
    skipEmptyLines: true,
  })

  const workbook = XLSX.read(csvStr, { type: "string" });

  // Convert workbook to XLS file
  const xlsFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create a Blob from the XLS file data
  const blob = new Blob([xlsFile], { type: "application/vnd.ms-excel" });

  // Download the XLS file
  document.getElementById('text').innerHTML = 'Downloading   ' + title

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = 'popis/' + title + ".xlsx";
  link.click();
  
link.remove()
  
}

const avtorraay = {

  2: [
    "NIKA ZORJAN - SVIMA PO MOJITO",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  3: [
    "IVANA KOVAČ (ft. LUKA BASI) - DANAS",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  4: [
    "NEDA UKRADEN (ft. LUKA BASI) - NI DUBAI NI HAWAI",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  5: [
    "LIDIJA BAČIĆ (ft. Luka Basi) - SOLO",
    "Raay",
    "Fayo",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  6: [
    "NIKA ZORJAN & 8RASTA9 - APOKALIPSA",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  7: [
    "NIKA ZORJAN FT. 8RASTA9 & SVENKY - BLAMAŽA",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  8: [
    "LANA JURČEVIĆ (ft. Luka Basi) - UPALIMO LJUBAV",
    "Raay",
    "Fayo",
    "Raay Music",
    "Nika Records"
  ],
  9: [
    "MINEA & NIKA - BIO BIO",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  11: [
    "LUKA BASI - TO JE TO",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  12: [
    "DINO PETRIĆ - JER JOŠ USNE PEKU",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  13: [
    "DINO PETRIC - STO SI MENI TI /",
    "Raay",
    "Robert Pilepić",
    "Raay",
    "Nika Records"
  ],
  14: [
    "LUKA BASI - KAD POSTANEŠ DRUGOME ŽENA",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  15: [
    "LUKA BASI - TAXI",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  16: [
    "LUKA BASI - META",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  17: [
    "LUKA BASI - PROKLETO ZLATO",
    "Raay",
    "Nenad Ninčević",
    "Raay Music",
    "Nika Records"
  ],
  18: [
    "DINO PETRIĆ - VINO I NOĆ",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  19: [
    "DINO PETRIĆ - STO ŽIVOTA",
    "Raay",
    "Nenad Ninčević",
    "Raay Music",
    "Nika Records"
  ],
  20: [
    "LUKA BASI - SEKO MOJA",
    "Raay",
    "G. Belenko, K. Asandov",
    "Raay, K. Tomec",
    "Nika Records"

  ],
  21: [
    "DINO PETRIĆ - DESI SE",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],

  23: [
    "KLAPA ŠUFIT IN DINO PETRIĆ - JOŠ ME LIPO GLEDAŠ",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  24: [
    "MARKO ŠKUGOR & LUKA BASI - RUŽO BILA",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  25: [
    "LUKA BASI (& KAMPANEL) - ZASVIRAJTE NEKO DRUGO VEĆE",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  26: [
    "DINO PETRIĆ -ŠTO SI MENI TI /",
    "Raay",
    "Robert Pilepić",
    "Raay",
    "Nika Records"
  ],

  28: [
    "LUKA BASI - KAD VIDIN BOGA UŽIVO",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  29: [
    "DINO PETRIĆ - ŠTO SI MENI TI",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  30: [
    "DINO PETRIĆ - DALMATINSKO SRCE",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  31: [
    "LUKA BASI - TAXI",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  32: [
    "LUKA BASI - META",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  33: [
    "LUKA BASI - ISTRIJANKO RUŽO MOJA",
    "Raay",
    "Nenad Ninčević",
    "Raay, K. Tomec",
    "Nika Records"
  ],
  34: [
    "LUKA BASI - KAMIONDŽIJA",
    "Raay",
    "Nenad Ninčević",
    "Raay",
    "Nika Records"
  ],
  35: [
    "MARAAYA - LE OB TEBI",
    "Raay",
    "Marjetka Vovk",
    "Raay Music",
    "Nika Records"
  ],
  36: [
    "POLKAHOLIKI - SOBICA",
    "Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  37: [
    "POLKAHOLIKI - BELA ROŽA",
    "Raay",
    "Rok Lunaček, Marjetka Vovk",
    "Raay",
    "Nika Records"
  ],
  38: [
    "VRAŽJI & ŠPILA - PO DOMAČE MAL DRUGAČE",
    "Raay",
    "Vera Šolinc & Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  39: [
    "POLKAHOLIKI - POVEJ, POVEJ",
    "Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  40: [
    "TIL ČEH - VIKEND",
    "Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  41: [
    "POLKAHOLIKI - TIK TAK",
    "Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  42: [
    "MLADIKA - ISTA SVA KOT PRVI DAN - Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  43: [
    "BQL & POLKAHOLIKI - LUČKE",
    "Raay",
    "Maja Kvertkov",
    "Raay Music",
    "Raay Music"
  ],
  44: [
    "KLATEŽI - NEKAJ, KAR SE POZABI",
    "Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  45: [
    "KERLCI - DVE NA EN MAH",
    "Raay",
    "Rok Lunaček",
    "Raay",
    "Nika Records"
  ],
  46: [
    "&&-&&",
    "&&",
    "&&",
    "&&",
    "&&"
  ],

}