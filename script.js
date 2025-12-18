let tpAtual = CONFIG.TP_INICIAL || 100000;
let statsJogador = { STR: 0, DEX: 0, CON: 0, WIL: 0, MND: 0, SPI: 0 };
let sistemaTiers = null;
let sistemaLocks = null;
let sistemaSave = null;

// ========== SISTEMA DE PAN/ZOOM ==========
let panX = 0;
let panY = 0;
let zoom = 1;
let isPanning = false;
let panStartX = 0;
let panStartY = 0;

// ========== SISTEMA DE TIERS SEPARADOS ==========
let tierAtual = 0;

function inicializar() {
  console.log('🚀 Inicializando árvore de habilidades...');

  sistemaTiers = new SistemaTiers();
  sistemaLocks = new SistemaLocks(statsJogador, tpAtual);
  sistemaSave = new SistemaSave();

  const dadosCarregados = sistemaSave.carregarProgresso();
  if (dadosCarregados) {
    console.log('📂 Save anterior carregado');
    tpAtual = dadosCarregados.tpAtual;
    statsJogador = dadosCarregados.stats;
    sistemaLocks = new SistemaLocks(statsJogador, tpAtual);
  }

  criarBotoesTiers();
  desenharArvore();
  atualizarPainel();
  console.log(sistemaTiers.getResumoProgressao());
  console.log('✅ Árvore pronta!');
}

function criarBotoesTiers() {
  const container = document.getElementById('tier-buttons');
  container.innerHTML = '';

  for (let i = 0; i < CONFIG.TIERS_TOTAL; i++) {
    const btn = document.createElement('button');
    btn.className = 'tier-btn';
    btn.textContent = `Tier ${i}`;
    btn.id = `tier-btn-${i}`;
    
    const prog = sistemaTiers.getProgressoTier(i);
    const desbloqueado = sistemaTiers.isTierDesbloqueado(i);
    
    if (desbloqueado) {
      btn.classList.add('desbloqueado');
    } else {
      btn.classList.add('bloqueado');
    }
    
    btn.addEventListener('click', () => {
      tierAtual = i;
      atualizarBotoesTiers();
      resetarZoom();
      desenharArvore();
    });
    
    container.appendChild(btn);
  }
}

function atualizarBotoesTiers() {
  for (let i = 0; i < CONFIG.TIERS_TOTAL; i++) {
    const btn = document.getElementById(`tier-btn-${i}`);
    const prog = sistemaTiers.getProgressoTier(i);
    const desbloqueado = sistemaTiers.isTierDesbloqueado(i);
    
    btn.classList.remove('ativo', 'desbloqueado', 'bloqueado');
    
    if (i === tierAtual) {
      btn.classList.add('ativo');
    }
    
    if (desbloqueado) {
      btn.classList.add('desbloqueado');
    } else {
      btn.classList.add('bloqueado');
    }
  }
}

function desenharArvore() {
  const svg = document.getElementById('arvore');
  if (!svg) return;

  svg.innerHTML = '';
  
  // Aplicar transformação de pan/zoom
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('id', 'arvore-container');
  g.setAttribute('transform', `translate(${panX}, ${panY}) scale(${zoom})`);
  
  // Obter habilidades do tier atual
  const skillsDoTier = getSkillsPorTier(tierAtual);
  
  // Desenhar conexões
  desenharConexoesTier(g, skillsDoTier);

  // Usar layout específico por tier
  if (tierAtual === 0) {
    // Layout CRUZ ESCALONADA para Tier 0
    desenharSkillsCruzEscalonada(g, skillsDoTier);
  } else {
    // Layout RADIAL para os outros tiers
    desenharSkillsRadial(g, skillsDoTier);
  }

  svg.appendChild(g);
}

