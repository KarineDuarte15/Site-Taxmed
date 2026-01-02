export interface SegmentData {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    videoPath?: string;
    painPoints: {
        title: string;
        description: string;
    }[];
    solutions: string[];
    extraInfo?: {
        title: string;
        content: string;
    };
}

export const segments: Record<string, SegmentData> = {
    "medicos": {
        id: "medicos",
        title: "Contabilidade Especializada para Médicos",
        subtitle: "Soluções completas para reduzir sua carga tributária e organizar suas finanças, permitindo que você foque no cuidado com seus pacientes.",
        heroImage: "/medicos.jpg",
        videoPath: "/video.mp4",
        painPoints: [
            { title: "Impostos Elevados", description: "Pagar mais impostos do que o necessário por falta de planejamento tributário adequado." },
            { title: "Plantões e Vínculos", description: "Dificuldade em gerenciar múltiplos vínculos (PF, PJ, CLT) e a complexidade do Carnê-Leão." },
            { title: "Burocracia Excessiva", description: "Perda de tempo precioso lidando com emissão de notas e obrigações acessórias." }
        ],
        solutions: [
            "Planejamento Tributário (Lucro Presumido vs. Simples Nacional)",
            "Gestão Financeira e BPO Financeiro para consultórios",
            "Regularização de Carnê-Leão para atendimentos particulares",
            "Abertura e regularização de PJ médica em 24h"
        ],
        extraInfo: {
            title: "Redução de Impostos",
            content: "Utilizamos estratégias legais como a equiparação hospitalar e o Fator R para reduzir sua alíquota efetiva significativamente."
        }
    },
    "dentistas": {
        id: "dentistas",
        title: "Contabilidade para Dentistas e Odontologia",
        subtitle: "Transforme seu consultório em um negócio lucrativo com nossa gestão fiscal e contábil especializada.",
        heroImage: "/dentista.png",
        videoPath: "/video.mp4",
        painPoints: [
            { title: "Livro Caixa Complexo", description: "Dificuldade em lançar corretamente as despesas dedutíveis no Livro Caixa para reduzir o imposto a pagar." },
            { title: "Mistura Patrimonial", description: "Confusão entre as finanças pessoais do dentista e as contas do consultório." },
            { title: "Risco Fiscal", description: "Medo de cair na malha fina por inconsistências nas declarações de pacientes e recibos." }
        ],
        solutions: [
            "Análise tributária: Pessoa Física x Pessoa Jurídica",
            "Escrituração correta do Livro Caixa (Carnê-Leão)",
            "Gestão de folha de pagamento de secretárias e auxiliares",
            "Planejamento para redução de carga tributária via Simples Nacional"
        ]
    },
    "laboratorios": {
        id: "laboratorios",
        title: "Contabilidade para Laboratórios",
        subtitle: "Reduza seus impostos em até 70% aplicando corretamente a Equiparação Hospitalar e otimizando seus custos operacionais.",
        heroImage: "/laboratorio.jpg",
        videoPath: "/video.mp4",
        painPoints: [
            { title: "Carga Tributária Alta", description: "Laboratórios muitas vezes pagam alíquotas cheias sem aproveitar os benefícios da lei de equiparação." },
            { title: "Gestão de Estoque e Custos", description: "Dificuldade em controlar custos de reagentes e insumos, impactando a margem de lucro." },
            { title: "Exigências da ANVISA", description: "Necessidade de manter diversas certidões e regularizações em dia para funcionamento." }
        ],
        solutions: [
            "Aplicação da Equiparação Hospitalar para redução de IRPJ e CSLL",
            "Segregação de receitas para otimização tributária",
            "Gestão Contábil focada em custos laboratoriais",
            "Assessoria na regularização de alvarás e licenças"
        ],
        extraInfo: {
            title: "Equiparação Hospitalar",
            content: "Sua melhor ferramenta de economia. Laboratórios de análises clínicas podem se beneficiar de alíquotas de impostos federais drasticamente reduzidas se enquadrados corretamente."
        }
    },
    "hospitais": {
        id: "hospitais",
        title: "Contabilidade para Hospitais",
        subtitle: "Gestão Tributária robusta para garantir máxima eficiência financeira e compliance em operações complexas.",
        heroImage: "/hospitalar.jpeg",
        videoPath: "/video.mp4",
        painPoints: [
            { title: "Complexidade Operacional", description: "Milhares de lançamentos financeiros, glosas médicas e gestão de múltiplos plantonistas." },
            { title: "Passivo Trabalhista", description: "Riscos elevados na contratação de corpo clínico e terceirizados." },
            { title: "Falta de Indicadores", description: "Ausência de relatórios financeiros precisos para tomada de decisão estratégica." }
        ],
        solutions: [
            "BPO Financeiro especializado em fluxo hospitalar",
            "Auditoria fiscal e tributária permanente",
            "Gestão de contratos e pagamentos de corpo clínico (PJ/CLT)",
            "Recuperação de créditos tributários"
        ],
        extraInfo: {
            title: "Eficiência & Compliance",
            content: "Nossa auditoria constante garante que sua instituição aproveite todos os incentivos fiscais do setor de saúde enquanto mitiga riscos jurídicos."
        }
    },
    "clinicas": {
        id: "clinicas",
        title: "Contabilidade para Clínicas e Consultórios",
        subtitle: "Utilize a estratégia do Fator R para reduzir impostos e aumente a rentabilidade da sua clínica multiprofissional.",
        heroImage: "/clinicas.jpg",
        videoPath: "/video.mp4",
        painPoints: [
            { title: "Enquadramento Incorreto", description: "Estar no regime tributário errado, pagando muito mais imposto do que deveria no Simples Nacional." },
            { title: "Divisão de Sócios", description: "Dificuldades na apuração de pro-labore e distribuição de lucros entre sócios médicos." },
            { title: "Desorganização Financeira", description: "Falta de clareza sobre o fluxo de caixa real da clínica." }
        ],
        solutions: [
            "Monitoramento mensal do Fator R para garantir alíquota reduzida (Anexo III)",
            "Planejamento Societário e distribuição de lucros isenta",
            "Terceirização do Financeiro (BPO) da clínica",
            "Emissão automatizada de notas fiscais"
        ],
        extraInfo: {
            title: "Estratégia do Fator R",
            content: "Ajustamos sua folha de pagamento (Pro-labore) para atingir 28% do faturamento, permitindo que sua clínica pague impostos pelo Anexo III (começando em 6%) ao invés do Anexo V (15.5%)."
        }
    }
};