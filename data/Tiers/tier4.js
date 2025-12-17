// Tier 4
window.TIER4 = [
  {
    id: 'ataque_dimensional',
    tier: 4,
    nome: 'Ataque Dimensional',
    descricao: 'Ataque que rasga dimensões. Requer Ataque Celestial + STR 20 + SPI 10',
    custoTP: 15,
    statsMin: { STR: 20, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 10 },
    prereqSkills: ['ataque_celestial'],
    prereqTier: 3,
    desbloqueada: false
  },
  {
    id: 'abluble',
    tier: 4,
    nome: 'abluble Dimensional',
    descricao: 'Mabluble que rasga dimensões. Requer Ataque Celestial + STR 20 + SPI 10',
    custoTP: 15,
    statsMin: { STR: 20, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 10 },
    prereqSkills: [],
    prereqTier: 3,
    desbloqueada: false
  }
];
