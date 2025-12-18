// Tier 0 - Início
window.TIER0 = [
  {
    id: 'root',
    tier: 0,
    nome: 'INÍCIO',
    descricao: 'Ponto de partida. Todas as jornadas começam aqui.',
    custoTP: 0,
    statsMin: { STR: 0, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: [],
    prereqTier: -1,
    desbloqueada: true
  },
  {
    id: 'ataque_basico',
    tier: 0,
    nome: 'Ataque Básico',
    descricao: 'Aprende a atacar com força bruta. Habilidade fundamental para combate.',
    custoTP: 3,
    statsMin: { STR: 2, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'defesa_basica',
    tier: 0,
    nome: 'Defesa Básica',
    descricao: 'Aprende a se defender e reduzir dano recebido.',
    custoTP: 3,
    statsMin: { STR: 1, CON: 2, DEX: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'esquiva_rapida',
    tier: 0,
    nome: 'Esquiva Rápida',
    descricao: 'Desenvolve reflexos para evitar ataques inimigos.',
    custoTP: 3,
    statsMin: { DEX: 3, STR: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'foco_mental',
    tier: 0,
    nome: 'Foco Mental',
    descricao: 'Aumenta a concentração e controle mental em combate.',
    custoTP: 2,
    statsMin: { MND: 2, WIL: 1, STR: 0, DEX: 0, CON: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'respiracao_profunda',
    tier: 0,
    nome: 'Respiração Profunda',
    descricao: 'Técnica de respiração que aumenta resistência e stamina.',
    custoTP: 2,
    statsMin: { CON: 2, WIL: 1, STR: 0, DEX: 0, MND: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'percepcao_aprimorada',
    tier: 0,
    nome: 'Percepção Aprimorada',
    descricao: 'Desenvolve sentidos aguçados para detectar inimigos à distância.',
    custoTP: 3,
    statsMin: { DEX: 2, MND: 1, STR: 0, CON: 0, WIL: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'vontade_de_ferro',
    tier: 0,
    nome: 'Vontade de Ferro',
    descricao: 'Fortalece a determinação e resistência mental contra influências negativas.',
    custoTP: 2,
    statsMin: { WIL: 3, MND: 0, STR: 0, DEX: 0, CON: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'conexao_espiritual',
    tier: 0,
    nome: 'Conexão Espiritual',
    descricao: 'Estabelece ligação com energias espirituais do universo.',
    custoTP: 3,
    statsMin: { SPI: 3, MND: 1, STR: 0, DEX: 0, CON: 0, WIL: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  {
    id: 'recuperacao_natural',
    tier: 0,
    nome: 'Recuperação Natural',
    descricao: 'Acelera o processo natural de cura do corpo durante o descanso.',
    custoTP: 4,
    statsMin: { CON: 3, SPI: 1, STR: 0, DEX: 0, MND: 0, WIL: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  }
];
