<!-- ELUCENIA technical documentation · asrs-rastreamento-tdah · hi · no clinical/professional/rights approval -->

# ASRS v1.1 (वयस्क ADHD की स्क्रीनिंग)

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/asrs-rastreamento-tdah)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### 1. How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?

`q1`

- `0` — Never
- `1` — Rarely
- `2` — Sometimes
- `3` — Often
- `4` — Very Often

### 2. How often do you have difficulty getting things in order when you have to do a task that requires organization?

`q2`

- `0` — Never
- `1` — Rarely
- `2` — Sometimes
- `3` — Often
- `4` — Very Often

### 3. How often do you have problems remembering appointments or obligations?

`q3`

- `0` — Never
- `1` — Rarely
- `2` — Sometimes
- `3` — Often
- `4` — Very Often

### 4. When you have a task that requires a lot of thought, how often do you avoid or delay getting started?

`q4`

- `0` — Never
- `1` — Rarely
- `2` — Sometimes
- `3` — Often
- `4` — Very Often

### 5. How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?

`q5`

- `0` — Never
- `1` — Rarely
- `2` — Sometimes
- `3` — Often
- `4` — Very Often

### 6. How often do you feel overly active and compelled to do things, like you were driven by a motor?

`q6`

- `0` — Never
- `1` — Rarely
- `2` — Sometimes
- `3` — Often
- `4` — Very Often

## विधि का संस्करण

ASRS v1.1/WHO 2005: भाग A 6 मदें, विशिष्ट सीमाएँ, सकारात्मक≥4

## दस्तावेज़ित सूत्र

Add the number of checkmarks that appear in the darkly shaded area. Four (4) or more checkmarks indicate that your symptoms may be consistent with Adult ADHD. It may be beneficial for you to talk with your healthcare provider about an evaluation.

## सीमाएँ और जनसमूह

वयस्कों में ध्यानाभाव-अतिसक्रियता विकार की स्क्रीनिंग। छह प्रश्नों वाले भाग A को 18 प्रश्नों की प्रश्नावली और निदान साक्षात्कार से अलग समझना चाहिए। सकारात्मक परिणाम नैदानिक मूल्यांकन की आवश्यकता बताता है; पुनः अंशांकन का नमूना और पुर्तगाली अनुकूलन अपने आप इस कार्यान्वयन को सभी भाषाओं में वैध नहीं बनाते।

## संदर्भ

- [Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med, 2005.](https://doi.org/10.1017/S0033291704002892)

- [Mattos P et al. Adaptação transcultural para o português da escala Adult Self-Report Scale para avaliação do transtorno de déficit de atenção/hiperatividade (TDAH) em adultos. Rev Psiq Clín, 2006.](https://doi.org/10.1590/S0101-60832006000400004)

- [New York University / Harvard · ASRS v1.1 six-question screener · published forms and electronic conversion conditions](https://license.tov.med.nyu.edu/product/asrs6Qscreener)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026

## दर्ज किए गए परिणाम

नीचे दी गई जानकारी कृत्रिम उदाहरणों के लिए पद्धति के आउटपुट को सुरक्षित रखती है। यह स्वतंत्र नैदानिक सत्यापन नहीं है।

### 1

स्क्रीनिंग नकारात्मक

स्क्रीनिंग उपकरण: यह निदान नहीं करता। ADHD के लिए नैदानिक मूल्यांकन आवश्यक है (बचपन में शुरुआत, एक से अधिक संदर्भों में हानि, और अन्य कारणों का बहिष्करण).


### 2

स्क्रीनिंग सकारात्मक: वयस्क ADHD के अनुरूप लक्षण

स्क्रीनिंग उपकरण: यह निदान नहीं करता। ADHD के लिए नैदानिक मूल्यांकन आवश्यक है (बचपन में शुरुआत, एक से अधिक संदर्भों में हानि, और अन्य कारणों का बहिष्करण).


### 3

स्क्रीनिंग नकारात्मक

स्क्रीनिंग उपकरण: यह निदान नहीं करता। ADHD के लिए नैदानिक मूल्यांकन आवश्यक है (बचपन में शुरुआत, एक से अधिक संदर्भों में हानि, और अन्य कारणों का बहिष्करण).


### 4

स्क्रीनिंग सकारात्मक: वयस्क ADHD के अनुरूप लक्षण

स्क्रीनिंग उपकरण: यह निदान नहीं करता। ADHD के लिए नैदानिक मूल्यांकन आवश्यक है (बचपन में शुरुआत, एक से अधिक संदर्भों में हानि, और अन्य कारणों का बहिष्करण).



---

Adult Self-Report Scale-V1.1 (ASRS-V1.1) Screener

हिंदी में आधिकारिक प्रश्नावली का अधिकृत पाठ अभी उपलब्ध नहीं है। नीचे NYU द्वारा प्रकाशित मूल अंग्रेज़ी प्रश्नावली है; प्रश्न और उत्तर अंग्रेज़ी में हैं। इसे सत्यापित हिंदी ASRS संस्करण के रूप में प्रस्तुत नहीं किया गया है।

Check the box that best describes how you have felt and conducted yourself over the past 6 months. Please give the completed questionnaire to your healthcare professional during your next appointment to discuss the results.

© New York University and President and Fellows of Harvard College. All rights reserved.

© New York University and the President and Fellows of Harvard College.

[Adult Self-Report Scale-V1.1 (ASRS-V1.1) Screener · PDF](../original/en.pdf)

1. How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?

2. How often do you have difficulty getting things in order when you have to do a task that requires organization?

3. How often do you have problems remembering appointments or obligations?

4. When you have a task that requires a lot of thought, how often do you avoid or delay getting started?

5. How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?

6. How often do you feel overly active and compelled to do things, like you were driven by a motor?

Never · Rarely · Sometimes · Often · Very Often

Add the number of checkmarks that appear in the darkly shaded area. Four (4) or more checkmarks indicate that your symptoms may be consistent with Adult ADHD. It may be beneficial for you to talk with your healthcare provider about an evaluation.
