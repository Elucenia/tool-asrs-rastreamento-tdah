<!-- ELUCENIA technical documentation · asrs-rastreamento-tdah · fr · no clinical/professional/rights approval -->

# ASRS v1.1 (dépistage du TDAH chez l’adulte)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/asrs-rastreamento-tdah)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### 1. A quelle fréquence vous arrive-t-il d'avoir des difficultés à finaliser les derniers détails d'un projet une fois que les parties les plus stimulantes ont été faites ?

`q1`

- `0` — Jamais
- `1` — Rarement
- `2` — Quelquefois
- `3` — Souvent
- `4` — Très souvent

### 2. A quelle fréquence vous arrive-t-il d'avoir des difficultés à mettre les choses en ordre lorsque vous devez faire quelque chose qui demande de l'organisation ?

`q2`

- `0` — Jamais
- `1` — Rarement
- `2` — Quelquefois
- `3` — Souvent
- `4` — Très souvent

### 3. A quelle fréquence vous arrive-t-il d'avoir des difficultés à vous rappeler vos rendez-vous ou vos obligations ?

`q3`

- `0` — Jamais
- `1` — Rarement
- `2` — Quelquefois
- `3` — Souvent
- `4` — Très souvent

### 4. Quand vous devez faire quelque chose qui demande beaucoup de réflexion, à quelle fréquence vous arrive-t-il d'éviter de le faire ou de le remettre à plus tard ?

`q4`

- `0` — Jamais
- `1` — Rarement
- `2` — Quelquefois
- `3` — Souvent
- `4` — Très souvent

### 5. A quelle fréquence vous arrive-t-il de remuer ou de tortiller les mains ou les pieds lorsque vous devez rester assis pendant une période prolongée ?

`q5`

- `0` — Jamais
- `1` — Rarement
- `2` — Quelquefois
- `3` — Souvent
- `4` — Très souvent

### 6. A quelle fréquence vous arrive-t-il de vous sentir excessivement actif et contraint de faire quelque chose, comme si vous étiez entraîné malgré vous par un moteur ?

`q6`

- `0` — Jamais
- `1` — Rarement
- `2` — Quelquefois
- `3` — Souvent
- `4` — Très souvent

## Édition de la méthode

ASRS v1.1/OMS 2005 : partie A 6 items, seuils spécifiques, positif≥4

## Formule documentée

Additionnez le nombre de cases très ombrées que vous avez cochées. Quatre (4) cases cochées ou plus indiquent que les symptômes que vous présentez peuvent correspondre à ceux des troubles déficitaires de l’attention avec hyperactivité de l’adulte. Vous devriez en parler avec votre médecin et demander une évaluation.

## Limites et population

Dépistage du TDAH chez l’adulte. La partie A de six items doit être distinguée du questionnaire de 18 items et de l’entretien diagnostique. Un résultat positif indique la nécessité d’une évaluation clinique ; l’échantillon de recalibrage et l’adaptation portugaise ne valident pas automatiquement cette implémentation dans toutes les langues.

## Références

- [Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med, 2005.](https://doi.org/10.1017/S0033291704002892)

- [Mattos P et al. Adaptação transcultural para o português da escala Adult Self-Report Scale para avaliação do transtorno de déficit de atenção/hiperatividade (TDAH) em adultos. Rev Psiq Clín, 2006.](https://doi.org/10.1590/S0101-60832006000400004)

- [New York University / Harvard · ASRS v1.1 six-question screener · published forms and electronic conversion conditions](https://license.tov.med.nyu.edu/product/asrs6Qscreener)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Dépistage négatif

Instrument de dépistage : ne pose pas de diagnostic. Le TDAH nécessite une évaluation clinique (début dans l’enfance, retentissement dans plus d’un contexte et exclusion d’autres causes).


### 2

Dépistage positif : symptômes compatibles avec un TDAH chez l’adulte

Instrument de dépistage : ne pose pas de diagnostic. Le TDAH nécessite une évaluation clinique (début dans l’enfance, retentissement dans plus d’un contexte et exclusion d’autres causes).


### 3

Dépistage négatif

Instrument de dépistage : ne pose pas de diagnostic. Le TDAH nécessite une évaluation clinique (début dans l’enfance, retentissement dans plus d’un contexte et exclusion d’autres causes).


### 4

Dépistage positif : symptômes compatibles avec un TDAH chez l’adulte

Instrument de dépistage : ne pose pas de diagnostic. Le TDAH nécessite une évaluation clinique (début dans l’enfance, retentissement dans plus d’un contexte et exclusion d’autres causes).



---

Test de dépistage avec échelle d’auto-évaluation V1.1 (ASRS-V1.1)

Cochez la case qui décrit le mieux ce que vous avez ressenti et comment vous vous êtes comporté au cours des 6 derniers mois. Veuillez remettre le questionnaire rempli à votre médecin ou un autre professionnel lors de votre prochain rendez-vous afin d’en discuter les résultats.

© New York University and President and Fellows of Harvard College. All rights reserved.

© New York University and the President and Fellows of Harvard College.

[Test de dépistage avec échelle d’auto-évaluation V1.1 (ASRS-V1.1) · PDF](../original/fr.pdf)

1. A quelle fréquence vous arrive-t-il d'avoir des difficultés à finaliser les derniers détails d'un projet une fois que les parties les plus stimulantes ont été faites ?

2. A quelle fréquence vous arrive-t-il d'avoir des difficultés à mettre les choses en ordre lorsque vous devez faire quelque chose qui demande de l'organisation ?

3. A quelle fréquence vous arrive-t-il d'avoir des difficultés à vous rappeler vos rendez-vous ou vos obligations ?

4. Quand vous devez faire quelque chose qui demande beaucoup de réflexion, à quelle fréquence vous arrive-t-il d'éviter de le faire ou de le remettre à plus tard ?

5. A quelle fréquence vous arrive-t-il de remuer ou de tortiller les mains ou les pieds lorsque vous devez rester assis pendant une période prolongée ?

6. A quelle fréquence vous arrive-t-il de vous sentir excessivement actif et contraint de faire quelque chose, comme si vous étiez entraîné malgré vous par un moteur ?

Jamais · Rarement · Quelquefois · Souvent · Très souvent

Additionnez le nombre de cases très ombrées que vous avez cochées. Quatre (4) cases cochées ou plus indiquent que les symptômes que vous présentez peuvent correspondre à ceux des troubles déficitaires de l’attention avec hyperactivité de l’adulte. Vous devriez en parler avec votre médecin et demander une évaluation.
