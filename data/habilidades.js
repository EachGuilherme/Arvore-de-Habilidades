/**
 * ================================================
 * ARQUIVO DE DADOS - ÁRVORE DE HABILIDADES v2
 * ================================================
 * 
 * SISTEMA MELHORADO:
 * - Layout automático hierárquico
 * - Suporte a pré-requisitos de tiers posteriores
 * - 60 habilidades de exemplo (10 por tier)
 */

const HABILIDADES = []
  .concat(typeof TIER0 !== 'undefined' ? TIER0 : [])
  .concat(typeof TIER1 !== 'undefined' ? TIER1 : [])
  .concat(typeof TIER2 !== 'undefined' ? TIER2 : [])
  .concat(typeof TIER3 !== 'undefined' ? TIER3 : [])
  .concat(typeof TIER4 !== 'undefined' ? TIER4 : [])
  .concat(typeof TIER5 !== 'undefined' ? TIER5 : []);

const CONFIG = {
  TIERS_TOTAL: 6,
  TIER_UNLOCK_PERCENTAGE: 40,
  TP_INICIAL: 100,
  CANVAS_WIDTH: 2400,
  CANVAS_HEIGHT: 1600,
};

// ========== SISTEMA DE LAYOUT AUTOMÁTICO HIERÁRQUICO ==========

function calcularLayoutAutomatico() {
  const ESPACO_HORIZONTAL = 250;
  const ESPACO_VERTICAL = 200;
  const MARGEM_ESQUERDA = 150;
  const MARGEM_TOPO = 100;

  HABILIDADES.forEach(skill => {
    // Posição Y baseada no tier
    skill.y = MARGEM_TOPO + (skill.tier * ESPACO_VERTICAL);

    // Posição X baseada na posição dentro do tier
    const skillsDoTier = getSkillsPorTier(skill.tier);
    const indice = skillsDoTier.indexOf(skill);
    const totalNoTier = skillsDoTier.length;
    
    // Centraliza as habilidades do tier
    const larguraTotalTier = (totalNoTier - 1) * ESPACO_HORIZONTAL;
    const centroX = CONFIG.CANVAS_WIDTH / 2;
    skill.x = centroX - (larguraTotalTier / 2) + (indice * ESPACO_HORIZONTAL);
  });
}

// Funções helpers
function getSkillsPorTier(tier) {
  return HABILIDADES.filter(skill => skill.tier === tier);
}

function getSkillPorId(id) {
  return HABILIDADES.find(skill => skill.id === id) || null;
}

function getQtdDesbloqueadasPorTier(tier) {
  return getSkillsPorTier(tier).filter(s => s.desbloqueada).length;
}

function getPercentualTier(tier) {
  const skills = getSkillsPorTier(tier);
  if (skills.length === 0) return 0;
  
  const desbloqueadas = getQtdDesbloqueadasPorTier(tier);
  return (desbloqueadas / skills.length) * 100;
}

function getDescricaoPrereqs(skillId) {
  const skill = getSkillPorId(skillId);
  if (!skill) return [];
  
  const prereqs = [];
  
  skill.prereqSkills.forEach(id => {
    const req = getSkillPorId(id);
    if (req) prereqs.push(`📌 ${req.nome}`);
  });
  
  if (skill.prereqTier > -1) {
    prereqs.push(`🔓 Tier ${skill.prereqTier} desbloqueado`);
  }
  
  Object.entries(skill.statsMin).forEach(([stat, valor]) => {
    if (valor > 0) {
      prereqs.push(`💪 ${stat} ≥ ${valor}`);
    }
  });
  
  return prereqs;
}

// Calcular layout ao carregar
calcularLayoutAutomatico();

console.log('📚 Arquivo de dados carregado com 60 habilidades!');
