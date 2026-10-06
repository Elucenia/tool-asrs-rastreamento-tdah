<!-- ELUCENIA technical documentation · asrs-rastreamento-tdah · en · no clinical/professional/rights approval -->

# ASRS v1.1 (adult ADHD screening)

[conditions, sources and permissions](https://elucenia.org/en/tools/asrs-rastreamento-tdah)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

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

## Method edition

ASRS v1.1/WHO 2005: Part A 6 items, item-specific thresholds, positive≥4

## Documented formula

Add the number of checkmarks that appear in the darkly shaded area. Four (4) or more checkmarks indicate that your symptoms may be consistent with Adult ADHD. It may be beneficial for you to talk with your healthcare provider about an evaluation.

## Limits and population

Screening for adult ADHD. The six-item Part A must be distinguished from the 18-item questionnaire and the diagnostic interview. A positive result indicates a need for clinical assessment; the recalibration sample and the Portuguese adaptation do not automatically validate this implementation in all languages.

## References

- [Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med, 2005.](https://doi.org/10.1017/S0033291704002892)

- [Mattos P et al. Adaptação transcultural para o português da escala Adult Self-Report Scale para avaliação do transtorno de déficit de atenção/hiperatividade (TDAH) em adultos. Rev Psiq Clín, 2006.](https://doi.org/10.1590/S0101-60832006000400004)

- [New York University / Harvard · ASRS v1.1 six-question screener · published forms and electronic conversion conditions](https://license.tov.med.nyu.edu/product/asrs6Qscreener)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Negative screening

Screening instrument: does not make a diagnosis. ADHD requires clinical evaluation (onset in childhood, impairment in more than one setting, and exclusion of other causes).


### 2

Positive screening: symptoms compatible with adult ADHD

Screening instrument: does not make a diagnosis. ADHD requires clinical evaluation (onset in childhood, impairment in more than one setting, and exclusion of other causes).


### 3

Negative screening

Screening instrument: does not make a diagnosis. ADHD requires clinical evaluation (onset in childhood, impairment in more than one setting, and exclusion of other causes).


### 4

Positive screening: symptoms compatible with adult ADHD

Screening instrument: does not make a diagnosis. ADHD requires clinical evaluation (onset in childhood, impairment in more than one setting, and exclusion of other causes).



---

Adult Self-Report Scale-V1.1 (ASRS-V1.1) Screener

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
