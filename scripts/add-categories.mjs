import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesDir = path.join(__dirname, '..', 'content', 'articles');

// slug → category mapping
const categoryMap = {
  // 食べ物・食文化
  shoyu: '食べ物・食文化',
  miso: '食べ物・食文化',
  sato: '食べ物・食文化',
  tofu: '食べ物・食文化',
  pan: '食べ物・食文化',
  gyunyu: '食べ物・食文化',
  ryokucha: '食べ物・食文化',
  kohi: '食べ物・食文化',
  kanzume: '食べ物・食文化',
  reitoshokuhin: '食べ物・食文化',
  instant: '食べ物・食文化',
  bento: '食べ物・食文化',
  kare: '食べ物・食文化',
  sake: '食べ物・食文化',
  su: '食べ物・食文化',
  shio: '食べ物・食文化',
  spice: '食べ物・食文化',
  nabe: '食べ物・食文化',
  mikan: '食べ物・食文化',
  senbei: '食べ物・食文化',
  gyoza: '食べ物・食文化',
  udon: '食べ物・食文化',
  natto: '食べ物・食文化',
  daikon: '食べ物・食文化',
  nanakusa: '食べ物・食文化',
  toshikoshi: '食べ物・食文化',
  mochitsuki: '食べ物・食文化',
  osechi: '食べ物・食文化',
  keiki: '食べ物・食文化',
  zoni: '食べ物・食文化',
  kagamibiraki: '食べ物・食文化',
  gaishoku: '食べ物・食文化',
  kissaten: '食べ物・食文化',
  oyatsu: '食べ物・食文化',
  kaitenzushi: '食べ物・食文化',
  bin: '食べ物・食文化',
  supa: '食べ物・食文化',
  ichiba: '食べ物・食文化',
  hashi: '食べ物・食文化',
  ohashi: '食べ物・食文化',
  hocho: '食べ物・食文化',
  chawan: '食べ物・食文化',

  // 住まい・暮らし
  tatami: '住まい・暮らし',
  furooring: '住まい・暮らし',
  'mado-garasu': '住まい・暮らし',
  amido: '住まい・暮らし',
  amado: '住まい・暮らし',
  kotatsu: '住まい・暮らし',
  manshon: '住まい・暮らし',
  toilet: '住まい・暮らし',
  'toilet-paper': '住まい・暮らし',
  washlet: '住まい・暮らし',
  renga: '住まい・暮らし',
  konkurito: '住まい・暮らし',
  kawara: '住まい・暮らし',
  'gas-konro': '住まい・暮らし',
  'denshi-renji': '住まい・暮らし',
  reizouko: '住まい・暮らし',
  shokusenko: '住まい・暮らし',
  aircon: '住まい・暮らし',
  futon: '住まい・暮らし',
  sutobu: '住まい・暮らし',
  matchi: '住まい・暮らし',
  kagami: '住まい・暮らし',
  kagi: '住まい・暮らし',
  tokei: '住まい・暮らし',
  karenda: '住まい・暮らし',
  techo: '住まい・暮らし',
  taoru: '住まい・暮らし',
  sentakuki: '住まい・暮らし',
  senzai: '住まい・暮らし',
  sekken: '住まい・暮らし',
  shanpuu: '住まい・暮らし',
  haburashi: '住まい・暮らし',
  kurininggu: '住まい・暮らし',
  gomi: '住まい・暮らし',
  denchi: '住まい・暮らし',
  purasu: '住まい・暮らし',
  'katori-senko': '住まい・暮らし',
  denkimoufu: '住まい・暮らし',
  furoshiki: '住まい・暮らし',
  ofuro: '住まい・暮らし',
  nuno: '住まい・暮らし',
  bousougi: '住まい・暮らし',
  sebiro: '住まい・暮らし',
  nekutai: '住まい・暮らし',
  seifuku: '住まい・暮らし',
  furisode: '住まい・暮らし',
  tebukuro: '住まい・暮らし',
  mafura: '住まい・暮らし',
  kutsu: '住まい・暮らし',
  geta: '住まい・暮らし',
  kesho: '住まい・暮らし',
  biyoin: '住まい・暮らし',
  shuri: '住まい・暮らし',
  kopii: '住まい・暮らし',

  // 医療・健康
  byoin: '医療・健康',
  hoken: '医療・健康',
  yobosesshu: '医療・健康',
  masui: '医療・健康',
  hochoki: '医療・健康',
  megane: '医療・健康',
  kontakuto: '医療・健康',
  kyukyusha: '医療・健康',
  kyukyubako: '医療・健康',
  kenko: '医療・健康',
  kenketsu: '医療・健康',
  shoudoku: '医療・健康',
  yakkyoku: '医療・健康',
  sango: '医療・健康',
  omutsu: '医療・健康',
  sauna: '医療・健康',

  // 交通・インフラ
  jidosha: '交通・インフラ',
  tetsudo: '交通・インフラ',
  shinkansen: '交通・インフラ',
  chikatetsu: '交通・インフラ',
  hikoki: '交通・インフラ',
  basu: '交通・インフラ',
  jitensha: '交通・インフラ',
  kosoku: '交通・インフラ',
  'hoso-doro': '交通・インフラ',
  'doro-hyoshiki': '交通・インフラ',
  shingo: '交通・インフラ',
  tonneru: '交通・インフラ',
  gaito: '交通・インフラ',
  erebeta: '交通・インフラ',
  kaisatsu: '交通・インフラ',
  shitoberto: '交通・インフラ',
  suidou: '交通・インフラ',
  denki: '交通・インフラ',
  gesuidou: '交通・インフラ',
  damu: '交通・インフラ',
  saigai: '交通・インフラ',
  shobo: '交通・インフラ',
  koban: '交通・インフラ',
  hyojunji: '交通・インフラ',
  'tenki-yoho': '交通・インフラ',

  // 通信・テクノロジー
  denwa: '通信・テクノロジー',
  'koushuu-denwa': '通信・テクノロジー',
  smartphone: '通信・テクノロジー',
  pasokon: '通信・テクノロジー',
  internet: '通信・テクノロジー',
  denpou: '通信・テクノロジー',
  yubin: '通信・テクノロジー',
  takuhaibin: '通信・テクノロジー',
  tsuhan: '通信・テクノロジー',
  kamera: '通信・テクノロジー',
  tegami: '通信・テクノロジー',
  dentaku: '通信・テクノロジー',

  // お金・社会制度
  ginko: 'お金・社会制度',
  zeikin: 'お金・社会制度',
  cashless: 'お金・社会制度',
  senkyo: 'お金・社会制度',
  meishi: 'お金・社会制度',
  pasupoto: 'お金・社会制度',
  hanko: 'お金・社会制度',
  jihanki: 'お金・社会制度',
  depato: 'お金・社会制度',
  konbini: 'お金・社会制度',

  // 教育・文化
  gakko: '教育・文化',
  kyokasho: '教育・文化',
  randoseru: '教育・文化',
  jisho: '教育・文化',
  katsuji: '教育・文化',
  toshokan: '教育・文化',
  juken: '教育・文化',
  taiku: '教育・文化',
  fude: '教育・文化',
  enpitsu: '教育・文化',
  keshigomu: '教育・文化',
  chizu: '教育・文化',
  kakizome: '教育・文化',
  karuta: '教育・文化',
  shinbun: '教育・文化',

  // メディア・エンタメ
  manga: 'メディア・エンタメ',
  anime: 'メディア・エンタメ',
  eiga: 'メディア・エンタメ',
  terebi: 'メディア・エンタメ',
  rajio: 'メディア・エンタメ',
  rekodo: 'メディア・エンタメ',
  gemu: 'メディア・エンタメ',
  kyutoki: 'メディア・エンタメ',

  // 年中行事・伝統
  nengajo: '年中行事・伝統',
  kekkon: '年中行事・伝統',
  sosogi: '年中行事・伝統',
  halloween: '年中行事・伝統',
  hanabi: '年中行事・伝統',
  kinro: '年中行事・伝統',
  toji: '年中行事・伝統',
  hatsuhinode: '年中行事・伝統',
  tako: '年中行事・伝統',
  hanetsuki: '年中行事・伝統',
  koma: '年中行事・伝統',
  seijinshiki: '年中行事・伝統',
  hatsumode: '年中行事・伝統',
  daruma: '年中行事・伝統',
  joya: '年中行事・伝統',
  kadomatsu: '年中行事・伝統',
  kurisumasu: '年中行事・伝統',
  osoji: '年中行事・伝統',
  koyomi: '年中行事・伝統',
  butsudan: '年中行事・伝統',
  shinnenkai: '年中行事・伝統',
  noren: '年中行事・伝統',
  tanbo: '年中行事・伝統',
  nouki: '年中行事・伝統',

  // レジャー・スポーツ
  onsen: 'レジャー・スポーツ',
  sento: 'レジャー・スポーツ',
  'umi-yu': 'レジャー・スポーツ',
  yuenchi: 'レジャー・スポーツ',
  suki: 'レジャー・スポーツ',
  yukidaruma: 'レジャー・スポーツ',
  koen: 'レジャー・スポーツ',
  yakyu: 'レジャー・スポーツ',
  suiei: 'レジャー・スポーツ',
  undokai: 'レジャー・スポーツ',
  yuzu: 'レジャー・スポーツ',
};

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
let updated = 0;
let skipped = 0;
let missing = [];

for (const file of files) {
  const slug = file.replace('.md', '');
  const category = categoryMap[slug];
  if (!category) {
    missing.push(slug);
    continue;
  }

  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // すでにcategoryがある場合はスキップ
  if (content.includes('\ncategory:')) {
    skipped++;
    continue;
  }

  // relatedSlugs の行の後に category を挿入
  const newContent = content.replace(
    /^(relatedSlugs:.*)/m,
    `$1\ncategory: "${category}"`
  );

  if (newContent === content) {
    console.log(`WARNING: could not insert category for ${file}`);
    continue;
  }

  fs.writeFileSync(filePath, newContent, 'utf-8');
  updated++;
}

console.log(`Updated: ${updated}, Skipped (already has category): ${skipped}`);
if (missing.length > 0) {
  console.log(`Missing mapping for: ${missing.join(', ')}`);
}
