const fileInput = document.getElementById("inpout");

fileInput.addEventListener("change", handleFileInput);

let csvContents;

let dataa;

async function handleFileInput() {
	document.getElementById("text").innerHTML = "Getting files";
	const files = fileInput.files;

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		const arrayBuffer = await readFileAsync(file);
		const workbook = XLSX.read(arrayBuffer, { type: "array" });

		const sheetName = workbook.SheetNames[0];
		const sheet = workbook.Sheets[sheetName];

		let csvData2 = XLSX.utils.sheet_to_json(sheet, { header: 1 });
		await main(csvData2);
	}

	document.getElementById("text").innerHTML = "Finished everything";
}
function readFileAsync(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (e) => resolve(e.target.result);
		reader.onerror = (e) => reject(e);
		reader.readAsArrayBuffer(file);
	});
}
var mankajoce = [];
var mankajoce2 = [];
async function main(data, data2) {
	var title = JSON.stringify(data[0][0]);
	var elemento = [
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
		"SKRITO V RAJU.mp3",
		"",
		"",
		"",
		""
	];
	title = title.substring(1, title.length - 5);

	document.getElementById("text").innerHTML = title;
	document.getElementById("text").innerHTML = "Adding data to custom songs...";
	data.splice(5, 0, elemento);

	for (let i = 4; i < data.length - 1; i++) {
		let content = [...data[i]]; // Create a copy of the array
		if (content.length == 0) continue;
		if (content[0] == undefined) {
			document.getElementById("text").innerHTML = "Adding data to custom song in " + title;

			let pesem = content;

			let avtor = getWhichArray(pesem[10]);

			pesem = pesem[10].substring(0, pesem[10].indexOf(".")) || "";

			let kk2 = pesem.split("-");

			if (avtor == "Raay1") {
				content[4] = kk2[0];
			}

			content[0] = pesem;
			content[1] = avtor.replace("1", "");
			if (avtor == "") {
				if (
					/*!mankajoce.includes(content[10]) &&
					!/^\d{2}-\d{1,2}-\d{1,2}T\d{2}\.WAV$/.test(content[10]) &&
					!/^[A-Z]\d-\d{4}_\d{2}-\d{1,2}-\d{2}T\d{2}\.wav$/.test(content[10]) &&
					!/A\d-\d{4}_\d{2}-\d{1,2}-\d{1,2}T\d{2}\.wav/.test(content[10]) &&
					!/A\d{1,2}-\d{4}_\d{2}-\d{1,2}-\d{1,2}T\d{2}\.wav/.test(content[10])*/
					content[10].includes("ARX032") ||
					content[10].includes("SVN_SVN54") ||
					content[10].includes("PKT228")
				) {
					mankajoce.push(content[10]);
					mankajoce2.push({ "song name": content[10], episode: title, row: i });
				}
			}
			if(/^\d+-\d+-\d+T\d+\.WAV$/.test(content[10])){
			
				content = ""
				data[i] = content;
			}
			//content.push("Glasba v prvem planu");

			if (content[0] == "") {
				
			} else {
				data[i] = content;
			}
		}

		/*if (data[i][data[i].length - 1] !== "Glasba v prvem planu") {
			if (Array.isArray(data[i])) {
				if (i > 5) {
					data[i].push("Kulisna glasba");
				}
				if (i == 4) {
					data[i].push("Type");
				}
			}
		}*/
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
		"SKRITO V RAJU.mp3",
		"",
		"",
		"",
		""
	];

	data.push(element2);
	const keys = Object.keys(data);
	const latestKey = keys[keys.length - 3];

	if (data[latestKey][0] == "&&") {
		data[latestKey] = "";
	}
	document.getElementById("text").innerHTML = "Converting to xls";
	console.log(data);
	let csvStr = Papa.unparse(data, {
		delimiter: ";",
		encoding: "UTF-8",
		download: true,
		skipEmptyLines: true
	});

	const workbook = XLSX.read(csvStr, { type: "string" });

	// Convert workbook to XLS file
	const xlsFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

	// Create a Blob from the XLS file data
	const blob = new Blob([xlsFile], { type: "application/vnd.ms-excel" });

	// Download the XLS file
	document.getElementById("text").innerHTML = "Downloading   " + title;

	let link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = title + ".xlsx";
	link.click();

	link.remove();
	//await new Promise((resolve) => setTimeout(resolve, 100));
}
function getWhichArray(paramName) {
	let avtor = "";
	if (paramName) {
		if (raay.toString().includes(paramName) || paramName.includes("SKRITO")) {
			avtor = "Raay";
		} else if (raayevi.toString().includes(paramName)) {
			avtor = "Raay1";
		} else if (
			alexRok2
				.toString()
				.toLowerCase()
				.includes(paramName.replace(/^([^_ ]+).*?(\..*)$/, "$1.").toLowerCase())
		) {
			avtor = "Alex Volasko & Rok Jurečič";
		} else if (teaser.toString().includes(paramName)) {
			avtor = "Rok Jurečič";
		}
		if (paramName.includes("2 PREDLOG")) {
			avtor = "Alex Volasko & Rok Jurečič";
		}
	}
	return avtor;
}

