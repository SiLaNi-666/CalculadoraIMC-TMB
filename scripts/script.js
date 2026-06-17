/* ============================================
   Calculadora IMC & TMB — Lógica completa
   ============================================ */

(function () {
  'use strict';

  // ==========================================
  // Traducciones ES / EN
  // ==========================================

  var IDIOMAS = {
    es: {
      'titulo-pagina': 'Calculadora IMC y TMB — Calcula tu Índice de Masa Corporal y Tasa Metabólica Basal',
      'og-titulo': 'Calculadora IMC y TMB — Gratuita y con medidor animado',
      'og-desc': 'Calcula tu IMC y TMB al instante. Obtén tu clasificación según la OMS con un medidor visual interactivo.',
      'tw-titulo': 'Calculadora IMC y TMB',
      'tw-desc': 'Calcula tu IMC y TMB con medidor animado. Clasificación OMS, déficit y superávit calórico.',
      'titulo': 'Calculadora de IMC & TMB',
      'subtitulo': 'Conoce tu Índice de Masa Corporal y Tasa Metabólica Basal',
      'metrico': 'Métrico',
      'imperial': 'Imperial',
      'pestana-imc': 'IMC',
      'pestana-tmb': 'TMB',
      'imc-titulo': '\u2696 Calcula tu IMC',
      'imc-desc': 'El Índice de Masa Corporal relaciona tu peso y altura para evaluar tu estado nutricional.',
      'peso': 'Peso',
      'altura': 'Altura',
      'edad': 'Edad',
      'placeholder-peso': 'Ej: 70',
      'placeholder-altura': 'Ej: 175',
      'btn-imc': 'Calcular IMC',
      'etiqueta-imc': 'IMC',
      'tabla-titulo': 'Clasificación del IMC',
      'cat-severa': 'Delgadez severa',
      'cat-moderada': 'Delgadez moderada',
      'cat-leve': 'Delgadez leve',
      'cat-normal': 'Normal',
      'cat-sobrepeso': 'Sobrepeso',
      'cat-ob1': 'Obesidad grado I',
      'cat-ob2': 'Obesidad grado II',
      'cat-ob3': 'Obesidad grado III',
      'peso-ideal-label': '\u25D9 Peso saludable para tu altura:',
      'tmb-titulo': '\u2699 Calcula tu TMB',
      'tmb-desc': 'La Tasa Metabólica Basal son las calorías que consumes en reposo. Con ella podrás planificar tu dieta con precisión.',
      'sexo': 'Sexo',
      'hombre': 'Hombre',
      'mujer': 'Mujer',
      'actividad': 'Nivel de actividad',
      'act-sed': 'Sedentario — poco o ningún ejercicio',
      'act-lig': 'Ligero — 1-3 días/semana',
      'act-mod': 'Moderado — 3-5 días/semana',
      'act-act': 'Activo — 6-7 días/semana',
      'act-ext': 'Muy activo — 2 veces/día o trabajo físico',
      'btn-tmb': 'Calcular TMB',
      'desc-tmb': 'Metabolismo basal en reposo',
      'desc-tdee': 'Gasto energético total',
      'deficit-tit': 'Déficit',
      'deficit-desc': 'kcal/día para perder',
      'mant-tit': 'Mantenimiento',
      'mant-desc': 'kcal/día para mantener tu peso',
      'super-tit': 'Superávit',
      'super-desc': 'kcal/día para ganar',
      'tmb-nota': '\u276F Nota: Estas cifras son estimaciones basadas en la ecuación Mifflin-St Jeor. Consulta a un profesional de la salud antes de iniciar cualquier dieta o plan de ejercicio.',
      'imc-que-es-titulo': '¿Qué es el IMC?',
      'imc-que-es-texto': 'El <strong>Índice de Masa Corporal (IMC)</strong> es un indicador avalado por la <strong>Organización Mundial de la Salud (OMS)</strong> que relaciona tu peso y altura para clasificar tu estado nutricional. Se calcula dividiendo el peso en kilogramos entre el cuadrado de la altura en metros (kg/m²).',
      'imc-que-es-lista': '<li><strong>Clasificación oficial OMS</strong> — 8 categorías que van desde "Delgadez severa" (&lt; 16) hasta "Obesidad grado III" (≥ 40)</li><li><strong>Rango saludable</strong> — entre 18.5 y 24.9, asociado a menor riesgo de enfermedades crónicas</li><li><strong>Herramienta universal</strong> — el método de cribado más utilizado a nivel mundial por su sencillez y fiabilidad</li>',
      'imc-importancia-titulo': '¿Por qué es importante calcular tu IMC?',
      'imc-importancia-texto': 'Conocer tu IMC es el primer paso para tomar el control de tu salud. Un IMC fuera del rango saludable se asocia con un mayor riesgo de desarrollar las siguientes enfermedades y condiciones:',
      'imc-importancia-lista': '<li><strong>Enfermedades cardiovasculares</strong> — hipertensión arterial, infarto de miocardio, insuficiencia cardíaca y accidentes cerebrovasculares</li><li><strong>Diabetes tipo 2</strong> — el exceso de grasa corporal es el principal factor de riesgo modificable</li><li><strong>Problemas articulares y osteoartritis</strong> — el sobrepeso aumenta la presión sobre rodillas, caderas y columna</li><li><strong>Apnea del sueño y trastornos respiratorios</strong> — la obesidad dificulta la respiración durante el sueño</li><li><strong>Ciertos tipos de cáncer</strong> — la OMS asocia la obesidad con mayor riesgo de cáncer de colon, mama, endometrio, hígado y riñón</li><li><strong>Reducción de la calidad y esperanza de vida</strong> — la obesidad severa puede reducir hasta 10 años la esperanza de vida</li>',
      'tmb-que-es-titulo': '¿Qué es la Tasa Metabólica Basal?',
      'tmb-que-es-texto': 'La <strong>Tasa Metabólica Basal (TMB)</strong> es la cantidad mínima de energía que tu cuerpo necesita en reposo para mantener las funciones vitales: respirar, bombear sangre, mantener la temperatura corporal y la actividad celular. Representa entre el <strong>60 y el 75 %</strong> del gasto calórico total diario.',
      'tmb-que-es-lista': '<li><strong>Ecuación Mifflin-St Jeor</strong> — reconocida por la comunidad científica como la más precisa para la población general (1990)</li><li><strong>60–75 % del gasto diario</strong> — la mayor parte de las calorías que quemas son solo para mantenerte vivo</li><li><strong>Factores determinantes</strong> — peso, altura, edad, sexo y composición corporal influyen directamente en tu TMB</li>',
      'tmb-importancia-titulo': '¿Por qué es importante calcular tu TMB?',
      'tmb-importancia-texto': 'Conocer tu TMB es la base de cualquier plan nutricional respaldado por la ciencia. Te permite entender cuánta energía gasta tu cuerpo y ajustar tu alimentación según tus objetivos:',
      'tmb-importancia-lista': '<li><strong>Calcular tu Gasto Energético Total (TDEE)</strong> — multiplicando tu TMB por tu nivel de actividad física (1.2 a 1.9) obtienes las calorías que realmente necesitas al día</li><li><strong>Perder peso de forma controlada</strong> — un déficit de ~500 kcal/día permite perder aproximadamente 0.5 kg por semana de manera segura</li><li><strong>Ganar masa muscular</strong> — un superávit de ~300–500 kcal/día proporciona la energía extra necesaria para la síntesis muscular</li><li><strong>Mantener tu peso a largo plazo</strong> — ajustar tu ingesta a tu TDEE evita el efecto rebote después de una dieta</li><li><strong>Planificar según tu actividad</strong> — desde sedentario (×1.2) hasta muy activo (×1.9), adaptas tu nutrición a tu estilo de vida real</li>',
      'ref-titulo': '📚 Fuentes y referencias',
      'ref-1': 'WHO — Obesity and overweight (clasificación del IMC y prevalencia global)',
      'ref-2': 'WHO Global Health Observatory — Body mass index (BMI) data portal',
      'ref-3': 'CDC — Adult BMI Categories (clasificación oficial de EE.UU.)',
      'ref-4': 'NHLBI / NIH — Calculate Your BMI (National Heart, Lung, and Blood Institute)',
      'ref-5': 'American Heart Association — Body Mass Index in Adults',
      'ref-6': 'PubMed / NIH — Mifflin-St Jeor original study (Am J Clin Nutr, 1990)',
      'ref-7': 'AESAN — Agencia Española de Seguridad Alimentaria y Nutrición',
      'ref-8': 'SEEN — Sociedad Española de Endocrinología y Nutrición',
      'footer': 'Calculadora IMC & TMB — 2025 — Información con fines informativos, no sustituye el consejo médico profesional.'
    },
    en: {
      'titulo-pagina': 'BMI and BMR Calculator — Calculate your Body Mass Index and Basal Metabolic Rate',
      'og-titulo': 'BMI and BMR Calculator — Free with animated gauge',
      'og-desc': 'Calculate your BMI and BMR instantly. Get WHO classification with an interactive animated gauge.',
      'tw-titulo': 'BMI and BMR Calculator',
      'tw-desc': 'Calculate your BMI and BMR with animated gauge. WHO classification, calorie deficit and surplus.',
      'titulo': 'BMI & BMR Calculator',
      'subtitulo': 'Know your Body Mass Index and Basal Metabolic Rate',
      'metrico': 'Metric',
      'imperial': 'Imperial',
      'pestana-imc': 'BMI',
      'pestana-tmb': 'BMR',
      'imc-titulo': '\u2696 Calculate your BMI',
      'imc-desc': 'Body Mass Index relates your weight and height to assess your nutritional status.',
      'peso': 'Weight',
      'altura': 'Height',
      'edad': 'Age',
      'placeholder-peso': 'e.g. 154',
      'placeholder-altura': 'e.g. 5.75',
      'btn-imc': 'Calculate BMI',
      'etiqueta-imc': 'BMI',
      'tabla-titulo': 'BMI Classification',
      'cat-severa': 'Severe underweight',
      'cat-moderada': 'Moderate underweight',
      'cat-leve': 'Mild underweight',
      'cat-normal': 'Normal',
      'cat-sobrepeso': 'Overweight',
      'cat-ob1': 'Obesity class I',
      'cat-ob2': 'Obesity class II',
      'cat-ob3': 'Obesity class III',
      'peso-ideal-label': '\u25D9 Healthy weight for your height:',
      'tmb-titulo': '\u2699 Calculate your BMR',
      'tmb-desc': 'Basal Metabolic Rate is the calories you burn at rest. Use it to plan your diet precisely.',
      'sexo': 'Sex',
      'hombre': 'Male',
      'mujer': 'Female',
      'actividad': 'Activity level',
      'act-sed': 'Sedentary — little or no exercise',
      'act-lig': 'Light — 1-3 days/week',
      'act-mod': 'Moderate — 3-5 days/week',
      'act-act': 'Active — 6-7 days/week',
      'act-ext': 'Very active — twice/day or physical work',
      'btn-tmb': 'Calculate BMR',
      'desc-tmb': 'Basal metabolic rate at rest',
      'desc-tdee': 'Total daily energy expenditure',
      'deficit-tit': 'Deficit',
      'deficit-desc': 'kcal/day to lose',
      'mant-tit': 'Maintenance',
      'mant-desc': 'kcal/day to maintain weight',
      'super-tit': 'Surplus',
      'super-desc': 'kcal/day to gain',
      'tmb-nota': '\u276F Note: These figures are estimates based on the Mifflin-St Jeor equation. Consult a healthcare professional before starting any diet or exercise plan.',
      'imc-que-es-titulo': 'What is BMI?',
      'imc-que-es-texto': '<strong>Body Mass Index (BMI)</strong> is a screening tool endorsed by the <strong>World Health Organization (WHO)</strong> that relates your weight and height to classify your nutritional status. It is calculated by dividing weight in kilograms by the square of height in meters (kg/m²).',
      'imc-que-es-lista': '<li><strong>Official WHO classification</strong> — 8 categories ranging from "Severe underweight" (&lt; 16) to "Obesity class III" (≥ 40)</li><li><strong>Healthy range</strong> — 18.5 to 24.9, associated with lower risk of chronic disease</li><li><strong>Universal screening tool</strong> — the most widely used method worldwide for its simplicity and reliability</li>',
      'imc-importancia-titulo': 'Why is it important to calculate your BMI?',
      'imc-importancia-texto': 'Knowing your BMI is the first step toward taking control of your health. A BMI outside the healthy range is associated with increased risk of developing the following conditions:',
      'imc-importancia-lista': '<li><strong>Cardiovascular disease</strong> — high blood pressure, heart attack, heart failure, and stroke</li><li><strong>Type 2 diabetes</strong> — excess body fat is the leading modifiable risk factor</li><li><strong>Joint problems and osteoarthritis</strong> — excess weight increases pressure on knees, hips, and spine</li><li><strong>Sleep apnea and respiratory disorders</strong> — obesity impairs breathing during sleep</li><li><strong>Certain types of cancer</strong> — WHO links obesity to higher risk of colon, breast, endometrial, liver, and kidney cancer</li><li><strong>Reduced quality and life expectancy</strong> — severe obesity can reduce life expectancy by up to 10 years</li>',
      'tmb-que-es-titulo': 'What is Basal Metabolic Rate?',
      'tmb-que-es-texto': 'Your <strong>Basal Metabolic Rate (BMR)</strong> is the minimum amount of energy your body needs at rest to sustain vital functions: breathing, blood circulation, body temperature regulation, and cellular activity. It accounts for <strong>60–75 %</strong> of your total daily calorie expenditure.',
      'tmb-que-es-lista': '<li><strong>Mifflin-St Jeor equation</strong> — recognized by the scientific community as the most accurate for the general population (1990)</li><li><strong>60–75 % of daily expenditure</strong> — most of the calories you burn are just to keep you alive</li><li><strong>Key determinants</strong> — weight, height, age, sex, and body composition directly influence your BMR</li>',
      'tmb-importancia-titulo': 'Why is it important to calculate your BMR?',
      'tmb-importancia-texto': 'Knowing your BMR is the foundation of any science-backed nutrition plan. It helps you understand how much energy your body uses and adjust your diet according to your goals:',
      'tmb-importancia-lista': '<li><strong>Calculate your Total Daily Energy Expenditure (TDEE)</strong> — multiply your BMR by your activity level (1.2 to 1.9) to get your actual daily calorie needs</li><li><strong>Lose weight in a controlled way</strong> — a ~500 kcal/day deficit allows a safe loss of about 0.5 kg (1 lb) per week</li><li><strong>Build muscle mass</strong> — a ~300–500 kcal/day surplus provides the extra energy needed for muscle synthesis</li><li><strong>Maintain your weight long-term</strong> — adjusting your intake to your TDEE prevents the rebound effect after a diet</li><li><strong>Plan according to your activity</strong> — from sedentary (×1.2) to very active (×1.9), adapt your nutrition to your real lifestyle</li>',
      'ref-titulo': '📚 Sources and references',
      'ref-1': 'WHO — Obesity and overweight (BMI classification and global prevalence)',
      'ref-2': 'WHO Global Health Observatory — Body mass index (BMI) data portal',
      'ref-3': 'CDC — Adult BMI Categories (official U.S. classification)',
      'ref-4': 'NHLBI / NIH — Calculate Your BMI (National Heart, Lung, and Blood Institute)',
      'ref-5': 'American Heart Association — Body Mass Index in Adults',
      'ref-6': 'PubMed / NIH — Mifflin-St Jeor original study (Am J Clin Nutr, 1990)',
      'ref-7': 'AESAN — Spanish Agency for Food Safety and Nutrition',
      'ref-8': 'SEEN — Spanish Society of Endocrinology and Nutrition',
      'footer': 'BMI & BMR Calculator — 2025 — Informational purposes only, does not substitute professional medical advice.'
    }
  };

  var CATEGORIAS_TRAD = {
    es: ['Delgadez severa','Delgadez moderada','Delgadez leve','Normal','Sobrepeso','Obesidad grado I','Obesidad grado II','Obesidad grado III'],
    en: ['Severe underweight','Moderate underweight','Mild underweight','Normal','Overweight','Obesity class I','Obesity class II','Obesity class III']
  };

  var DESC_TRAD = {
    es: [
      'Riesgo de problemas de salud severos. Consulta a un m\u00e9dico.',
      'Bajo peso importante. Busca asesoramiento nutricional.',
      'Tu peso es bajo para tu altura. Considera aumentar tu ingesta cal\u00f3rica.',
      'Est\u00e1s en un rango saludable. \u00a1Sigue as\u00ed!',
      'Tienes sobrepeso. Una dieta equilibrada y ejercicio pueden ayudarte.',
      'Obesidad grado I. Consulta a un profesional para un plan personalizado.',
      'Obesidad grado II. Es recomendable buscar atenci\u00f3n m\u00e9dica.',
      'Obesidad grado III. Requiere atenci\u00f3n m\u00e9dica especializada.'
    ],
    en: [
      'Risk of severe health problems. Consult a doctor.',
      'Significantly underweight. Seek nutritional advice.',
      'Your weight is low for your height. Consider increasing your calorie intake.',
      'You are in a healthy range. Keep it up!',
      'You are overweight. A balanced diet and exercise can help.',
      'Obesity class I. Consult a professional for a personalized plan.',
      'Obesity class II. Medical attention is recommended.',
      'Obesity class III. Requires specialized medical attention.'
    ]
  };

  var CONSEJO_TRAD = {
    es: [
      'Objetivo: aumentar peso de forma saludable. Prioriza prote\u00ednas y grasas saludables.',
      'Objetivo: mantener. Combina ejercicio regular con una dieta variada.',
      'Objetivo: perder peso. D\u00e9ficit de 300-500 kcal/d\u00eda y ejercicio aer\u00f3bico.',
      'Objetivo: reducci\u00f3n significativa. Supervisi\u00f3n m\u00e9dica y cambios en el estilo de vida.'
    ],
    en: [
      'Goal: gain weight healthily. Prioritize protein and healthy fats.',
      'Goal: maintain. Combine regular exercise with a varied diet.',
      'Goal: lose weight. Deficit of 300-500 kcal/day and aerobic exercise.',
      'Goal: significant reduction. Medical supervision and lifestyle changes.'
    ]
  };

  // ==========================================
  // Estado de la aplicación
  // ==========================================

  var idiomaActual = localStorage.getItem('idioma') || 'es';
  var unidadesActual = localStorage.getItem('unidades') || 'metrico';
  var modoOscuro = localStorage.getItem('tema') === 'oscuro';

  // ==========================================
  // Constantes
  // ==========================================

  var CATEGORIAS_IMC = [
    { min: 0,    max: 16,   idx: 0 },
    { min: 16,   max: 17,   idx: 1 },
    { min: 17,   max: 18.5, idx: 2 },
    { min: 18.5, max: 25,   idx: 3 },
    { min: 25,   max: 30,   idx: 4 },
    { min: 30,   max: 35,   idx: 5 },
    { min: 35,   max: 40,   idx: 6 },
    { min: 40,   max: 99,   idx: 7 },
  ];

  var COLORES_CATEGORIA = ['#8b5cf6','#3b82f6','#f59e0b','#10b981','#f59e0b','#f97316','#ef4444','#dc2626'];

  var RADIO_MEDIDOR = 120;
  var LONGITUD_MEDIDOR = 2 * Math.PI * RADIO_MEDIDOR * 0.75;
  var IMC_MIN = 10;
  var IMC_MAX = 45;

  // ==========================================
  // Referencias DOM
  // ==========================================

  var pestanas = document.querySelectorAll('.btn-pestana');
  var paneles = {
    imc: document.getElementById('panel-imc'),
    tmb: document.getElementById('panel-tmb'),
  };

  var formularioIMC = document.getElementById('formulario-imc');
  var pesoIMC = document.getElementById('peso-imc');
  var alturaIMC = document.getElementById('altura-imc');
  var resultadoIMC = document.getElementById('resultado-imc');
  var rellenoMedidor = document.getElementById('relleno-medidor');
  var valorMedidor = document.getElementById('valor-medidor');
  var categoriaIMC = document.getElementById('categoria-imc');
  var detalleIMC = document.getElementById('detalle-imc');
  var rangoPeso = document.getElementById('rango-peso-ideal');
  var textoRangoPeso = document.getElementById('texto-rango-peso');
  var filasTabla = document.querySelectorAll('.fila-tabla');

  var formularioTMB = document.getElementById('formulario-tmb');
  var pesoTMB = document.getElementById('peso-tmb');
  var alturaTMB = document.getElementById('altura-tmb');
  var edadTMB = document.getElementById('edad-tmb');
  var radiosSexo = document.querySelectorAll('input[name="sexo"]');
  var actividadTMB = document.getElementById('actividad-tmb');
  var resultadoTMB = document.getElementById('resultado-tmb');
  var tmbValor = document.getElementById('tmb-valor');
  var tdeeValor = document.getElementById('tdee-valor');
  var deficitValor = document.getElementById('deficit-valor');
  var perdidaValor = document.getElementById('perdida-valor');
  var mantValor = document.getElementById('mant-valor');
  var superavitValor = document.getElementById('superavit-valor');
  var gananciaValor = document.getElementById('ganancia-valor');

  var btnModoOscuro = document.getElementById('btn-modo-oscuro');
  var iconoModo = document.getElementById('icono-modo');
  var selectorIdioma = document.getElementById('selector-idioma');
  var pistaIdioma = document.getElementById('pista-idioma');
  var deslizadorIdioma = document.getElementById('deslizador-idioma');
  var SVG_BANDERA_ES = '<svg class="bandera" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#C60B1E"/><rect y="5" width="30" height="10" fill="#FFC400"/></svg>';
  var SVG_BANDERA_EN = '<svg class="bandera" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#B22234"/><rect y="2.86" width="30" height="2.86" fill="#fff"/><rect y="8.57" width="30" height="2.86" fill="#fff"/><rect y="14.29" width="30" height="2.86" fill="#fff"/><rect width="12" height="11.43" fill="#3C3B6E"/></svg>';
  var botonesUnidad = document.querySelectorAll('.herramienta-unidad');
  var unidadPesoIMC = document.getElementById('unidad-peso-imc');
  var unidadAlturaIMC = document.getElementById('unidad-altura-imc');
  var unidadInputPesoIMC = document.getElementById('unidad-input-peso-imc');
  var unidadInputAlturaIMC = document.getElementById('unidad-input-altura-imc');
  var unidadPesoTMB = document.getElementById('unidad-peso-tmb');
  var unidadAlturaTMB = document.getElementById('unidad-altura-tmb');
  var unidadInputPesoTMB = document.getElementById('unidad-input-peso-tmb');
  var unidadInputAlturaTMB = document.getElementById('unidad-input-altura-tmb');
  var unidadPerdida = document.getElementById('unidad-perdida');
  var unidadGanancia = document.getElementById('unidad-ganancia');
  var refToggle = document.getElementById('ref-toggle');
  var refLista = document.getElementById('ref-lista');

  var medidorInicializado = false;

  // ==========================================
  // Inicialización
  // ==========================================

  function init() {
    aplicarIdioma(idiomaActual);
    aplicarUnidades(unidadesActual);
    aplicarModoOscuro(modoOscuro);
    iniciarMedidor();
    actualizarToggleIdioma(idiomaActual);
    marcarActivo(botonesUnidad, 'data-unidad', unidadesActual);
    if (refToggle && refLista) {
      refToggle.addEventListener('click', function () {
        var expanded = refLista.style.display !== 'none';
        refLista.style.display = expanded ? 'none' : 'block';
        refToggle.innerHTML = IDIOMAS[idiomaActual]['ref-titulo'] + (expanded ? ' \u25B6' : ' \u25BC');
      });
    }
  }

  // ==========================================
  // Pestañas
  // ==========================================

  pestanas.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pestana = this.getAttribute('data-pestana');
      pestanas.forEach(function (b) { b.classList.remove('activo'); b.setAttribute('aria-selected', 'false'); });
      this.classList.add('activo'); this.setAttribute('aria-selected', 'true');
      Object.keys(paneles).forEach(function (key) { paneles[key].classList.remove('activo'); });
      paneles[pestana].classList.add('activo');
    });
  });

  // ==========================================
  // Modo oscuro
  // ==========================================

  btnModoOscuro.addEventListener('click', function () {
    modoOscuro = !modoOscuro;
    aplicarModoOscuro(modoOscuro);
    localStorage.setItem('tema', modoOscuro ? 'oscuro' : 'claro');
  });

  function aplicarModoOscuro(oscuro) {
    document.documentElement.setAttribute('data-tema', oscuro ? 'oscuro' : 'claro');
    iconoModo.textContent = oscuro ? '\u2600' : '\u2610';
  }

  // ==========================================
  // Idioma — Toggle deslizante
  // ==========================================

  function actualizarToggleIdioma(lang) {
    if (lang === 'en') {
      selectorIdioma.classList.add('en');
      deslizadorIdioma.innerHTML = SVG_BANDERA_EN;
      selectorIdioma.setAttribute('aria-checked', 'false');
      selectorIdioma.setAttribute('aria-label', 'Switch to Spanish');
    } else {
      selectorIdioma.classList.remove('en');
      deslizadorIdioma.innerHTML = SVG_BANDERA_ES;
      selectorIdioma.setAttribute('aria-checked', 'true');
      selectorIdioma.setAttribute('aria-label', 'Cambiar a ingl\u00e9s');
    }
  }

  pistaIdioma.addEventListener('click', function () {
    var lang = idiomaActual === 'es' ? 'en' : 'es';
    idiomaActual = lang;
    localStorage.setItem('idioma', lang);
    actualizarToggleIdioma(lang);
    aplicarIdioma(lang);
  });

  function aplicarIdioma(lang) {
    var t = IDIOMAS[lang];
    if (!t) return;

    var elementos = document.querySelectorAll('[data-i18n]');
    elementos.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else if (el.tagName === 'META') {
          el.setAttribute('content', t[key]);
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });

    var attrEls = document.querySelectorAll('[data-i18n-attr]');
    attrEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-key');
      if (t[key]) el.setAttribute(el.getAttribute('data-i18n-attr'), t[key]);
    });

    document.documentElement.lang = lang;
    document.documentElement.setAttribute('lang', lang);

    if (refToggle) {
      var expanded = refLista && refLista.style.display === 'block';
      refToggle.innerHTML = t['ref-titulo'] + (expanded ? ' \u25BC' : ' \u25B6');
    }
  }

  // ==========================================
  // Unidades
  // ==========================================

  botonesUnidad.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var unidad = this.getAttribute('data-unidad');
      if (unidad === unidadesActual) return;
      unidadesActual = unidad;
      localStorage.setItem('unidades', unidad);
      marcarActivo(botonesUnidad, 'data-unidad', unidad);
      aplicarUnidades(unidad);
    });
  });

  function aplicarUnidades(unidad) {
    var esImperial = unidad === 'imperial';
    var etiqPeso = esImperial ? '(lbs)' : '(kg)';
    var etiqAltura = esImperial ? '(ft)' : '(cm)';
    var phPeso = esImperial ? 'Ej: 154' : 'Ej: 70';
    var phAltura = esImperial ? 'Ej: 5.75' : 'Ej: 175';
    var uPeso = esImperial ? 'lbs' : 'kg';
    var uAltura = esImperial ? 'ft' : 'cm';
    var uPerdida = esImperial ? 'lbs' : 'kg';

    if (unidadPesoIMC) unidadPesoIMC.textContent = etiqPeso;
    if (unidadAlturaIMC) unidadAlturaIMC.textContent = etiqAltura;
    if (unidadInputPesoIMC) unidadInputPesoIMC.textContent = uPeso;
    if (unidadInputAlturaIMC) unidadInputAlturaIMC.textContent = uAltura;
    if (unidadPesoTMB) unidadPesoTMB.textContent = etiqPeso;
    if (unidadAlturaTMB) unidadAlturaTMB.textContent = etiqAltura;
    if (unidadInputPesoTMB) unidadInputPesoTMB.textContent = uPeso;
    if (unidadInputAlturaTMB) unidadInputAlturaTMB.textContent = uAltura;

    if (pesoIMC) pesoIMC.placeholder = phPeso;
    if (pesoTMB) pesoTMB.placeholder = phPeso;
    if (alturaIMC) alturaIMC.placeholder = phAltura;
    if (alturaTMB) alturaTMB.placeholder = phAltura;

    if (unidadPerdida) unidadPerdida.textContent = uPerdida;
    if (unidadGanancia) unidadGanancia.textContent = uPerdida;
  }

  // ==========================================
  // Utilidades
  // ==========================================

  function marcarActivo(lista, attr, valor) {
    lista.forEach(function (el) {
      el.classList.remove('activa');
      if (el.getAttribute(attr) === valor) el.classList.add('activa');
    });
  }

  function obtenerSexo() {
    var val = 'hombre';
    radiosSexo.forEach(function (r) { if (r.checked) val = r.value; });
    return val;
  }

  function aNumero(val) { var n = parseFloat(val); return isNaN(n) ? null : n; }

  function limitar(val, min, max) { return Math.min(Math.max(val, min), max); }

  function obtenerValorEntrada(input, esImperial, esPeso) {
    var val = aNumero(input.value);
    if (val === null || val <= 0) return null;
    if (esImperial) return esPeso ? val * 0.453592 : val * 30.48;
    return val;
  }

  // ==========================================
  // Cálculo IMC
  // ==========================================

  function calcularIMC(peso, alturaCm) {
    return peso / Math.pow(alturaCm / 100, 2);
  }

  function obtenerCategoriaIMC(imc) {
    for (var i = 0; i < CATEGORIAS_IMC.length; i++) {
      if (imc >= CATEGORIAS_IMC[i].min && imc < CATEGORIAS_IMC[i].max) return CATEGORIAS_IMC[i];
    }
    return CATEGORIAS_IMC[CATEGORIAS_IMC.length - 1];
  }

  function descripcionIMC(imc) {
    var idx = imc < 16 ? 0 : imc < 17 ? 1 : imc < 18.5 ? 2 : imc < 25 ? 3 : imc < 30 ? 4 : imc < 35 ? 5 : imc < 40 ? 6 : 7;
    return DESC_TRAD[idiomaActual] ? DESC_TRAD[idiomaActual][idx] : DESC_TRAD['es'][idx];
  }

  function consejoIMC(imc) {
    var idx = imc < 18.5 ? 0 : imc < 25 ? 1 : imc < 30 ? 2 : 3;
    return CONSEJO_TRAD[idiomaActual] ? CONSEJO_TRAD[idiomaActual][idx] : CONSEJO_TRAD['es'][idx];
  }

  // ==========================================
  // Medidor SVG
  // ==========================================

  function iniciarMedidor() {
    if (!rellenoMedidor) return;
    rellenoMedidor.style.strokeDasharray = LONGITUD_MEDIDOR + ' ' + LONGITUD_MEDIDOR;
    rellenoMedidor.style.strokeDashoffset = LONGITUD_MEDIDOR;
    medidorInicializado = true;
  }

  function fijarMedidor(imc) {
    if (!medidorInicializado) iniciarMedidor();
    var progreso = limitar((imc - IMC_MIN) / (IMC_MAX - IMC_MIN), 0, 1);
    var destino = LONGITUD_MEDIDOR * (1 - progreso);
    void rellenoMedidor.offsetWidth;
    rellenoMedidor.style.strokeDashoffset = destino;
    animarContador(valorMedidor, 0, imc, 1200, 1);
  }

  function animarContador(el, inicio, fin, duracion, decimales) {
    var t0 = null, dec = decimales || 0;
    function paso(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / duracion, 1);
      var s = 1 - Math.pow(1 - p, 3);
      el.textContent = (inicio + (fin - inicio) * s).toFixed(dec);
      if (p < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  // ==========================================
  // Rango peso ideal
  // ==========================================

  function mostrarPesoIdeal(alturaCm, pesoActual) {
    var alturaM = alturaCm / 100;
    var minPeso = 18.5 * alturaM * alturaM;
    var maxPeso = 24.9 * alturaM * alturaM;
    var esImperial = unidadesActual === 'imperial';
    var unidad = esImperial ? 'lbs' : 'kg';
    var minMostrar = esImperial ? (minPeso / 0.453592).toFixed(1) : minPeso.toFixed(1);
    var maxMostrar = esImperial ? (maxPeso / 0.453592).toFixed(1) : maxPeso.toFixed(1);
    textoRangoPeso.textContent = minMostrar + ' - ' + maxMostrar + ' ' + unidad;
    rangoPeso.style.display = 'block';
  }

  // ==========================================
  // Formulario IMC
  // ==========================================

  formularioIMC.addEventListener('submit', function (e) {
    e.preventDefault();

    var esImperial = unidadesActual === 'imperial';
    var peso = obtenerValorEntrada(pesoIMC, esImperial, true);
    var altura = obtenerValorEntrada(alturaIMC, esImperial, false);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
      mostrarError(formularioIMC, idiomaActual === 'en' ? 'Please enter valid values.' : 'Por favor, introduce valores v\u00e1lidos.');
      return;
    }

    var imc = calcularIMC(peso, altura);
    var imcR = Math.round(imc * 100) / 100;
    var cat = obtenerCategoriaIMC(imc);

    resultadoIMC.style.display = 'block';
    resultadoIMC.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    fijarMedidor(imcR);

    var trad = CATEGORIAS_TRAD[idiomaActual] || CATEGORIAS_TRAD['es'];
    categoriaIMC.textContent = trad[cat.idx];
    categoriaIMC.style.color = COLORES_CATEGORIA[cat.idx];
    detalleIMC.textContent = descripcionIMC(imcR);

    var consejo = document.createElement('p');
    consejo.className = 'consejo-resultado';
    consejo.textContent = consejoIMC(imcR);
    var existente = resultadoIMC.querySelector('.consejo-resultado');
    if (existente) existente.remove();
    detalleIMC.insertAdjacentElement('afterend', consejo);

    mostrarPesoIdeal(altura, peso);

    filasTabla.forEach(function (fila) {
      fila.classList.remove('resaltado');
      var min = parseFloat(fila.getAttribute('data-min'));
      var max = parseFloat(fila.getAttribute('data-max'));
      if (imcR >= min && imcR < max) fila.classList.add('resaltado');
    });
  });

  function mostrarError(formulario, mensaje) {
    var e = formulario.querySelector('.error-formulario');
    if (e) e.remove();
    var err = document.createElement('div');
    err.className = 'error-formulario';
    err.textContent = mensaje;
    var btn = formulario.querySelector('.btn');
    btn.parentNode.insertBefore(err, btn.nextSibling);
    setTimeout(function () { if (err.parentNode) err.remove(); }, 4000);
  }

  // ==========================================
  // TMB (Mifflin-St Jeor)
  // ==========================================

  function calcularTMB(peso, altura, edad, sexo) {
    var base = 10 * peso + 6.25 * altura - 5 * edad;
    return sexo === 'hombre' ? base + 5 : base - 161;
  }

  function cambioSemanal(calorias) { return calorias * 7 / 7700; }

  // ==========================================
  // Formulario TMB
  // ==========================================

  formularioTMB.addEventListener('submit', function (e) {
    e.preventDefault();

    var esImperial = unidadesActual === 'imperial';
    var peso = obtenerValorEntrada(pesoTMB, esImperial, true);
    var altura = obtenerValorEntrada(alturaTMB, esImperial, false);
    var edad = aNumero(edadTMB.value);
    var sexo = obtenerSexo();
    var factor = aNumero(actividadTMB.value);

    if (!peso || !altura || !edad || peso <= 0 || altura <= 0 || edad <= 0) {
      mostrarError(formularioTMB, idiomaActual === 'en' ? 'Please fill all fields with valid values.' : 'Por favor, completa todos los campos.');
      return;
    }

    var tmb = Math.round(calcularTMB(peso, altura, edad, sexo));
    var tdee = Math.round(tmb * factor);
    var deficit = Math.round(tdee - 500);
    var perdida = cambioSemanal(-500);
    var superavit = Math.round(tdee + 500);
    var ganancia = cambioSemanal(500);

    resultadoTMB.style.display = 'block';
    resultadoTMB.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    animarContador(tmbValor, 0, tmb, 1000, 0);
    animarContador(tdeeValor, 0, tdee, 1200, 0);

    deficitValor.textContent = deficit + ' kcal';
    mantValor.textContent = tdee + ' kcal';
    superavitValor.textContent = superavit + ' kcal';
    perdidaValor.textContent = Math.abs(perdida).toFixed(2);
    gananciaValor.textContent = ganancia.toFixed(2);
  });

  // ==========================================
  // Arranque
  // ==========================================

  init();

})();
