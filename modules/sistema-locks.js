// Sistema de Locks - Versão Browser
// Não usar CommonJS, apenas globals

class SistemaLocks {
  constructor(statsJogador, tpAtual) {
    this.stats = statsJogador;
    this.tp = tpAtual;
  }

  podeDesbloquear(skillId, todasSkills) {
    const skill = getSkillPorId(skillId);
    if (!skill) return { pode: false, motivo: '❌ Skill não encontrada' };
    if (skill.desbloqueada) return { pode: false, motivo: '✅ Já desbloqueada' };

    if (this.tp < skill.custoTP) {
      const faltam = skill.custoTP - this.tp;
      return { pode: false, motivo: `❌ TP insuficiente (faltam ${faltam} TP)` };
    }

    const statsCheck = this._verificarStats(skill.statsMin);
    if (!statsCheck.ok) {
      return { pode: false, motivo: `❌ Stats insuficientes: ${statsCheck.detalhes}` };
    }

    const prereqCheck = this._verificarPrereqSkills(skill.prereqSkills, todasSkills);
    if (!prereqCheck.ok) {
      return { pode: false, motivo: `❌ Pré-requisitos: ${prereqCheck.detalhes}` };
    }

    const tierCheck = this._verificarPrereqTier(skill.prereqTier, skill.tier);
    if (!tierCheck.ok) {
      return { pode: false, motivo: `❌ ${tierCheck.detalhes}` };
    }

    return { pode: true, motivo: '✅ Pode desbloquear!' };
  }

  _verificarStats(statsMin) {
    const statsInsuficientes = [];
    Object.entries(statsMin).forEach(([stat, valorMinimo]) => {
      if (this.stats[stat] < valorMinimo) {
        const atual = this.stats[stat] || 0;
        statsInsuficientes.push(`${stat} (tem ${atual}, precisa ${valorMinimo})`);
      }
    });

    if (statsInsuficientes.length > 0) {
      return { ok: false, detalhes: statsInsuficientes.join(', ') };
    }
    return { ok: true, detalhes: '' };
  }

  _verificarPrereqSkills(prereqSkills, todasSkills) {
    const naoDesbloqueadas = [];
    prereqSkills.forEach(skillId => {
      const skill = getSkillPorId(skillId);
      if (!skill || !skill.desbloqueada) {
        naoDesbloqueadas.push(skill?.nome || skillId);
      }
    });

    if (naoDesbloqueadas.length > 0) {
      return { ok: false, detalhes: naoDesbloqueadas.join(', ') };
    }
    return { ok: true, detalhes: '' };
  }

  _verificarPrereqTier(tierMinimo, tierHabilidade) {
    // Se o pré-requisito é -1, nenhuma verificação de tier é necessária
    if (tierMinimo === -1) return { ok: true, detalhes: '' };

    // Verificar se o tier anterior tem a porcentagem de progresso necessária
    // tierMinimo indica qual tier precisa atingir a porcentagem para desbloquear este
    const sistemaTiers = new SistemaTiers();
    const progresso = sistemaTiers.getProgressoTier(tierMinimo);
    
    // A porcentagem requerida é determinada pelo tier a ser desbloqueado
    const percentualRequerido = sistemaTiers.config.TIER_UNLOCK_PERCENTAGES[tierHabilidade];
    
    if (!percentualRequerido) {
      return { ok: true, detalhes: '' };
    }
    
    if (parseFloat(progresso.percentual) < percentualRequerido) {
      return { 
        ok: false, 
        detalhes: `Tier ${tierMinimo} precisa de ${percentualRequerido}% de progresso (atualmente ${progresso.percentual}%)` 
      };
    }
    
    return { ok: true, detalhes: '' };
  }

  tentar_desbloquear(skillId) {
    const verificacao = this.podeDesbloquear(skillId, HABILIDADES);

    if (!verificacao.pode) {
      return { sucesso: false, mensagem: verificacao.motivo };
    }

    const skill = getSkillPorId(skillId);
    skill.desbloqueada = true;
    this.tp -= skill.custoTP;

    return { sucesso: true, mensagem: `🎉 ${skill.nome} desbloqueada! (-${skill.custoTP} TP)` };
  }

  getMotivoTranca(skillId) {
    const verificacao = this.podeDesbloquear(skillId, HABILIDADES);
    return verificacao.motivo;
  }

  getCorSkill(skillId) {
    const skill = getSkillPorId(skillId);
    if (skill.desbloqueada) return '#4CAF50';

    const verificacao = this.podeDesbloquear(skillId, HABILIDADES);
    if (verificacao.pode) return '#FFC107';

    return '#666666';
  }
}

console.log('🔒 Módulo de Locks carregado!');
