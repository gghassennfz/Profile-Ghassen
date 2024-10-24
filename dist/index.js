import g, { PureComponent as gt, createRef as $e, useState as ee, useEffect as Ee, useMemo as Xe } from "react";
import Le from "react-dom";
const pt = {
  en: {
    cropButton: "Crop",
    filterButton: "Filter",
    colorsButton: "Colors",
    cancelButton: "Cancel",
    doneButton: "Done",
    sliderBrightness: "Brightness",
    sliderContrast: "Contrast",
    sliderSaturation: "Saturation",
    flipHorizontal: "Flip horizontal",
    flipVertical: "Flip vertical",
    noFilter: "No Filter",
    filters: {
      "Horizontal Lines": "horizontal_lines",
      "Extreme Offset Blue": "extreme_offset_blue",
      Ocean: "ocean",
      "Extreme Offset Green": "extreme_offset_green",
      "Offset Green": "offset_green",
      "Extra Offset Blue": "extra_offset_blue",
      "Extra Offset Red": "extra_offset_red",
      "Extra Offset Green": "extra_offset_green",
      "Extreme Offset Red": "extreme_offset_red",
      "Specks Redscale": "specks_redscale",
      Vintage: "vintage",
      Perfume: "perfume",
      Serenity: "serenity",
      Eclectic: "eclectic",
      "Diagonal Lines": "diagonal_lines",
      "Green Specks": "green_specks",
      Warmth: "warmth",
      Casino: "casino",
      "Green Diagonal Lines": "green_diagonal_lines",
      Offset: "offset",
      "Offset Blue": "offset_blue",
      Neue: "neue",
      Sunset: "sunset",
      Specks: "specks",
      Wood: "wood",
      Lix: "lix",
      Ryo: "ryo",
      Bluescale: "bluescale",
      Solange: "solange",
      Evening: "evening",
      Crimson: "crimson",
      "Teal Min Noise": "teal_min_noise",
      Phase: "phase",
      "Dark Purple Min Noise": "dark_purple_min_noise",
      Coral: "coral",
      Darkify: "darkify",
      Brightness: "incbrightness",
      "Brightness Second": "incbrightness2",
      "Yellow Casino": "yellow_casino",
      Invert: "invert",
      Saturation: "sat_adj",
      Lemon: "lemon",
      "Pink Min Noise": "pink_min_noise",
      Frontward: "frontward",
      "Pink Aura": "pink_aura",
      Haze: "haze",
      "Cool Twilight": "cool_twilight",
      Blues: "blues",
      Mellow: "mellow",
      "Solange Dark": "solange_dark",
      "Solange Grey": "solange_grey",
      Zapt: "zapt",
      Eon: "eon",
      Aeon: "aeon",
      Matrix: "matrix",
      Cosmic: "cosmic",
      "Min Noise": "min_noise",
      "Red Min Noise": "red_min_noise",
      Matrix2: "matrix2",
      Purplescale: "purplescale",
      Radio: "radio",
      Twenties: "twenties",
      "Pixel Blue": "pixel_blue",
      Greyscale: "greyscale",
      Grime: "grime",
      "Red Greyscale": "redgreyscale",
      Retroviolet: "retroviolet",
      Greengreyscale: "greengreyscale",
      "Green Med Noise": "green_med_noise",
      "Green Min Noise": "green_min_noise",
      "Blue Min Noise": "blue_min_noise",
      Rosetint: "rosetint",
      "Purple Min Noise": "purple_min_noise",
      "Red Effect": "red_effect",
      Gamma: "gamma",
      "Teal Gamma": "teal_gamma",
      "Purple Gamma": "purple_gamma",
      "Yellow Gamma": "yellow_gamma",
      "Bluered Gamma": "bluered_gamma",
      "Green Gamma": "green_gamma",
      "Red Gamma": "red_gamma",
      "Black Specks": "black_specks",
      "White Specks": "white_specks",
      "Salt and Pepper": "salt_and_pepper",
      "RGB Split": "rgbSplit",
      Threshold: "threshold",
      "Threshold 75": "threshold75",
      "Threshold 125": "threshold125",
      Pixelate: "pixelate",
      "Pixelate 16": "pixelate16"
    }
  },
  es: {
    cropButton: "Recortar",
    filterButton: "Filtro",
    colorsButton: "Colores",
    cancelButton: "Cancelar",
    doneButton: "Listo",
    sliderBrightness: "Brillo",
    sliderContrast: "Contraste",
    sliderSaturation: "Saturación",
    flipHorizontal: "Voltear horizontalmente",
    flipVertical: "Voltear verticalmente",
    noFilter: "Sin filtro",
    filters: {
      "Líneas Horizontales": "horizontal_lines",
      "Azul Extremo Desplazado": "extreme_offset_blue",
      Océano: "ocean",
      "Verde Extremo Desplazado": "extreme_offset_green",
      "Verde Desplazado": "offset_green",
      "Azul Extra Desplazado": "extra_offset_blue",
      "Rojo Extra Desplazado": "extra_offset_red",
      "Verde Extra Desplazado": "extra_offset_green",
      "Rojo Extremo Desplazado": "extreme_offset_red",
      "Efecto Manchas Rojas": "specks_redscale",
      Vintage: "vintage",
      Perfume: "perfume",
      Serenidad: "serenity",
      Ecléctico: "eclectic",
      "Líneas Diagonales": "diagonal_lines",
      "Manchas Verdes": "green_specks",
      Calidez: "warmth",
      Casino: "casino",
      "Líneas Diagonales Verdes": "green_diagonal_lines",
      Desplazado: "offset",
      "Azul Desplazado": "offset_blue",
      Neue: "neue",
      Atardecer: "sunset",
      Manchas: "specks",
      Madera: "wood",
      Lix: "lix",
      Ryo: "ryo",
      "Escala Azul": "bluescale",
      Solange: "solange",
      Noche: "evening",
      Carmesí: "crimson",
      "Ruido Mínimo Teal": "teal_min_noise",
      Fase: "phase",
      "Ruido Mínimo Morado Oscuro": "dark_purple_min_noise",
      Coral: "coral",
      Oscurecer: "darkify",
      Brillo: "incbrightness",
      "Segundo Brillo": "incbrightness2",
      "Casino Amarillo": "yellow_casino",
      Invertir: "invert",
      Saturación: "sat_adj",
      Limón: "lemon",
      "Ruido Mínimo Rosa": "pink_min_noise",
      "Hacia Adelante": "frontward",
      "Aura Rosa": "pink_aura",
      Neblina: "haze",
      "Anochecer Fresco": "cool_twilight",
      Azules: "blues",
      Suave: "mellow",
      "Solange Oscuro": "solange_dark",
      "Solange Gris": "solange_grey",
      Zapt: "zapt",
      Eon: "eon",
      Aeon: "aeon",
      Matriz: "matrix",
      Cósmico: "cosmic",
      "Ruido Mínimo": "min_noise",
      "Ruido Mínimo Rojo": "red_min_noise",
      Matriz2: "matrix2",
      "Escala Morada": "purplescale",
      Radio: "radio",
      "Años Veinte": "twenties",
      "Azul Pixelado": "pixel_blue",
      "Escala de Grises": "greyscale",
      Suciedad: "grime",
      "Escala de Grises Roja": "redgreyscale",
      Retrovioleta: "retroviolet",
      "Escala de Grises Verde": "greengreyscale",
      "Ruido Medio Verde": "green_med_noise",
      "Ruido Mínimo Verde": "green_min_noise",
      "Ruido Mínimo Azul": "blue_min_noise",
      "Tinte Rosa": "rosetint",
      "Ruido Mínimo Morado": "purple_min_noise",
      "Efecto Rojo": "red_effect",
      Gamma: "gamma",
      "Gamma Teal": "teal_gamma",
      "Gamma Morado": "purple_gamma",
      "Gamma Amarillo": "yellow_gamma",
      "Gamma Azul-Rojo": "bluered_gamma",
      "Gamma Verde": "green_gamma",
      "Gamma Rojo": "red_gamma",
      "Manchas Negras": "black_specks",
      "Manchas Blancas": "white_specks",
      "Sal y Pimienta": "salt_and_pepper",
      "Separación RGB": "rgbSplit",
      Umbral: "threshold",
      "Umbral 75": "threshold75",
      "Umbral 125": "threshold125",
      Pixelado: "pixelate",
      "Pixelado 16": "pixelate16"
    }
  },
  zh: {
    cropButton: "裁剪",
    filterButton: "滤镜",
    colorsButton: "颜色",
    cancelButton: "取消",
    doneButton: "完成",
    sliderBrightness: "亮度",
    sliderContrast: "对比度",
    sliderSaturation: "饱和度",
    flipHorizontal: "水平翻转",
    flipVertical: "垂直翻转",
    noFilter: "无滤镜",
    filters: {
      水平线: "horizontal_lines",
      极端偏移蓝色: "extreme_offset_blue",
      海洋: "ocean",
      极端偏移绿色: "extreme_offset_green",
      偏移绿色: "offset_green",
      额外偏移蓝色: "extra_offset_blue",
      额外偏移红色: "extra_offset_red",
      额外偏移绿色: "extra_offset_green",
      极端偏移红色: "extreme_offset_red",
      斑点红色: "specks_redscale",
      复古: "vintage",
      香水: "perfume",
      宁静: "serenity",
      折衷: "eclectic",
      对角线: "diagonal_lines",
      绿斑点: "green_specks",
      温暖: "warmth",
      赌场: "casino",
      绿色对角线: "green_diagonal_lines",
      偏移: "offset",
      偏移蓝色: "offset_blue",
      新: "neue",
      日落: "sunset",
      斑点: "specks",
      木材: "wood",
      蜡: "lix",
      瑞奥: "ryo",
      蓝调: "blues",
      索兰吉: "solange",
      傍晚: "evening",
      深红: "crimson",
      青绿最小噪音: "teal_min_noise",
      阶段: "phase",
      深紫色最小噪音: "dark_purple_min_noise",
      珊瑚: "coral",
      变暗: "darkify",
      亮度: "incbrightness",
      亮度第二: "incbrightness2",
      黄色赌场: "yellow_casino",
      反转: "invert",
      饱和度: "sat_adj",
      柠檬: "lemon",
      粉色最小噪音: "pink_min_noise",
      前进: "frontward",
      粉色光环: "pink_aura",
      阴霾: "haze",
      酷傍晚: "cool_twilight",
      温和: "mellow",
      索兰吉黑: "solange_dark",
      索兰吉灰: "solange_grey",
      扎普特: "zapt",
      永恒: "eon",
      时光矩阵: "aeon",
      宇宙的: "cosmic",
      最小噪音: "min_noise",
      红色最小噪音: "red_min_noise",
      矩阵2: "matrix2",
      紫红色调: "purplescale",
      电台: "radio",
      二十年代: "twenties",
      像素蓝: "pixel_blue",
      灰度: "greyscale",
      污垢: "grime",
      红色灰度: "redgreyscale",
      复古紫色: "retroviolet",
      绿色灰度: "greengreyscale",
      绿色最小噪音: "green_min_noise",
      蓝色最小噪音: "blue_min_noise",
      玫瑰色调: "rosetint",
      紫色最小噪音: "purple_min_noise",
      红色效果: "red_effect",
      伽马: "gamma",
      青绿伽马: "teal_gamma",
      紫色伽马: "purple_gamma",
      黄色伽马: "yellow_gamma",
      蓝红伽马: "bluered_gamma",
      绿色伽马: "green_gamma",
      红色伽马: "red_gamma",
      黑斑点: "black_specks",
      白斑点: "white_specks",
      盐和胡椒: "salt_and_pepper",
      RGB分离: "rgbSplit",
      阈值: "threshold",
      "阈值 75": "threshold75",
      "阈值 125": "threshold125",
      像素化: "pixelate",
      "像素化 16": "pixelate16"
    }
  },
  hin: {
    cropButton: "कटाई करें",
    filterButton: "फ़िल्टर",
    colorsButton: "रंग",
    cancelButton: "रद्द करें",
    doneButton: "हो गया",
    sliderBrightness: "चमक",
    sliderContrast: "ताकत",
    sliderSaturation: "रंगता",
    flipHorizontal: "क्षैतिज उलटो",
    flipVertical: "ऊर्ध्वाधर उलटो",
    noFilter: "कोई फ़िल्टर नहीं",
    filters: {
      "क्षैतिज रेखाएं": "horizontal_lines",
      "अत्यधिक ऑफसेट नीला": "extreme_offset_blue",
      महासागर: "ocean",
      "अत्यधिक ऑफसेट हरा": "extreme_offset_green",
      "ऑफसेट हरा": "offset_green",
      "अतिरिक्त ऑफसेट नीला": "extra_offset_blue",
      "अतिरिक्त ऑफसेट लाल": "extra_offset_red",
      "अतिरिक्त ऑफसेट हरा": "extra_offset_green",
      "अत्यधिक ऑफसेट लाल": "extreme_offset_red",
      "स्पेक रेडस्केल": "specks_redscale",
      विंटेज: "vintage",
      इत्र: "perfume",
      शांति: "serenity",
      एक्लेक्टिक: "eclectic",
      "विकर्ण रेखाएं": "diagonal_lines",
      "हरा स्पेक": "green_specks",
      "गर्माहट ": "warmth",
      कैसीनो: "casino",
      "हरी विकर्ण रेखाएं": "green_diagonal_lines",
      ऑफसेट: "offset",
      "ऑफसेट नीला": "offset_blue",
      नीयू: "neue",
      सूर्यास्त: "sunset",
      स्पेक्स: "specks",
      लकड़ी: "wood",
      लिक्स: "lix",
      रियो: "ryo",
      ब्लूस्केल: "bluescale",
      सोलेंज: "solange",
      शाम: "evening",
      क्रिमसन: "crimson",
      "चैती न्यूनतम शोर": "teal_min_noise",
      चरण: "phase",
      "गहरा बैंगनी न्यूनतम शोर": "dark_purple_min_noise",
      मूंगा: "coral",
      अंधेरा: "darkify",
      चमक: "incbrightness",
      "चमक दूसरा": "incbrightness2",
      "पीला कैसीनो": "yellow_casino",
      उलटा: "invert",
      संतृप्ति: "sat_adj",
      नींबू: "lemon",
      "गुलाबी न्यूनतम शोर": "pink_min_noise",
      "सामने की ओर": "frontward",
      "गुलाबी आभा": "pink_aura",
      धुंध: "haze",
      "ठंडा गोधूलि": "cool_twilight",
      नीला: "blues",
      मधुर: "mellow",
      "सोलेंज डार्क": "solange_dark",
      "सोलेंज ग्रे": "solange_grey",
      जैप्ट: "zapt",
      ईऑन: "eon",
      एयॉन: "aeon",
      मैट्रिक्स: "matrix",
      कॉस्मिक: "cosmic",
      "न्यूनतम शोर": "min_noise",
      "लाल न्यूनतम नॉइज़": "red_min_noise",
      मैट्रिक्स2: "matrix2",
      पर्पलस्केल: "purplescale",
      रेडियो: "radio",
      ट्वेंटीज़: "twenties",
      "पिक्सेल ब्लू": "pixel_blue",
      ग्रेस्केल: "greyscale",
      ग्राइम: "grime",
      "रेड ग्रेस्केल": "redgreyscale",
      रेट्रोवॉयलेट: "retroviolet",
      ग्रीनग्रेस्केल: "greengreyscale",
      "ग्रीन मेड नॉइज़": "green_med_noise",
      "ग्रीन मिन नॉइज़": "green_min_noise",
      "ब्लू मिन नॉइज़": "blue_min_noise",
      रोज़ेटिंट: "rosetint",
      "पर्पल मिन नॉइज़": "purple_min_noise",
      "रेड इफ़ेक्ट": "red_effect",
      गामा: "gamma",
      "टील गामा": "teal_gamma",
      "बैंगनी गामा": "purple_gamma",
      "पीला गामा": "yellow_gamma",
      "नीला गामा": "bluered_gamma",
      "हरा गामा": "green_gamma",
      "लाल गामा": "red_gamma",
      "काले धब्बे": "black_specks",
      "सफेद धब्बे": "white_specks",
      "नमक और काली मिर्च": "salt_and_pepper",
      "आरजीबी स्प्लिट": "rgbSplit",
      थ्रेशोल्ड: "threshold",
      "थ्रेशोल्ड 75": "threshold75",
      "थ्रेशोल्ड 125": "threshold125",
      पिक्सलेट: "pixelate",
      "पिक्सलेट 16": "pixelate16"
    }
  },
  ja: {
    cropButton: "切り取り",
    filterButton: "フィルター",
    colorsButton: "カラー",
    cancelButton: "キャンセル",
    doneButton: "完了",
    sliderBrightness: "明るさ",
    sliderContrast: "コントラスト",
    sliderSaturation: "彩度",
    flipHorizontal: "水平反転",
    flipVertical: "垂直反転",
    noFilter: "フィルターなし",
    filters: {
      水平線: "horizontal_lines",
      "エクストリーム オフセット ブルー": "extreme_offset_blue",
      オーシャン: "ocean",
      "エクストリーム オフセット グリーン": "extreme_offset_green",
      "オフセット グリーン": "offset_green",
      "エクストラ オフセット ブルー": "extra_offset_blue",
      "エクストラ オフセット レッド": "extra_offset_red",
      "エクストラ オフセット グリーン": "extra_offset_green",
      "エクストリーム オフセット レッド": "extreme_offset_red",
      "スペック レッドスケール": "specks_redscale",
      ヴィンテージ: "vintage",
      香水: "perfume",
      静寂: "serenity",
      折衷: "eclectic",
      斜線: "diagonal_lines",
      グリーンスペック: "green_specks",
      暖かさ: "warmth",
      カジノ: "casino",
      緑色の斜線: "green_diagonal_lines",
      オフセット: "offset",
      オフセットブルー: "offset_blue",
      ノイエ: "neue",
      サンセット: "sunset",
      斑点: "specks",
      木: "wood",
      リックス: "lix",
      リョウ: "ryo",
      ブルースケール: "bluescale",
      ソランジュ: "solange",
      イブニング: "evening",
      クリムゾン: "crimson",
      ティール最小ノイズ: "teal_min_noise",
      フェーズ: "phase",
      ダークパープル最小ノイズ: "dark_purple_min_noise",
      コーラル: "coral",
      暗化: "darkify",
      明るさ: "incbrightness",
      明るさセカンド: "incbrightness2",
      イエローカジノ: "yellow_casino",
      反転: "invert",
      彩度: "sat_adj",
      レモン: "lemon",
      ピンクミンノイズ: "pink_min_noise",
      前方: "frontward",
      ピンクオーラ: "pink_aura",
      ヘイズ: "haze",
      クールトワイライト: "cool_twilight",
      ブルース: "blues",
      メロウ: "mellow",
      ソランジュダーク: "solange_dark",
      ソランジュグレー: "solange_grey",
      ザプト: "zapt",
      イオン: "aeon",
      マトリックス: "matrix",
      コズミック: "cosmic",
      ミンノイズ: "min_noise",
      レッドミンノイズ: "red_min_noise",
      マトリックス2: "matrix2",
      パープルスケール: "purplescale",
      ラジオ: "radio",
      "20代": "twenties",
      ピクセルブルー: "pixel_blue",
      グレースケール: "greyscale",
      グライム: "grime",
      レッドグレースケール: "redgreyscale",
      レトロバイオレット: "retroviolet",
      グリーングレースケール: "greengreyscale",
      グリーンメッドノイズ: "green_med_noise",
      グリーン最小ノイズ: "green_min_noise",
      ブルー最小ノイズ: "blue_min_noise",
      ローゼティント: "rosetint",
      パープル最小ノイズ: "purple_min_noise",
      レッドエフェクト: "red_effect",
      ガンマ: "gamma",
      ティールガンマ: "teal_gamma",
      紫ガンマ: "purple_gamma",
      黄ガンマ: "yellow_gamma",
      青赤ガンマ: "bluered_gamma",
      緑ガンマ: "green_gamma",
      赤ガンマ: "red_gamma",
      黒斑点: "black_specks",
      白斑点: "white_specks",
      "ソルト＆ペッパー": "salt_and_pepper",
      "RGB 分割": "rgbSplit",
      しきい値: "threshold",
      "しきい値 75 ": "threshold75",
      "しきい値 125 ": "threshold125",
      "ピクセル化 ": "pixelate",
      "ピクセル化 16": "pixelate16"
    }
  },
  it: {
    cropButton: "Taglia",
    filterButton: "Filtro",
    colorsButton: "Colori",
    cancelButton: "Annulla",
    doneButton: "Fatto",
    sliderBrightness: "Luminosità",
    sliderContrast: "Contrasto",
    sliderSaturation: "Saturazione",
    flipHorizontal: "Capovolgi orizzontalmente",
    flipVertical: "Capovolgi verticalmente",
    noFilter: "Nessun filtro",
    filters: {
      "Linee orizzontali": "horizontal_lines",
      "Blu offset estremo": "extreme_offset_blue",
      Oceano: "ocean",
      "Verde offset estremo": "extreme_offset_green",
      "Verde offset": "offset_green",
      "Blu offset extra": "extra_offset_blue",
      "Rosso offset extra": "extra_offset_red",
      "Verde offset extra": "extra_offset_green",
      "Rosso offset estremo": "extreme_offset_red",
      "Scala rossa a granelli": "specks_redscale",
      Vintage: "vintage",
      Profumo: "perfume",
      Serenità: "serenity",
      Eclettico: "eclectic",
      "Linee diagonali": "diagonal_lines",
      "Macchie verdi": "green_specks",
      "Calore ": "warmth",
      Casinò: "casino",
      "Linee diagonali verdi": "green_diagonal_lines",
      Offset: "offset",
      "Offset Blu": "offset_blue",
      Neue: "neue",
      Tramonto: "sunset",
      Macchie: "specks",
      Legno: "wood",
      Lix: "lix",
      Ryo: "ryo",
      "Scala blu": "bluescale",
      Solange: "solange",
      Sera: "evening",
      Cremisi: "crimson",
      "Alzavola Rumore minimo": "teal_min_noise",
      Fase: "phase",
      "Rumore minimo viola scuro": "dark_purple_min_noise",
      Corallo: "coral",
      Darkify: "darkify",
      Luminosità: "incbrightness",
      "Luminosità Secondo": "incbrightness2",
      "Casinò Giallo": "yellow_casino",
      Inverti: "invert",
      Saturazione: "sat_adj",
      Limone: "lemon",
      "Rosa Rumore Min": "pink_min_noise",
      "In avanti": "frontward",
      "Aura Rosa": "pink_aura",
      Foschia: "haze",
      "Crepuscolo Fresco": "cool_twilight",
      Blues: "blues",
      Molto: "mellow",
      "Solange Scuro": "solange_dark",
      "Grigio Solange": "solange_grey",
      Zapt: "zapt",
      Eon: "eon",
      Aeon: "aeon",
      Matrix: "matrix",
      Cosmico: "cosmic",
      "Rumore Min": "min_noise",
      "Rosso Min Rumore": "red_min_noise",
      Matrice2: "matrix2",
      "Scala viola": "purplescale",
      Radio: "radio",
      "Anni '20": "twenties",
      "Pixel Blu": "pixel_blue",
      "Scala di grigi": "greyscale",
      Sporco: "grime",
      "Scala di grigi rosso": "redgreyscale",
      Retrovioletto: "retroviolet",
      "Scala di grigioverde": "greengreyscale",
      "Rumore medio verde": "green_med_noise",
      "Rumore minimo verde": "green_min_noise",
      "Rumore minimo blu": "blue_min_noise",
      Rosentino: "rosetint",
      "Rumore minimo viola": "purple_min_noise",
      "Effetto rosso": "red_effect",
      Gamma: "gamma",
      "Gamma verde acqua": "teal_gamma",
      "Gamma viola": "purple_gamma",
      "Gamma giallo": "yellow_gamma",
      "Gamma blu": "bluered_gamma",
      "Gamma verde": "green_gamma",
      "Gamma rosso": "red_gamma",
      "Macchi neri": "black_specks",
      "Macchi bianchi": "white_specks",
      "Sale e pepe": "salt_and_pepper",
      "Divisione RGB": "rgbSplit",
      Soglia: "threshold",
      "Soglia 75": "threshold75",
      "Soglia 125": "threshold125",
      Pixellato: "pixelate",
      "Pixellato 16": "pixelate16"
    }
  },
  fr: {
    cropButton: "Recadrer",
    filterButton: "Filtre",
    colorsButton: "Couleurs",
    cancelButton: "Annuler",
    doneButton: "Terminé",
    sliderBrightness: "Luminosité",
    sliderContrast: "Contraste",
    sliderSaturation: "Saturation",
    flipHorizontal: "Retourner horizontalement",
    flipVertical: "Retourner verticalement",
    noFilter: "Pas de filtre",
    filters: {
      "Lignes horizontales": "horizontal_lines",
      "Bleu décalé extrême": "extreme_offset_blue",
      Océan: "ocean",
      "Vert décalé extrême": "extreme_offset_green",
      "Vert décalé": "offset_green",
      "Bleu décalé supplémentaire": "extra_offset_blue",
      "Rouge décalé supplémentaire": "extra_offset_red",
      "Vert décalé supplémentaire": "extra_offset_green",
      "Rouge décalé extrême": "extreme_offset_red",
      "Échelle rouge de taches": "specks_redscale",
      Vintage: "vintage",
      Parfum: "perfume",
      Sérénité: "serenity",
      Éclectique: "eclectic",
      "Lignes diagonales": "diagonal_lines",
      "Points verts": "green_specks",
      "Chaleur ": "warmth",
      Casino: "casino",
      "Lignes diagonales vertes": "green_diagonal_lines",
      Décalage: "offset",
      "Décalage bleu": "offset_blue",
      Neue: "neue",
      "Coucher de soleil": "sunset",
      Points: "specks",
      Bois: "wood",
      Lix: "lix",
      Ryo: "ryo",
      "Échelle bleue": "bluescale",
      Solange: "solange",
      Soirée: "evening",
      Crimson: "crimson",
      "Sarcelle Min Bruit": "teal_min_noise",
      Phase: "phase",
      "Violet foncé Min Bruit": "dark_purple_min_noise",
      Corail: "coral",
      Darkify: "darkify",
      Luminosité: "incbrightness",
      "Luminosité Deuxièmement": "incbrightness2",
      "Yellow Casino": "yellow_casino",
      Inverser: "invert",
      Saturation: "sat_adj",
      Citron: "lemon",
      "Bruit rose min": "pink_min_noise",
      Frontward: "frontward",
      "Aura rose": "pink_aura",
      Haze: "haze",
      "Crépuscule frais": "cool_twilight",
      Blues: "blues",
      Moelleux: "mellow",
      "Solange Dark": "solange_dark",
      "Solange Grey": "solange_grey",
      Zapt: "zapt",
      Eon: "eon",
      Aeon: "aeon",
      Matrix: "matrix",
      Cosmic: "cosmic",
      "Min Noise": "min_noise",
      "Red Min Bruit": "red_min_noise",
      Matrix2: "matrix2",
      "échelle de violet": "purplescale",
      radio: "radio",
      vingtaine: "twenties",
      "pixel bleu": "pixel_blue",
      "niveaux de gris": "greyscale",
      crasse: "grime",
      "niveaux de gris rouges": "redgreyscale",
      rétroviolet: "retroviolet",
      "niveaux de gris verts": "greengreyscale",
      "bruit vert moyen": "green_med_noise",
      "bruit minimum vert": "green_min_noise",
      "bruit minimum bleu": "blue_min_noise",
      rosetinte: "rosetint",
      "bruit minimum violet": "purple_min_noise",
      "effet rouge": "red_effect",
      Gamma: "gamma",
      "Gamma sarcelle": "teal_gamma",
      "Gamma violet": "purple_gamma",
      "Gamma jaune": "yellow_gamma",
      "Gamma bleuté": "bluered_gamma",
      "Gamma vert": "green_gamma",
      "Gamma rouge": "red_gamma",
      "Points noirs": "black_specks",
      "Points blancs": "white_specks",
      "Sel et poivre": "salt_and_pepper",
      "Split RVB": "rgbSplit",
      Seuil: "threshold",
      "Seuil 75": "threshold75",
      "Seuil 125": "threshold125",
      Pixelate: "pixelate",
      "Pixelate 16": "pixelate16"
    }
  }
};
var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ie = {}, Te = {}, Ae = {}, et = {}, je = { exports: {} }, X = {}, ue = {};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.getRandomNumber = void 0;
const mt = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e;
ue.getRandomNumber = mt;
Object.defineProperty(X, "__esModule", { value: !0 });
X.pixel_blue_imgdata = X.invert_imgdata = X.darkify_imgdata = X.incbrightness_two_imgdata = X.incbrightness_imgdata = X.sat_adj_imgdata = void 0;
const wt = ue;
let I, be;
const vt = (e, t) => {
  let a = t;
  for (I = 0; I < e.data.length; I += 4)
    e.data[I] - a >= 0 && (e.data[I] -= a), e.data[I + 1] - a >= 0 && (e.data[I + 1] -= a), e.data[I + 2] - a >= 0 && (e.data[I + 2] -= a);
  return e;
};
X.darkify_imgdata = vt;
const bt = (e, t) => {
  let a = 20;
  for (I = 0; I < e.data.length; I += 4)
    e.data[I] += a, e.data[I + 1] += a, e.data[I + 2] += a;
  return e;
};
X.incbrightness_imgdata = bt;
const xt = (e) => {
  let t = 80;
  for (I = 0; I < e.data.length; I += 4)
    e.data[I] += t, e.data[I + 1] += t, e.data[I + 2] += t;
  return e;
};
X.incbrightness_two_imgdata = xt;
const yt = (e) => {
  for (I = 0; I < e.data.length; I += 4)
    e.data[I] = 255 - e.data[I], e.data[I + 1] = 255 - e.data[I + 1], e.data[I + 2] = 255 - e.data[I + 2];
  return e;
};
X.invert_imgdata = yt;
const Ct = (e) => {
  let t = 150;
  for (I = 0; I < e.data.length; I += 4)
    e.data[I] -= t, e.data[I + 1] -= t, e.data[I + 2] -= t;
  return e;
};
X.sat_adj_imgdata = Ct;
const Et = (e) => {
  let t = 0;
  for (I = 0; I < e.data.length; I += 4) {
    t = (0, wt.getRandomNumber)(0, 200);
    let a = 0;
    t > 0 && t < 50 ? be = 30 : t > 49 && t < 100 ? be = 90 : be = 10, e.data[I] - a > 255 ? e.data[I] -= a : e.data[I] += a, e.data[I + 1] + a > 255 ? e.data[I + 1] -= be : e.data[I + 2] += be;
  }
  return e;
};
X.pixel_blue_imgdata = Et;
var m = {};
Object.defineProperty(m, "__esModule", { value: !0 });
m.red_effect = m.purplescale_imgdata = m.rosetint_imgdata = m.twenties_imgdata = m.evening_imgdata = m.mellow_imgdata = m.haze_imgdata = m.pink_aura_imgdata = m.solange_dark_imgdata = m.zapt_imgdata = m.eon_imgdata = m.neue_imgdata = m.radio_imgdata = m.ocean_imgdata = m.greengreyscale_imgdata = m.crimson = m.phase = m.grime = m.redgreyscale_imgdata = m.warmth = m.slate_imgdata = m.serenity_imgdata = m.vintage_imgdata = m.perfume_imgdata = m.greyscale_imgdata = m.frontward_imgdata = m.coral_imgdata = m.lemon_imgdata = m.sunset = m.wood = m.lix_conv = m.ryo_conv = m.solange_imgdata = m.solange_grey_imgdata = m.aeon_imgdata = m.blue_greyscale_imgdata = m.cool_twilight_imgdata = m.blues_imgdata = void 0;
let n;
const Fe = ue, Rt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = e.data[n] + 50;
  return e;
};
m.lemon_imgdata = Rt;
const Mt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 2] = e.data[n + 1] + 50;
  return e;
};
m.coral_imgdata = Mt;
const St = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n + 2], e.data[n + 2] = e.data[n + 1] + 50;
  return e;
};
m.frontward_imgdata = St;
const kt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] += 120, e.data[n + 1] += 70, e.data[n + 2] += 13;
  return e;
};
m.vintage_imgdata = kt;
const It = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] += 80, e.data[n + 1] += 40, e.data[n + 2] += 120;
  return e;
};
m.perfume_imgdata = It;
const Nt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] += 10, e.data[n + 1] += 40, e.data[n + 2] += 90;
  return e;
};
m.serenity_imgdata = Nt;
const Bt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] += 90, e.data[n + 1] += 10, e.data[n + 2] += 90;
  return e;
};
m.pink_aura_imgdata = Bt;
const Ot = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] += 90, e.data[n + 1] += 90, e.data[n + 2] += 10;
  return e;
};
m.haze_imgdata = Ot;
const Pt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 2] = 120 - e.data[n + 2];
  return e;
};
m.mellow_imgdata = Pt;
const zt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = 200 - e.data[n];
  return e;
};
m.solange_dark_imgdata = zt;
const Ft = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = 255 - e.data[n + 1];
  return e;
};
m.zapt_imgdata = Ft;
const Lt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 2] = 255 - e.data[n + 2], e.data[n] = e.data[n] + 20;
  return e;
};
m.neue_imgdata = Lt;
const jt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = 120 - e.data[n + 1], e.data[n + 2] = 100 - e.data[n + 2];
  return e;
};
m.eon_imgdata = jt;
const Tt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = 60 - e.data[n + 1], e.data[n + 2] = 100 - e.data[n + 2];
  return e;
};
m.aeon_imgdata = Tt;
const At = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 80, e.data[n + 1] = t + 20, e.data[n + 2] = t + 31;
  }
  return e;
};
m.rosetint_imgdata = At;
const Ht = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 4, e.data[n + 1] = t + 3, e.data[n + 2] = t + 12;
  }
  return e;
};
m.slate_imgdata = Ht;
const Gt = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 90, e.data[n + 1] = t + 40, e.data[n + 2] = t + 80;
  }
  return e;
};
m.purplescale_imgdata = Gt;
const Zt = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 5, e.data[n + 1] = t + 40, e.data[n + 2] = t + 20;
  }
  return e;
};
m.radio_imgdata = Zt;
const qt = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 18, e.data[n + 1] = t + 12, e.data[n + 2] = t + 20;
  }
  return e;
};
m.twenties_imgdata = qt;
const Vt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] += 10, e.data[n + 1] += 20, e.data[n + 2] += 90;
  return e;
};
m.ocean_imgdata = Vt;
const Ut = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    var t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t, e.data[n + 1] = t, e.data[n + 2] = t;
  }
  return e;
};
m.greyscale_imgdata = Ut;
const Yt = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 100, e.data[n + 1] = t + 40, e.data[n + 2] = t + 20;
  }
  return e;
};
m.redgreyscale_imgdata = Yt;
const $t = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 20, e.data[n + 1] = t + 70, e.data[n + 2] = t + 20;
  }
  return e;
};
m.greengreyscale_imgdata = $t;
const Xt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n] + 10, e.data[n + 1] = e.data[n + 1] + 18;
  return e;
};
m.warmth = Xt;
const Kt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n] + 20, e.data[n + 1] = e.data[n + 2] + 20;
  return e;
};
m.crimson = Kt;
const Wt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n] + (0, Fe.getRandomNumber)(10, 20), e.data[n + 1] = e.data[n + 2] + (0, Fe.getRandomNumber)(10, 20), e.data[n + 2] = e.data[n + 2] + (0, Fe.getRandomNumber)(10, 20);
  return e;
};
m.phase = Wt;
const Jt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = e.data[n] + 5, e.data[n] = e.data[n] + 1;
  return e;
};
m.grime = Jt;
const Qt = (e) => {
  let t = 60;
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] -= t, e.data[n + 1] -= t, e.data[n + 2] -= t;
  return e;
};
m.evening_imgdata = Qt;
const Dt = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = e.data[n] + 50, e.data[n + 2] = e.data[n + 2] + 12;
  return e;
};
m.sunset = Dt;
const ea = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n] + 30, e.data[n + 1] = e.data[n + 1] + 12;
  return e;
};
m.wood = ea;
const ta = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = 255 - e.data[n], e.data[n + 1] = 255 - e.data[n + 1];
  return e;
};
m.lix_conv = ta;
const aa = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = 255 - e.data[n], e.data[n + 2] = 255 - e.data[n + 2];
  return e;
};
m.ryo_conv = aa;
const na = (e) => {
  for (n = 0; n < e.data.length; n += 4) {
    let t = (e.data[n] + e.data[n + 1] + e.data[n + 2]) / 3;
    e.data[n] = t + 20, e.data[n + 1] = t + 30, e.data[n + 2] = t + 60;
  }
  return e;
};
m.blue_greyscale_imgdata = na;
const ra = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = 255 - e.data[n];
  return e;
};
m.solange_imgdata = ra;
const oa = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n + 2], e.data[n + 1] = e.data[n + 1], e.data[n + 2] = e.data[n];
  return e;
};
m.solange_grey_imgdata = oa;
const ia = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 1] = 255 - e.data[n + 1], e.data[n + 2] = e.data[n + 2] + 70;
  return e;
};
m.cool_twilight_imgdata = ia;
const sa = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n + 2] = 255 - e.data[n + 2];
  return e;
};
m.blues_imgdata = sa;
const la = (e) => {
  for (n = 0; n < e.data.length; n += 4)
    e.data[n] = e.data[n] + 200, e.data[n + 1] = e.data[n + 1] - 50, e.data[n + 2] = e.data[n + 2] * 0.5;
  return e;
};
m.red_effect = la;
var U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.red_gamma = U.green_gamma = U.bluered_gamma = U.yellow_gamma = U.purple_gamma = U.teal_gamma = U.gamma = void 0;
let N;
const da = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N] = Math.pow(e.data[N] / 255, 5) * 255, e.data[N + 1] = Math.pow(e.data[N + 1] / 255, 5) * 255, e.data[N + 2] = Math.pow(e.data[N + 2] / 255, 5) * 255;
  return e;
};
U.gamma = da;
const ca = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N] = Math.pow(e.data[N] / 255, 5) * 255;
  return e;
};
U.teal_gamma = ca;
const ha = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N + 1] = Math.pow(e.data[N + 1] / 255, 5) * 255;
  return e;
};
U.purple_gamma = ha;
const _a = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N + 2] = Math.pow(e.data[N + 2] / 255, 5) * 255;
  return e;
};
U.yellow_gamma = _a;
const ua = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N] = Math.pow(e.data[N] / 255, 5) * 255, e.data[N + 1] = Math.pow(e.data[N + 1] / 255, 5) * 255;
  return e;
};
U.bluered_gamma = ua;
const fa = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N] = Math.pow(e.data[N] / 255, 5) * 255, e.data[N + 2] = Math.pow(e.data[N + 2] / 255, 5) * 255;
  return e;
};
U.green_gamma = fa;
const ga = (e) => {
  for (N = 0; N < e.data.length; N += 4)
    e.data[N + 1] = Math.pow(e.data[N + 1] / 255, 5) * 255, e.data[N + 2] = Math.pow(e.data[N + 2] / 255, 5) * 255;
  return e;
};
U.red_gamma = ga;
var de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.add_horizontal_line_imgdata = de.add_green_diagonal_lines_imgdata = de.add_diagonal_lines_imgdata = void 0;
let F;
const pa = (e) => {
  let t = 0;
  for (F = 0; F < e.data.length; F += 4) {
    t += 1, t > 255 && (t = 0);
    let a = (e.data[F] + e.data[F + 1] + e.data[F + 2]) / 3;
    e.data[F] = a + t, e.data[F + 1] = a + 70, e.data[F + 2] = a + 20;
  }
  return e;
};
de.add_horizontal_line_imgdata = pa;
const ma = (e) => {
  let t = 0;
  for (F = 0; F < e.data.length; F += 4) {
    t += 20, t > 255 && (t = 0);
    let a = (e.data[F] + e.data[F + 1] + e.data[F + 2]) / 3;
    e.data[F] = a + t, e.data[F + 1] = a + 70, e.data[F + 2] = a + 20;
  }
  return e;
};
de.add_diagonal_lines_imgdata = ma;
const wa = (e) => {
  let t = 0;
  for (F = 0; F < e.data.length; F += 4) {
    t += 20, t > 255 && (t = 0);
    var a = (e.data[F] + e.data[F + 1] + e.data[F + 2]) / 3;
    e.data[F] = a + 5, e.data[F + 1] = a + t, e.data[F + 2] = a + 20;
  }
  return e;
};
de.add_green_diagonal_lines_imgdata = wa;
var W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.pixelate16 = W.pixelate = W.threshold125 = W.threshold75 = W.threshold = void 0;
const He = (e, t = 100) => {
  for (let a = 0; a < e.data.length; a += 4) {
    let o = e.data[a], r = e.data[a + 1], i = e.data[a + 2], h = 0.2126 * o + 0.7152 * r + 0.0722 * i >= t ? 255 : 0;
    e.data[a] = e.data[a + 1] = e.data[a + 2] = h;
  }
  return e;
};
W.threshold = He;
const va = (e) => He(e, 75);
W.threshold75 = va;
const ba = (e) => He(e, 125);
W.threshold125 = ba;
const tt = (e, t = 10) => {
  const { width: a, height: o } = e;
  let r, i, h;
  t % 2 !== 0 && (t += 1);
  for (let v = 0; v < o; v += t)
    for (let l = 0; l < a; l += t) {
      let d = l + t / 2, C = v + t / 2, b = (d + C * a) * 4;
      e.data[b] !== void 0 && (r = e.data[b], i = e.data[b + 1], h = e.data[b + 2]);
      let S = l + t, y = v + t;
      for (let B = v; B < y && !(B > o); B++)
        for (let O = l; O < S && !(O > a); O++) {
          let P = (O + B * a) * 4;
          e.data[P] = r, e.data[P + 1] = i, e.data[P + 2] = h;
        }
    }
  return e;
};
W.pixelate = tt;
const xa = (e) => tt(e, 16);
W.pixelate16 = xa;
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.pink_min_noise_imgdata = L.matrix_imgdata = L.min_noise_imgdata = L.matrix2 = L.blue_min_noise_imgdata = L.cosmic_imgdata = L.teal_min_noise_imgdata = L.dark_purple_min_noise_imgdata = L.purple_min_noise_imgdata = L.green_min_noise_imgdata = L.green_med_noise_imgdata = L.red_min_noise_imgdata = void 0;
const Ge = ue;
let c, Re, $;
const ya = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.5, a = 0.6 + Math.random() * 0.5, o = 0.6 + Math.random() * 0.5;
    e.data[c] = e.data[c + 1] * 0.5 * t, e.data[c + 1] = e.data[c + 2] * 0.99 * a, e.data[c + 2] = e.data[c] * 0.99 * o;
  }
  return e;
};
L.green_med_noise_imgdata = ya;
const Ca = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.5, a = 0.6 + Math.random() * 0.5, o = 0.6 + Math.random() * 0.5;
    e.data[c] = e.data[c] * 0.5 * t, e.data[c + 1] = e.data[c + 1] * 0.3 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.dark_purple_min_noise_imgdata = Ca;