// Função para gerar número pseudo-aleatório baseado em seed
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// ========== LAYOUT: CRUZ ESCALONADA (4 BRAÇOS COM CAMADAS) ==========
function desenharSkillsCruzEscalonada(container, skills) {
  const centerX = CONFIG.CANVAS_WIDTH / 2;
  const centerY = CONFIG.CANVAS_HEIGHT / 2;
  
  if (skills.length === 0) return;
  
  // 1ª Skill: Centro
  const skillCentral = skills[0];
  skillCentral.x = centerX;
  skillCentral.y = centerY;
  desenharSkill(container, skillCentral);
  
  const skillsRestantes = skills.slice(1);
  
  // 4 direções principais (Norte, Sul, Leste, Oeste)
  const direcoes = [
    { angulo: 0,           nome: 'Leste' },       // 0°
    { angulo: Math.PI/2,   nome: 'Sul' },         // 90°
    { angulo: Math.PI,     nome: 'Oeste' },       // 180°
    { angulo: 3*Math.PI/2, nome: 'Norte' }        // 270°
  ];
  
  // Parâmetros de escalonamento
  const espacoEntreCamadas = 160;  // Distância entre degraus
  const espacoEntreBracos = 80;    // Distância horizontal entre skills no mesmo degrau
  
  let skillIndex = 0;
  
  // Calcular quantos degraus/camadas teremos
  const skillsPorBraco = Math.ceil(skillsRestantes.length / direcoes.length);
  const numCamadas = Math.ceil(skillsPorBraco);
  
  // Para cada camada/degrau
  for (let camada = 1; camada <= numCamadas; camada++) {
    // Para cada direção (4 braços da cruz)
    for (let dir = 0; dir < direcoes.length; dir++) {
      if (skillIndex >= skillsRestantes.length) break;
      
      const direcao = direcoes[dir];
      const skill = skillsRestantes[skillIndex];
      
      // Distância do centro aumenta com as camadas
      const distancia = camada * espacoEntreCamadas;
      
      // Pequeno ruido para não ficar muito rígido
      const seed = skillIndex * 12.9898;
      const ruido = (seededRandom(seed) - 0.5) * 30;
      
      // Calcular posição
      let x = centerX + distancia * Math.cos(direcao.angulo);
      let y = centerY + distancia * Math.sin(direcao.angulo);
      
      // Adicionar pequena variação perpendicular (faz parecer escalonado)
      x += ruido * Math.cos(direcao.angulo + Math.PI/2);
      y += ruido * Math.sin(direcao.angulo + Math.PI/2);
      
      skill.x = x;
      skill.y = y;
      
      desenharSkill(container, skill);
      skillIndex++;
    }
  }
}

function desenharSkillsRadial(container, skills) {
  const centerX = CONFIG.CANVAS_WIDTH / 2;
  const centerY = CONFIG.CANVAS_HEIGHT / 2;
  const raioBase = 150;
  const raioIncremento = 120;

  // Agrupar skills por nível (distância do centro)
  const niveis = {};
  skills.forEach(skill => {
    // Usar o índice dentro do tier como nível
    const indice = skills.indexOf(skill);
    const nivel = Math.floor(indice / 4); // 4 skills por nível
    
    if (!niveis[nivel]) niveis[nivel] = [];
    niveis[nivel].push(skill);
  });

  // Desenhar cada nível
  Object.keys(niveis).forEach(nivel => {
    const skillsNivel = niveis[nivel];
    const raioDeste = raioBase + (nivel * raioIncremento);
    const anguloPorSkill = (2 * Math.PI) / skillsNivel.length;

    skillsNivel.forEach((skill, indice) => {
      const angulo = indice * anguloPorSkill;
      const x = centerX + raioDeste * Math.cos(angulo);
      const y = centerY + raioDeste * Math.sin(angulo);

      // Atualizar posição da skill para o layout radial
      skill.x = x;
      skill.y = y;

      desenharSkill(container, skill);
    });
  });
}

function desenharConexoesTier(container, skills) {
  const centerX = CONFIG.CANVAS_WIDTH / 2;
  const centerY = CONFIG.CANVAS_HEIGHT / 2;

  skills.forEach(skill => {
    // Desenhar linhas para o centro (raíz)
    if (skill.id !== 'root') {
      const linha = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      linha.setAttribute('x1', centerX);
      linha.setAttribute('y1', centerY);
      linha.setAttribute('x2', skill.x);
      linha.setAttribute('y2', skill.y);
      linha.setAttribute('stroke', '#444');
      linha.setAttribute('stroke-width', '1');
      linha.setAttribute('pointer-events', 'none');
      container.appendChild(linha);
    }

    // Desenhar linhas entre skills do mesmo tier (pré-requisitos)
    skill.prereqSkills.forEach(preqId => {
      const prereq = getSkillPorId(preqId);
      if (prereq && prereq.tier === skill.tier) {
        const linha = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        linha.setAttribute('x1', prereq.x);
        linha.setAttribute('y1', prereq.y);
        linha.setAttribute('x2', skill.x);
        linha.setAttribute('y2', skill.y);
        linha.setAttribute('stroke', '#666');
        linha.setAttribute('stroke-width', '1');
        linha.setAttribute('stroke-dasharray', '5,5');
        linha.setAttribute('pointer-events', 'none');
        container.appendChild(linha);
      }
    });
  });
}