const raayevi = [
	"Lana JURČEVIĆ & Luka BASI - UPALIMO LJUBAV (Official Audio).wav",
	"Lana JURČEVIĆ & Luka BASI - UPALIMO LJUBAV (Official Instrumental).wav",
	"LIDIJA BACIC LILLE I LUKA BASI - SOLO (INSTRUMENTAL 24BIT).wav",
	"LIDIJA BACIC LILLE I LUKA BASI - SOLO (OFFICIAL WAV 24BIT).wav",
	"LUKA BASI & IVANA KOVAC - DANAS (Instrumental).wav",
	"LUKA BASI & IVANA KOVAČ - DANAS (Official Audio).wav",
	"LUKA BASI & NEDA UKRADEN - NI DUBAI, NI HAWAII (INSTR) MB.wav",
	"LUKA BASI & NEDA UKRADEN - NI DUBAI, NI HAWAII (Official Audio).wav",
	"NIKA ZORJAN - SVIMA PO MOJITO (Official Audio).wav",
	"NIKA ZORJAN - SVIMA PO MOJITO INSTR - MO.wav",
	"NIKA ZORJAN & 8RASTA9 - BLAMAŽA (feat. Svenky) (Official Audio).wav",
	"NIKA ZORJAN & 8RASTA9 - BLAMAŽA Instrumental.wav",
	"NIKA ZORJAN & MINEA - BIO BIO (INSTR).wav",
	"NIKA ZORJAN & MINEA - BIO BIO (Official Audio).wav",
	"Nika Zorjan feat. 8rasta9 - Apokalipsa (Official Audio).wav",
	"Nika Zorjan feat. 8Rasta9 - Apokalipsa Instrumental.wav",
	"Dino Petric - DESI SE - Instrumental.wav",
	"DINO PETRIĆ - DESI SE (Official Audio).wav",
	"DINO PETRIĆ - JER JOŠ USNE PEKU (Official Audio).wav",
	"Dino Petrić - JER JOŠ USNE PEKU INSTR HO.wav",
	"DINO PETRIĆ - ŠTO SI MENI TI (INSTR).wav",
	"Dino Petrić - ŠTO SI MENI TI.mp3",
	"Dino Petrić - STO ŽIVOTA (ft Katarina Grujo).wav",
	"DINO PETRIĆ - STO ŽIVOTA (INSTRUMENTAL).wav",
	"Dino Petrić - VINO I NOĆ (Official Audio) 44_24.wav",
	"DINO PETRIĆ - VINO I NOĆ INSTR.wav",
	"LUKA BASI - KAD POSTANEŠ DRUGOME ŽENA (Official Audio).wav",
	"LUKA BASI - KAD POSTANEŠ DRUGOME ŽENA INSTR.wav",
	"LUKA BASI - META (Official Audio).wav",
	"LUKA BASI - META_instr_24bit.wav",
	"LUKA BASI - PROKLETO ZLATO (Official Audio).wav",
	"Luka Basi - Prokleto Zlato INSTR.wav",
	"LUKA BASI - SEKO MOJA (Official Audio).wav",
	"LUKA BASI - SEKO MOJA instrumental.wav",
	"LUKA BASI - TAXI (INSTRUMENTAL).wav",
	"LUKA BASI - TAXI (Official Audio).wav",
	"LUKA BASI - TO JE TO (Official Audio).wav",
	"LUKA BASI - TO JE TO INSTR.wav",
	"DINO PETRIĆ - ŠTO SI MENI TI (INSTR).wav",
	"Dino Petrić - ŠTO SI MENI TI.mp3",
	"Dino Petrić & Klapa Šufit - JOŠ ME LIPO GLEDAŠ (Official Audio).wav",
	"Dino Petric i Klapa Sufit - JOS ME LIPO GLEDAS Instrumental.wav",
	"LUKA BASI & KLAPA KAMPANEL - Zasvirajte Neko Drugo Veče (Official Audio).wav",
	"LUKA BASI i MARKO ŠKUGOR - RUŽO BILA (instrumental).wav",
	"LUKA BASI i MARKO ŠKUGOR - RUŽO BILA (Official Audio) 44-24.wav",
	"DINO PETRIC - DALMATINSKO SRCE (instrumental).wav",
	"DINO PETRIC - DALMATINSKO SRCE.wav",
	"DINO PETRIĆ - ŠTO SI MENI TI (INSTR).wav",
	"Dino Petrić - ŠTO SI MENI TI.mp3",
	"LUKA BASI - ISTRIJANKO RUŽO MOJA (Official Audio).wav",
	"LUKA BASI - ISTRIJANKO RUŽO MOJA Instrumental.wav",
	"LUKA BASI - Kad vidin Boga uživo (Official Audio).wav",
	"Luka Basi - Kad vidin Boga uživo instr.wav",
	"Luka Basi - Kamiondžija (instrumental).wav",
	"Luka Basi - Kamiondžija (Official Audio).wav",
	"LUKA BASI - META (Official Audio).wav",
	"LUKA BASI - META_instr_24bit.wav",
	"LUKA BASI - TAXI (INSTRUMENTAL).wav",
	"LUKA BASI - TAXI (Official Audio).wav",
	"KERLCI - DVE NA EN MAH (Official Video).wav",
	"KLATEŽI - NEKAJ KAR SE POZABI (Official Video).wav",
	"MLADIKA - ISTA SVA KOT PRVI DAN (Official Video).wav",
	"POLKAHOLIKI - BELA ROŽA (Official Video).wav",
	"POLKAHOLIKI - SOBICA (Narodnozabavna).wav",
	"POLKAHOLIKI - TIK TAK (Narodnozabavna).wav",
	"TIL ČEH   MAM PA TE MAM re Export.wav",
	"TIL ČEH - VIKEND (Official Video).wav",
	"VRAŽJI & ŠPILA - PO DOMAČE MAL' DRUGAČE (Official Video).wav"
];
const raay = [
	"SKRITO V RAJU_FULL ACOUSTIC.wav",
	"SKRITO V RAJU_ORCHESTRAL V3.wav",
	"SKRITO V RAJU_TEMA buildup + instrumentals.wav",
	"SKRITO V RAJU_TEMA buildup   instrumentals.wav",
	"SKRITO V RAJU_ORCHESTRAL V2 KLAVIR ONLY.wav",
	"SKRITO V RAJU_ORCHESTRAL V2.wav",
	"SKRITO V RAJU_TEMA VERZREFREN.wav",
	"SKRITO V RAJU_ORCHESTRAL V3 krajša.wav",
	"SKRITO V RAJU_ORCHESTRAL DALJŠA.wav",
	"SKRITO V RAJU_ORCHESTRAL.wav",
	"SKRITO V RAJU_CHORUS THEME BUILDUP.wav",
	"SKRITO V RAJU_ACOUSTIC FILTERED SOLO.wav",
	"SKRITO V RAJU_DRUMS+BASS+ACOUSTIC.wav",
	"SKRITO V RAJU_BRIDGE THEME.wav",
	"SKRITO V RAJU_BRIDGE THEME WITHOUT DRUMS.wav",
	"SKRITO V RAJU_OUTRO UNPLUGGED.wav",
	"SKRITO V RAJU_MAIN THEME_INTRO.wav",
	"SKRITO V RAJU_MAIN THEME ACOUSTIC_HARD OUTRO.wav",
	"SKRITO V RAJU_INSTRUMENTAL SHORT THEME.wav",
	"SKRITO V RAJU_PRECHORUS THEME.wav",
	"SKRITO V RAJU PIANO ONLY SKRAJŠANA-01.mp3",
	"004 SYNTHS.wav",
	"MARAAYA - LE OB TEBI (70SEK).mp3",
	"MARAAYA - LE OB TEBI (70SEK).wav",
	"001 EL GUITAR.wav",
	"002 ACOUSTIC GUITARS.wav",
	"003 LEAD ACOUSTIC.wav",
	"002 ACOUSTIC GUITAR RHYTHM.wav",
	"003 ACOUSTIC LEADS.wav",
	"004 PIANO.wav",
	"005 ACOUSTIC RHYTHMS 2.wav",
	"006 OTHER SYNTHS.wav",
	"007 SFX.wav",
	"MARAAYA - LE OB TEBI INSTRUMENTAL- 90 SEK.mp3",
	"MARAAYA - LE OB TEBI INSTRUMENTAL- 90 SEK.wav",
	"001 CHORUS EL GUITAR.wav",
	"005 ORCHESTRAL CRASH.wav",
	"SKRITO V RAJU_ORCHESTRAL DALJŠA.mp3",
	"SKRITO V RAJU_ORCHESTRAL DALJŠA.wav",
	"001 PIANO CHORDS.wav",
	"002 PIANO LEAD.wav",
	"003 STRINGS 1.wav",
	"004 STRINGS 2.wav",
	"001 PIANO.wav",
	"002 STRINGS 1.wav",
	"003 STRINGS 2.wav",
	"SKRITO V RAJU_ORCHESTRAL V2.mp3",
	"SKRITO V RAJU_ORCHESTRAL V2.wav",
	"005 STRINGS 2.wav",
	"SKRITO V RAJU_ORCHESTRAL V3.mp3",
	"SKRITO V RAJU_ORCHESTRAL V3.wav",
	"001 PIANO.wav",
	"002 STRINGS 1.wav",
	"003 ORCHESTRAL CRASH.wav",
	"004 PIANO LEAD.wav",
	"005 SYNTHS.wav",
	"SKRITO V RAJU_TEMA buildup + instrumentals.mp3",
	"SKRITO V RAJU_TEMA buildup + instrumentals.wav",
	"001 ACG.wav",
	"002 LEADS.wav",
	"003 LOW-LEADS.wav",
	"004 EL LEADS.wav",
	"005 STRINGS 150BPM.wav",
	"SKRITO V RAJU_TEMA VERZREFREN.mp3",
	"SKRITO V RAJU_TEMA VERZREFREN.wav",
	"001 SYNTH INTRO 150BPM.wav",
	"002 BASS 150BPM.wav",
	"003 ACG 150BPM.wav",
	"004 PIANO 150BPM.wav",
	"MARAAYA - LE OB TEBI (6).wav",
	"MARAAYA - LE OB TEBI (70SEK).wav",
	"MARAAYA - LE OB TEBI (INSTR FULL GTR+PIANO).wav",
	"MARAAYA - LE OB TEBI INSTRUMENTAL- 90 SEK.wav",
	"LE OB TEBI FULLMIX UNPLUGGED VER.wav",
	"MARAAYA - LE OB TEBI (2).wav",
	"MARAAYA - LE OB TEBI (4).wav"
];
const alexRok = [
	"MORSKA VILA.mp3",
	"LEIT MOTIV   orkestracija - ODHAJAŠ.mp3",
	"Pricakovanje napetost 6 Timpani.wav",
	"Pricakovanje napetost 6 vse.wav",
	"Pricakovanje napetost 6_brez TimpCymbal.wav",
	"Pricakovanje napetost 6 Cymbal.wav",
	"Odprta drama ambient 8.wav",
	"Misterij 4 brez Timp.wav",
	"Misterij 4 Timpani.wav",
	"DRAMA SUSPENZ.mp3",
	"Drama suspenz_podaljsan_brezTIMPCYMBAL.wav",
	"Drama napetos_brez TimpCymbal.wav",
	"Drama napetos_Cymbals.wav",
	"Drama napetos_Timpani.wav",
	"Drama napetost vse.wav",
	"DRAMA NAPETOST.mp3",
	"DRAMA AMBIENT 1.mp3",
	"Drama ambient 2_brez TimpZvon.wav",
	"Drama ambient 2_Timpani.wav",
	"Drama ambient 2_zvonci.wav",
	"DRAMA AMBIENT 2.mp3",
	"Drama ambient 2 Vse.wav",
	"Drama ambient 1 Timpani.wav",
	"Drama ambient 1 Vse.wav",
	"Drama ambient 1_brez TimpCymbal.wav",
	"Drama ambient 1 Cymbals.wav",
	"NOVA - light DRAMA 1.mp3",
	"POLETNA AKUSTIKA - Skrita v raju - AKUSTIKA 3 (v kosu).wav",
	"POLETNA AKUSTIKA - Skrita v raju - AKUSTIKA 3 (z brejki).wav",
	"POMLADNA AKUSTIKA - 004.wav",
	"Cymbals.wav",
	"Drama ambient 1 Vse.wav",
	"Drama ambient 1_brez TimpCymbal.wav",
	"Piano.wav",
	"Spector Ambience.wav",
	"Strings Anse Long.wav",
	"Strings Ens Staccato.wav",
	"Timpani Hits.wav",
	"Timpani tremolo.wav",
	"Violins 1 Long.wav",
	"Celli Chamber.wav",
	"Celli.wav",
	"Dra_Napetost_TimpaniTremolo.mp3",
	"Dra_Napetost_ViolasLongTrem.mp3",
	"Dra_Napetost_Violins 1.mp3",
	"Dra_Napetost_Klavir.mp3",
	"Dra_Napetost_Pad.mp3",
	"Dra_Napetost_Strings Long.mp3",
	"Dra_Napetost_Strings stacc.mp3",
	"Dra_Napetost_TimpaniHits.mp3",
	"Dra_Suspenz_Pad.mp3",
	"Dra_Suspenz_Strings Stacc.mp3",
	"Dra_Suspenz_Timpani Tremolo.mp3",
	"Dra_Suspenz_Violas Long.mp3",
	"Dra_Suspenz_Violas Stacc.mp3",
	"Dra_Suspenz_Violins 1.mp3",
	"Dra_Suspenz_Violins2Tremolo.mp3",
	"Drama suspenz_podaljsan_brezTIMPCYMBAL.wav",
	"Dra_Suspenz_Cymbals.mp3",
	"Dra_Suspenz_Klavir.mp3",
	"EDVARDOVA TEMA - nostalgija_spominjanje-akustike 1 part.wav",
	"EDVARDOVA TEMA - nostalgija_spominjanje-akustike 2 part.wav",
	"EDVARDOVA TEMA piano 3.wav",
	"EDVARDOVA TEMA - klavir - spominjanje.wav",
	"BUZUKI - zvok.wav",
	"CAVERN sounds.wav",
	"MORJE AKUSTIKA.mp3",
	"AKUSTIKE - odmevi.wav",
	"AKUSTIKE - ubiranje.wav",
	"KLAVIR - AMBIENT LEIT MOTIV.wav",
	"JANINA TEMA.wav",
	"KLAVIR - leit motiv part 3.wav",
	"KLAVIR - leit motiv part 4.wav",
	"KLAVIR - leit motiv part 1.wav",
	"KLAVIR - leit motiv part 2.wav",
	"Misterij_ViolasLong.mp3",
	"Misterij_Violins 1.mp3",
	"Misterij_Violins 2.mp3",
	"Misterij 4 vse.wav",
	"Misterij_BassLong.mp3",
	"Misterij_Celli.mp3",
	"Misterij_Kitara.mp3",
	"Misterij_Klavir.mp3",
	"Misterij_Timpani.mp3",
	"MORSKA VILA - akustike.wav",
	"MORSKA VILA - harmonika stem.wav",
	"MORSKA VILA - solo part - melodija.wav",
	"MORSKA VILA - tolkala _ prelivi.wav",
	"MORSKA VILA 3 part.wav",
	"MORSKA VILA 4 part.wav",
	"MORSKA VILA 1 part.wav",
	"MORSKA VILA 2 part.wav",
	"Nova_lightdrama1_klavir.mp3",
	"Nova_lightdrama1_Violas.mp3",
	"Nova_lightdrama1_Violins 1.mp3",
	"Nova_lightdrama1_Celli.mp3",
	"Nova_lightdrama1_kitara.mp3",
	"Odpr_Drama8_ViolasLong.mp3",
	"Odpr_Drama8_Violins1.mp3",
	"Odpr_Drama8_Violins2.mp3",
	"Odpr_Drama8_Bass.mp3",
	"Odpr_Drama8_Celli.mp3",
	"Odpr_Drama8_CelliChamber.mp3",
	"Odpr_Drama8_kitara.mp3",
	"Odpr_Drama8_klavir.mp3",
	"Pri_napetost_TimpaniTremo.mp3",
	"Pri_napetost_Violins2.mp3",
	"Pricakovanje napetost 6 vse.wav",
	"Pri_napetost_Celli.mp3",
	"Pri_napetost_Cymbals.mp3",
	"Pri_napetost_Klavir.mp3",
	"Pri_napetost_Strings Stacc.mp3",
	"SENTIŠ - harmonika.wav",
	"SENTIŠ - akustika ubiranje 1.wav",
	"SENTIŠ - akustike solo + ukulele.wav",
	"SENTIŠ - akustike solo.wav",
	"SENTIŠ - cela podlaga (brez ubiranja).wav",
	"SENTIŠ - cela podlaga.wav"
];
const teaser = [
	"TRAILER v1 - Demo - CRIME.wav",
	"TRAILER v1 - Demo - DRAMA.wav",
	"TRAILER v1 - Demo - LJUBAV.wav",
	"SVR demo 2.mp3"
];

const alexRok2 = [
	"AKUSTIKA.",
	"MORSKA.",
	"LEIT.",
	"Pricakovanje.",
	"Odprta.",
	"Misterij.",
	"DRAMA.",
	"Drama.",
	"NOVA.",
	"POZITIVNI.",
	"POLETNA.",
	"POMLADNA.",
	"Cymbals.",
	"Piano.",
	"Spector.",
	"Strings.",
	"Timpani.",
	"PRIČAKOVANJE.",
	"Veselje.",
	"Violins.",
	"Celli.",
	"Dra.",
	"EDVARDOVA.",
	"BUZUKI.",
	"Vesel.",
	"CAVERN.",
	"MORJE.",
	"AKUSTIKE.",
	"SMEŠNA.",
	"KLAVIR.",
	"JANINA.",
	"Poletni.",
	"AKCENTI.",
	"Nova.",
	"Odpr.",
	"Ambient.",
	"Pri.",
	"SENTIŠ.",
	"Mirnost.",
	"Intens."
];
