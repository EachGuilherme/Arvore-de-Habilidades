// Tier 2 - Médio
window.TIER2 = [
  {
    id: 'furia_berserker',
    tier: 2,
    nome: 'Fúria Berserker',
    descricao: 'Evolução do Golpe Poderoso. Entra em furia aumentando drasticamente o ataque.',
    custoTP: 12,
    statsMin: { STR: 8, WIL: 2, DEX: 0, CON: 0, MND: 0, SPI: 0 },
    prereqSkills: ['golpe_poderoso'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'fortaleza_inabalavel',
    tier: 2,
    nome: 'Fortaleza Inabalsvel',
    descricao: 'Evolução do Escudo Resistente. Torna-se praticamente imbativel na defesa.',
    custoTP: 12,
    statsMin: { CON: 8, WIL: 3, STR: 0, DEX: 0, MND: 0, SPI: 0 },
    prereqSkills: ['escudo_resistente'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'sombra_fantasma',
    tier: 2,
    nome: 'Sombra Fantasma',
    descricao: 'Evolução da Dança Evasiva. Movimento tão rápido que fica quase invisível.',
    custoTP: 12,
    statsMin: { DEX: 8, WIL: 2, STR: 0, CON: 0, MND: 0, SPI: 0 },
    prereqSkills: ['danca_evasiva'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'tecnica_dupla',
    tier: 2,
    nome: 'Técnica Dupla',
    descricao: 'Evolução do Treinamento de Combate. Ataca com duas armas simultaneamente.',
    custoTP: 11,
    statsMin: { STR: 5, DEX: 5, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['treinamento_combate'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'iluminacao_mental',
    tier: 2,
    nome: 'Iluminação Mental',
    descricao: 'Habilidade independente que amplia a inteligência e velocidade de pensa mento.',
    custoTP: 10,
    statsMin: { MND: 7, WIL: 2, STR: 0, DEX: 0, CON: 0, SPI: 0 },
    prereqSkills: [],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'pele_de_pedra',
    tier: 2,
    nome: 'Pele de Pedra',
    descricao: 'Evolução do Vigor Aumentado. Endurece a pele contra ataques físicos.',
    custoTP: 11,
    statsMin: { CON: 8, WIL: 2, STR: 0, DEX: 0, MND: 0, SPI: 0 },
    prereqSkills: ['vigor_aumentado'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'visao_na_escuridao',
    tier: 2,
    nome: 'Visão na Escuridão',
    descricao: 'Evolução do Rastreamento. Vê perfeitamente em qualquer condição de luz.',
    custoTP: 12,
    statsMin: { DEX: 6, MND: 4, STR: 0, CON: 0, WIL: 0, SPI: 0 },
    prereqSkills: ['rastreamento'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'escudo_psiquico',
    tier: 2,
    nome: 'Escudo Psíquico',
    descricao: 'Habilidade independente que cria uma barreira mental contra ataques espirituais.',
    custoTP: 10,
    statsMin: { WIL: 7, MND: 2, STR: 0, DEX: 0, CON: 0, SPI: 0 },
    prereqSkills: [],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'encantamento_vital',
    tier: 2,
    nome: 'Encantamento Vital',
    descricao: 'Evolução da Canalização Espiritual. Encanta o corpo com energia vital eterna.',
    custoTP: 14,
    statsMin: { SPI: 8, MND: 4, CON: 0, STR: 0, DEX: 0, WIL: 0 },
    prereqSkills: ['canalizacao_espiritual'],
    prereqTier: 1,
    desbloqueada: false
  },
  {
    id: 'renascimento_fenis',
    tier: 2,
    nome: 'Renascimento Fênix',
    descricao: 'Evolução da Regeneração Acelerada. Regenera o corpo quase que instantaneamente.',
    custoTP: 15,
    statsMin: { CON: 8, SPI: 5, STR: 0, DEX: 0, MND: 0, WIL: 0 },
    prereqSkills: ['regeneracao_acelerada'],
    prereqTier: 1,
    desbloqueada: false
  }
];
