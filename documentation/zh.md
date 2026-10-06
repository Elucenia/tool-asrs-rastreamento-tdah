<!-- ELUCENIA technical documentation · asrs-rastreamento-tdah · zh · no clinical/professional/rights approval -->

# ASRS v1.1（成人注意缺陷多动障碍筛查）

[条件、来源与许可](https://elucenia.org/zh/tools/asrs-rastreamento-tdah)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 1. 在完成其中最艰难的部分之后，您在处理某一项目的最后细节时是否常常有困难？

`q1`

- `0` — 从不
- `1` — 很少
- `2` — 有时
- `3` — 经常
- `4` — 很经常

### 2. 您在完成具有组织性质的任务时，是否时常有困难把事情整理安排好？

`q2`

- `0` — 从不
- `1` — 很少
- `2` — 有时
- `3` — 经常
- `4` — 很经常

### 3. 您是否时常有困难记住约会或应做的事？

`q3`

- `0` — 从不
- `1` — 很少
- `2` — 有时
- `3` — 经常
- `4` — 很经常

### 4. 如果一件事需要多动脑筋，您是否常常躲避或推延开始做它？

`q4`

- `0` — 从不
- `1` — 很少
- `2` — 有时
- `3` — 经常
- `4` — 很经常

### 5. 如果您不得不长时间坐下，您是否常常蠕动不安或者手脚动个不停？

`q5`

- `0` — 从不
- `1` — 很少
- `2` — 有时
- `3` — 经常
- `4` — 很经常

### 6. 您是否时常感到过度活跃，强迫自己做事，就像上了发条的机器?

`q6`

- `0` — 从不
- `1` — 很少
- `2` — 有时
- `3` — 经常
- `4` — 很经常

## 方法版本

ASRS v1.1/WHO 2005：A部分6项，各项特定阈值，阳性≥4

## 已记录的公式

请将暗影区内出现的选项数目相加。4个或4个以上选项说明您的症状与成年多动症相符。您最好去和保健医生谈谈，安排作一次检查。

## 限制与适用人群

用于成人注意缺陷多动障碍筛查。应区分由六项组成的A部分、18项问卷和诊断访谈。阳性结果提示需要临床评估；重新校准样本及葡萄牙语适配并不能自动验证本实现在所有语言中的有效性。

## 参考文献

- [Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med, 2005.](https://doi.org/10.1017/S0033291704002892)

- [Mattos P et al. Adaptação transcultural para o português da escala Adult Self-Report Scale para avaliação do transtorno de déficit de atenção/hiperatividade (TDAH) em adultos. Rev Psiq Clín, 2006.](https://doi.org/10.1590/S0101-60832006000400004)

- [New York University / Harvard · ASRS v1.1 six-question screener · published forms and electronic conversion conditions](https://license.tov.med.nyu.edu/product/asrs6Qscreener)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

筛查阴性

筛查工具：不能作出诊断。ADHD 需要临床评估（儿童期起病、在多个情境中受损，以及排除其他原因）。


### 2

筛查阳性：与成人 ADHD 相符的症状

筛查工具：不能作出诊断。ADHD 需要临床评估（儿童期起病、在多个情境中受损，以及排除其他原因）。


### 3

筛查阴性

筛查工具：不能作出诊断。ADHD 需要临床评估（儿童期起病、在多个情境中受损，以及排除其他原因）。


### 4

筛查阳性：与成人 ADHD 相符的症状

筛查工具：不能作出诊断。ADHD 需要临床评估（儿童期起病、在多个情境中受损，以及排除其他原因）。



---

成人自测计分1.1版(ASRS-V1.1) 筛检表

请勾选能够最佳说明您在过去6个月内的感受和行为的选框，并在下一次约谈时将填完的问卷交给您的专业保健医生，以便探讨结果。

© New York University and President and Fellows of Harvard College. All rights reserved.

© New York University and the President and Fellows of Harvard College.

[成人自测计分1.1版(ASRS-V1.1) 筛检表 · PDF](../original/zh.pdf)

1. 在完成其中最艰难的部分之后，您在处理某一项目的最后细节时是否常常有困难？

2. 您在完成具有组织性质的任务时，是否时常有困难把事情整理安排好？

3. 您是否时常有困难记住约会或应做的事？

4. 如果一件事需要多动脑筋，您是否常常躲避或推延开始做它？

5. 如果您不得不长时间坐下，您是否常常蠕动不安或者手脚动个不停？

6. 您是否时常感到过度活跃，强迫自己做事，就像上了发条的机器?

从不 · 很少 · 有时 · 经常 · 很经常

请将暗影区内出现的选项数目相加。4个或4个以上选项说明您的症状与成年多动症相符。您最好去和保健医生谈谈，安排作一次检查。
