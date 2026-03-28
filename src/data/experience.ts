import type { Language } from '@/types'

export interface Experience {
    id: string
    company: string
    role: { pt: string; en: string }
    workMode: { pt: string; en: string }
    period: { pt: string; en: string }
    description: { pt: string[]; en: string[] }
    techs: string[]
    logo: string
}

export const experiences: Experience[] = [
    {
        id: 'tcs',
        company: 'TCS',
        role: {
            pt: 'Trainee / Analista de Testes Jr',
            en: 'Trainee / Junior Test Analyst',
        },
        workMode: { pt: 'Remota', en: 'Remote' },
        period: { pt: 'Abr/2020 - Nov/2021', en: 'Apr/2020 - Nov/2021' },
        logo: '/logos/tcs.png',
        description: {
            pt: [
                'Atuação em squads multidisciplinares em projetos para clientes do setor bancário (Bradesco e Itaú).',
                'Criação de casos de teste em Gherkin e execução de testes funcionais manuais.',
                'Identificação e reporte proativo de falhas e bugs.',
                'Participação em cerimônias Scrum e entendimento do ciclo de vida de testes.',
            ],
            en: [
                'Worked in multidisciplinary squads on projects for banking clients (Bradesco and Itaú).',
                'Created test cases in Gherkin and executed manual functional tests.',
                'Proactively identified and reported failures and bugs.',
                'Participated in Scrum ceremonies and understood the software testing lifecycle.',
            ],
        },
        techs: ['Gherkin', 'BDD', 'TDD', 'Java', 'Testes Manuais', 'Scrum'],
    },
    {
        id: 'bankme',
        company: 'Bankme',
        role: {
            pt: 'Analista de Testes/QA',
            en: 'QA/Test Analyst',
        },
        workMode: { pt: 'Presencial', en: 'On-site' },
        period: { pt: 'Nov/2021 - Mai/2022', en: 'Nov/2021 - May/2022' },
        logo: '/logos/bankme.png',
        description: {
            pt: [
                'Responsável pela estruturação de processos de Gestão de Qualidade na squad.',
                'Elaboração de casos de testes em Gherkin e execução de testes manuais funcionais, de API e microsserviços.',
                'Desenvolvimento de testes automatizados Web com Cypress e Page Object.',
                'Implementação de pipelines de testes contínuos no GitHub Actions.',
                'Implantação de métricas de qualidade e fomentação da cultura de qualidade na squad.',
            ],
            en: [
                'Responsible for structuring Quality Management processes in the squad.',
                'Created Gherkin test cases and executed manual functional, API and microservices tests.',
                'Developed Web automated tests using Cypress and Page Object pattern.',
                'Implemented continuous test pipelines on GitHub Actions.',
                'Introduced quality metrics and promoted a quality culture within the squad.',
            ],
        },
        techs: ['Cypress', 'JavaScript', 'GitHub Actions', 'Postman', 'JIRA', 'SQL', 'Gherkin'],
    },
    {
        id: 'kyte',
        company: 'Kyte',
        role: {
            pt: 'Analista de Testes Pleno',
            en: 'Mid-level Test Analyst',
        },
        workMode: { pt: 'Remota', en: 'Remote' },
        period: { pt: 'Mai/2022 - Jul/2022', en: 'May/2022 - Jul/2022' },
        logo: '/logos/kyte.png',
        description: {
            pt: [
                'Elaboração de casos de teste em Gherkin, garantindo cobertura de requisitos críticos.',
                'Desenvolvimento de testes automatizados Web com WebDriverIO.',
                'Testes manuais funcionais e regressivos Web e Mobile.',
                'Atuação em squad com metodologias ágeis como Scrum e Kanban.',
            ],
            en: [
                'Created Gherkin test cases ensuring coverage of critical requirements.',
                'Developed Web automated tests using WebDriverIO.',
                'Executed manual functional and regression tests for Web and Mobile.',
                'Worked in agile squads using Scrum and Kanban methodologies.',
            ],
        },
        techs: ['WebDriverIO', 'JavaScript', 'Gherkin', 'Postman', 'Azure DevOps'],
    },
    {
        id: 'tray',
        company: 'Tray E-commerce',
        role: {
            pt: 'Analista de Testes Pleno',
            en: 'Mid-level Test Analyst',
        },
        workMode: { pt: 'Remota', en: 'Remote' },
        period: { pt: 'Out/2022 - Nov/2024', en: 'Oct/2022 - Nov/2024' },
        logo: '/logos/tray.png',
        description: {
            pt: [
                'Criação e manutenção de testes automatizados Web e API com Cypress.',
                'Desenvolvimento de testes de carga e performance com Grafana K6 (Black Friday).',
                'Implementação de pipelines de testes contínuos no GitLab CI/CD.',
                'Apadrinhamento e suporte a novos QAs no time.',
                'Introdução do framework Playwright e boas práticas em pipelines.',
            ],
            en: [
                'Created and maintained Web and API automated tests using Cypress.',
                'Developed load and performance tests with Grafana K6 for high-demand events (Black Friday).',
                'Implemented continuous test pipelines on GitLab CI/CD.',
                'Mentored and supported new QA engineers joining the team.',
                'Introduced Playwright framework and pipeline best practices.',
            ],
        },
        techs: ['Cypress', 'Playwright', 'Selenium', 'K6', 'Grafana', 'GitLab CI/CD', 'Docker', 'JavaScript', 'TypeScript', 'Ruby', 'Java'],
    },
    {
        id: 'porto',
        company: 'Porto Seguro',
        role: {
            pt: 'Analista de Testes Sênior',
            en: 'Senior Test Analyst',
        },
        workMode: { pt: 'Remota', en: 'Remote' },
        period: { pt: 'Nov/2024 - Abr/2025', en: 'Nov/2024 - Apr/2025' },
        logo: '/logos/porto.png',
        description: {
            pt: [
                'Elaboração de casos de teste em Gherkin, garantindo cobertura de requisitos críticos.',
                'Execução de testes funcionais manuais Web, assegurando qualidade contínua.',
                'Criação e manutenção de testes automatizados Web com Playwright.',
                'Identificação e reporte proativo de falhas e bugs.',
            ],
            en: [
                'Created Gherkin test cases ensuring coverage of critical requirements.',
                'Executed manual functional Web tests ensuring continuous quality.',
                'Created and maintained Web automated tests using Playwright.',
                'Proactively identified and reported failures and bugs.',
            ],
        },
        techs: ['Playwright', 'TypeScript', 'Gherkin', 'BDD', 'Scrum', 'Kanban'],
    },
    {
        id: 'ambev',
        company: 'Ambev Tech',
        role: {
            pt: 'Analista de Testes Sênior',
            en: 'Senior Test Analyst',
        },
        workMode: { pt: 'Remota', en: 'Remote' },
        period: { pt: 'Abr/2025 - Atualmente', en: 'Apr/2025 - Present' },
        logo: '/logos/ambevtech.png',
        description: {
            pt: [
                'Atuação cross squad na garantia de qualidade do ASMOB e Cora Visitas (Web e Mobile).',
                'Execução de testes manuais Web, API e Mobile.',
                'Desenvolvimento e manutenção de testes automatizados Web com Cypress e Mobile com Appium e Robot Framework.',
                'Participação em comitês de inovação com foco em Inteligência Artificial.',
            ],
            en: [
                'Cross-squad quality assurance for ASMOB and Cora Visitas applications (Web and Mobile).',
                'Executed manual Web, API and Mobile tests.',
                'Developed and maintained Web automated tests with Cypress and Mobile tests with Appium and Robot Framework.',
                'Participated in innovation committees focused on Artificial Intelligence.',
            ],
        },
        techs: ['Cypress', 'Appium', 'Robot Framework', 'K6', 'Gherkin', 'Azure DevOps', 'Python', 'Datadog'],
    },
]

export function getExperience(exp: Experience, lang: Language) {
    return {
        ...exp,
        role: exp.role[lang],
        workMode: exp.workMode[lang],
        period: exp.period[lang],
        description: exp.description[lang],
    }
}