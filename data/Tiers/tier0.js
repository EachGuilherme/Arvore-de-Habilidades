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
    descricao: 'Aprende a atacar. Requer STR 2',
    custoTP: 3,
    statsMin: { STR: 2, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['root'],
    prereqTier: -1,
    desbloqueada: false
  },
  
];
