// Tier 5
window.TIER5 = [
  {
    id: 'ataque_omnipotente',
    tier: 5,
    nome: 'Ataque Omnipotente',
    descricao: 'Ataque supremo. Requer Ataque Dimensional + STR 25 + SPI 15',
    custoTP: 20,
    statsMin: { STR: 25, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 15 },
    prereqSkills: ['ataque_dimensional'],
    prereqTier: 4,
    desbloqueada: false
  }
];
