<!-- ELUCENIA technical documentation · asrs-rastreamento-tdah · ja · no clinical/professional/rights approval -->

# ASRS v1.1（成人ADHDスクリーニング）

[条件・出典・許諾](https://elucenia.org/ja/tools/asrs-rastreamento-tdah)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 1. 物事を行うにあたって、難所は乗り越えたのに、詰めが甘くて仕上げるのが困難だったことが、どのくらいの頻度でありますか。

`q1`

- `0` — 全くない
- `1` — めったにない
- `2` — 時々
- `3` — 頻繁
- `4` — 非常に頻繁

### 2. 計画性を要する作業を行なう際に、作業を順序だてるのが困難だったことが、どのくらいの頻度でありますか。

`q2`

- `0` — 全くない
- `1` — めったにない
- `2` — 時々
- `3` — 頻繁
- `4` — 非常に頻繁

### 3. 約束や、しなければいけない用事を忘れたことが、どのくらいの頻度でありますか。

`q3`

- `0` — 全くない
- `1` — めったにない
- `2` — 時々
- `3` — 頻繁
- `4` — 非常に頻繁

### 4. じっくりと考える必要のある課題に取り掛かるのを避けたり、遅らせたりすることが、どのくらいの頻度でありますか。

`q4`

- `0` — 全くない
- `1` — めったにない
- `2` — 時々
- `3` — 頻繁
- `4` — 非常に頻繁

### 5. 長時間座っていなければならない時に、手足をそわそわと動かしたり、もぞもぞしたりすることが、どのくらいの頻度でありますか。

`q5`

- `0` — 全くない
- `1` — めったにない
- `2` — 時々
- `3` — 頻繁
- `4` — 非常に頻繁

### 6. まるで何かに駆り立てられるかのように過度に活動的になったり、何かせずにいられなくなることが、どのくらいの頻度でありますか。

`q6`

- `0` — 全くない
- `1` — めったにない
- `2` — 時々
- `3` — 頻繁
- `4` — 非常に頻繁

## 方法の版

ASRS v1.1/WHO 2005：パートA 6項目、項目別閾値、陽性≥4

## 記載された計算式

グレーで色づけした部分にチェックがいくつあるかを数えます。４つ以上チェックがついている場合、あなたの症状は成人期のADHDに該当している可能性があります。医療の専門機関でさらなる評価を受けることをお勧めします。

## 限界・対象集団

成人のADHDのスクリーニングです。六項目のパートAは、18項目の質問票および診断面接とは区別する必要があります。陽性結果は臨床評価が必要であることを示します。再較正標本やポルトガル語版への適応によって、この実装がすべての言語で自動的に妥当となるわけではありません。

## 参考文献

- [Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med, 2005.](https://doi.org/10.1017/S0033291704002892)

- [Mattos P et al. Adaptação transcultural para o português da escala Adult Self-Report Scale para avaliação do transtorno de déficit de atenção/hiperatividade (TDAH) em adultos. Rev Psiq Clín, 2006.](https://doi.org/10.1590/S0101-60832006000400004)

- [New York University / Harvard · ASRS v1.1 six-question screener · published forms and electronic conversion conditions](https://license.tov.med.nyu.edu/product/asrs6Qscreener)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026


---

成人期のADHDの自己記入式スクリーニング(ASRS-V1.1)

運用上の参照期間は過去6か月です。この参照期間は英語原版に基づく補足で、日本語の公開PDFには記載されていません。

© New York University and President and Fellows of Harvard College. All rights reserved.

© New York University and the President and Fellows of Harvard College.

[成人期のADHDの自己記入式スクリーニング(ASRS-V1.1) · PDF](../original/ja.pdf)

1. 物事を行うにあたって、難所は乗り越えたのに、詰めが甘くて仕上げるのが困難だったことが、どのくらいの頻度でありますか。

2. 計画性を要する作業を行なう際に、作業を順序だてるのが困難だったことが、どのくらいの頻度でありますか。

3. 約束や、しなければいけない用事を忘れたことが、どのくらいの頻度でありますか。

4. じっくりと考える必要のある課題に取り掛かるのを避けたり、遅らせたりすることが、どのくらいの頻度でありますか。

5. 長時間座っていなければならない時に、手足をそわそわと動かしたり、もぞもぞしたりすることが、どのくらいの頻度でありますか。

6. まるで何かに駆り立てられるかのように過度に活動的になったり、何かせずにいられなくなることが、どのくらいの頻度でありますか。

全くない · めったにない · 時々 · 頻繁 · 非常に頻繁

グレーで色づけした部分にチェックがいくつあるかを数えます。４つ以上チェックがついている場合、あなたの症状は成人期のADHDに該当している可能性があります。医療の専門機関でさらなる評価を受けることをお勧めします。