function desenharSkill(container, skill) {
  const circulo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const cor = sistemaLocks.getCorSkill(skill.id);
  
  circulo.setAttribute('cx', skill.x);
  circulo.setAttribute('cy', skill.y);
  circulo.setAttribute('r', 35);
  circulo.setAttribute('fill', cor);
  circulo.setAttribute('stroke', '#fff');
  circulo.setAttribute('stroke-width', '2');
  circulo.setAttribute('class', 'skill-circle');
  circulo.setAttribute('data-skill-id', skill.id);

  circulo.addEventListener('click', (e) => {
    e.stopPropagation();
    cliquouSkill(skill.id);
  });

  circulo.addEventListener('mouseenter', (e) => mostrarTooltip(e, skill));
  circulo.addEventListener('mouseleave', ocultarTooltip);

  container.appendChild(circulo);

  const texto = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  texto.setAttribute('x', skill.x);
  texto.setAttribute('y', skill.y - 5);
  texto.setAttribute('text-anchor', 'middle');
  texto.setAttribute('font-size', '11');
  texto.setAttribute('font-weight', 'bold');
  texto.setAttribute('fill', '#fff');
  texto.setAttribute('pointer-events', 'none');
  texto.textContent = skill.nome;
  container.appendChild(texto);

  const tier = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  tier.setAttribute('x', skill.x);
  tier.setAttribute('y', skill.y + 12);
  tier.setAttribute('text-anchor', 'middle');
  tier.setAttribute('font-size', '9');
  tier.setAttribute('fill', '#aaa');
  tier.setAttribute('pointer-events', 'none');
  tier.textContent = `T${skill.tier}`;
  container.appendChild(tier);

  if (!skill.desbloqueada) {
    const lock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    lock.setAttribute('x', skill.x + 25);
    lock.setAttribute('y', skill.y - 20);
    lock.setAttribute('font-size', '16');
    lock.setAttribute('pointer-events', 'none');
    lock.textContent = '🔒';
    container.appendChild(lock);
  }
}

function cliquouSkill(skillId) {
  console.log(`👆 Clicou em: ${skillId}`);

  const skill = getSkillPorId(skillId);
  if (!skill) return;

  if (skill.desbloqueada) {
    alert(
      `✅ ${skill.nome}\n\n${skill.descricao}\n\nTier: ${skill.tier}\nCusto: ${skill.custoTP} TP`
    );
    return;
  }

  const resultado = sistemaLocks.tentar_desbloquear(skillId);

  if (resultado.sucesso) {
    console.log('✅', resultado.mensagem);
    tpAtual = sistemaLocks.tp;
    desenharArvore();
    atualizarPainel();
    atualizarBotoesTiers();
    salvarProgresso();
    alert(resultado.mensagem);
  } else {
    console.log('❌', resultado.motivo);
    alert(`❌ Não pode desbloquear!\n\n${resultado.motivo}\n\n${skill.descricao}`);
  }
}

function mostrarTooltip(evento, skill) {
  const tooltip = document.getElementById('tooltip');
  if (!tooltip) return;

  let conteudo = `${skill.nome} (T${skill.tier})\n${skill.descricao}\n\n💰 Custo: ${skill.custoTP} TP\n`;

  if (!skill.desbloqueada) {
    const motivo = sistemaLocks.getMotivoTranca(skill.id);
    conteudo += `\n${motivo}\n`;

    const prereqs = getDescricaoPrereqs(skill.id);
    if (prereqs.length > 0) {
      conteudo += `\n📋 Pré-requisitos:\n${prereqs.join('\n')}`;
    }
  }

  tooltip.textContent = conteudo;
  tooltip.style.display = 'block';
  tooltip.style.left = evento.pageX + 10 + 'px';
  tooltip.style.top = evento.pageY + 10 + 'px';
}

