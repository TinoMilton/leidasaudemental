import { oQueENr1 } from './posts/o-que-e-nr-1';
import { lei14831OQueE } from './posts/lei-14831-o-que-e';
import { diferencaNr1Lei14831 } from './posts/diferenca-nr-1-lei-14831';
import { exemplosRiscosPsicossociais } from './posts/exemplos-riscos-psicossociais';
import { afastamentosSaudeMentalRecorde } from './posts/afastamentos-saude-mental-recorde';
import { mitosSaudeMentalNoTrabalho } from './posts/mitos-saude-mental-no-trabalho';
import { assedioMoralNoTrabalho } from './posts/assedio-moral-no-trabalho';
import { presenteismoCustoInvisivel } from './posts/presenteismo-custo-invisivel';
import { sinaisSofrimentoEquipeLider } from './posts/sinais-sofrimento-equipe-lider';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorRole: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  relatedPosts: number[];
}

const originalPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'riscos-psicossociais-nr1',
    title: 'Entendendo os Riscos Psicossociais na NR-1',
    excerpt: 'Descubra como identificar e avaliar os riscos psicossociais no ambiente de trabalho conforme as novas exigências da Norma Regulamentadora 1.',
    image: '/blog-1.jpg',
    category: 'NR-1',
    author: 'Equipe Lei da Saúde Mental',
    authorRole: 'Especialistas em Saúde Ocupacional',
    readTime: '5 min',
    publishedAt: '2024-12-15',
    updatedAt: '2025-01-10',
    tags: ['NR-1', 'Riscos Psicossociais', 'PGR', 'Saúde Mental', 'Legislação'],
    relatedPosts: [2, 3],
    content: `
## O que são Riscos Psicossociais?

Os riscos psicossociais são fatores relacionados ao trabalho que podem causar danos à saúde mental e física dos trabalhadores. Eles estão diretamente ligados às condições de trabalho, organização, gestão e ambiente social na empresa.

Com a atualização da **NR-1** em agosto de 2024, a avaliação e gestão desses riscos tornou-se obrigatória para todas as empresas, independentemente do porte ou setor de atuação.

## Principais Categorias de Riscos Psicossociais

### 1. Demandas Psicológicas

Refere-se às exigências mentais e emocionais do trabalho:

- **Sobrecarga de trabalho**: Quantidade excessiva de tarefas ou prazos irreais
- **Pressão por resultados**: Metas agressivas sem recursos adequados
- **Complexidade das tarefas**: Atividades que exigem alto nível de concentração
- **Conflitos de papéis**: Responsabilidades mal definidas ou contraditórias
- **Monotonia**: Repetitividade excessiva das atividades

### 2. Controle do Trabalho

Relacionado à autonomia e participação do trabalhador:

- **Pouca autonomia**: Falta de liberdade para tomar decisões
- **Baixa participação**: Ausência de envolvimento em decisões que afetam o trabalho
- **Supervisão inadequada**: Controle excessivo ou ausência de feedback
- **Falta de clareza**: Objetivos e expectativas mal definidos

### 3. Apoio Social

Envolve as relações interpessoais no trabalho:

- **Assédio moral**: Comportamentos humilhantes ou constrangedores
- **Assédio sexual**: Condutas de natureza sexual indesejadas
- **Violência**: Ameaças, agressões físicas ou verbais
- **Isolamento**: Falta de suporte dos colegas e superiores
- **Conflitos interpessoais**: Relações tensas no ambiente de trabalho

### 4. Equilíbrio Vida-Trabalho

Diz respeito à conciliação entre vida pessoal e profissional:

- **Jornadas excessivas**: Horas de trabalho acima do legal
- **Sobrecarga de turnos**: Trabalho em horários atípicos
- **Indisponibilidade**: Dificuldade de desconectar do trabalho
- **Conflitos familiares**: Impacto negativo nas relações pessoais

## Como Identificar os Riscos na Sua Empresa

### Passo 1: Análise Documental

Revise documentos existentes que possam indicar problemas:

- Registros de absenteísmo e turnover
- Afastamentos por doenças mentais
- Reclamações trabalhistas
- Relatórios de acidentes de trabalho
- Avaliações de desempenho

### Passo 2: Aplicação de Questionários

Utilize instrumentos validados para avaliação:

- **COPSOQ (Copenhagen Psychosocial Questionnaire)**: Questionário dinamarquês amplamente utilizado
- **Job Content Questionnaire (JCQ)**: Foca em demanda, controle e apoio social
- **Effort-Reward Imbalance**: Avalia o desequilíbrio entre esforço e recompensa
- **Inventário de Síndrome de Burnout de Maslach (MBI)**: Identifica sinais de esgotamento

### Passo 3: Entrevistas e Grupos Focais

Converse com os trabalhadores para entender a realidade:

- Entrevistas individuais com amostra representativa
- Grupos focais por setor ou função
- Entrevistas com líderes e gestores
- Análise de narrativas de adoecimento

### Passo 4: Observação do Trabalho

Acompanhe as atividades no dia a dia:

- Observação das condições físicas do ambiente
- Análise da organização do trabalho
- Identificação de gargalos e pressões
- Mapeamento de relações interpessoais

## Instrumentos de Avaliação Obrigatórios

De acordo com a NR-1, o PGR (Programa de Gerenciamento de Riscos) deve incluir:

### 1. Inventário de Riscos Psicossociais

Documento que identifica e descreve:
- Agentes de risco presentes
- Setores e funções expostos
- Grau de exposição
- Medidas de controle existentes

### 2. Perfil Profissiográfico Previdenciário (PPP)

Deve ser atualizado para incluir:
- Exposição a riscos psicossociais
- Intensidade e frequência da exposição
- Efeitos sobre a saúde do trabalhador

### 3. Programa de Controle Médico de Saúde Ocupacional (PCMSO)

Deve contemplar:
- Exames médicos específicos para saúde mental
- Acompanhamento de trabalhadores em situação de risco
- Encaminhamentos para especialistas quando necessário

## Medidas de Controle Hierarquizadas

### Eliminação (mais efetiva)

- Redesenho de processos de trabalho
- Eliminação de tarefas desnecessárias
- Automação de atividades repetitivas

### Substituição

- Rotação de funções
- Redistribuição de tarefas
- Mudança de horários ou turnos

### Engenharia

- Melhoria das condições físicas do ambiente
- Redução de ruídos e interferências
- Adequação de mobiliário e equipamentos

### Administrativas

- Definição clara de responsabilidades
- Estabelecimento de metas realistas
- Implementação de pausas regulares
- Capacitação de líderes em gestão de pessoas

### EPIs (menos efetiva, mas necessária)

- Programas de apoio psicológico
- Canais de comunicação anônimos
- Grupos de apoio e escuta

## Integração com a Lei 14.831/2024

A avaliação de riscos psicossociais da NR-1 é o **ponto de partida** para a adequação à Lei 14.831/2024. Enquanto a NR-1 exige a identificação e controle dos riscos, a lei vai além ao estabelecer práticas proativas de promoção da saúde mental.

### Diferenças Principais:

| Aspecto | NR-1 | Lei 14.831/2024 |
|---------|------|-----------------|
| Foco | Prevenção de danos | Promoção da saúde |
| Abordagem | Reativa | Proativa |
| Certificação | Não há | Certificado federal |
| Requisitos | Avaliação de riscos | 17 práticas específicas |
| Validade | Contínua | 2 anos (renovável) |

## Próximos Passos

1. **Realize o diagnóstico** completo dos riscos psicossociais na sua empresa
2. **Atualize o PGR** com as novas exigências da NR-1
3. **Implemente medidas de controle** hierarquizadas
4. **Monitore os resultados** através de indicadores
5. **Prepare-se para o certificado** da Lei 14.831/2024

A saúde mental dos trabalhadores é um investimento, não um custo. Empresas que priorizam o bem-estar de seus colaboradores colhem frutos em produtividade, retenção de talentos e resultados financeiros.
    `
  },
  {
    id: 2,
    slug: 'implementar-programas-saude-mental',
    title: 'Como Implementar Programas de Saúde Mental',
    excerpt: 'Guia prático para criar e executar programas efetivos de promoção da saúde mental na sua organização, desde o planejamento até a avaliação.',
    image: '/blog-2.jpg',
    category: 'Implementação',
    author: 'Dra. Ana Silva',
    authorRole: 'Psicóloga Organizacional',
    readTime: '7 min',
    publishedAt: '2024-12-10',
    updatedAt: '2025-01-08',
    tags: ['Programas', 'Implementação', 'Gestão', 'Bem-estar', 'Estratégia'],
    relatedPosts: [1, 3],
    content: `
## Introdução

Implementar um programa de saúde mental efetivo vai muito além de oferecer frutas na copa ou uma academia corporativa. Requer planejamento estratégico, comprometimento da alta direção e uma abordagem holística que considere todas as dimensões do bem-estar dos colaboradores.

Neste guia, apresentamos um passo a passo completo para criar e executar programas de saúde mental que realmente funcionam.

## Fase 1: Diagnóstico e Planejamento

### 1.1 Análise da Situação Atual

Antes de implementar qualquer ação, é fundamental entender o cenário atual:

**Coleta de Dados Quantitativos:**
- Taxa de absenteísmo por motivos de saúde mental
- Índice de turnover voluntário e involuntário
- Afastamentos por transtornos mentais (CID F00-F99)
- Custos com plano de saúde relacionados à saúde mental
- Acidentes de trabalho e quase acidentes
- Produtividade e qualidade dos entregáveis
- Resultados de pesquisas de clima organizacional

**Coleta de Dados Qualitativos:**
- Entrevistas com lideranças
- Grupos focais com colaboradores
- Análise de reclamações e sugestões
- Avaliação do ambiente físico de trabalho
- Mapeamento de relações interpessoais

### 1.2 Definição de Objetivos

Estabeleça metas SMART (Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais):

**Exemplos de Objetivos:**
- Reduzir o absenteísmo por saúde mental em 30% em 12 meses
- Aumentar em 20% a satisfação dos colaboradores com o ambiente de trabalho
- Implementar 100% dos 17 requisitos da Lei 14.831/2024 em 18 meses
- Alcançar nota mínima de 4.0 (escala 1-5) na avaliação de saúde mental

### 1.3 Formação do Comitê de Saúde Mental

Crie um grupo multidisciplinar responsável pelo programa:

**Composição Sugerida:**
- Representante da alta direção (patrocinador)
- Gestor de RH
- Especialista em segurança do trabalho
- Psicólogo organizacional
- Representantes dos colaboradores
- Profissional de comunicação interna

**Responsabilidades do Comitê:**
- Definir estratégias e prioridades
- Aprovar orçamento e recursos
- Acompanhar indicadores e resultados
- Comunicar avanços para a organização
- Garantir a sustentabilidade do programa

## Fase 2: Estruturação do Programa

### 2.1 Eixos de Atuação

Baseie-se nos três pilares da Lei 14.831/2024:

#### Eixo 1: Promoção da Saúde Mental

**Ações Principais:**
- Campanhas de conscientização mensais
- Workshops e palestras educativas
- Programa de capacitação de líderes
- Canal de apoio psicológico (EAP)
- Grupos de estudo e troca de experiências

**Exemplos Práticos:**
- "Janeiro Branco" - Campanha de prevenção ao burnout
- Treinamento de líderes em escuta ativa
- Rodas de conversa sobre estresse no trabalho
- Disponibilização de app de meditação corporativo

#### Eixo 2: Bem-Estar dos Trabalhadores

**Ações Principais:**
- Melhoria das condições físicas do ambiente
- Flexibilização de horários e modalidades de trabalho
- Incentivo à atividade física
- Programa de alimentação saudável
- Atividades de integração e team building

**Exemplos Práticos:**
- Home office híbrido (2-3 dias por semana)
- Ginástica laboral diária
- Subsídio para atividades físicas
- Refeitório com opções saudáveis
- Happy hours mensais

#### Eixo 3: Transparência

**Ações Principais:**
- Comunicação regular sobre as ações do programa
- Canal anônimo para sugestões e denúncias
- Publicação de indicadores de saúde mental
- Pesquisas periódicas de satisfação
- Relatório anual de bem-estar

**Exemplos Práticos:**
- Newsletter mensal sobre saúde mental
- Painel de indicadores no intranet
- Pesquisa de clima semestral
- Relatório de sustentabilidade incluindo métricas de pessoas

### 2.2 Orçamento e Recursos

**Estimativa de Investimentos:**

| Categoria | % do Orçamento | Exemplos |
|-----------|----------------|----------|
| Prevenção e Promoção | 40% | Palestras, campanhas, materiais |
| Atendimento Clínico | 30% | EAP, psicólogo interno, telemedicina |
| Capacitação | 15% | Treinamentos, certificações |
| Infraestrutura | 10% | Mobiliário ergonômico, espaços de descanso |
| Comunicação | 5% | Material gráfico, plataformas digitais |

**Retorno sobre Investimento (ROI):**

Estudos mostram que cada R$ 1,00 investido em saúde mental retorna entre R$ 2,00 e R$ 4,00 em:
- Redução de absenteísmo
- Diminuição de turnover
- Aumento de produtividade
- Redução de custos com plano de saúde

## Fase 3: Implementação

### 3.1 Cronograma de Ações

**Mês 1-2: Lançamento e Comunicação**
- Apresentação do programa para a diretoria
- Comunicação institucional sobre o programa
- Treinamento inicial de líderes
- Disponibilização de recursos (EAP, materiais)

**Mês 3-6: Primeiras Ações**
- Campanha de conscientização inicial
- Início dos grupos de apoio
- Implementação de flexibilidades
- Primeira pesquisa de avaliação

**Mês 7-12: Consolidação**
- Análise de resultados e ajustes
- Expansão das iniciativas bem-sucedidas
- Reconhecimento de boas práticas
- Planejamento do próximo ciclo

### 3.2 Capacitação de Lideranças

Os gestores são multiplicadores do programa. Invista em:

**Conteúdos Obrigatórios:**
- Identificação de sinais de alerta em colaboradores
- Técnicas de escuta ativa e empatia
- Gestão de conflitos e feedback construtivo
- Orientação sobre encaminhamentos (EAP, RH)
- Prevenção e identificação de assédio

**Formatos:**
- Treinamentos presenciais (8-16 horas)
- Webinars mensais (1 hora)
- Material de consulta rápida (cartilhas, vídeos)
- Mentoria entre pares

### 3.3 Comunicação Interna

Estratégia de comunicação efetiva:

**Canais:**
- E-mail institucional
- Intranet/Portal do colaborador
- Grupos de WhatsApp/Teams
- Mural físico (para quem não tem acesso digital)
- Reuniões de equipe

**Frequência:**
- Comunicação inicial: Intensa (semanal)
- Manutenção: Regular (mensal)
- Campanhas específicas: Conforme calendário

**Tom de Voz:**
- Acessível e humanizado
- Baseado em evidências científicas
- Livre de estigmas sobre saúde mental
- Inclusivo e diverso

## Fase 4: Monitoramento e Avaliação

### 4.1 Indicadores de Processo

Acompanhe a execução das ações:

- **Cobertura**: % de colaboradores que participaram das ações
- **Frequência**: Número de atividades realizadas vs. planejadas
- **Satisfação**: Nota média das avaliações de eventos
- **Engajamento**: Taxa de abertura de comunicados, downloads de materiais

### 4.2 Indicadores de Resultado

Meça o impacto real na saúde mental:

**Indicadores Primários:**
- Absenteísmo por transtornos mentais (CID F00-F99)
- Turnover voluntário
- Resultados de pesquisa de clima (dimensão saúde/bem-estar)
- Utilização do EAP (número de atendimentos)

**Indicadores Secundários:**
- Custos com afastamentos por saúde mental
- Produtividade (metas atingidas, qualidade)
- Satisfação dos clientes internos/externos
- Índice de promoção de empregabilidade interna

### 4.3 Ciclo de Melhoria Contínua

Estabeleça um processo de PDCA:

**PLAN (Planejar):**
- Defina objetivos e metas
- Elabore o plano de ação
- Aloc recursos necessários

**DO (Executar):**
- Implemente as ações conforme planejado
- Documente o processo
- Comunique para os stakeholders

**CHECK (Verificar):**
- Analise os indicadores
- Compare resultados vs. metas
- Identifique desvios e causas

**ACT (Agir):**
- Implemente correções
- Padronize boas práticas
- Replaneje para o próximo ciclo

## Fase 5: Sustentabilidade

### 5.1 Integração com a Cultura Organizacional

O programa deve fazer parte do DNA da empresa:

- Inclua saúde mental nos valores organizacionais
- Integre aos processos de gestão de desempenho
- Reconheça e premie comportamentos saudáveis
- Inclua na onboarding de novos colaboradores
- Faça parte da estratégia de Employer Branding

### 5.2 Governança e Compliance

Garanta a conformidade legal:

- Atualize o PGR com riscos psicossociais (NR-1)
- Documente todas as ações do programa
- Mantenha registros de atendimentos (LGPD)
- Prepare-se para auditorias
- Busque o Certificado Empresa Promotora (Lei 14.831/2024)

## Conclusão

Implementar um programa de saúde mental efetivo é um processo contínuo que exige comprometimento, recursos e paciência. Os resultados não aparecem da noite para o dia, mas quando bem executado, o programa se torna um diferencial competitivo que beneficia tanto os colaboradores quanto a organização.

Lembre-se: saúde mental não é modismo, é direito fundamental do trabalhador e dever do empregador.
    `
  },
  {
    id: 3,
    slug: 'burnout-sinais-prevencao',
    title: 'Burnout: Sinais e Prevenção',
    excerpt: 'Aprenda a identificar os primeiros sinais de burnout nos colaboradores e quais ações preventivas sua empresa pode adotar.',
    image: '/blog-3.jpg',
    category: 'Prevenção',
    author: 'Dr. Carlos Mendes',
    authorRole: 'Psiquiatra do Trabalho',
    readTime: '4 min',
    publishedAt: '2024-12-05',
    updatedAt: '2025-01-05',
    tags: ['Burnout', 'Síndrome', 'Prevenção', 'Sinais', 'Esgotamento'],
    relatedPosts: [1, 2],
    content: `
## O que é Burnout?

A Síndrome de Burnout, também conhecida como Síndrome do Esgotamento Profissional, é uma resposta prolongada ao estresse crônico no trabalho. Caracteriza-se por três dimensões principais:

1. **Esgotamento Emocional**: Sensação de estar emocionalmente esgotado e sobrecarregado
2. **Despersonalização**: Atitude negativa, cínica e distanciada em relação ao trabalho e às pessoas
3. **Baixa Realização Profissional**: Sentimento de incompetência e falta de realização no trabalho

Em 2022, a burnout foi oficialmente reconhecida pela OMS (Organização Mundial da Saúde) como um fenômeno ocupacional, reforçando a importância de seu diagnóstico e prevenção.

## Sinais de Alerta

### Sinais Comportamentais

**No trabalho:**
- Queda na produtividade e qualidade das entregas
- Aumento de erros e falta de atenção
- Dificuldade de concentração e memória
- Procrastinação excessiva
- Isolamento de colegas
- Chegadas tardias ou saídas antecipadas frequentes
- Falta de iniciativa e criatividade

**Fora do trabalho:**
- Irritabilidade e mudanças de humor
- Retraimento social
- Alterações no sono (insônia ou sono excessivo)
- Mudanças no apetite
- Abandono de hobbies e atividades prazerosas
- Aumento no consumo de álcool ou substâncias

### Sinais Físicos

- Dores de cabeça frequentes
- Tensão muscular (pescoço, ombros, costas)
- Fadiga persistente, mesmo após descanso
- Problemas gastrointestinais
- Palpitações e taquicardia
- Queda de imunidade (doenças frequentes)
- Alterações na pele (acne, eczema)

### Sinais Emocionais

- Ansiedade constante
- Sensação de vazio
- Ceticismo e pessimismo
- Culpa e baixa autoestima
- Dificuldade de sentir alegria
- Pensamentos de inadequação
- Sensação de estar "no automático"

## Fatores de Risco no Ambiente de Trabalho

### Fatores Organizacionais

**Carga de Trabalho:**
- Quantidade excessiva de tarefas
- Prazos irreais e pressão constante
- Falta de recursos para executar o trabalho
- Multitarefa excessiva

**Controle e Autonomia:**
- Micromanagement
- Falta de participação nas decisões
- Pouca clareza sobre responsabilidades
- Inexistência de feedback

**Recompensa e Reconhecimento:**
- Remuneração abaixo do mercado
- Falta de reconhecimento do esforço
- Promoções injustas ou inexistentes
- Trabalho sem sentido ou propósito

**Comunidade e Relações:**
- Conflitos interpessoais frequentes
- Assédio moral ou sexual
- Falta de suporte da liderança
- Cultura de competição desleal

**Justiça e Valores:**
- Favoritismo
- Falta de transparência
- Valores organizacionais não praticados
- Desigualdade de tratamento

### Fatores Individuais

**Perfil de Personalidade:**
- Perfeccionismo
- Autocrítica excessiva
- Dificuldade de delegar
- Necessidade de controle
- Baixa assertividade

**Contexto Pessoal:**
- Problemas familiares
- Dívidas ou dificuldades financeiras
- Falta de rede de apoio
- Doenças preexistentes

## Prevenção na Empresa

### 1. Avaliação Contínua

**Pesquisas Periódicas:**
- Aplique o Inventário de Burnout de Maslach (MBI) anualmente
- Realize pulse surveys (pesquisas rápidas) mensais
- Monitore indicadores como absenteísmo e turnover

**Análise de Dados:**
- Identifique setores ou funções de maior risco
- Acompanhe a evolução dos indicadores ao longo do tempo
- Compare com benchmarks do setor

### 2. Gestão da Carga de Trabalho

**Redistribuição de Tarefas:**
- Analise a alocação de trabalho entre equipes
- Identifique gargalos e sobrecargas
- Redistribua tarefas de forma equilibrada

**Priorização:**
- Ajude colaboradores a identificar prioridades
- Elimine ou adie tarefas não essenciais
- Estabeleça prazos realistas

**Automação:**
- Identifique tarefas repetitivas que podem ser automatizadas
- Invista em ferramentas que facilitem o trabalho
- Reduza burocracias desnecessárias

### 3. Autonomia e Desenvolvimento

**Empoderamento:**
- Delegue responsabilidades
- Permita que colaboradores tomem decisões
- Ofereça flexibilidade de horários e local de trabalho

**Desenvolvimento Profissional:**
- Ofereça oportunidades de crescimento
- Invista em capacitação
- Crie planos de carreira claros

**Propósito:**
- Conecte o trabalho diário aos objetivos da organização
- Comunique o impacto positivo do trabalho
- Envolvedores em projetos significativos

### 4. Cultura de Apoio

**Liderança Presente:**
- Estabeleça one-on-ones regulares
- Pratique escuta ativa
- Ofereça feedback construtivo
- Esteja disponível para conversas

**Programa de Mentoria:**
- Pareie colaboradores experientes com iniciantes
- Crie grupos de apoio entre pares
- Incentive a troca de experiências

**Canais de Comunicação:**
- Mantenha portas abertas para conversas
- Ofereça canal anônimo para denúncias
- Comunique regularmente sobre recursos disponíveis

### 5. Programa de Assistência (EAP)

**Serviços Essenciais:**
- Atendimento psicológico (presencial ou online)
- Orientação jurídica e financeira
- Apoio em crises pessoais
- Consultoria para gestores

**Comunicação:**
- Divulgue regularmente os serviços disponíveis
- Garanta confidencialidade
- Remova estigmas sobre buscar ajuda
- Facilite o acesso (horários flexíveis, sem burocracia)

## Quando Buscar Ajuda Profissional

### Sinais de Alerta Imediato

Procure ajuda profissional se você ou um colega apresentar:

- Pensamentos de autoagressão ou suicídio
- Incapacidade de realizar atividades básicas
- Isolamento completo
- Uso de substâncias para lidar com o estresse
- Sintomas físicos intensos
- Comportamento violento ou agressivo

### Recursos Disponíveis

**Na Empresa:**
- Programa de Assistência ao Empregado (EAP)
- Departamento de Recursos Humanos
- Medicina do Trabalho
- Comissão Interna de Prevenção de Acidentes (CIPA)

**Externos:**
- CVV (Centro de Valorização da Vida): 188
- SAMU: 192
- Plantão psicológico do Conselho Regional de Psicologia
- Unidades de Pronto Atendimento (UPA)

## Tratamento e Recuperação

### Abordagem Multidisciplinar

O tratamento da burnout geralmente envolve:

**Psicoterapia:**
- Terapia Cognitivo-Comportamental (TCC)
- Terapia de aceitação e compromisso
- Terapia focada na solução de problemas

**Psiquiatria (quando necessário):**
- Avaliação para medicação antidepressivo ou ansiolítica
- Acompanhamento de sintomas físicos

**Mudanças no Estilo de Vida:**
- Regularização do sono
- Atividade física regular
- Práticas de relaxamento (meditação, yoga)
- Alimentação equilibrada
- Atividades de lazer

### Retorno ao Trabalho

O retorno deve ser gradual e acompanhado:

- Licença médica quando necessária
- Retorno gradual (meio período inicialmente)
- Readequação de funções temporária
- Acompanhamento médico e psicológico
- Suporte da liderança

## Conclusão

A burnout é uma condição séria, mas prevenível e tratável. A chave está na identificação precoce dos sinais de alerta e na criação de ambientes de trabalho que promovam o bem-estar físico, mental e social dos colaboradores.

Lembre-se: prevenir é sempre mais eficaz e menos custoso do que tratar. Invista na saúde mental da sua equipe e colha os benefícios de uma força de trabalho engajada, produtiva e saudável.

**Se você está passando por isso, saiba que não está sozinho. Busque ajuda. Sua saúde mental é prioridade.**
    `
  }
];

// Newest first; the first post is featured on /blog.
export const blogPosts: BlogPost[] = [
  oQueENr1,
  lei14831OQueE,
  diferencaNr1Lei14831,
  exemplosRiscosPsicossociais,
  afastamentosSaudeMentalRecorde,
  mitosSaudeMentalNoTrabalho,
  assedioMoralNoTrabalho,
  presenteismoCustoInvisivel,
  sinaisSofrimentoEquipeLider,
  ...originalPosts,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getRelatedPosts(postId: number): BlogPost[] {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return [];
  return blogPosts.filter(p => post.relatedPosts.includes(p.id));
}
