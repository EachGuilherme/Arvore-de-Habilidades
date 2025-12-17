// Tier 3
window.TIER3 = [
  {
    id: 'ataque_celestial',
    tier: 3,
    nome: 'Ataque Celestial',
    descricao: 'Ataque divino. Requer Ataque Definitivo + STR 15 + SPI 5',
    custoTP: 12,
    statsMin: { STR: 15, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 5 },
    prereqSkills: ['ataque_definitivo'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'magia_cataclismo',
    tier: 3,
    nome: 'Magia Cataclismo',
    descricao: 'Destruição total. Requer Magia Inferno + MND 10 + WIL 9',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 0, CON: 0, WIL: 9, MND: 10, SPI: 0 },
    prereqSkills: ['magia_inferno'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'defesa_divina',
    tier: 3,
    nome: 'Defesa Divina',
    descricao: 'Proteção divina. Requer Defesa Absoluta + CON 15 + SPI 5',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 0, CON: 15, WIL: 0, MND: 0, SPI: 5 },
    prereqSkills: ['defesa_absoluta'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'esquiva_espectral',
    tier: 3,
    nome: 'Esquiva Espectral',
    descricao: 'Movimento fantasmagórico. Requer Esquiva Perfeita + DEX 15 + SPI 5',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 15, CON: 0, WIL: 0, MND: 0, SPI: 5 },
    prereqSkills: ['esquiva_perfeita'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'magia_apocalipse',
    tier: 3,
    nome: 'Magia Apocalipse',
    descricao: 'Gelo eterno. Requer Magia Blizzard + MND 10 + WIL 9',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 0, CON: 0, WIL: 9, MND: 10, SPI: 0 },
    prereqSkills: ['magia_blizzard'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'vontade_suprema',
    tier: 3,
    nome: 'Vontade Suprema',
    descricao: 'Vontade divina. Requer Vontade Inabalável + WIL 15',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 0, CON: 0, WIL: 15, MND: 0, SPI: 0 },
    prereqSkills: ['vontade_inabalavel'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'espirito_transcendente',
    tier: 3,
    nome: 'Espírito Transcendente',
    descricao: 'Espírito divino. Requer Espírito Eterno + SPI 15',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 15 },
    prereqSkills: ['espirito_eterno'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'danca_letal',
    tier: 3,
    nome: 'Dança Letal',
    descricao: 'Dança mortal. Requer Combo Supremo + STR 10 + DEX 10',
    custoTP: 12,
    statsMin: { STR: 10, DEX: 10, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['combo_supremo'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'visao_predadora',
    tier: 3,
    nome: 'Visão Predadora',
    descricao: 'Visão aguçada. Requer Instinto Predador + DEX 10 + WIL 8',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 10, CON: 0, WIL: 8, MND: 0, SPI: 0 },
    prereqSkills: ['instinto_predador'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'fortaleza_magica',
    tier: 3,
    nome: 'Fortaleza Mágica',
    descricao: 'Fortaleza absoluta. Requer Escudo Mágico + MND 9 + WIL 10',
    custoTP: 12,
    statsMin: { STR: 0, DEX: 0, CON: 0, WIL: 10, MND: 9, SPI: 0 },
    prereqSkills: ['escudo_magico'],
    prereqTier: 2,
    desbloqueada: false
  }
];
