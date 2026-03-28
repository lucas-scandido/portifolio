import { FaFlask, FaClipboardList, FaCode, FaRobot, FaDocker, FaDatabase } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import type { Language } from '@/types'

export interface SkillGroup {
    id: string
    icon: IconType
    title: { pt: string; en: string }
    items: string[] | { pt: string; en: string }[]
}

export function getSkillItems(group: SkillGroup, lang: Language): string[] {
    return group.items.map(item =>
        typeof item === 'string' ? item : item[lang]
    )
}

export const skillGroups: SkillGroup[] = [
    {
        id: 'testing',
        icon: FaFlask,
        title: { pt: 'Tipos de Teste', en: 'Test Types' },
        items: [
            { pt: 'Testes de API', en: 'API Testing' },
            { pt: 'Testes de Carga', en: 'Load Testing' },
            { pt: 'Testes Funcionais', en: 'Functional Testing' },
            { pt: 'Testes Regressivos', en: 'Regression Testing' },
            { pt: 'Testes de Integração', en: 'Integration Testing' },
            { pt: 'Testes de Usabilidade', en: 'Usability Testing' },
        ],
    },
    {
        id: 'management',
        icon: FaClipboardList,
        title: { pt: 'Gerenciamento', en: 'Management' },
        items: ['Jira', 'Confluence', 'GitLab', 'Azure DevOps'],
    },
    {
        id: 'programming',
        icon: FaCode,
        title: { pt: 'Programação', en: 'Programming' },
        items: ['Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
        id: 'automation',
        icon: FaRobot,
        title: { pt: 'Automação', en: 'Automation' },
        items: ['Cypress', 'Selenium', 'Playwright', 'Grafana K6', 'Robot Framework'],
    },
    {
        id: 'devops',
        icon: FaDocker,
        title: { pt: 'DevOps', en: 'DevOps' },
        items: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Docker', 'Grafana'],
    },
    {
        id: 'database',
        icon: FaDatabase,
        title: { pt: 'Banco de Dados', en: 'Databases' },
        items: ['MySQL', 'DBeaver', 'MongoDB', 'PostgreSQL'],
    },
]