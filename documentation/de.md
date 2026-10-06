<!-- ELUCENIA technical documentation · asrs-rastreamento-tdah · de · no clinical/professional/rights approval -->

# ASRS v1.1 (ADHS-Screening bei Erwachsenen)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/asrs-rastreamento-tdah)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### 1. Wie oft haben Sie Probleme, die letzten Feinheiten einer Arbeit zum Abschluss zu bringen, nachdem Sie die wesentlichen Punkte erledigt haben?

`q1`

- `0` — Niemals
- `1` — Selten
- `2` — Manchmal
- `3` — Oft
- `4` — Sehr oft

### 2. Wie oft fällt es Ihnen schwer, Dinge in die Reihe zu bekommen, wenn Sie an einer Aufgabe arbeiten, bei der Organisation gefragt ist?

`q2`

- `0` — Niemals
- `1` — Selten
- `2` — Manchmal
- `3` — Oft
- `4` — Sehr oft

### 3. Wie oft haben Sie Probleme, sich an Termine oder Verabredungen zu erinnern?

`q3`

- `0` — Niemals
- `1` — Selten
- `2` — Manchmal
- `3` — Oft
- `4` — Sehr oft

### 4. Wie oft vermeiden Sie oder verzögern Sie, die Aufgabe zu beginnen, wenn Sie vor einer Aufgabe stehen, bei der sehr viel Denkvermögen gefragt ist?

`q4`

- `0` — Niemals
- `1` — Selten
- `2` — Manchmal
- `3` — Oft
- `4` — Sehr oft

### 5. Wie oft sind Ihre Hände bzw. Füße bei langem Sitzen in Bewegung?

`q5`

- `0` — Niemals
- `1` — Selten
- `2` — Manchmal
- `3` — Oft
- `4` — Sehr oft

### 6. Wie oft fühlen Sie sich übermäßig aktiv und verspüren den Drang Dinge zu tun, als ob Sie von einem Motor angetrieben würden?

`q6`

- `0` — Niemals
- `1` — Selten
- `2` — Manchmal
- `3` — Oft
- `4` — Sehr oft

## Fassung der Methode

ASRS v1.1/WHO 2005: Teil A 6 Items, spezifische Schwellen, positiv≥4

## Dokumentierte Formel

Zählen Sie die Anzahl der Häkchen zusammen, die im dunklen Bereich erscheinen. Mindestens vier (4) Häkchen deuten darauf hin, dass Ihre Symptome der Erwachsenen-ADHS entsprechen. Es könnte für Sie von Nutzen sein, mit Ihrem Arzt über eine Beurteilung zu sprechen.

## Grenzen und Population

Screening auf ADHS bei Erwachsenen. Teil A mit sechs Items ist vom Fragebogen mit 18 Items und vom diagnostischen Interview zu unterscheiden. Ein positives Ergebnis zeigt die Notwendigkeit einer klinischen Beurteilung an; Rekalibrierungsstichprobe und portugiesische Anpassung validieren diese Implementierung nicht automatisch in allen Sprachen.

## Referenzen

- [Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med, 2005.](https://doi.org/10.1017/S0033291704002892)

- [Mattos P et al. Adaptação transcultural para o português da escala Adult Self-Report Scale para avaliação do transtorno de déficit de atenção/hiperatividade (TDAH) em adultos. Rev Psiq Clín, 2006.](https://doi.org/10.1590/S0101-60832006000400004)

- [New York University / Harvard · ASRS v1.1 six-question screener · published forms and electronic conversion conditions](https://license.tov.med.nyu.edu/product/asrs6Qscreener)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Negatives Screening

Screening-Instrument: stellt keine Diagnose. ADHS erfordert eine klinische Beurteilung (Beginn in der Kindheit, Beeinträchtigung in mehr als einem Kontext und Ausschluss anderer Ursachen).


### 2

Positives Screening: mit ADHS im Erwachsenenalter vereinbare Symptome

Screening-Instrument: stellt keine Diagnose. ADHS erfordert eine klinische Beurteilung (Beginn in der Kindheit, Beeinträchtigung in mehr als einem Kontext und Ausschluss anderer Ursachen).


### 3

Negatives Screening

Screening-Instrument: stellt keine Diagnose. ADHS erfordert eine klinische Beurteilung (Beginn in der Kindheit, Beeinträchtigung in mehr als einem Kontext und Ausschluss anderer Ursachen).


### 4

Positives Screening: mit ADHS im Erwachsenenalter vereinbare Symptome

Screening-Instrument: stellt keine Diagnose. ADHS erfordert eine klinische Beurteilung (Beginn in der Kindheit, Beeinträchtigung in mehr als einem Kontext und Ausschluss anderer Ursachen).



---

Screening-Test mit Selbstbeurteilungs-Skala für Erwachsene V1.1 (ASRS-V1.1)

Markieren Sie das Kästchen, das am besten beschreibt, wie Sie sich in den letzten 6 Monaten gefühlt und sich benommen haben. Geben Sie bitte beim nächsten Arzttermin den ausgefüllten Fragebogen der medizinischen Fachkraft, um die Ergebnisse zu besprechen.

© New York University and President and Fellows of Harvard College. All rights reserved.

© New York University and the President and Fellows of Harvard College.

[Screening-Test mit Selbstbeurteilungs-Skala für Erwachsene V1.1 (ASRS-V1.1) · PDF](../original/de.pdf)

1. Wie oft haben Sie Probleme, die letzten Feinheiten einer Arbeit zum Abschluss zu bringen, nachdem Sie die wesentlichen Punkte erledigt haben?

2. Wie oft fällt es Ihnen schwer, Dinge in die Reihe zu bekommen, wenn Sie an einer Aufgabe arbeiten, bei der Organisation gefragt ist?

3. Wie oft haben Sie Probleme, sich an Termine oder Verabredungen zu erinnern?

4. Wie oft vermeiden Sie oder verzögern Sie, die Aufgabe zu beginnen, wenn Sie vor einer Aufgabe stehen, bei der sehr viel Denkvermögen gefragt ist?

5. Wie oft sind Ihre Hände bzw. Füße bei langem Sitzen in Bewegung?

6. Wie oft fühlen Sie sich übermäßig aktiv und verspüren den Drang Dinge zu tun, als ob Sie von einem Motor angetrieben würden?

Niemals · Selten · Manchmal · Oft · Sehr oft

Zählen Sie die Anzahl der Häkchen zusammen, die im dunklen Bereich erscheinen. Mindestens vier (4) Häkchen deuten darauf hin, dass Ihre Symptome der Erwachsenen-ADHS entsprechen. Es könnte für Sie von Nutzen sein, mit Ihrem Arzt über eine Beurteilung zu sprechen.