const Ea = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.1, a = 0.6 + Math.random() * 0.5, o = 0.6 + Math.random() * 0.5;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.teal_min_noise_imgdata = Ea;
const Ra = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.5, a = 0.6 + Math.random() * 0.2, o = 0.6 + Math.random() * 0.8;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.purple_min_noise_imgdata = Ra;
const Ma = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.1, a = 0.6 + Math.random() * 0.2, o = 0.6 + Math.random() * 0.7;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.blue_min_noise_imgdata = Ma;
const Sa = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.1, a = 0.6 + Math.random() * 0.5, o = 0.6 + Math.random() * 0.4;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.green_min_noise_imgdata = Sa;
const ka = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.6, a = 0.6 + Math.random() * 0.1, o = 0.6 + Math.random() * 0.4;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.pink_min_noise_imgdata = ka;
const Ia = (e) => {
  var t;
  for (c = 0; c < e.data.length; c += 4) {
    t = (0, Ge.getRandomNumber)(0, 200);
    var a;
    t > 0 && t < 50 ? $ = 30 : t > 49 && t < 100 ? $ = 90 : $ = 10, e.data[c] - a > 255 ? e.data[c] -= a : e.data[c] += a, e.data[c + 1] + a > 255 ? e.data[c + 1] -= $ : e.data[c + 1] += $;
  }
  return e;
};
L.matrix_imgdata = Ia;
const Na = (e) => {
  var t;
  for (c = 0; c < e.data.length; c += 4) {
    t = (0, Ge.getRandomNumber)(0, 200);
    let a = 0;
    t > 0 && t < 50 ? $ = 30 : t > 49 && t < 100 ? $ = 90 : $ = 10, e.data[c] - a > 255 ? e.data[c] -= a : e.data[c] += a, e.data[c + 1] + a > 255 ? e.data[c + 1] -= $ : e.data[c + 1] += $;
  }
  return e;
};
L.matrix2 = Na;
const Ba = (e) => {
  let t = 0;
  for (c = 0; c < e.data.length; c += 4)
    t = (0, Ge.getRandomNumber)(0, 200), t > 0 && t < 50 ? $ = 30 : t > 49 && t < 100 ? $ = 90 : $ = 10, e.data[c] - Re > 255 ? e.data[c] -= Re : e.data[c] += Re, e.data[c + 1] + Re > 255 ? e.data[c + 1] -= $ : e.data[c + 2] += $;
  return e;
};
L.cosmic_imgdata = Ba;
const Oa = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.4, a = 0.6 + Math.random() * 0.4, o = 0.6 + Math.random() * 0.4;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.min_noise_imgdata = Oa;
const Pa = (e) => {
  for (c = 0; c < e.data.length; c += 4) {
    let t = 0.6 + Math.random() * 0.6, a = 0.6 + Math.random() * 0.4, o = 0.6 + Math.random() * 0.4;
    e.data[c] = e.data[c] * 0.99 * t, e.data[c + 1] = e.data[c + 1] * 0.99 * a, e.data[c + 2] = e.data[c + 2] * 0.99 * o;
  }
  return e;
};
L.red_min_noise_imgdata = Pa;
var A = {};
Object.defineProperty(A, "__esModule", { value: !0 });
A.rgbSplit = A.offset_blue_imgdata = A.offset_green_imgdata = A.extreme_offset_red = A.extreme_offset_green = A.extreme_offset_blue = A.extra_offset_red = A.extra_offset_green = A.extra_offset_blue = A.offset = void 0;
let M;
const za = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 35;
    e.data[M + 2] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.extreme_offset_blue = za;
