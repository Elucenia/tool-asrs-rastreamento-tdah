/* tool-asrs-rastreamento-tdah · ELUCENIA · https://github.com/Elucenia/tool-asrs-rastreamento-tdah
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"asrs-rastreamento-tdah","title":"ASRS v1.1 (rastreamento de TDAH no adulto)","fields":[["q1","Nos últimos 6 meses…<br>1. Com que frequência você deixa um projeto pela metade depois de já ter feito as partes mais difíceis?","radio",{"opts":{"0":"Nunca","1":"Raramente","2":"Algumas vezes","3":"Frequentemente","4":"Muito frequentemente"}}],["q2","2. Com que frequência você tem dificuldade para fazer um trabalho que exige organização?","radio",{"opts":{"0":"Nunca","1":"Raramente","2":"Algumas vezes","3":"Frequentemente","4":"Muito frequentemente"}}],["q3","3. Com que frequência você tem dificuldade para lembrar de compromissos ou obrigações?","radio",{"opts":{"0":"Nunca","1":"Raramente","2":"Algumas vezes","3":"Frequentemente","4":"Muito frequentemente"}}],["q4","4. Quando você precisa fazer algo que exige muita concentração, com que frequência você evita ou adia o início?","radio",{"opts":{"0":"Nunca","1":"Raramente","2":"Algumas vezes","3":"Frequentemente","4":"Muito frequentemente"}}],["q5","5. Com que frequência você fica se mexendo na cadeira ou balançando as mãos ou os pés quando precisa ficar sentado(a) por muito tempo?","radio",{"opts":{"0":"Nunca","1":"Raramente","2":"Algumas vezes","3":"Frequentemente","4":"Muito frequentemente"}}],["q6","6. Com que frequência você se sente ativo(a) demais e necessitando fazer coisas, como se estivesse “com um motor ligado”?","radio",{"opts":{"0":"Nunca","1":"Raramente","2":"Algumas vezes","3":"Frequentemente","4":"Muito frequentemente"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';

e.def("asrs-rastreamento-tdah",function(e){for(var o=0,a=1;a<=6;a++)(+e["q"+a]||0)>=(a<=3?2:3)&&o++;return{main:[String(o),"de 6 itens"],label:"Itens na faixa sombreada",level:o>=4?"high":"low",verdict:o>=4?"Rastreamento positivo: sintomas compatíveis com TDAH no adulto":"Rastreamento negativo",note:"Instrumento de rastreamento: não faz diagnóstico. TDAH exige avaliação clínica (início na infância, prejuízo em mais de um contexto e exclusão de outras causas).",raw:{score:o}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
