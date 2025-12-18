// Sistema de Tiers - Versão Browser
// Não usar CommonJS, apenas globals

class SistemaTiers {
  constructor() {
    this.config = CONFIG;
  }

  getProgressoTier(tier) {
    const skills = getSkillsPorTier(tier);
    const desbloqueadas = skills.filter(s => s.desbloqueada).length;
    const total = skills.length;
    const percentual = total > 0 ? (desbloqueadas / total) * 100 : 0;

    return {
      tier: tier,
      total: total,
      desbloqueadas: desbloqueadas,
      percentual: percentual.toFixed(1),
      proximaTela: `${desbloqueadas}/${total} (${percentual.toFixed(1)}%)`,
      alcancouRequisito: percentual >= this.config.TIER_UNLOCK_PERCENTAGES[tier + 1]
    };
  }

  getProgressoTodos() {
    const tiers = [];
    for (let i = 0; i < this.config.TIERS_TOTAL; i++) {
      tiers.push(this.getProgressoTier(i));
    }
    return tiers;
  }

  isTierDesbloqueado(tier) {
    if (tier === 0) return true;

    // Um tier está desbloqueado quando o tier anterior (tier - 1) atinge a porcentagem requerida
    // Por exemplo: Tier 1 é desbloqueado quando Tier 0 atinge 20%
    const tierAnterior = tier - 1;
    const progresso = this.getProgressoTier(tierAnterior);
    
    // Verificar se o tier anterior atingiu a porcentagem requerida para o próximo tier
    const percentualRequerido = this.config.TIER_UNLOCK_PERCENTAGES[tier];
    return parseFloat(progresso.percentual) >= percentualRequerido;
  }

  getProximoTierParaDesbloquear() {
    for (let i = 0; i < this.config.TIERS_TOTAL; i++) {
      if (!this.isTierDesbloqueado(i)) {
        const tierAnterior = i - 1;
        const percentualRequerido = this.config.TIER_UNLOCK_PERCENTAGES[i];
        const percentualAtual = this.getProgressoTier(tierAnterior).percentual;
        
        return {
          tier: i,
          proximoDesbloqueio: tierAnterior,
          percentualRequerido: percentualRequerido,
          percentualAtual: percentualAtual
        };
      }
    }
    return null;
  }

  getResumoProgressao() {
    const tiers = this.getProgressoTodos();
    let resumo = '\n🎯 PROGRESSO POR TIER:\n';
    resumo += '================================\n';

    tiers.forEach(tier => {
      const desbloqueado = this.isTierDesbloqueado(tier.tier) ? '✅' : '🔒';
      const barra = this._gerarBarraProgresso(tier.percentual);
      resumo += `${desbloqueado} Tier ${tier.tier}: ${barra} ${tier.proximaTela}\n`;
    });

    resumo += '================================\n';

    const proximo = this.getProximoTierParaDesbloquear();
    if (proximo) {
      resumo += `\n⚡ Próximo Tier (${proximo.tier}) em: ${(proximo.percentualRequerido - parseFloat(proximo.percentualAtual)).toFixed(1)}%\n`;
    } else {
      resumo += '\n🌟 Todos os Tiers desbloqueados!\n';
    }

    return resumo;
  }

  _gerarBarraProgresso(percentual) {
    const percentNum = parseFloat(percentual);
    const cheio = Math.round(percentNum / 5);
    const vazio = 20 - cheio;
    return '[' + '█'.repeat(cheio) + '░'.repeat(vazio) + ']';
  }
}

console.log('📊 Módulo de Tiers carregado!');