const Fa = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 15;
    e.data[M + 2] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.extra_offset_blue = Fa;
const La = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 35;
    e.data[M + 1] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.extreme_offset_green = La;
const ja = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 15;
    e.data[M + 1] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.extra_offset_green = ja;
const Ta = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 35;
    e.data[M] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.extreme_offset_red = Ta;
const Aa = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 15;
    e.data[M] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.extra_offset_red = Aa;
const Ha = (e) => {
  for (let a = 0; a < e.data.length; a += 4) {
    var t = 5;
    e.data[a] = e.data[a + 4 * t * t] == null ? 0 : e.data[a + 4 * t];
  }
  return e;
};
A.offset = Ha;
const Ga = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 5;
    e.data[M + 1] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.offset_green_imgdata = Ga;
const Za = (e) => {
  for (M = 0; M < e.data.length; M += 4) {
    var t = 5;
    e.data[M + 2] = e.data[M + 4 * t * t] == null ? 0 : e.data[M + 4 * t];
  }
  return e;
};
A.offset_blue_imgdata = Za;
const qa = (e) => {
  for (M = 0; M < e.data.length; M += 4)
    e.data[M - 150] = e.data[M + 0], e.data[M + 500] = e.data[M + 1], e.data[M - 300] = e.data[M + 2];
  return e;
};
A.rgbSplit = qa;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.salt_and_pepper = H.white_specks = H.black_specks = H.specksredscale_imgdata = H.specks_imgdata = H.green_specks_imgdata = H.eclectic_imgdata = H.retroviolet_imgdata = H.yellow_casino_imgdata = H.casino_imgdata = void 0;
const J = ue;
let x, le, ae;
const Va = (e) => {
  let t = 0;
  for (x = 0; x < e.data.length; x += 4) {
    t = (0, J.getRandomNumber)(0, 255), t > 255 && (t = 0);
    let a = (e.data[x] + e.data[x + 1] + e.data[x + 2]) / 3;
    e.data[x] = a + t, e.data[x + 1] = a + 2, e.data[x + 2] = a + 5;
  }
  return e;
};
H.casino_imgdata = Va;
const Ua = (e) => {
  let t = 0, a = 0;
  for (x = 0; x < e.data.length; x += 4) {
    t = (0, J.getRandomNumber)(0, 255), a = (0, J.getRandomNumber)(0, 255), t > 255 && (t = 0);
    let o = (e.data[x] + e.data[x + 1] + e.data[x + 2]) / 3;
    e.data[x] = o + t, e.data[x + 1] = o + a, e.data[x + 2] = o + 5;
  }
  return e;
};
H.yellow_casino_imgdata = Ua;
const Ya = (e) => {
  var t = 0, a = 0;
  for (x = 0; x < e.data.length; x += 4) {
    x = (0, J.getRandomNumber)(0, e.data.length), t = (0, J.getRandomNumber)(0, 255), a = (0, J.getRandomNumber)(0, 255), (0, J.getRandomNumber)(0, 255), t > 255 && (t = 0);
    var o = (e.data[x] + e.data[x + 1] + e.data[x + 2]) / 3;
    e.data[x] = o + t, e.data[x + 1] = o + a, e.data[x + 2] = o + 5;
  }
  return e;
};
H.specks_imgdata = Ya;
const $a = (e) => {
  for (x = 0; x < e.data.length; x += 4) {
    let t = (0, J.getRandomNumber)(0, 100);
    t > 10 && t < 13 && (e.data[x] = 120, e.data[x + 1] = 120, e.data[x + 2] = 120);
    let a = (e.data[x] + e.data[x + 1] + e.data[x + 2]) / 3;
    e.data[x] = a + 100, e.data[x + 1] = a + 40, e.data[x + 2] = a + 20;
  }
  return e;
};
H.specksredscale_imgdata = $a;
const Xa = (e) => {
  var t;
  for (x = 0; x < e.data.length; x += 4)
    t = (0, J.getRandomNumber)(0, 200), t > 0 && t < 50 ? (le = 20, ae = 30) : t > 49 && t < 100 ? (le = 10, ae = 90) : (le = 30, ae = 10), e.data[x] += le, e.data[x + 1] += ae, e.data[x + 2] += le;
  return e;
};
H.green_specks_imgdata = Xa;
const Ka = (e) => {
  let t = 0;
  for (x = 0; x < e.data.length; x += 4) {
    t = (0, J.getRandomNumber)(0, 200);
    let a = 0;
    t > 0 && t < 50 ? (le = 20, ae = 30) : t > 49 && t < 100 ? (le = 10, ae = 90) : (le = 30, ae = 10), e.data[x] + a > 255 ? e.data[x] -= a : e.data[x] += a, e.data[x + 1] + a > 255 ? e.data[x + 1] -= ae : e.data[x] += ae;
  }
  return e;
};
H.eclectic_imgdata = Ka;
const Wa = (e) => {
  let t = 0;
  for (x = 0; x < e.data.length; x += 4) {
    t = (0, J.getRandomNumber)(0, 200);
    let a = 0, o = 0;
    t > 0 && t < 50 ? (a = 20, o = 30) : t > 49 && t < 100 ? (a = 20, o = 90) : (a = 10, o = 50), e.data[x] - a > 255 ? e.data[x] -= a : e.data[x] += a, e.data[x + 2] + o > 255 ? e.data[x + 2] -= o : e.data[x + 2] += o;
  }
  return e;
};
H.retroviolet_imgdata = Wa;
const ke = (e, t, a = 15) => {
  let o, r, i;
  if (typeof t == "object")
    t.hasOwnProperty("R") && t.hasOwnProperty("G") && t.hasOwnProperty("B") && (o = t.R, r = t.G, i = t.B);
  else if (typeof t == "string") {
    let h = t.replace("#", "").trim();
    if (h.length === 3) {
      const v = /([a-f\d])([a-f\d])([a-f\d])$/i;
      h = h.replace(v, function(l, d, C, b) {
        return d + d + C + C + b + b;
      });
    }
    if (h.length === 6) {
      const v = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
      v && (o = parseInt(v[1], 16), r = parseInt(v[2], 16), i = parseInt(v[3], 16));
    }
  }
  if (!(o === void 0 || r === void 0 || i === void 0)) {
    for (x = 0; x < e.data.length; x += 4) {
      let h = (0, J.getRandomNumber)(0, 100);
      h > 10 && h < a && (e.data[x] = o, e.data[x + 1] = r, e.data[x + 2] = i);
    }
    return e;
  }
}, Ja = (e) => ke(e, { R: 0, G: 0, B: 0 });
H.black_specks = Ja;
const Qa = (e) => ke(e, { R: 255, G: 255, B: 255 });
H.white_specks = Qa;
const Da = (e) => (e = ke(e, { R: 255, G: 255, B: 255 }, 30), e = ke(e, { R: 0, G: 0, B: 0 }, 25), e);
H.salt_and_pepper = Da;
(function(e, t) {
  var a = j && j.__createBinding || (Object.create ? function(_, s, p, f) {
    f === void 0 && (f = p);
    var R = Object.getOwnPropertyDescriptor(s, p);
    (!R || ("get" in R ? !s.__esModule : R.writable || R.configurable)) && (R = { enumerable: !0, get: function() {
      return s[p];
    } }), Object.defineProperty(_, f, R);
  } : function(_, s, p, f) {
    f === void 0 && (f = p), _[f] = s[p];
  }), o = j && j.__setModuleDefault || (Object.create ? function(_, s) {
    Object.defineProperty(_, "default", { enumerable: !0, value: s });
  } : function(_, s) {
    _.default = s;
  }), r = j && j.__importStar || function(_) {
    if (_ && _.__esModule)
      return _;
    var s = {};
    if (_ != null)
      for (var p in _)
        p !== "default" && Object.prototype.hasOwnProperty.call(_, p) && a(s, _, p);
    return o(s, _), s;
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var i;
  let h;
  const v = r(X), l = r(m), d = r(U), C = r(de), b = r(W), S = r(L), y = r(A), B = r(H);
  function O() {
    return {
      filter_dict: P(),
      // Browser-only function
      // Used for pre-set filters only. 
      filterImg: (_, s) => {
        if (Z(s)) {
          let f = P(), R = u(_), k = R[0], V = R[1];
          i = V.getImageData(0, 0, k.width, k.height);
          let q = f[s](i);
          return V.putImageData(i, 0, 0), _.parentNode.replaceChild(k, _), q;
        } else
          console.log(`PixelsJS ERROR: Filter ${s} does not exist`);
      },
      getFilterNames: P,
      replaceImgElement: (_, s) => {
        console.log("r"), s.parentNode.replaceChild(_, s);
      },
      // Browser and NodeJS compatible
      filterImgData: (_, s) => {
        if (Z(s)) {
          let f = P();
          return i = _, f[s](i);
        } else
          console.log(`PixelsJS Error: Filter ${s} does not exist`);
      },
      getFilterList: () => {
        let _ = P();
        return Object.keys(_);
      },
      adjBrightness: (_, s) => {
        let p = u(_), f = p[0], R = p[1], k = R.getImageData(0, 0, f.width, f.height);
        for (h = 0; h < k.data.length; h += 4)
          k.data[h] -= s, k.data[h + 1] -= s, k.data[h + 2] -= s;
        R.putImageData(k, 0, 0), _.parentNode.replaceChild(f, _);
      },
      convertToJpg: (_) => new Promise((s, p) => {
        const f = new FileReader();
        f.readAsDataURL(_), f.onload = () => {
          const R = new Image();
          R.src = f.result, R.onload = () => {
            const k = document.createElement("canvas");
            k.width = R.width, k.height = R.height, k.getContext("2d").drawImage(R, 0, 0), k.toBlob((q) => {
              q.name = _.name, s(q);
            }, "image/jpeg", 1);
          }, console.log("completed");
        };
      })
    };
  }
  const P = () => ({ horizontal_lines: C.add_horizontal_line_imgdata, extreme_offset_blue: y.extreme_offset_blue, ocean: l.ocean_imgdata, extreme_offset_green: y.extreme_offset_green, offset_green: y.offset_green_imgdata, extra_offset_blue: y.extra_offset_blue, extra_offset_red: y.extra_offset_red, extra_offset_green: y.extra_offset_green, extreme_offset_red: y.extreme_offset_red, specks_redscale: B.specksredscale_imgdata, vintage: l.vintage_imgdata, perfume: l.perfume_imgdata, serenity: l.serenity_imgdata, eclectic: B.eclectic_imgdata, diagonal_lines: C.add_diagonal_lines_imgdata, green_specks: B.green_specks_imgdata, warmth: l.warmth, casino: B.casino_imgdata, green_diagonal_lines: C.add_green_diagonal_lines_imgdata, offset: y.offset, offset_blue: y.offset_blue_imgdata, neue: l.neue_imgdata, sunset: l.sunset, specks: B.specks_imgdata, wood: l.wood, lix: l.lix_conv, ryo: l.ryo_conv, bluescale: l.blue_greyscale_imgdata, solange: l.solange_imgdata, evening: l.evening_imgdata, crimson: l.crimson, teal_min_noise: S.teal_min_noise_imgdata, phase: l.phase, dark_purple_min_noise: S.dark_purple_min_noise_imgdata, coral: l.coral_imgdata, darkify: v.darkify_imgdata, incbrightness: v.incbrightness_imgdata, incbrightness2: v.incbrightness_two_imgdata, yellow_casino: B.yellow_casino_imgdata, invert: v.invert_imgdata, sat_adj: v.sat_adj_imgdata, lemon: l.lemon_imgdata, pink_min_noise: S.pink_min_noise_imgdata, frontward: l.frontward_imgdata, pink_aura: l.pink_aura_imgdata, haze: l.haze_imgdata, cool_twilight: l.cool_twilight_imgdata, blues: l.blues_imgdata, horizon: l.horizon_imgdata, mellow: l.mellow_imgdata, solange_dark: l.solange_dark_imgdata, solange_grey: l.solange_grey_imgdata, zapt: l.zapt_imgdata, eon: l.eon_imgdata, aeon: l.aeon_imgdata, matrix: S.matrix_imgdata, cosmic: S.cosmic_imgdata, min_noise: S.min_noise_imgdata, red_min_noise: S.red_min_noise_imgdata, matrix2: S.matrix2, purplescale: l.purplescale_imgdata, radio: l.radio_imgdata, twenties: l.twenties_imgdata, a: v.a, pixel_blue: v.pixel_blue_imgdata, greyscale: l.greyscale_imgdata, grime: l.grime, redgreyscale: l.redgreyscale_imgdata, retroviolet: B.retroviolet_imgdata, greengreyscale: l.greengreyscale_imgdata, green_med_noise: S.green_med_noise_imgdata, green_min_noise: S.green_min_noise_imgdata, blue_min_noise: S.blue_min_noise_imgdata, rosetint: l.rosetint_imgdata, purple_min_noise: S.purple_min_noise_imgdata, red_effect: l.red_effect, gamma: d.gamma, teal_gamma: d.teal_gamma, purple_gamma: d.purple_gamma, yellow_gamma: d.yellow_gamma, bluered_gamma: d.bluered_gamma, green_gamma: d.green_gamma, red_gamma: d.red_gamma, black_specks: B.black_specks, white_specks: B.white_specks, salt_and_pepper: B.salt_and_pepper, rgbSplit: y.rgbSplit, threshold: b.threshold, threshold75: b.threshold75, threshold125: b.threshold125, pixelate: b.pixelate, pixelate16: b.pixelate16 }), Z = (_) => {
    let s = P();
    return !!Object.keys(s).includes(_);
  }, u = (_) => {
    var s = document.createElement("canvas");
    let p = _.width || _.naturalWidth, f = _.height || _.naturalHeight;
    s.height = f, s.width = p;
    var R = s.getContext("2d"), k = R.createPattern(_, "no-repeat");
    return R.fillStyle = k, R.fillRect(0, 0, s.width, s.height), [s, R];
  };
  t.default = O();
})(je, je.exports);
var en = je.exports, Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.getInferedType = void 0;
const tn = (e) => e.includes("png") ? "image/png" : "image/jpeg";
Ne.getInferedType = tn;
(function(e) {
  var t = j && j.__awaiter || function(u, _, s, p) {
    function f(R) {
      return R instanceof s ? R : new s(function(k) {
        k(R);
      });
    }
    return new (s || (s = Promise))(function(R, k) {
      function V(Y) {
        try {
          z(p.next(Y));
        } catch (ne) {
          k(ne);
        }
      }
      function q(Y) {
        try {
          z(p.throw(Y));
        } catch (ne) {
          k(ne);
        }
      }
      function z(Y) {
        Y.done ? R(Y.value) : f(Y.value).then(V, q);
      }
      z((p = p.apply(u, _ || [])).next());
    });
  }, a = j && j.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getImageSource = e.drawImageSource = e.getExportObject = e.reset = e.applyChanges = e.loadFilter = e.setHorizontalFlip = e.setVerticalFlip = e.adjustColors = void 0;
  const o = a(en), r = Ne;
  function i(u, _, s) {
    return Math.min(Math.max(u, _), s);
  }
  const h = (u) => {
    const _ = u + 1, s = u * -1, p = 0.3086, f = 0.6094, R = 0.082;
    return {
      az: s * p + _,
      bz: s * f,
      cz: s * R,
      dz: s * p,
      ez: s * f + _,
      fz: s * R,
      gz: s * p,
      hz: s * f,
      iz: s * R + _
    };
  }, v = (u, _) => new Promise((s) => {
    let p, f;
    _.saturation && (f = h(_.saturation));
    const R = u.data.length;
    for (let z = 0; z < R; z += 4)
      if (_.brightness && (p = _.brightness + 1, u.data[z] *= p, u.data[z + 1] *= p, u.data[z + 2] *= p), _.contrast && (p = _.contrast + 1, u.data[z] = i(p * (u.data[z] - 128) + 128, 0, 255), u.data[z + 1] = i(p * (u.data[z + 1] - 128) + 128, 0, 255), u.data[z + 2] = i(p * (u.data[z + 2] - 128) + 128, 0, 255)), _.saturation && f) {
        var k = u.data[z], V = u.data[z + 1], q = u.data[z + 2];
        u.data[z] = f.az * k + f.bz * V + f.cz * q, u.data[z + 1] = f.dz * k + f.ez * V + f.fz * q, u.data[z + 2] = f.gz * k + f.hz * V + f.iz * q;
      }
    s(null);
  });
  e.adjustColors = v;
  const l = (u, _) => {
    const s = document.createElement("canvas");
    s.width = u.width, s.height = u.height;
    const p = s.getContext("2d");
    p == null || p.scale(1, -1), p == null || p.drawImage(u, 0, -u.height), _.clearRect(0, 0, u.width, u.height), _.drawImage(s, 0, 0);
  };
  e.setVerticalFlip = l;
  const d = (u, _) => {
    const s = document.createElement("canvas");
    s.width = u.width, s.height = u.height;
    const p = s.getContext("2d");
    p == null || p.scale(-1, 1), p == null || p.drawImage(u, -u.width, 0), _.clearRect(0, 0, u.width, u.height), _.drawImage(s, 0, 0);
  };
  e.setHorizontalFlip = d;
  const C = (u, _) => new Promise((s) => {
    for (const p of Array.isArray(_) ? _ : [_])
      if (o.default.filter_dict[p])
        u = o.default.filter_dict[p](u);
      else
        throw new Error(`${p} is not a valid filter!`);
    s(null);
  });
  e.loadFilter = C;
  const b = (u, _) => {
    _.putImageData(u, 0, 0);
  };
  e.applyChanges = b;
  const S = (u, _) => {
    (0, e.applyChanges)(u.data, _);
  };
  e.reset = S;
  const y = (u, _) => {
    const s = u, p = _, f = () => new Promise((R) => {
      s ? s.toBlob((k) => R(k), p) : R(null);
    });
    return {
      /**
      * Gets a Blob of the canvas content.
      * Ideal method for large images, optimizes the image size
      * It's advisable to handle dataURLs for small images, as converting to blobs, even for small images, might introduce unnecessary delays
      * @returns {Promise<Blob|null>} Promise that resolves with the Blob or null if the canvas is not available.
      */
      getBlob: () => t(void 0, void 0, void 0, function* () {
        return yield f();
      }),
      /**
       * Gets a data URL of the canvas content.
       * Faster method for <1MB images (3-35ms). Slowly for large images
       * Caution: Avoid using this method for very large images, as they may significantly increase the image size
       * @returns {string|undefined} Data URL or null if the canvas is not available.
       */
      getDataURL: () => {
        if (s)
          return s.toDataURL(p);
      },
      /**
       * Gets the canvas itself.
       * Faster method. Takes ~0.01ms to get the canvas element
       * @returns {HTMLCanvasElement|null} Canvas element or null if the canvas is not available.
       */
      getCanvas: () => s,
      /**
       * Gets an Image object from the canvas content using DataURL (small images)
       * @returns {Promise<HTMLImageElement | undefined>} Promise that resolves with the Image object or null if the canvas is not available.
       */
      getImageFromDataURL: () => t(void 0, void 0, void 0, function* () {
        if (s) {
          const R = new Image();
          return R.src = s.toDataURL(p), R;
        }
      }),
      /**
       * Gets an Image object from the canvas content using Blob (large images)
       * @returns {Promise<HTMLImageElement | undefined>} Promise that resolves with the Image object or null if the canvas is not available.
       */
      getImageFromBlob: () => t(void 0, void 0, void 0, function* () {
        if (s) {
          const R = new Image(), k = yield f();
          return k ? (R.src = URL.createObjectURL(k), R) : void 0;
        }
      }),
      getInferedMimetype: () => p
    };
  };
  e.getExportObject = y;
  const B = (u, _) => t(void 0, void 0, void 0, function* () {
    const s = new Image();
    return s.src = u, _ && (s.crossOrigin = "anonymous"), new Promise((p) => {
      s.onerror = () => p(null), s.onload = () => p(s);
    });
  }), O = (u) => {
    if (u instanceof HTMLCanvasElement) {
      const f = u.getContext("2d");
      if (!f)
        throw new Error("PixelsImage: Error obtaining the canvas context");
      return f.getImageData(0, 0, u.width, u.height);
    }
    if (typeof document != "object")
      throw new Error("Pixels Image: Running out of the browser");
    const _ = document.createElement("canvas");
    _.height = u.height, _.width = u.width;
    const s = _.getContext("2d");
    if (!s)
      throw new Error("PixelsImage: Error obtaining the canvas context");
    const p = s.createPattern(u, "no-repeat");
    return s.fillStyle = p, s.fillRect(0, 0, _.width, _.height), s.getImageData(0, 0, _.width, _.height);
  }, P = (u, _) => {
    u.width = _.width, u.height = _.height;
    const s = u.getContext("2d", { willReadFrequently: !0 });
    if (!s)
      throw new Error("PixelsImage: Error obtaining the canvas context");
    s.clearRect(0, 0, u.width, u.height), s.putImageData(_.data, 0, 0);
    const p = new ImageData(u.width, u.height);
    return p.data.set(_.data.data), {
      context: s,
      imageData: p
    };
  };
  e.drawImageSource = P;
  const Z = (u, _) => t(void 0, void 0, void 0, function* () {
    let s;
    if (typeof u == "string") {
      const p = yield B(u, !0);
      if (!p && u.startsWith("http"))
        throw new Error("PixelsImage: There was a CORS error while loading the image. Please consider saving it on your local server or configuring the CORS rules of the remote server.");
      if (!p)
        throw new Error("PixelsImage: Unknown error while loading the image.");
      s = p, _ || (_ = (0, r.getInferedType)(u));
    } else
      s = u, _ || (s instanceof HTMLImageElement ? _ = (0, r.getInferedType)(s.src) : _ = "image/png");
    return {
      width: s.width,
      height: s.height,
      type: _,
      data: O(s)
    };
  });
  e.getImageSource = Z;
})(et);
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.FILTERS_LIST = void 0;
Be.FILTERS_LIST = [
  "horizontal_lines",
  "extreme_offset_blue",
  "ocean",
  "extreme_offset_green",
  "offset_green",
  "extra_offset_blue",
  "extra_offset_red",
  "extra_offset_green",
  "extreme_offset_red",
  "specks_redscale",
  "vintage",
  "perfume",
  "serenity",
  "eclectic",
  "diagonal_lines",
  "green_specks",
  "warmth",
  "casino",
  "green_diagonal_lines",
  "offset",
  "offset_blue",
  "neue",
  "sunset",
  "specks",
  "wood",
  "lix",
  "ryo",
  "bluescale",
  "solange",
  "evening",
  "crimson",
  "teal_min_noise",
  "phase",
  "dark_purple_min_noise",
  "coral",
  "darkify",
  "incbrightness",
  "incbrightness2",
  "yellow_casino",
  "invert",
  "sat_adj",
  "lemon",
  "pink_min_noise",
  "frontward",
  "pink_aura",
  "haze",
  "cool_twilight",
  "blues",
  "mellow",
  "solange_dark",
  "solange_grey",
  "zapt",
  "eon",
  "aeon",
  "matrix",
  "cosmic",
  "min_noise",
  "red_min_noise",
  "matrix2",
  "purplescale",
  "radio",
  "twenties",
  "pixel_blue",
  "greyscale",
  "grime",
  "redgreyscale",
  "retroviolet",
  "greengreyscale",
  "green_med_noise",
  "green_min_noise",
  "blue_min_noise",
  "rosetint",
  "purple_min_noise",
  "red_effect",
  "gamma",
  "teal_gamma",
  "purple_gamma",
  "yellow_gamma",
  "bluered_gamma",
  "green_gamma",
  "red_gamma",
  "black_specks",
  "white_specks",
  "salt_and_pepper",
  "rgbSplit",
  "threshold",
  "threshold75",
  "threshold125",
  "pixelate",
  "pixelate16"
];
(function(e) {
  var t = j && j.__createBinding || (Object.create ? function(o, r, i, h) {
    h === void 0 && (h = i);
    var v = Object.getOwnPropertyDescriptor(r, i);
    (!v || ("get" in v ? !r.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return r[i];
    } }), Object.defineProperty(o, h, v);
  } : function(o, r, i, h) {
    h === void 0 && (h = i), o[h] = r[i];
  }), a = j && j.__exportStar || function(o, r) {
    for (var i in o)
      i !== "default" && !Object.prototype.hasOwnProperty.call(r, i) && t(r, o, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), a(et, e), a(Be, e);
})(Ae);
var an = j && j.__createBinding || (Object.create ? function(e, t, a, o) {
  o === void 0 && (o = a);
  var r = Object.getOwnPropertyDescriptor(t, a);
  (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = { enumerable: !0, get: function() {
    return t[a];
  } }), Object.defineProperty(e, o, r);
} : function(e, t, a, o) {
  o === void 0 && (o = a), e[o] = t[a];
}), nn = j && j.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), rn = j && j.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var a in e)
      a !== "default" && Object.prototype.hasOwnProperty.call(e, a) && an(t, e, a);
  return nn(t, e), t;
}, Ke = j && j.__awaiter || function(e, t, a, o) {
  function r(i) {
    return i instanceof a ? i : new a(function(h) {
      h(i);
    });
  }
  return new (a || (a = Promise))(function(i, h) {
    function v(C) {
      try {
        d(o.next(C));
      } catch (b) {
        h(b);
      }
    }
    function l(C) {
      try {
        d(o.throw(C));
      } catch (b) {
        h(b);
      }
    }
    function d(C) {
      C.done ? i(C.value) : r(C.value).then(v, l);
    }
    d((o = o.apply(e, t || [])).next());
  });
}, on = j && j.__rest || function(e, t) {
  var a = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (a[o[r]] = e[o[r]]);
  return a;
};
Object.defineProperty(Te, "__esModule", { value: !0 });
const K = rn(g), oe = Ae, sn = (e) => {
  var { onFilter: t, type: a, filter: o, brightness: r, saturation: i, contrast: h, verticalFlip: v, horizontalFlip: l, src: d } = e, C = on(e, ["onFilter", "type", "filter", "brightness", "saturation", "contrast", "verticalFlip", "horizontalFlip", "src"]);
  const b = (0, K.createRef)(), [S, y] = (0, K.useState)({}), [B, O] = (0, K.useState)(!1), [P, Z] = (0, K.useState)(), [u, _] = (0, K.useState)(), [s, p] = (0, K.useState)(!1), f = () => Ke(void 0, void 0, void 0, function* () {
    if (u && b.current) {
      const R = b.current;
      let k = !1, { context: V, imageData: q } = u;
      p(!0), S.filter && (yield (0, oe.loadFilter)(q, S.filter), k = !0);
      const { brightness: z, saturation: Y, contrast: ne } = S;
      (z || Y || ne) && (yield (0, oe.adjustColors)(q, { brightness: z, saturation: Y, contrast: ne }), k = !0), k && (0, oe.applyChanges)(q, V), S.verticalFlip && ((0, oe.setVerticalFlip)(R, V), k = !0), S.horizontalFlip && ((0, oe.setHorizontalFlip)(R, V), k = !0), t && P && t((0, oe.getExportObject)(R, P.type));
    }
  });
  if ((0, K.useEffect)(() => {
    y({
      filter: o,
      brightness: r,
      contrast: h,
      saturation: i,
      lastChange: Date.now(),
      verticalFlip: v,
      horizontalFlip: l
    });
  }, [o, r, h, i, v, l]), (0, K.useEffect)(() => {
    b && b.current && new IntersectionObserver((k) => {
      const V = !!k.find((q) => q.isIntersecting);
      V != B && O(V);
    }).observe(b.current);
  }, [b.current]), (0, K.useEffect)(() => {
    b.current && u && B && !s && f();
  }, [u, B, s, b.current]), (0, K.useEffect)(() => {
    b && b.current && P && (p(!1), _((0, oe.drawImageSource)(b.current, P)));
  }, [P, b.current, S.lastChange]), (0, K.useEffect)(() => {
    d && (d instanceof HTMLImageElement || d instanceof HTMLCanvasElement || typeof d == "string" ? Ke(void 0, void 0, void 0, function* () {
      const R = yield (0, oe.getImageSource)(d, a);
      Z(R);
    }) : Z(d));
  }, [d]), d)
    return K.default.createElement("canvas", Object.assign({}, C, { ref: b }));
};
Te.default = sn;
(function(e) {
  var t = j && j.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.FILTERS_LIST = e.getExportObject = e.getImageSource = e.PixelsImage = void 0;
  const a = t(Te);
  e.PixelsImage = a.default;
  var o = Ae;
  Object.defineProperty(e, "getImageSource", { enumerable: !0, get: function() {
    return o.getImageSource;
  } }), Object.defineProperty(e, "getExportObject", { enumerable: !0, get: function() {
    return o.getExportObject;
  } }), Object.defineProperty(e, "FILTERS_LIST", { enumerable: !0, get: function() {
    return o.FILTERS_LIST;
  } }), e.default = a.default;
})(ie);
const Ie = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: "px"
}, pe = (e, t, a) => Math.min(Math.max(e, t), a), ln = (...e) => e.filter((t) => t && typeof t == "string").join(" "), We = (e, t) => e === t || e.width === t.width && e.height === t.height && e.x === t.x && e.y === t.y && e.unit === t.unit;
function dn(e, t, a, o) {
  const r = te(e, a, o);
  return e.width && (r.height = r.width / t), e.height && (r.width = r.height * t), r.y + r.height > o && (r.height = o - r.y, r.width = r.height * t), r.x + r.width > a && (r.width = a - r.x, r.height = r.width / t), e.unit === "%" ? se(r, a, o) : r;
}
function cn(e, t, a) {
  const o = te(e, t, a);
  return o.x = (t - o.width) / 2, o.y = (a - o.height) / 2, e.unit === "%" ? se(o, t, a) : o;
}
function se(e, t, a) {
  return e.unit === "%" ? { ...Ie, ...e, unit: "%" } : {
    unit: "%",
    x: e.x ? e.x / t * 100 : 0,
    y: e.y ? e.y / a * 100 : 0,
    width: e.width ? e.width / t * 100 : 0,
    height: e.height ? e.height / a * 100 : 0
  };
}
function te(e, t, a) {
  return e.unit ? e.unit === "px" ? { ...Ie, ...e, unit: "px" } : {
    unit: "px",
    x: e.x ? e.x * t / 100 : 0,
    y: e.y ? e.y * a / 100 : 0,
    width: e.width ? e.width * t / 100 : 0,
    height: e.height ? e.height * a / 100 : 0
  } : { ...Ie, ...e, unit: "px" };
}
function Je(e, t, a, o, r, i = 0, h = 0, v = o, l = r) {
  const d = { ...e };
  let C = Math.min(i, o), b = Math.min(h, r), S = Math.min(v, o), y = Math.min(l, r);
  t && (t > 1 ? (C = h ? h * t : C, b = C / t, S = v * t) : (b = i ? i / t : b, C = b * t, y = l / t)), d.y < 0 && (d.height = Math.max(d.height + d.y, b), d.y = 0), d.x < 0 && (d.width = Math.max(d.width + d.x, C), d.x = 0);
  const B = o - (d.x + d.width);
  B < 0 && (d.x = Math.min(d.x, o - C), d.width += B);
  const O = r - (d.y + d.height);
  if (O < 0 && (d.y = Math.min(d.y, r - b), d.height += O), d.width < C && ((a === "sw" || a == "nw") && (d.x -= C - d.width), d.width = C), d.height < b && ((a === "nw" || a == "ne") && (d.y -= b - d.height), d.height = b), d.width > S && ((a === "sw" || a == "nw") && (d.x -= S - d.width), d.width = S), d.height > y && ((a === "nw" || a == "ne") && (d.y -= y - d.height), d.height = y), t) {
    const P = d.width / d.height;
    if (P < t) {
      const Z = Math.max(d.width / t, b);
      (a === "nw" || a == "ne") && (d.y -= Z - d.height), d.height = Z;
    } else if (P > t) {
      const Z = Math.max(d.height * t, C);
      (a === "sw" || a == "nw") && (d.x -= Z - d.width), d.width = Z;
    }
  }
  return d;
}
function hn(e, t, a, o) {
  const r = { ...e };
  return t === "ArrowLeft" ? o === "nw" ? (r.x -= a, r.y -= a, r.width += a, r.height += a) : o === "w" ? (r.x -= a, r.width += a) : o === "sw" ? (r.x -= a, r.width += a, r.height += a) : o === "ne" ? (r.y += a, r.width -= a, r.height -= a) : o === "e" ? r.width -= a : o === "se" && (r.width -= a, r.height -= a) : t === "ArrowRight" && (o === "nw" ? (r.x += a, r.y += a, r.width -= a, r.height -= a) : o === "w" ? (r.x += a, r.width -= a) : o === "sw" ? (r.x += a, r.width -= a, r.height -= a) : o === "ne" ? (r.y -= a, r.width += a, r.height += a) : o === "e" ? r.width += a : o === "se" && (r.width += a, r.height += a)), t === "ArrowUp" ? o === "nw" ? (r.x -= a, r.y -= a, r.width += a, r.height += a) : o === "n" ? (r.y -= a, r.height += a) : o === "ne" ? (r.y -= a, r.width += a, r.height += a) : o === "sw" ? (r.x += a, r.width -= a, r.height -= a) : o === "s" ? r.height -= a : o === "se" && (r.width -= a, r.height -= a) : t === "ArrowDown" && (o === "nw" ? (r.x += a, r.y += a, r.width -= a, r.height -= a) : o === "n" ? (r.y += a, r.height -= a) : o === "ne" ? (r.y += a, r.width -= a, r.height -= a) : o === "sw" ? (r.x -= a, r.width += a, r.height += a) : o === "s" ? r.height += a : o === "se" && (r.width += a, r.height += a)), r;
}
const me = { capture: !0, passive: !1 }, ce = class Q extends gt {
  constructor() {
    super(...arguments), this.docMoveBound = !1, this.mouseDownOnCrop = !1, this.dragStarted = !1, this.evData = {
      startClientX: 0,
      startClientY: 0,
      startCropX: 0,
      startCropY: 0,
      clientX: 0,
      clientY: 0,
      isResize: !0
    }, this.componentRef = $e(), this.mediaRef = $e(), this.initChangeCalled = !1, this.state = {
      cropIsActive: !1,
      newCropIsBeingDrawn: !1
    }, this.onCropPointerDown = (t) => {
      const { crop: a, disabled: o } = this.props, r = this.getBox();
      if (!a)
        return;
      const i = te(a, r.width, r.height);
      if (o)
        return;
      t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const h = t.target.dataset.ord, v = !!h;
      let l = t.clientX, d = t.clientY, C = i.x, b = i.y;
      if (h) {
        const S = t.clientX - r.x, y = t.clientY - r.y;
        let B = 0, O = 0;
        h === "ne" || h == "e" ? (B = S - (i.x + i.width), O = y - i.y, C = i.x, b = i.y + i.height) : h === "se" || h === "s" ? (B = S - (i.x + i.width), O = y - (i.y + i.height), C = i.x, b = i.y) : h === "sw" || h == "w" ? (B = S - i.x, O = y - (i.y + i.height), C = i.x + i.width, b = i.y) : (h === "nw" || h == "n") && (B = S - i.x, O = y - i.y, C = i.x + i.width, b = i.y + i.height), l = C + r.x + B, d = b + r.y + O;
      }
      this.evData = {
        startClientX: l,
        startClientY: d,
        startCropX: C,
        startCropY: b,
        clientX: t.clientX,
        clientY: t.clientY,
        isResize: v,
        ord: h
      }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
    }, this.onComponentPointerDown = (t) => {
      const { crop: a, disabled: o, locked: r, keepSelection: i, onChange: h } = this.props, v = this.getBox();
      if (o || r || i && a)
        return;
      t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const l = t.clientX - v.x, d = t.clientY - v.y, C = {
        unit: "px",
        x: l,
        y: d,
        width: 0,
        height: 0
      };
      this.evData = {
        startClientX: t.clientX,
        startClientY: t.clientY,
        startCropX: l,
        startCropY: d,
        clientX: t.clientX,
        clientY: t.clientY,
        isResize: !0
      }, this.mouseDownOnCrop = !0, h(te(C, v.width, v.height), se(C, v.width, v.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
    }, this.onDocPointerMove = (t) => {
      const { crop: a, disabled: o, onChange: r, onDragStart: i } = this.props, h = this.getBox();
      if (o || !a || !this.mouseDownOnCrop)
        return;
      t.cancelable && t.preventDefault(), this.dragStarted || (this.dragStarted = !0, i && i(t));
      const { evData: v } = this;
      v.clientX = t.clientX, v.clientY = t.clientY;
      let l;
      v.isResize ? l = this.resizeCrop() : l = this.dragCrop(), We(a, l) || r(
        te(l, h.width, h.height),
        se(l, h.width, h.height)
      );
    }, this.onComponentKeyDown = (t) => {
      const { crop: a, disabled: o, onChange: r, onComplete: i } = this.props;
      if (o)
        return;
      const h = t.key;
      let v = !1;
      if (!a)
        return;
      const l = this.getBox(), d = this.makePixelCrop(l), C = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? Q.nudgeStepLarge : t.shiftKey ? Q.nudgeStepMedium : Q.nudgeStep;
      if (h === "ArrowLeft" ? (d.x -= C, v = !0) : h === "ArrowRight" ? (d.x += C, v = !0) : h === "ArrowUp" ? (d.y -= C, v = !0) : h === "ArrowDown" && (d.y += C, v = !0), v) {
        t.cancelable && t.preventDefault(), d.x = pe(d.x, 0, l.width - d.width), d.y = pe(d.y, 0, l.height - d.height);
        const b = te(d, l.width, l.height), S = se(d, l.width, l.height);
        r(b, S), i && i(b, S);
      }
    }, this.onHandlerKeyDown = (t, a) => {
      const {
        aspect: o = 0,
        crop: r,
        disabled: i,
        minWidth: h = 0,
        minHeight: v = 0,
        maxWidth: l,
        maxHeight: d,
        onChange: C,
        onComplete: b
      } = this.props, S = this.getBox();
      if (i || !r)
        return;
      if (t.key === "ArrowUp" || t.key === "ArrowDown" || t.key === "ArrowLeft" || t.key === "ArrowRight")
        t.stopPropagation(), t.preventDefault();
      else
        return;
      const y = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? Q.nudgeStepLarge : t.shiftKey ? Q.nudgeStepMedium : Q.nudgeStep, B = te(r, S.width, S.height), O = hn(B, t.key, y, a), P = Je(
        O,
        o,
        a,
        S.width,
        S.height,
        h,
        v,
        l,
        d
      );
      if (!We(r, P)) {
        const Z = se(P, S.width, S.height);
        C(P, Z), b && b(P, Z);
      }
    }, this.onDocPointerDone = (t) => {
      const { crop: a, disabled: o, onComplete: r, onDragEnd: i } = this.props, h = this.getBox();
      this.unbindDocMove(), !(o || !a) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, i && i(t), r && r(te(a, h.width, h.height), se(a, h.width, h.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
    }, this.onDragFocus = (t) => {
      var a;
      (a = this.componentRef.current) == null || a.scrollTo(0, 0);
    };
  }
  get document() {
    return document;
  }
  // We unfortunately get the bounding box every time as x+y changes
  // due to scrolling.
  getBox() {
    const t = this.mediaRef.current;
    if (!t)
      return { x: 0, y: 0, width: 0, height: 0 };
    const { x: a, y: o, width: r, height: i } = t.getBoundingClientRect();
    return { x: a, y: o, width: r, height: i };
  }
  componentDidUpdate(t) {
    const { crop: a, onComplete: o } = this.props;
    if (o && !t.crop && a) {
      const { width: r, height: i } = this.getBox();
      r && i && o(te(a, r, i), se(a, r, i));
    }
  }
  componentWillUnmount() {
    this.resizeObserver && this.resizeObserver.disconnect();
  }
  bindDocMove() {
    this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, me), this.document.addEventListener("pointerup", this.onDocPointerDone, me), this.document.addEventListener("pointercancel", this.onDocPointerDone, me), this.docMoveBound = !0);
  }
  unbindDocMove() {
    this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, me), this.document.removeEventListener("pointerup", this.onDocPointerDone, me), this.document.removeEventListener("pointercancel", this.onDocPointerDone, me), this.docMoveBound = !1);
  }
  getCropStyle() {
    const { crop: t } = this.props;
    if (t)
      return {
        top: `${t.y}${t.unit}`,
        left: `${t.x}${t.unit}`,
        width: `${t.width}${t.unit}`,
        height: `${t.height}${t.unit}`
      };
  }
  dragCrop() {
    const { evData: t } = this, a = this.getBox(), o = this.makePixelCrop(a), r = t.clientX - t.startClientX, i = t.clientY - t.startClientY;
    return o.x = pe(t.startCropX + r, 0, a.width - o.width), o.y = pe(t.startCropY + i, 0, a.height - o.height), o;
  }
  getPointRegion(t, a, o, r) {
    const { evData: i } = this, h = i.clientX - t.x, v = i.clientY - t.y;
    let l;
    r && a ? l = a === "nw" || a === "n" || a === "ne" : l = v < i.startCropY;
    let d;
    return o && a ? d = a === "nw" || a === "w" || a === "sw" : d = h < i.startCropX, d ? l ? "nw" : "sw" : l ? "ne" : "se";
  }
  resolveMinDimensions(t, a, o = 0, r = 0) {
    let i = Math.min(o, t.width), h = Math.min(r, t.height);
    return !a || !i && !h ? [i, h] : a > 1 ? i ? [i, i / a] : [h * a, h] : h ? [h * a, h] : [i, i / a];
  }
  resizeCrop() {
    const { evData: t } = this, { aspect: a = 0, maxWidth: o, maxHeight: r } = this.props, i = this.getBox(), [h, v] = this.resolveMinDimensions(i, a, this.props.minWidth, this.props.minHeight);
    let l = this.makePixelCrop(i), d = this.getPointRegion(i, t.ord, h, v);
    const C = t.ord || d;
    let b = t.clientX - t.startClientX, S = t.clientY - t.startClientY;
    (h && C === "nw" || C === "w" || C === "sw") && (b = Math.min(b, -h)), (v && C === "nw" || C === "n" || C === "ne") && (S = Math.min(S, -v));
    const y = {
      unit: "px",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    d === "ne" ? (y.x = t.startCropX, y.width = b, a ? (y.height = y.width / a, y.y = t.startCropY - y.height) : (y.height = Math.abs(S), y.y = t.startCropY - y.height)) : d === "se" ? (y.x = t.startCropX, y.y = t.startCropY, y.width = b, a ? y.height = y.width / a : y.height = S) : d === "sw" ? (y.x = t.startCropX + b, y.y = t.startCropY, y.width = Math.abs(b), a ? y.height = y.width / a : y.height = S) : d === "nw" && (y.x = t.startCropX + b, y.width = Math.abs(b), a ? (y.height = y.width / a, y.y = t.startCropY - y.height) : (y.height = Math.abs(S), y.y = t.startCropY + S));
    const B = Je(
      y,
      a,
      d,
      i.width,
      i.height,
      h,
      v,
      o,
      r
    );
    return a || Q.xyOrds.indexOf(C) > -1 ? l = B : Q.xOrds.indexOf(C) > -1 ? (l.x = B.x, l.width = B.width) : Q.yOrds.indexOf(C) > -1 && (l.y = B.y, l.height = B.height), l.x = pe(l.x, 0, i.width - l.width), l.y = pe(l.y, 0, i.height - l.height), l;
  }
  createCropSelection() {
    const {
      ariaLabels: t = Q.defaultProps.ariaLabels,
      disabled: a,
      locked: o,
      renderSelectionAddon: r,
      ruleOfThirds: i,
      crop: h
    } = this.props, v = this.getCropStyle();
    if (h)
      return /* @__PURE__ */ g.createElement(
        "div",
        {
          style: v,
          className: "ReactCrop__crop-selection",
          onPointerDown: this.onCropPointerDown,
          "aria-label": t.cropArea,
          tabIndex: 0,
          onKeyDown: this.onComponentKeyDown,
          role: "group"
        },
        !a && !o && /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": t.nwDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "nw"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": t.nDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "n"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": t.neDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "ne"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": t.eDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "e"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": t.seDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "se"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": t.sDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "s"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": t.swDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "sw"),
            role: "button"
          }
        ), /* @__PURE__ */ g.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": t.wDragHandle,
            onKeyDown: (l) => this.onHandlerKeyDown(l, "w"),
            role: "button"
          }
        )),
        r && /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__selection-addon", onMouseDown: (l) => l.stopPropagation() }, r(this.state)),
        i && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ g.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
      );
  }
  makePixelCrop(t) {
    const a = { ...Ie, ...this.props.crop || {} };
    return te(a, t.width, t.height);
  }
  render() {
    const { aspect: t, children: a, circularCrop: o, className: r, crop: i, disabled: h, locked: v, style: l, ruleOfThirds: d } = this.props, { cropIsActive: C, newCropIsBeingDrawn: b } = this.state, S = i ? this.createCropSelection() : null, y = ln(
      "ReactCrop",
      r,
      C && "ReactCrop--active",
      h && "ReactCrop--disabled",
      v && "ReactCrop--locked",
      b && "ReactCrop--new-crop",
      i && t && "ReactCrop--fixed-aspect",
      i && o && "ReactCrop--circular-crop",
      i && d && "ReactCrop--rule-of-thirds",
      !this.dragStarted && i && !i.width && !i.height && "ReactCrop--invisible-crop",
      o && "ReactCrop--no-animate"
    );
    return /* @__PURE__ */ g.createElement("div", { ref: this.componentRef, className: y, style: l }, /* @__PURE__ */ g.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, a), S);
  }
};
ce.xOrds = ["e", "w"];
ce.yOrds = ["n", "s"];
ce.xyOrds = ["nw", "ne", "se", "sw"];
ce.nudgeStep = 1;
ce.nudgeStepMedium = 10;
ce.nudgeStepLarge = 100;
ce.defaultProps = {
  ariaLabels: {
    cropArea: "Use the arrow keys to move the crop selection area",
    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
  }
};
let _n = ce;
const un = /* @__PURE__ */ g.createElement("div", { className: "icon-saturation" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M167.436-162.538v-123.846l350-349.719-76.334-75.154 21.949-22.307 96.693 94.359 141.872-141.359q7.153-7.154 16.115-7.154t16.115 7.154l51.616 51.615q7.154 7.154 7.154 16.115 0 8.962-7.154 16.116L642.346-553.603l96.411 96.334-22.603 22.602-76.692-76.051-348.18 348.18H167.436Zm32.435-32.436h80.642l337.718-338.898-79.462-79.461-338.898 337.718v80.641Zm421.245-383.347 134.692-134.692-37.898-37.898-134.692 134.693 37.898 37.897Zm0 0-37.898-37.897 37.898 37.897Z" }))), fn = /* @__PURE__ */ g.createElement("div", { className: "icon-contrast" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M480.226-122.82q-74.107 0-139.447-28.132-65.341-28.132-113.675-76.357-48.334-48.226-76.309-113.333-27.975-65.107-27.975-139.132 0-74.107 28.132-139.447 28.132-65.341 76.357-113.675 48.226-48.334 113.333-76.309 65.107-27.975 139.132-27.975 74.107 0 139.447 28.132 65.341 28.131 113.675 76.357t76.309 113.333q27.975 65.107 27.975 139.132 0 74.107-28.132 139.447-28.131 65.341-76.357 113.675t-113.333 76.309q-65.107 27.975-139.132 27.975Zm15.03-32.654q127.257-6.295 218.372-98.166 91.116-91.872 91.116-226.341 0-134.006-89.923-225.526-89.924-91.519-219.565-99.237v649.27Z" }))), gn = /* @__PURE__ */ g.createElement("div", { className: "icon-brightness" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M464.141-806.564v-91.18h32.436v91.18h-32.436Zm0 744.026v-91.18h32.436v91.18h-32.436Zm342.641-401.385v-32.436h91.18v32.436h-91.18Zm-744.026 0v-32.436h91.18v32.436h-91.18ZM729.474-706l-23.41-23.923 56-55.641L785.115-762l-55.641 56Zm-530.82 531.282-23.052-23.564 55.642-56 23.41 23.41-56 56.154Zm563.41 0-56-56.154 23.41-23.41 55.641 56-23.051 23.564ZM231.244-706l-55.642-56 23.052-23.564 56 55.641L231.244-706Zm248.9 418.872q-80.939 0-136.868-56.066-55.93-56.065-55.93-137.139 0-80.629 55.997-136.981 55.996-56.353 136.724-56.353 80.728 0 137.273 56.501 56.545 56.5 56.545 136.858 0 80.988-56.508 137.084-56.508 56.096-137.233 56.096Zm-.281-32.436q67.708 0 114.647-46.546 46.939-46.545 46.939-113.894t-46.895-114.288q-46.895-46.939-114.603-46.939-67.707 0-113.938 47.058-46.231 47.057-46.231 114.081 0 67.023 46.187 113.776 46.186 46.752 113.894 46.752ZM480-480.5Z" }))), Qe = /* @__PURE__ */ g.createElement("div", { className: "icon-flip" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M383.423-162.82H219.871q-23.136 0-40.093-16.958-16.958-16.957-16.958-40.093v-520.258q0-23.136 16.958-40.093 16.957-16.958 40.093-16.958h163.552v32.436H219.871q-10.769 0-17.692 6.923t-6.923 17.692v520.258q0 10.769 6.923 17.692t17.692 6.923h163.552v32.436Zm81.321 121.128V-902.36h32.436v860.667h-32.436ZM578.026-162.82v-32.436h114.282v32.436H578.026Zm0-601.924v-32.436h114.282v32.436H578.026ZM764.744-162.82v-32.436h32.436q0 13.359-9.778 22.897-9.778 9.539-22.658 9.539Zm0-104.872v-95.449h32.436v95.449h-32.436Zm0-167.385v-90.449h32.436v90.449h-32.436Zm0-162.885v-94.346h32.436v94.346h-32.436Zm0-166.782v-32.436q12.897 0 22.667 9.91 9.769 9.911 9.769 22.526h-32.436Z" }))), pn = /* @__PURE__ */ g.createElement("div", { className: "icon-crop" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M704.59-62.538V-223.77H281.038q-23.995 0-40.523-16.732-16.528-16.733-16.528-40.319v-424.27H62.757v-32.436h161.23v-160.218h32.436v616.924q0 9.743 7.244 17.179 7.243 7.436 17.371 7.436h616.924v32.436H737.026v161.23H704.59Zm0-226.103v-391.834q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692H288.859v-32.436h391.116q23.189 0 40.12 17.108 16.931 17.109 16.931 39.943v391.834H704.59Z" }))), mn = /* @__PURE__ */ g.createElement("div", { className: "icon-undo" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24" }, /* @__PURE__ */ g.createElement("path", { d: "M478-172q-117 0-204-76T173-440h28q17 103 94.5 171.5T478-200q117 0 198.5-81.5T758-480q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h96v28H222v-144h28v96q45-47 104-73.5T478-788q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm133-158L467-474v-206h28v194l136 136-20 20Z" }))), wn = /* @__PURE__ */ g.createElement("div", { className: "icon-spinner" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M479.517-122.82q-73.35 0-138.585-27.484-65.235-27.483-114.19-76.438t-76.438-114.19q-27.484-65.235-27.484-138.749 0-74.633 27.684-139.608 27.685-64.974 76.33-113.779 48.645-48.804 114.154-76.458Q406.497-837.18 480-837.18q6.965 0 11.771 4.538 4.806 4.539 4.806 11.392 0 7.622-4.806 12.064T480-804.744q-134.834 0-229.789 94.95-94.955 94.949-94.955 229.776 0 134.826 94.95 229.794 94.949 94.968 229.776 94.968 134.826 0 229.794-94.955Q804.744-345.166 804.744-480q0-7.004 4.513-11.79 4.513-4.787 11.968-4.787 7.07 0 11.513 4.806 4.442 4.806 4.442 11.771 0 73.503-27.654 139.012t-76.443 114.154q-48.789 48.645-113.743 76.33-64.953 27.684-139.823 27.684Z" }))), vn = /* @__PURE__ */ g.createElement("div", { className: "icon-colors" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M455.884-142.256v-193.885h32.436v80.91h329.924v32.436H488.32v80.539h-32.436Zm-313.91-80.539v-32.436h201.475v32.436H141.974Zm169.039-161.09v-80.038H141.974v-32.436h169.039v-80.846h32.436v193.32h-32.436Zm144.871-80.038v-32.436h362.36v32.436h-362.36Zm160.885-161.231v-193.372h32.436v80.539h169.039v32.436H649.205v80.397h-32.436Zm-474.795-80.397v-32.436h362.36v32.436h-362.36Z" }))), bn = /* @__PURE__ */ g.createElement("div", { className: "icon-filter" }, /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "40", viewBox: "0 -960 960 960", width: "40" }, /* @__PURE__ */ g.createElement("path", { d: "M478.462-122.82q-72.757 0-137.742-28.107-64.984-28.107-113.335-76.65-48.351-48.543-76.458-113.72-28.107-65.177-28.107-138.71 0-74.826 28.888-139.959 28.888-65.133 78.731-113.404 49.843-48.271 116.599-76.041 66.757-27.769 142.458-27.769 69.909 0 132.437 23.103 62.529 23.102 110.369 64.363 47.841 41.262 76.36 98.469Q837.18-594.039 837.18-527q0 89.853-50.737 145.337-50.738 55.484-144.241 55.484h-70.484q-28.859 0-48.994 20.047-20.134 20.048-20.134 48.495 0 29.738 14.923 46.72 14.923 16.981 14.923 39.199 0 22.859-13.641 35.879-13.641 13.019-40.333 13.019ZM480-480Zm-223.286 14.949q14.653 0 25.405-10.672 10.753-10.672 10.753-25.325 0-14.652-10.672-25.405-10.672-10.752-25.325-10.752-14.652 0-25.405 10.672-10.752 10.672-10.752 25.324 0 14.653 10.672 25.405 10.672 10.753 25.324 10.753Zm121.667-162.513q14.652 0 25.405-10.672 10.752-10.672 10.752-25.325 0-14.652-10.672-25.405-10.672-10.752-25.324-10.752-14.652 0-25.405 10.672-10.753 10.672-10.753 25.324 0 14.653 10.673 25.405 10.672 10.753 25.324 10.753Zm203.359 0q14.652 0 25.405-10.672 10.753-10.672 10.753-25.325 0-14.652-10.673-25.405-10.672-10.752-25.324-10.752-14.652 0-25.405 10.672-10.752 10.672-10.752 25.324 0 14.653 10.672 25.405 10.672 10.753 25.324 10.753Zm122.667 162.513q14.652 0 25.405-10.672 10.752-10.672 10.752-25.325 0-14.652-10.672-25.405-10.672-10.752-25.324-10.752-14.652 0-25.405 10.672-10.753 10.672-10.753 25.324 0 14.653 10.673 25.405 10.672 10.753 25.324 10.753ZM478.469-155.256q10.756 0 16.143-4.539Q500-164.333 500-173.41q0-14-14.782-27.961-14.782-13.962-14.782-51.116 0-44.167 29.256-75.147 29.256-30.981 72.264-30.981h70.275q78.308 0 120.41-46.186 42.103-46.186 42.103-122.276 0-124.654-95.301-201.16-95.302-76.507-219.797-76.507-140.992 0-237.691 94.388Q155.256-615.968 155.256-480q0 134.91 94.66 229.827 94.661 94.917 228.553 94.917Z" }))), xn = "en", Me = {
  brightness: 0,
  contrast: 0,
  saturation: 0,
  verticalFlip: !1,
  horizontalFlip: !1,
  crop: void 0,
  filter: void 0,
  lastChangeTime: Date.now()
}, yn = {
  unit: "%",
  width: 50,
  height: 50,
  x: 25,
  y: 25
}, Cn = 1e3, En = 1e3, Rn = 0.8, Mn = 1024 * 1024 * 10, Sn = 1e3, kn = [
  "vintage",
  "perfume",
  "sunset",
  "wood",
  "greyscale",
  "coral",
  "lemon",
  "haze",
  "radio",
  "grime",
  "red_effect",
  "rgbSplit"
], In = ["crop", "filter", "colors"], De = ({
  src: e,
  initCrop: t,
  cropOptions: a,
  square: o,
  filtersEnabled: r = kn,
  onCancel: i,
  onDone: h,
  maxWidth: v = Cn,
  maxHeight: l = En,
  maxImageSize: d = Mn,
  quality: C = Rn,
  modules: b = In,
  language: S = xn,
  type: y
}) => {
  const B = [...new Set(b)];
  Me.crop = t || yn, a = o ? { ...a, aspect: 1 } : a;
  const O = pt[S], [P, Z] = ee(!1), [u, _] = ee(B[0]), [s, p] = ee([Me]), [f, R] = ee(Me), [k, V] = ee(), [q, z] = ee(!1), [Y, ne] = ee(), [ve, at] = ee(), [G, nt] = ee(), [Ze, Oe] = ee(Me.crop), he = (w) => {
    const E = s[s.length - 1], T = { ...f, ...w, lastChangeTime: Date.now() };
    T.lastChangeTime - E.lastChangeTime > Sn && p([...s, T]), R(T);
  }, rt = () => {
    s.length > 1 ? (s.pop(), p(s), R(s[s.length - 1]), Oe(s[s.length - 1].crop)) : R(s[0]);
  }, qe = (w) => he({ filter: w }), ot = (w) => he({ brightness: w }), it = (w) => he({ contrast: w }), st = (w) => he({ saturation: w }), lt = (w) => he({ verticalFlip: w }), dt = (w) => he({ horizontalFlip: w }), ct = (w) => he({ crop: w }), ht = () => {
    Z(!0), i ? i() : console.warn("ReactProfile: Missing onCancel handler");
  }, _t = async () => {
    if (h) {
      z(!0);
      const w = (E, T) => {
        z(!1), Z(!0), h(ie.getExportObject(E, T));
      };
      try {
        if (k) {
          const E = Ue(!0);
          E ? w(E, k.getInferedMimetype()) : h();
        } else
          h && h();
      } catch (E) {
        console.error("ReactProfile: ", E);
      }
    } else
      Z(!0), console.warn("ReactProfile: Missing onDone handler");
  }, Pe = () => {
    const w = document.createElement("canvas"), E = w.getContext("2d");
    if (!E)
      throw new Error("ReactProfile: Error obtaining context");
    return [w, E];
  }, Ve = (w) => {
    if (w) {
      const [E, T] = Pe();
      return E.width = w.width, E.height = w.height, T.putImageData(w.data, 0, 0), E;
    }
  }, ye = (w) => w && w.width > 0 && w.height > 0, Ue = (w = !1) => {
    const E = f.crop;
    if (E && ye(E) && k && G) {
      const T = w ? k.getCanvas() : Ve(G);
      if (w && u !== "crop")
        return k.getCanvas();
      if (T) {
        const [_e, re] = Pe(), D = E.unit === "%" ? T.width * (E.width / 100) : E.width, fe = E.unit === "%" ? T.height * (E.height / 100) : E.height, Ce = E.unit === "%" ? T.width * (E.x / 100) : E.x, ge = E.unit === "%" ? T.height * (E.y / 100) : E.y;
        return _e.width = D, _e.height = fe, re.drawImage(T, Ce, ge, D, fe, 0, 0, D, fe), _e;
      }
    } else {
      if (!ye(E) && k && w)
        return k.getCanvas();
      if (!ye(E) && !w && G)
        return Ve(G);
    }
  }, ut = async () => {
    if (k) {
      if (!ye(f.crop))
        return G;
      const w = Ue();
      if (w)
        return await ie.getImageSource(w, k.getInferedMimetype() || "image/jpeg");
    }
  }, ze = (w, E) => {
    const [T, _e] = Pe();
    let re = w.width, D = w.height;
    const fe = w.width / w.height;
    re > v && (re = v, D = re / fe), D > l && (D = l, re = D * fe), T.width = re, T.height = D, _e.drawImage(w, 0, 0, re, D), T.toBlob(
      (Ce) => {
        if (!Ce)
          return console.error("ReactProfile: Error loading image");
        const ge = new Image();
        ge.src = URL.createObjectURL(Ce), ge.onload = () => ne(ge), ge.onerror = () => console.error("ReactProfile: Error loading image");
      },
      E,
      C
    );
  };
  Ee(() => {
    if (e) {
      if (typeof e == "string") {
        const w = e.includes("png"), E = new Image();
        E.crossOrigin = "anonymous", E.src = e, E.onerror = () => console.error("ReactProfile: Error fetching image"), E.onload = () => ze(E, y || w ? "image/png" : "image/jpeg");
      } else if (e instanceof HTMLImageElement)
        ze(e, y || "image/jpeg");
      else if (e instanceof File && e.type.startsWith("image/")) {
        const w = new FileReader();
        w.onload = (E) => {
          const T = new Image();
          E.target && (T.src = E.target.result, T.onload = () => ze(T, e.type));
        }, w.readAsDataURL(e);
      }
    }
  }, [e]), Ee(() => {
    u !== "crop" && ut().then((w) => w && at(w));
  }, [f.crop, u]), Ee(() => {
    if (a && a.aspect === 1 && f.crop && Ze && G && s && G.width !== G.height && s.length === 1) {
      const w = cn(
        dn(
          {
            unit: "%",
            width: 50
          },
          1,
          G.width,
          G.height
        ),
        G.width,
        G.height
      );
      Oe(w);
      const E = { ...f, crop: w };
      s[0] = E, p(s), R(E);
    }
  }, [G]), Ee(() => {
    Y && ie.getImageSource(Y).then((w) => {
      if (w.data.data.byteLength >= d) {
        const E = (_e) => (_e / 1048576).toFixed(2), T = `ReactProfile: Max Image Size Supported (>${E(d)} MB). Image size: (${E(
          w.data.data.byteLength
        )} MB).`;
        throw console.error(T), console.warn(
          "ReactProfile: You can modify the maximum size with the 'maxImageSize' property, but be careful. Very large images can lead to errors or overloads."
        ), new Error(T);
      } else
        nt(w);
    });
  }, [Y]);
  const Ye = Xe(
    () => G && /* @__PURE__ */ g.createElement(
      ie.PixelsImage,
      {
        src: u === "crop" ? G : ve || G,
        horizontalFlip: f.horizontalFlip,
        verticalFlip: f.verticalFlip,
        filter: f.filter,
        saturation: f.saturation,
        brightness: f.brightness,
        contrast: f.contrast,
        className: "rp-image-preview",
        onFilter: V
      }
    ),
    [
      f.horizontalFlip,
      f.verticalFlip,
      f.filter,
      f.contrast,
      f.brightness,
      f.saturation,
      u,
      G,
      ve
    ]
  ), ft = Xe(
    () => G && u === "filter" && /* @__PURE__ */ g.createElement("div", { className: "rp-filters" }, /* @__PURE__ */ g.createElement("div", { className: `rp-filter no-filter ${!f.filter && "selected"}`, onClick: () => qe(void 0) }, /* @__PURE__ */ g.createElement(
      ie.PixelsImage,
      {
        src: ve || G,
        horizontalFlip: f.horizontalFlip,
        verticalFlip: f.verticalFlip,
        saturation: f.saturation,
        brightness: f.brightness,
        contrast: f.contrast,
        className: "rp-filter-preview"
      }
    ), /* @__PURE__ */ g.createElement("p", null, O.noFilter)), Object.entries(O.filters).filter(([w, E]) => r.includes(E)).map(([w, E]) => /* @__PURE__ */ g.createElement(
      "div",
      {
        className: `rp-filter ${E} ${E === f.filter && "selected"}`,
        key: E,
        onClick: () => qe(E)
      },
      /* @__PURE__ */ g.createElement(
        ie.PixelsImage,
        {
          src: ve || G,
          horizontalFlip: f.horizontalFlip,
          verticalFlip: f.verticalFlip,
          filter: E,
          saturation: f.saturation,
          brightness: f.brightness,
          contrast: f.contrast,
          className: "rp-filter-preview"
        }
      ),
      /* @__PURE__ */ g.createElement("p", null, w)
    ))),
    [
      u,
      f.horizontalFlip,
      f.verticalFlip,
      f.filter,
      f.brightness,
      f.saturation,
      f.contrast,
      G,
      ve
    ]
  );
  return Y ? P ? /* @__PURE__ */ g.createElement(g.Fragment, null) : /* @__PURE__ */ g.createElement("div", { className: "rp-editor" }, /* @__PURE__ */ g.createElement("div", { className: "rp-navigation" }, /* @__PURE__ */ g.createElement("div", { className: "rp-back" }, /* @__PURE__ */ g.createElement("button", { className: "rp-cancel-button", onClick: ht }, O.cancelButton), /* @__PURE__ */ g.createElement("button", { className: "rp-back-button", onClick: rt, disabled: s.length === 1 }, mn)), /* @__PURE__ */ g.createElement("div", { className: "rp-buttons" }, B.map((w) => /* @__PURE__ */ g.createElement(
    "div",
    {
      key: w,
      className: `rp-button-crop ${u === w && "selected"}`,
      onClick: () => _(w)
    },
    w === "crop" ? pn : w === "filter" ? bn : vn,
    /* @__PURE__ */ g.createElement("p", null, w === "crop" ? O.cropButton : w === "filter" ? O.filterButton : O.colorsButton)
  ))), /* @__PURE__ */ g.createElement("div", { className: "rp-next" }, /* @__PURE__ */ g.createElement("button", { className: "rp-done-button", disabled: q, onClick: _t }, q && wn, O.doneButton))), /* @__PURE__ */ g.createElement("div", { className: `rp-image-section ${u}` }, /* @__PURE__ */ g.createElement("div", { className: "rp-controls" }, u === "crop" && /* @__PURE__ */ g.createElement(
    "div",
    {
      className: `rp-crop ${f.verticalFlip && "vertical-flip"} ${f.horizontalFlip && "horizontal-flip"}`
    },
    /* @__PURE__ */ g.createElement("button", { className: "flip-vertical-button", onClick: () => lt(!f.verticalFlip) }, Qe, " ", O.flipVertical),
    /* @__PURE__ */ g.createElement("button", { className: "flip-horizontal-button", onClick: () => dt(!f.horizontalFlip) }, Qe, " ", O.flipHorizontal)
  ), u === "colors" && /* @__PURE__ */ g.createElement("div", { className: "rp-colors" }, /* @__PURE__ */ g.createElement("label", { htmlFor: "rp-bs" }, gn, " ", O.sliderBrightness), /* @__PURE__ */ g.createElement(
    "input",
    {
      type: "range",
      id: "rp-bs",
      min: -100,
      max: 100,
      step: 1,
      value: Number((f.brightness * 100).toFixed(0)),
      onInput: (w) => ot(Number(w.currentTarget.value) / 100)
    }
  ), /* @__PURE__ */ g.createElement("label", { htmlFor: "rp-ct" }, fn, " ", O.sliderContrast), /* @__PURE__ */ g.createElement(
    "input",
    {
      type: "range",
      id: "rp-ct",
      min: -100,
      max: 100,
      step: 1,
      value: Number((f.contrast * 100).toFixed(0)),
      onInput: (w) => it(Number(w.currentTarget.value) / 100)
    }
  ), /* @__PURE__ */ g.createElement("label", { htmlFor: "rp-sat" }, un, " ", O.sliderSaturation), /* @__PURE__ */ g.createElement(
    "input",
    {
      type: "range",
      id: "rp-sat",
      min: -100,
      max: 100,
      step: 1,
      value: Number((f.saturation * 100).toFixed(0)),
      onInput: (w) => st(Number(w.currentTarget.value) / 100)
    }
  )), u === "filter" && O.filters && ft), /* @__PURE__ */ g.createElement("div", { className: "rp-preview" }, (u === "filter" || u === "colors") && Ye, u === "crop" && /* @__PURE__ */ g.createElement(
    _n,
    {
      ...a,
      crop: Ze,
      onChange: (w, E) => Oe(E),
      onComplete: (w, E) => ct(E)
    },
    Ye
  )))) : /* @__PURE__ */ g.createElement(g.Fragment, null);
};
var we = {}, xe = Le;
if (process.env.NODE_ENV === "production")
  we.createRoot = xe.createRoot, we.hydrateRoot = xe.hydrateRoot;
