class SistemaSave {
  constructor() {
    this.CHAVE_DADOS = 'arvore_habilidades_save';
    this.VERSAO_ATUAL = 1;
  }

  salvarProgresso(statsJogador, tpAtual) {
    const dados = {
      versao: this.VERSAO_ATUAL,
      timestamp: new Date().toISOString(),
      stats: statsJogador,
      tpAtual: tpAtual,
      skillsDesbloqueadas: this._exportarSkillsDesbloqueadas(),
      progressoTiers: this._exportarProgressoTiers()
    };

    localStorage.setItem(this.CHAVE_DADOS, JSON.stringify(dados));
    console.log('💾 Progresso salvo!');
    return dados;
  }

  carregarProgresso() {
    const dadosJSON = localStorage.getItem(this.CHAVE_DADOS);
    
    if (!dadosJSON) {
      console.log('📂 Nenhum save encontrado. Começando novo jogo.');
      return null;
    }

    try {
      const dados = JSON.parse(dadosJSON);
      console.log('📂 Save carregado!');
      
      dados.skillsDesbloqueadas.forEach(skillId => {
        const skill = getSkillPorId(skillId);
        if (skill) {
          skill.desbloqueada = true;
        }
      });

      return dados;
    } catch (erro) {
      console.error('❌ Erro ao carregar save:', erro);
      return null;
    }
  }

  _exportarSkillsDesbloqueadas() {
    return HABILIDADES
      .filter(skill => skill.desbloqueada)
      .map(skill => skill.id);
  }

  _exportarProgressoTiers() {
    const tiers = new SistemaTiers();
    return tiers.getProgressoTodos();
  }

  deletarSave() {
    localStorage.removeItem(this.CHAVE_DADOS);
    console.log('🗑️  Save deletado!');
  }

  getInfoUltimoSave() {
    const dadosJSON = localStorage.getItem(this.CHAVE_DADOS);
    
    if (!dadosJSON) {
      return null;
    }

    try {
      const dados = JSON.parse(dadosJSON);
      return {
        timestamp: dados.timestamp,
        stats: dados.stats,
        tpAtual: dados.tpAtual,
        skillsDesbloqueadas: dados.skillsDesbloqueadas.length,
        ultimaSalvagem: new Date(dados.timestamp).toLocaleString('pt-BR')
      };
    } catch (erro) {
      return null;
    }
  }

  exportarBackup() {
    const save = this.getInfoUltimoSave();
    
    if (!save) {
      console.log('❌ Nenhum save para exportar');
      return null;
    }

    const dados = JSON.parse(localStorage.getItem(this.CHAVE_DADOS));
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `arvore-habilidades-backup-${Date.now()}.json`;
    link.click();
    
    console.log('📥 Backup exportado!');
  }

  importarBackup(arquivoJSON) {
    try {
      const leitor = new FileReader();
      
      leitor.onload = (evento) => {
        const dados = JSON.parse(evento.target.result);
        localStorage.setItem(this.CHAVE_DADOS, JSON.stringify(dados));
        console.log('📤 Backup importado com sucesso!');
        window.location.reload();
      };

      leitor.readAsText(arquivoJSON);
    } catch (erro) {
      console.error('❌ Erro ao importar backup:', erro);
    }
  }

  gerarRelatorio() {
    const info = this.getInfoUltimoSave();
    
    if (!info) {
      return '❌ Nenhum progresso para relatar';
    }

    let relatorio = '\n' + '='.repeat(50);
    relatorio += '\n📋 RELATÓRIO DE PROGRESSO\n';
    relatorio += '='.repeat(50) + '\n\n';
    
    relatorio += `⏰ Última salvagem: ${info.ultimaSalvagem}\n`;
    relatorio += `💰 TP Disponível: ${info.tpAtual}\n`;
    relatorio += `\n📊 STATS:\n`;
    relatorio += `   STR: ${info.stats.STR}\n`;
    relatorio += `   DEX: ${info.stats.DEX}\n`;
    relatorio += `   CON: ${info.stats.CON}\n`;
    relatorio += `   WIL: ${info.stats.WIL}\n`;
    relatorio += `   MND: ${info.stats.MND}\n`;
    relatorio += `   SPI: ${info.stats.SPI}\n`;
    relatorio += `\n🎯 SKILLS DESBLOQUEADAS: ${info.skillsDesbloqueadas}/${HABILIDADES.length}\n`;
    relatorio += '\n' + '='.repeat(50) + '\n';
    
    return relatorio;
  }

  resetarJogo() {
    if (confirm('⚠️  Deseja mesmo resetar TUDO? Esta ação não pode ser desfeita!')) {
      HABILIDADES.forEach(skill => {
        skill.desbloqueada = (skill.id === 'root');
      });

      this.deletarSave();
      console.log('🔄 Jogo resetado!');
      window.location.reload();
    }
  }
}

console.log('💾 Módulo de Save carregado!');