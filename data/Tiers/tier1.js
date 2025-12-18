// Tier 1 - Avançado
window.TIER1 = [
  {
    id: 'golpe_poderoso',
    tier: 1,
    nome: 'Golpe Poderoso',
    descricao: 'Evolução do Ataque Básico. Concentra força em um único golpe devastador.',
    custoTP: 6,
    statsMin: { STR: 5, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['ataque_basico'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'escudo_resistente',
    tier: 1,
    nome: 'Escudo Resistente',
    descricao: 'Evolução da Defesa Básica. Cria uma barreira mais forte contra danos.',
    custoTP: 6,
    statsMin: { CON: 5, STR: 2, DEX: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['defesa_basica'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'danca_evasiva',
    tier: 1,
    nome: 'Dança Evasiva',
    descricao: 'Evolução da Esquiva Rápida. Movimento elegante que evita todos os ataques em sequência.',
    custoTP: 6,
    statsMin: { DEX: 5, WIL: 1, STR: 0, CON: 0, MND: 0, SPI: 0 },
    prereqSkills: ['esquiva_rapida'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'treinamento_combate',
    tier: 1,
    nome: 'Treinamento de Combate',
    descricao: 'Habilidade independente que melhora técnicas de luta geral.',
    custoTP: 5,
    statsMin: { STR: 3, DEX: 3, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: [],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'meditacao_profunda',
    tier: 1,
    nome: 'Meditação Profunda',
    descricao: 'Evolução do Foco Mental. Alcana um estado de consciência expandida.',
    custoTP: 5,
    statsMin: { MND: 5, WIL: 2, STR: 0, DEX: 0, CON: 0, SPI: 0 },
    prereqSkills: ['foco_mental'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'vigor_aumentado',
    tier: 1,
    nome: 'Vigor Aumentado',
    descricao: 'Evolução da Respiração Profunda. Aumenta stamina e resistência significativamente.',
    custoTP: 5,
    statsMin: { CON: 5, WIL: 2, STR: 0, DEX: 0, MND: 0, SPI: 0 },
    prereqSkills: ['respiracao_profunda'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'rastreamento',
    tier: 1,
    nome: 'Rastreamento',
    descricao: 'Evolução da Percepção Aprimorada. Rastreia pistas e movimento de inimigos.',
    custoTP: 6,
    statsMin: { DEX: 4, MND: 2, STR: 0, CON: 0, WIL: 0, SPI: 0 },
    prereqSkills: ['percepcao_aprimorada'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'resistencia_mental',
    tier: 1,
    nome: 'Resistência Mental',
    descricao: 'Habilidade independente que protege contra influências psicológicas.',
    custoTP: 5,
    statsMin: { WIL: 5, MND: 1, STR: 0, DEX: 0, CON: 0, SPI: 0 },
    prereqSkills: [],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'canalizacao_espiritual',
    tier: 1,
    nome: 'Canalização Espiritual',
    descricao: 'Evolução da Conexão Espiritual. Canaliza energia espiritual para ações.',
    custoTP: 7,
    statsMin: { SPI: 5, MND: 3, STR: 0, DEX: 0, CON: 0, WIL: 0 },
    prereqSkills: ['conexao_espiritual'],
    prereqTier: 0,
    desbloqueada: false
  },
  {
    id: 'regeneracao_acelerada',
    tier: 1,
    nome: 'Regeneração Acelerada',
    descricao: 'Evolução da Recuperação Natural. Acelera drasticamente o processo de cura.',
    custoTP: 8,
    statsMin: { CON: 5, SPI: 3, STR: 0, DEX: 0, MND: 0, WIL: 0 },
    prereqSkills: ['recuperacao_natural'],
    prereqTier: 0,
    desbloqueada: false
  }
];
