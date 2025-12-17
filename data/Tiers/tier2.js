// Tier 2
window.TIER2 = [
  {
    id: 'ataque_definitivo',
    tier: 2,
    nome: 'Ataque Definitivo',
    descricao: 'O ápice do ataque. Requer Ataque Forte + STR 10',
    custoTP: 8,
    statsMin: { STR: 10, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 },
    prereqSkills: ['ataque_forte'],
    prereqTier: 1,
    desbloqueada: false
  },
 
];
