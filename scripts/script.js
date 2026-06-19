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
      'titulo-pagina': 'MetriBody | Calculadora IMC, TMB y Métricas Corporales',
      'og-titulo': 'MetriBody — Calculadora IMC y TMB gratis con medidor animado',
      'og-desc': 'Calcula tu IMC, TMB, TDEE y métricas corporales al instante. Clasificación OMS, medidor interactivo y déficit calórico.',
      'tw-titulo': 'MetriBody — Calculadora IMC y TMB',
      'tw-desc': 'Calcula tu IMC, TMB y más con medidor animado. Clasificación OMS y déficit calórico.',
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
      'imc-que-es-titulo': '¿Qué es el Índice de Masa Corporal?',
      'imc-que-es-texto': 'El <strong>Índice de Masa Corporal (IMC)</strong> es una medida estandarizada que relaciona el peso de una persona con su altura mediante la fórmula peso (kg) / altura² (m). La <strong>Organización Mundial de la Salud (OMS)</strong> lo reconoce como herramienta de cribado poblacional para clasificar el estado ponderal en adultos, basándose en estudios epidemiológicos que asocian cada rango con riesgos específicos de enfermedades crónicas. Se calcula de forma idéntica para hombres y mujeres mayores de 20 años. Aunque no mide directamente el porcentaje de grasa corporal, el IMC presenta una correlación moderada-alta con mediciones directas como la plicometría o la absorciometría DEXA. Por su sencillez, bajo coste y nula invasividad, es el método más utilizado en atención primaria y salud pública a nivel global. Sin embargo, tiene limitaciones en personas con alta masa muscular (deportistas), adultos mayores con sarcopenia y ciertos grupos étnicos como la población asiática, donde los puntos de corte pueden diferir.',
      'imc-que-es-lista': '<li><strong>Clasificación oficial OMS</strong> — ocho categorías que abarcan desde delgadez severa (&lt; 16) hasta obesidad grado III (≥ 40), cada una con implicaciones clínicas distintas.</li><li><strong>Rango de normopeso</strong> — entre 18.5 y 24.9, se asocia con la menor incidencia de enfermedades cardiovasculares, diabetes tipo 2 y ciertos tipos de cáncer según la OMS y la American Heart Association.</li><li><strong>Indicador de cribado, no diagnóstico</strong> — los profesionales sanitarios lo complementan con el perímetro de cintura, análisis de sangre y la historia clínica del paciente para obtener una valoración completa.</li>',
      'imc-importancia-titulo': '¿Por qué es importante conocer tu IMC?',
      'imc-importancia-texto': 'Mantener un IMC dentro del rango saludable es uno de los factores modificables más determinantes para la salud a largo plazo. La evidencia científica demuestra que el exceso de peso incrementa significativamente el riesgo de desarrollar múltiples patologías, mientras que un IMC inferior a 18.5 también conlleva riesgos asociados a la desnutrición y la fragilidad ósea. A continuación se detallan las principales condiciones relacionadas con un IMC alterado:',
      'imc-importancia-lista': '<li><strong>Enfermedades cardiovasculares</strong> — la obesidad aumenta la carga de trabajo del corazón, eleva la presión arterial y los niveles de colesterol LDL, y duplica el riesgo de insuficiencia cardíaca, infarto de miocardio y accidente cerebrovascular.</li><li><strong>Diabetes tipo 2</strong> — aproximadamente el 80-90 % de las personas con diabetes tipo 2 presentan sobrepeso u obesidad. El tejido adiposo en exceso provoca resistencia a la insulina, mecanismo subyacente de la enfermedad.</li><li><strong>Problemas articulares y osteoartritis</strong> — cada kilogramo de exceso de peso supone una carga adicional de 4 kg sobre las rodillas, acelerando la degradación del cartílago articular y limitando la movilidad.</li><li><strong>Apnea obstructiva del sueño</strong> — la acumulación de grasa en el cuello estrecha las vías respiratorias, provocando pausas respiratorias nocturnas que afectan a la calidad del sueño y aumentan el riesgo cardiovascular.</li><li><strong>Riesgo oncológico elevado</strong> — la OMS asocia la obesidad con un mayor riesgo de cáncer de esófago, colon, mama postmenopáusica, endometrio, riñón e hígado. Se estima que el 25 % de los casos de cáncer a nivel mundial guardan relación con el exceso de peso.</li><li><strong>Reducción de la esperanza de vida</strong> — la obesidad severa (IMC ≥ 40) puede reducir entre 5 y 10 años la esperanza de vida, un impacto comparable al del tabaquismo crónico.</li>',
      'tmb-que-es-titulo': '¿Qué es la Tasa Metabólica Basal?',
      'tmb-que-es-texto': 'La <strong>Tasa Metabólica Basal (TMB)</strong> es la cantidad mínima de energía que el cuerpo humano necesita para mantener las funciones vitales en estado de reposo absoluto: respiración, circulación sanguínea, termorregulación, actividad neuronal y renovación celular. Representa entre el <strong>60 % y el 75 %</strong> del gasto energético total diario en personas sedentarias, siendo con diferencia el componente más significativo del balance energético. La ecuación de <strong>Mifflin-St Jeor</strong>, publicada en 1990 tras un estudio con 498 individuos sanos de entre 19 y 78 años, es la fórmula predictiva más precisa validada por la comunidad científica para la población general. La Academia de Nutrición y Dietética de Estados Unidos recomienda su uso como primera opción clínica cuando no se dispone de calorimetría indirecta. A diferencia del IMC, la TMB sí requiere datos de sexo y edad porque el metabolismo basal difiere significativamente entre hombres y mujeres y disminuye entre un 1 % y un 2 % por década a partir de los 20 años.',
      'tmb-que-es-lista': '<li><strong>Ecuación Mifflin-St Jeor (1990)</strong> — TMB hombres = 10 × peso (kg) + 6.25 × altura (cm) − 5 × edad + 5; TMB mujeres = 10 × peso (kg) + 6.25 × altura (cm) − 5 × edad − 161. Basada en 498 sujetos sanos medida por calorimetría indirecta.</li><li><strong>60-75 % del gasto diario</strong> — muy por encima del efecto termogénico de los alimentos (~10 %) y la actividad física (~15-30 %). Esta proporción convierte a la TMB en el factor clave de cualquier intervención nutricional.</li><li><strong>Factores determinantes</strong> — peso corporal, altura, edad (declina ~1-2 % por década), sexo (los hombres presentan mayor masa magra) y composición corporal (a más músculo, mayor TMB).</li>',
      'tmb-importancia-titulo': '¿Por qué es importante calcular tu TMB?',
      'tmb-importancia-texto': 'Conocer tu TMB es el punto de partida de cualquier estrategia nutricional basada en la evidencia. A partir de ella se calcula el Gasto Energético Total (TDEE) multiplicándola por un factor de actividad física, lo que permite diseñar planes de alimentación personalizados con objetivos concretos. Estos son los escenarios más habituales:',
      'tmb-importancia-lista': '<li><strong>Cálculo del TDEE</strong> — multiplica tu TMB por el factor de actividad: 1.2 (sedentario), 1.375 (ligero), 1.55 (moderado), 1.725 (activo) o 1.9 (muy activo). El resultado son las calorías reales que necesitas cada día según tu estilo de vida.</li><li><strong>Pérdida de peso controlada</strong> — un déficit calórico de aproximadamente 500 kcal diarias respecto al TDEE permite perder unos 0.5 kg por semana, ritmo considerado seguro y sostenible por la comunidad médica.</li><li><strong>Ganancia de masa muscular</strong> — un superávit controlado de 300-500 kcal diarias proporciona la energía extra necesaria para la síntesis proteica sin acumular exceso de grasa.</li><li><strong>Mantenimiento a largo plazo</strong> — ajustar la ingesta calórica al valor exacto del TDEE evita el temido efecto rebote tras una dieta y facilita la adherencia a hábitos saludables.</li><li><strong>Planificación individualizada</strong> — desde la vida sedentaria (factor 1.2) hasta el entrenamiento de alta intensidad (factor 1.9), la TMB permite adaptar la nutrición al gasto energético real de cada persona.</li>',
      'ref-titulo': '📚 Fuentes y referencias',
      'ref-1': 'WHO — Obesity and overweight (clasificación del IMC y prevalencia global)',
      'ref-2': 'WHO Global Health Observatory — Body mass index (BMI) data portal',
      'ref-3': 'CDC — Adult BMI Categories (clasificación oficial de EE.UU.)',
      'ref-4': 'NHLBI / NIH — Calculate Your BMI (National Heart, Lung, and Blood Institute)',
      'ref-5': 'American Heart Association — Body Mass Index in Adults',
      'ref-6': 'PubMed / NIH — Mifflin-St Jeor original study (Am J Clin Nutr, 1990)',
      'ref-7': 'AESAN — Agencia Española de Seguridad Alimentaria y Nutrición',
      'ref-8': 'SEEN — Sociedad Española de Endocrinología y Nutrición',
      // Nav
      'nav-inicio': 'Inicio',
      'nav-imc': 'IMC',
      'nav-tmb': 'TMB',
      'nav-herramientas': 'Herramientas',
      'herramientas-titulo': 'Herramientas',
      'nav-tdee': 'TDEE',
      'nav-macros': 'Macros',
      'nav-calorias': 'Calorías',
      'nav-grasa': 'Grasa Corporal',
      'nav-faq': 'FAQ',
      // Page SEO — IMC
      'imc-titulo-pagina': 'Calculadora de IMC — Calcula tu Índice de Masa Corporal | MetriBody',
      'imc-og-titulo': 'Calculadora de IMC gratuita — MetriBody',
      'imc-og-desc': 'Calcula tu IMC al instante. Clasificación OMS con medidor animado, peso saludable y más.',
      'imc-tw-titulo': 'Calculadora de IMC — MetriBody',
      'imc-tw-desc': 'Calcula tu IMC gratis. Clasificación OMS y medidor animado.',
      // Page SEO — TMB
      'tmb-titulo-pagina': 'Calculadora de TMB — Calcula tu Tasa Metabólica Basal | MetriBody',
      'tmb-og-titulo': 'Calculadora de TMB gratuita — MetriBody',
      'tmb-og-desc': 'Calcula tu TMB y TDEE gratis. Ecuación Mifflin-St Jeor, déficit calórico y más.',
      'tmb-tw-titulo': 'Calculadora de TMB — MetriBody',
      'tmb-tw-desc': 'Calcula tu TMB gratis. TDEE, déficit y superávit calórico.',
      // Hero
      'hero-titulo': 'Tu centro de métricas corporales completo',
      'hero-subtitulo': 'Calcula tu IMC, TMB, TDEE y más. Herramientas gratuitas basadas en evidencia científica para conocer tu cuerpo.',
      'hero-cta-imc': 'Calcular IMC',
      'hero-cta-tmb': 'Calcular TMB',
      // Tool cards
      'tarjeta-imc-titulo': 'Calculadora de IMC',
      'tarjeta-imc-desc': 'Índice de Masa Corporal — clasificación OMS con medidor animado.',
      'tarjeta-tmb-titulo': 'Calculadora de TMB',
      'tarjeta-tmb-desc': 'Tasa Metabólica Basal — calorías en reposo con ecuación Mifflin-St Jeor.',
      'tarjeta-tdee-titulo': 'Calculadora TDEE',
      'tarjeta-tdee-desc': 'Gasto Energético Total — descubre tus calorías diarias reales según tu actividad.',
      'tarjeta-macros-titulo': 'Calculadora de Macros',
      'tarjeta-macros-desc': 'Distribución de macronutrientes — proteínas, carbohidratos y grasas personalizados.',
      'tarjeta-calorias-titulo': 'Calculadora de Calorías',
      'tarjeta-calorias-desc': 'Necesidades calóricas diarias — déficit, mantenimiento y superávit.',
      'tarjeta-grasa-titulo': 'Grasa Corporal',
      'tarjeta-grasa-desc': 'Porcentaje de grasa corporal — estimación por pliegues cutáneos y perímetros.',
      'proximamente': 'Próximamente',
      // FAQ
      'faq-titulo': 'Preguntas Frecuentes',
      'faq-q1': '¿Qué es el IMC y cómo se calcula?',
      'faq-a1': 'El Índice de Masa Corporal (IMC) es una medida que relaciona tu peso y altura mediante la fórmula: peso (kg) / altura² (m). Se usa como herramienta de cribado para clasificar el peso en adultos según los rangos establecidos por la OMS.',
      'faq-q2': '¿Qué es la TMB y por qué es importante?',
      'faq-a2': 'La Tasa Metabólica Basal (TMB) son las calorías que tu cuerpo quema en reposo absoluto para mantener funciones vitales. Conocerla es el primer paso para diseñar una dieta personalizada, ya que representa entre el 60-75 % del gasto energético total.',
      'faq-q3': '¿Cuál es la diferencia entre IMC y TMB?',
      'faq-a3': 'El IMC mide la relación entre peso y altura para evaluar si tu peso es saludable. La TMB mide la energía que consumes en reposo. Mientras el IMC te dice "cómo estás", la TMB te dice "cuánta energía necesitas". Son herramientas complementarias.',
      'faq-q4': '¿Cómo puedo calcular mi déficit calórico?',
      'faq-a4': 'Primero calcula tu TMB, multiplícala por tu factor de actividad para obtener tu TDEE, y resta 300-500 kcal. Ese rango es un déficit seguro para perder peso de forma gradual sin perder masa muscular significativa.',
      'faq-q5': '¿El IMC es fiable para deportistas?',
      'faq-a5': 'El IMC tiene limitaciones en personas con alta masa muscular, ya que no distingue entre peso magro y graso. Un deportista puede tener un IMC alto sin tener exceso de grasa. En estos casos se recomienda complementar con medición de pliegues o bioimpedancia.',
      'faq-q6': '¿Con qué frecuencia debo calcular mi IMC o TMB?',
      'faq-a6': 'El IMC puede calcularse mensualmente o al cambiar significativamente de peso. La TMB solo cambia con variaciones importantes en la composición corporal o edad, por lo que basta con recalcularla cada 3-6 meses.',
      // CTA
      'cta-titulo': 'Comienza a conocerte mejor',
      'cta-desc': 'Usa nuestras herramientas gratuitas para calcular tu IMC y TMB al instante. Sin registro, sin complicaciones.',
      'cta-btn-imc': 'Calcular mi IMC',
      'cta-btn-tmb': 'Calcular mi TMB',
      // Footer
      'footer-enlaces': 'Enlaces',
      'footer-privacidad': 'Política de Privacidad',
      'footer-cookies': 'Política de Cookies',
      'footer-aviso': 'Aviso Legal',
      'footer': 'MetriBody — 2025 — Información con fines informativos, no sustituye el consejo médico profesional.'
    },
    en: {
      'titulo-pagina': 'MetriBody | BMI, BMR and Body Metrics Calculator',
      'og-titulo': 'MetriBody — Free BMI and BMR Calculator with animated gauge',
      'og-desc': 'Calculate your BMI, BMR, TDEE and body metrics instantly. WHO classification, interactive gauge and calorie deficit.',
      'tw-titulo': 'MetriBody — BMI and BMR Calculator',
      'tw-desc': 'Calculate your BMI, BMR and more with animated gauge. WHO classification and calorie deficit.',
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
      'imc-que-es-texto': '<strong>Body Mass Index (BMI)</strong> is a standardized measure that relates a person\'s weight to their height using the formula weight (kg) / height² (m). The <strong>World Health Organization (WHO)</strong> endorses it as a population screening tool to classify weight status in adults, based on epidemiological studies linking each range to specific chronic disease risks. It is calculated identically for men and women over 20 years of age. Although it does not directly measure body fat percentage, BMI shows a moderate-to-strong correlation with direct measurements such as skinfold thickness and DEXA absorptiometry. Its simplicity, low cost, and non-invasive nature make it the most widely used method in primary care and public health worldwide. However, it has limitations in individuals with high muscle mass (athletes), older adults with sarcopenia, and certain ethnic groups such as Asian populations, where cutoff points may differ.',
      'imc-que-es-lista': '<li><strong>Official WHO classification</strong> — eight categories ranging from severe underweight (&lt; 16) to obesity class III (≥ 40), each with distinct clinical implications.</li><li><strong>Healthy weight range</strong> — 18.5 to 24.9, associated with the lowest incidence of cardiovascular disease, type 2 diabetes, and certain cancers according to WHO and the American Heart Association.</li><li><strong>Screening tool, not diagnostic</strong> — healthcare professionals complement BMI with waist circumference, blood tests, and medical history for a complete assessment.</li>',
      'imc-importancia-titulo': 'Why is it important to calculate your BMI?',
      'imc-importancia-texto': 'Keeping your BMI within the healthy range is one of the most impactful modifiable factors for long-term health. Scientific evidence shows that excess weight significantly increases the risk of developing multiple pathologies, while a BMI below 18.5 also carries risks associated with undernutrition and bone fragility. Below are the main conditions linked to an altered BMI:',
      'imc-importancia-lista': '<li><strong>Cardiovascular disease</strong> — obesity increases the heart\'s workload, raises blood pressure and LDL cholesterol levels, and doubles the risk of heart failure, heart attack, and stroke.</li><li><strong>Type 2 diabetes</strong> — approximately 80-90 % of people with type 2 diabetes are overweight or obese. Excess adipose tissue causes insulin resistance, the underlying mechanism of the disease.</li><li><strong>Joint problems and osteoarthritis</strong> — each kilogram of excess weight puts 4 kg of additional pressure on the knees, accelerating cartilage degradation and limiting mobility.</li><li><strong>Obstructive sleep apnea</strong> — fat accumulation in the neck narrows the airways, causing nighttime breathing pauses that impair sleep quality and increase cardiovascular risk.</li><li><strong>Elevated cancer risk</strong> — WHO links obesity to higher risk of esophageal, colon, postmenopausal breast, endometrial, kidney, and liver cancer. An estimated 25 % of cancer cases worldwide are related to excess weight.</li><li><strong>Reduced life expectancy</strong> — severe obesity (BMI ≥ 40) can reduce life expectancy by 5 to 10 years, an impact comparable to chronic smoking.</li>',
      'tmb-que-es-titulo': 'What is Basal Metabolic Rate?',
      'tmb-que-es-texto': '<strong>Basal Metabolic Rate (BMR)</strong> is the minimum amount of energy the human body needs to sustain vital functions at complete rest: breathing, blood circulation, temperature regulation, neuronal activity, and cell renewal. It accounts for <strong>60 % to 75 %</strong> of total daily energy expenditure in sedentary individuals, making it the single largest component of energy balance. The <strong>Mifflin-St Jeor equation</strong>, published in 1990 after a study of 498 healthy individuals aged 19 to 78, is the most accurate predictive formula validated by the scientific community for the general population. The Academy of Nutrition and Dietetics recommends it as the first clinical choice when indirect calorimetry is unavailable. Unlike BMI, BMR requires sex and age inputs because basal metabolism differs significantly between men and women and declines by about 1-2 % per decade after age 20.',
      'tmb-que-es-lista': '<li><strong>Mifflin-St Jeor equation (1990)</strong> — BMR men = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5; BMR women = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161. Derived from 498 healthy subjects using indirect calorimetry.</li><li><strong>60-75 % of daily expenditure</strong> — far exceeding the thermic effect of food (~10 %) and physical activity (~15-30 %). This proportion makes BMR the key factor in any nutritional intervention.</li><li><strong>Key determinants</strong> — body weight, height, age (declines ~1-2 % per decade), sex (males have higher lean mass), and body composition (more muscle means higher BMR).</li>',
      'tmb-importancia-titulo': 'Why is it important to calculate your BMR?',
      'tmb-importancia-texto': 'Knowing your BMR is the starting point for any evidence-based nutritional strategy. From it, you calculate your Total Daily Energy Expenditure (TDEE) by multiplying by a physical activity factor, enabling personalized meal plans with specific goals. These are the most common scenarios:',
      'tmb-importancia-lista': '<li><strong>TDEE calculation</strong> — multiply your BMR by the activity factor: 1.2 (sedentary), 1.375 (light), 1.55 (moderate), 1.725 (active), or 1.9 (very active). The result is your actual daily calorie needs based on your lifestyle.</li><li><strong>Controlled weight loss</strong> — a calorie deficit of approximately 500 kcal per day relative to your TDEE allows a loss of about 0.5 kg (1 lb) per week, a rate considered safe and sustainable by the medical community.</li><li><strong>Muscle gain</strong> — a controlled surplus of 300-500 kcal per day provides the extra energy required for protein synthesis without accumulating excess fat.</li><li><strong>Long-term maintenance</strong> — adjusting calorie intake to match your TDEE precisely prevents the dreaded rebound effect after a diet and supports adherence to healthy habits.</li><li><strong>Individualized planning</strong> — from a sedentary lifestyle (factor 1.2) to high-intensity training (factor 1.9), BMR allows nutrition to be tailored to each person\'s real energy expenditure.</li>',
      'ref-titulo': '📚 Sources and references',
      'ref-1': 'WHO — Obesity and overweight (BMI classification and global prevalence)',
      'ref-2': 'WHO Global Health Observatory — Body mass index (BMI) data portal',
      'ref-3': 'CDC — Adult BMI Categories (official U.S. classification)',
      'ref-4': 'NHLBI / NIH — Calculate Your BMI (National Heart, Lung, and Blood Institute)',
      'ref-5': 'American Heart Association — Body Mass Index in Adults',
      'ref-6': 'PubMed / NIH — Mifflin-St Jeor original study (Am J Clin Nutr, 1990)',
      'ref-7': 'AESAN — Spanish Agency for Food Safety and Nutrition',
      'ref-8': 'SEEN — Spanish Society of Endocrinology and Nutrition',
      // Nav
      'nav-inicio': 'Home',
      'nav-imc': 'BMI',
      'nav-tmb': 'BMR',
      'nav-herramientas': 'Tools',
      'herramientas-titulo': 'Tools',
      'nav-tdee': 'TDEE',
      'nav-macros': 'Macros',
      'nav-calorias': 'Calories',
      'nav-grasa': 'Body Fat',
      'nav-faq': 'FAQ',
      // Page SEO — IMC
      'imc-titulo-pagina': 'BMI Calculator — Calculate your Body Mass Index | MetriBody',
      'imc-og-titulo': 'Free BMI Calculator — MetriBody',
      'imc-og-desc': 'Calculate your BMI instantly. WHO classification with animated gauge, healthy weight and more.',
      'imc-tw-titulo': 'BMI Calculator — MetriBody',
      'imc-tw-desc': 'Calculate your BMI free. WHO classification and animated gauge.',
      // Page SEO — TMB
      'tmb-titulo-pagina': 'BMR Calculator — Calculate your Basal Metabolic Rate | MetriBody',
      'tmb-og-titulo': 'Free BMR Calculator — MetriBody',
      'tmb-og-desc': 'Calculate your BMR and TDEE free. Mifflin-St Jeor equation, calorie deficit and more.',
      'tmb-tw-titulo': 'BMR Calculator — MetriBody',
      'tmb-tw-desc': 'Calculate your BMR free. TDEE, deficit and calorie surplus.',
      // Hero
      'hero-titulo': 'Your complete body metrics hub',
      'hero-subtitulo': 'Calculate your BMI, BMR, TDEE and more. Free evidence-based tools to understand your body.',
      'hero-cta-imc': 'Calculate BMI',
      'hero-cta-tmb': 'Calculate BMR',
      // Tool cards
      'tarjeta-imc-titulo': 'BMI Calculator',
      'tarjeta-imc-desc': 'Body Mass Index — WHO classification with animated gauge.',
      'tarjeta-tmb-titulo': 'BMR Calculator',
      'tarjeta-tmb-desc': 'Basal Metabolic Rate — resting calories with Mifflin-St Jeor equation.',
      'tarjeta-tdee-titulo': 'TDEE Calculator',
      'tarjeta-tdee-desc': 'Total Daily Energy Expenditure — your real daily calorie needs.',
      'tarjeta-macros-titulo': 'Macros Calculator',
      'tarjeta-macros-desc': 'Macronutrient distribution — proteins, carbs and fats tailored for you.',
      'tarjeta-calorias-titulo': 'Calorie Calculator',
      'tarjeta-calorias-desc': 'Daily calorie needs — deficit, maintenance and surplus.',
      'tarjeta-grasa-titulo': 'Body Fat Calculator',
      'tarjeta-grasa-desc': 'Body fat percentage — estimation by skinfolds and circumferences.',
      'proximamente': 'Coming Soon',
      // FAQ
      'faq-titulo': 'Frequently Asked Questions',
      'faq-q1': 'What is BMI and how is it calculated?',
      'faq-a1': 'Body Mass Index (BMI) is a measure that relates your weight and height using the formula: weight (kg) / height² (m). It is used as a screening tool to classify weight in adults according to WHO-established ranges.',
      'faq-q2': 'What is BMR and why is it important?',
      'faq-a2': 'Basal Metabolic Rate (BMR) is the calories your body burns at complete rest to maintain vital functions. Knowing it is the first step in designing a personalized diet, as it represents 60-75 % of total energy expenditure.',
      'faq-q3': 'What is the difference between BMI and BMR?',
      'faq-a3': 'BMI measures the relationship between weight and height to assess whether your weight is healthy. BMR measures the energy you consume at rest. While BMI tells you "how you are", BMR tells you "how much energy you need". They are complementary tools.',
      'faq-q4': 'How do I calculate my calorie deficit?',
      'faq-a4': 'First calculate your BMR, multiply it by your activity factor to get your TDEE, then subtract 300-500 kcal. This range is a safe deficit for gradual weight loss without significant muscle loss.',
      'faq-q5': 'Is BMI reliable for athletes?',
      'faq-a5': 'BMI has limitations in people with high muscle mass, as it does not distinguish between lean and fat mass. An athlete may have a high BMI without excess fat. In these cases, skinfold measurement or bioimpedance is recommended.',
      'faq-q6': 'How often should I calculate my BMI or BMR?',
      'faq-a6': 'BMI can be calculated monthly or when you experience significant weight changes. BMR only changes with major variations in body composition or age, so recalculating every 3-6 months is sufficient.',
      // CTA
      'cta-titulo': 'Start getting to know yourself better',
      'cta-desc': 'Use our free tools to calculate your BMI and BMR instantly. No registration, no hassle.',
      'cta-btn-imc': 'Calculate my BMI',
      'cta-btn-tmb': 'Calculate my BMR',
      // Footer
      'footer-enlaces': 'Links',
      'footer-privacidad': 'Privacy Policy',
      'footer-cookies': 'Cookie Policy',
      'footer-aviso': 'Legal Notice',
      'footer': 'MetriBody — 2025 — Informational purposes only, does not substitute professional medical advice.'
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
  var navToggle = document.querySelector('.nav-toggle');
  var navLista = document.querySelector('.nav-lista');

  var faqTrack = document.getElementById('faq-track');
  var faqPrev = document.getElementById('faq-prev');
  var faqNext = document.getElementById('faq-next');
  var faqSlides = faqTrack ? faqTrack.querySelectorAll('.faq-slide') : [];
  var faqIndex = 0;

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

    if (navToggle && navLista) {
      navToggle.addEventListener('click', function () {
        var expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
        navLista.classList.toggle('visible');
      });
    }

    initFaqSlider();
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

  if (formularioIMC) {
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
  }

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

  if (formularioTMB) {
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
  }

  // ==========================================
  // FAQ Slider
  // ==========================================

  function initFaqSlider() {
    if (!faqTrack || faqSlides.length === 0) return;

    if (faqPrev) faqPrev.addEventListener('click', function () { faqIndex = Math.max(0, faqIndex - 1); actualizarFaqSlider(); });
    if (faqNext) faqNext.addEventListener('click', function () { faqIndex = Math.min(faqSlides.length - 1, faqIndex + 1); actualizarFaqSlider(); });
  }

  function actualizarFaqSlider() {
    if (!faqTrack) return;
    faqTrack.style.transform = 'translateX(-' + (faqIndex * 100) + '%)';
  }

  // ==========================================
  // Arranque
  // ==========================================

  init();

})();