else {
  var Se = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  we.createRoot = function(e, t) {
    Se.usingClientEntryPoint = !0;
    try {
      return xe.createRoot(e, t);
    } finally {
      Se.usingClientEntryPoint = !1;
    }
  }, we.hydrateRoot = function(e, t, a) {
    Se.usingClientEntryPoint = !0;
    try {
      return xe.hydrateRoot(e, t, a);
    } finally {
      Se.usingClientEntryPoint = !1;
    }
  };
}
const On = async (e) => await new Promise((t, a) => {
  try {
    const [o] = g.version.split("."), r = document.createElement("div");
    r.className = "rp-root", document.body.append(r);
    const i = () => {
      t({ cancel: !0, done: !1 }), v();
    }, h = (l) => {
      t({ cancel: !1, done: !0, editedImage: l }), v();
    }, v = () => {
      Le.unmountComponentAtNode(r), r.remove();
    };
    e.src || (e = { src: e }), Number(o) >= 18 && we.createRoot ? we.createRoot(r).render(/* @__PURE__ */ g.createElement(De, { ...e, onCancel: i, onDone: h })) : Le.render(
      /* @__PURE__ */ g.createElement(De, { ...e, onCancel: i, onDone: h }),
      r
    );
  } catch (o) {
    a(o);
  }
}), Pn = ie.FILTERS_LIST;
export {
  Pn as ALL_FILTERS,
  De as ReactProfile,
  De as default,
  On as openEditor
};
