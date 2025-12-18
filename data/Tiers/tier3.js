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
  
];