function ocultarTooltip() {
  const tooltip = document.getElementById('tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

function atualizarPainel() {
  const tpElement = document.getElementById('tp');
  if (tpElement) tpElement.textContent = tpAtual;

  ['STR', 'DEX', 'CON', 'WIL', 'MND', 'SPI'].forEach(stat => {
    const input = document.getElementById(stat.toLowerCase());
    if (input) input.value = statsJogador[stat];
  });

  atualizarProgressoTiers();
}

function atualizarProgressoTiers() {
  const containerTiers = document.getElementById('tiers-progress');
  if (!containerTiers) return;

  containerTiers.innerHTML = '';

  for (let i = 0; i < CONFIG.TIERS_TOTAL; i++) {
    const prog = sistemaTiers.getProgressoTier(i);
    const desbloqueado = sistemaTiers.isTierDesbloqueado(i) ? '✅' : '🔒';

    const div = document.createElement('div');
    div.className = 'tier-progress';
    div.innerHTML = `
      <span>${desbloqueado} Tier ${i}</span>
      <span>${prog.desbloqueadas}/${prog.total}</span>
      <div class="barra">
        <div class="fill" style="width: ${prog.percentual}%"></div>
      </div>
    `;

    containerTiers.appendChild(div);
  }
}

function salvarProgresso() {
  if (sistemaSave) {
    sistemaSave.salvarProgresso(statsJogador, tpAtual);
  }
}

function iniciarAutoSave() {
  setInterval(() => {
    salvarProgresso();
    console.log('💾 Auto-salvando...');
  }, 10000);
}

function resetarTudo() {
  if (sistemaSave) sistemaSave.resetarJogo();
}

function exportarBackup() {
  if (sistemaSave) sistemaSave.exportarBackup();
}

function gerarRelatorio() {
  if (sistemaSave) {
    console.log(sistemaSave.gerarRelatorio());
    alert(sistemaSave.gerarRelatorio());
  }
}

function atualizarStat(stat, valor) {
  const valorInt = parseInt(valor) || 0;
  statsJogador[stat] = valorInt;
  sistemaLocks = new SistemaLocks(statsJogador, tpAtual);
  desenharArvore();
  salvarProgresso();
  console.log(`📊 ${stat} atualizado para ${valorInt}`);
}

function resetarZoom() {
  panX = 0;
  panY = 0;
  zoom = 1;
}

// ========== SISTEMA DE PAN/ZOOM - EVENT LISTENERS ==========

function setupPanZoom() {
  const svg = document.getElementById('arvore');
  if (!svg) return;

  // Mouse wheel para zoom
  svg.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    const zoomSpeed = 0.1;
    const novoZoom = e.deltaY > 0 ? zoom - zoomSpeed : zoom + zoomSpeed;
    
    // Limitar zoom entre 0.5 e 3
    if (novoZoom >= 0.5 && novoZoom <= 3) {
      zoom = novoZoom;
      desenharArvore();
    }
  });

  // Mouse down para iniciar pan
  svg.addEventListener('mousedown', (e) => {
    // Verificar se clicou em uma skill
    if (e.target.classList.contains('skill-circle')) {
      return;
    }
    
    isPanning = true;
    panStartX = e.clientX - panX;
    panStartY = e.clientY - panY;
    svg.style.cursor = 'grabbing';
  });

  // Mouse move para pan
  document.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    
    panX = e.clientX - panStartX;
    panY = e.clientY - panStartY;
    desenharArvore();
  });

  // Mouse up para parar pan
  document.addEventListener('mouseup', () => {
    isPanning = false;
    svg.style.cursor = 'grab';
  });

  // Botão para resetar zoom/pan
  const btnReset = document.getElementById('btn-reset-view');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      resetarZoom();
      desenharArvore();
    });
  }
}

window.addEventListener('load', () => {
  inicializar();
  iniciarAutoSave();
  setupPanZoom();

  ['str', 'dex', 'con', 'wil', 'mnd', 'spi'].forEach(stat => {
    const input = document.getElementById(stat);
    if (input) {
      input.addEventListener('change', (e) => {
        atualizarStat(stat.toUpperCase(), e.target.value);
      });
    }
  });

  ['btn-reset', 'btn-exportar', 'btn-relatorio'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      if (id === 'btn-reset') btn.addEventListener('click', resetarTudo);
      if (id === 'btn-exportar') btn.addEventListener('click', exportarBackup);
      if (id === 'btn-relatorio') btn.addEventListener('click', gerarRelatorio);
    }
  });
});

console.log('✅ Script principal carregado e pronto!');
