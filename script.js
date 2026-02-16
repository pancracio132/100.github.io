const phrases = [
    ["Persa", "تو زیبایی (To zibayi)"],
    ["Urdu", "تم خوبصورت ہو"],
    ["Bengalí", "তুমি সুন্দর"],
    ["Tamil", "நீ அழகாக இருக்கிறாய்"],
    ["Telugu", "నువ్వు అందంగా ఉన్నావు"],
    ["Maratí", "तू सुंदर आहेस"],
    ["Nepalí", "तिमी राम्री छौ"],
    ["Mongol", "Чи үзэсгэлэнтэй"],
    ["Albanés", "Je e bukur"],
    ["Serbio", "Ти си лепа"],
    ["Croata", "Ti si lijepa"],
    ["Esloveno", "Ti si lepa"],
    ["Letón", "Tu esi skaista"],
    ["Lituano", "Tu esi graži"],
    ["Estonio", "Sa oled ilus"],
    ["Georgiano", "შენ ლამაზი ხარ"],
    ["Armenio", "Դու գեղեցիկ ես"],
    ["Azerí", "Sən gözəlsən"],
    ["Kazajo", "Сен әдемісің"],
    ["Uzbeco", "Sen go'zalsan"],
    ["Somalí", "Aad baad u qurux badan tahay"],
    ["Haitiano", "Ou bèl"],
    ["Luxemburgués", "Du bass schéin"],
    ["Macedonio", "Ти си убава"],
    ["Bosnio", "Ti si lijepa"],
    ["Malta", "Int sabiħa"],
    ["Amárico", "አንቺ ቆንጆ ነሽ"],
    ["Yoruba", "O lẹwa"],
    ["Igbo", "Ị mara mma"],
    ["Zulu", "Umuhle"],
    ["Maorí", "He ataahua koe"],
    ["Samoano", "E te aulelei"],
    ["Tahitiano", "E nehenehe oe"],
    ["Hawaiano", "Nani ʻoe"],
    ["Guaraní", "Nde porã"],
    ["Quechua", "Sumaq kanki"],
    ["Aymara", "Juma wali suma"],
    ["Mapuche", "Küme domo"],
    ["Cingalés", "ඔයා ලස්සනයි"],
    ["Khmer", "អ្នកស្អាតណាស់"],
    ["Lao", "ເຈົ້າງາມ"],
    ["Birmano", "မင်းလှတယ်"],
    ["Tibetano", "ཁྱེད་རང་མཛེས་པོ་རེད"],
    ["Kurdo", "Tu xweşik î"],
    ["Pashto", "ته ښکلې یې"],
    ["Islandés antiguo", "Þú ert fögur"],
    ["Sánscrito", "त्वं सुन्दरी असि"],
    ["Occitano", "Siás polida"],
    ["Frisón", "Do bist moai"],
    ["Gaélico escocés", "Tha thu brèagha"],
    ["Breton", "Brav out"],
    ["Feroés", "Tú ert vøkur"],
    ["Papiamento", "Bo ta bunita"],
    ["Criollo jamaiquino", "Yuh pretty"],
    ["Tok Pisin", "Yu naispela"],
    ["Chamorro", "Bunitå hao"]
];

const container = document.getElementById('container');

phrases.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="language">${item[0]}</div>
                      <div class="phrase">${item[1]}</div>`;
    container.appendChild(card);
});
