// Tier 3 - Avançado
window.TIER3 = [
  {
    id: 'devastacao_total',
    tier: 3,
    nome: 'Devastação Total',
    descricao: 'Evolução da Fúria Berserker. Ataque catastrofico que destrói tudo no caminho.',
    custoTP: 20,
    statsMin: { STR: 12, WIL: 4, DEX: 2, CON: 0, MND: 0, SPI: 0 },
    prereqSkills: ['furia_berserker'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'muralha_eterna',
    tier: 3,
    nome: 'Muralha Eterna',
    descricao: 'Evolução da Fortaleza Inabalsvel. Cria uma barreira que nunca se quebra.',
    custoTP: 20,
    statsMin: { CON: 12, WIL: 5, STR: 2, DEX: 0, MND: 0, SPI: 0 },
    prereqSkills: ['fortaleza_inabalavel'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'velocidade_supersonica',
    tier: 3,
    nome: 'Velocidade Sussônica',
    descricao: 'Evolução da Sombra Fantasma. Movimento tão rápido que paralisa o tempo.',
    custoTP: 20,
    statsMin: { DEX: 12, WIL: 3, STR: 0, CON: 0, MND: 2, SPI: 0 },
    prereqSkills: ['sombra_fantasma'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'maestria_letal',
    tier: 3,
    nome: 'Maestria Letal',
    descricao: 'Evolução da Técnica Dupla. Domínio total de qualquer arma de combate.',
    custoTP: 18,
    statsMin: { STR: 8, DEX: 8, CON: 2, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['tecnica_dupla'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'omnisciencia_temporal',
    tier: 3,
    nome: 'Omnisciência Temporal',
    descricao: 'Habilidade independente que permite ver o passado, presente e futuro.',
    custoTP: 18,
    statsMin: { MND: 10, WIL: 4, SPI: 2, STR: 0, DEX: 0, CON: 0 },
    prereqSkills: [],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'corpo_diamante',
    tier: 3,
    nome: 'Corpo Diamante',
    descricao: 'Evolução da Pele de Pedra. O corpo se torna mais duro que diamante.',
    custoTP: 18,
    statsMin: { CON: 12, WIL: 3, SPI: 1, STR: 0, DEX: 0, MND: 0 },
    prereqSkills: ['pele_de_pedra'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'perfeicao_sensorial',
    tier: 3,
    nome: 'Perfeição Sensorial',
    descricao: 'Evolução da Visão na Escuridão. Sentidos alcançam perfeito',
    custoTP: 20,
    statsMin: { DEX: 10, MND: 6, SPI: 1, STR: 0, CON: 0, WIL: 0 },
    prereqSkills: ['visao_na_escuridao'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'transcendencia_mental',
    tier: 3,
    nome: 'Transcendência Mental',
    descricao: 'Habilidade independente que transcende os limites da mente humana.',
    custoTP: 17,
    statsMin: { WIL: 10, MND: 5, SPI: 1, STR: 0, DEX: 0, CON: 0 },
    prereqSkills: [],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'ascensao_divina',
    tier: 3,
    nome: 'Ascensão Divina',
    descricao: 'Evolução do Encantamento Vital. Torna-se um ser semi-divino.',
    custoTP: 22,
    statsMin: { SPI: 12, MND: 6, CON: 2, STR: 0, DEX: 0, WIL: 0 },
    prereqSkills: ['encantamento_vital'],
    prereqTier: 2,
    desbloqueada: false
  },
  {
    id: 'imortalidade_temporal',
    tier: 3,
    nome: 'Imortalidade Temporal',
    descricao: 'Evolução do Renascimento Fênix. Retorna a vida infinitas vezes.',
    custoTP: 25,
    statsMin: { CON: 12, SPI: 8, WIL: 2, STR: 0, DEX: 0, MND: 0 },
    prereqSkills: ['renascimento_fenis'],
    prereqTier: 2,
    desbloqueada: false
  }
];
