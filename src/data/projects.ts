export type ProjectCategory = 'all' | 'challenger' | 'cypress' | 'playwright' | 'selenium' | 'robot'

export interface Project {
    id: string
    title: { pt: string; en: string }
    description: { pt: string; en: string }
    category: Exclude<ProjectCategory, 'all'>[]
    image: string
    githubUrl: string
}

export const projects: Project[] = [
    {
        id: 'serverest-cypress',
        title: { pt: 'ServeRest (Cypress)', en: 'ServeRest (Cypress)' },
        description: {
            pt: 'Projeto de Testes Automatizados para a aplicação ServeRest. Utilizado como fase do desafio técnico da NTT DATA, com foco na validação de cenários E2E e de API (CRUD).',
            en: 'Automated Testing project for the ServeRest application. Used as part of the NTT DATA technical challenge, focusing on E2E and API (CRUD) scenario validation.',
        },
        category: ['challenger', 'cypress'],
        image: '/projects/serve_rest_cypress.png',
        githubUrl: 'https://github.com/lucas-scandido/desafio-qa-ntt-ambev',
    },
    {
        id: 'serverest-robot',
        title: { pt: 'ServeRest (Robot)', en: 'ServeRest (Robot)' },
        description: {
            pt: 'Projeto de Testes Automatizados para a aplicação ServeRest. Utilizado como fase do desafio técnico da Mouts TI, com foco na validação de cenários E2E e de API (CRUD).',
            en: 'Automated Testing project for the ServeRest application. Used as part of the Mouts TI technical challenge, focusing on E2E and API (CRUD) scenario validation.',
        },
        category: ['challenger', 'robot'],
        image: '/projects/serve_rest_robot.png',
        githubUrl: 'https://github.com/lucas-scandido/challenge-robot-ambev',
    },
    {
        id: 'buger-eats',
        title: { pt: 'Buger Eats', en: 'Buger Eats' },
        description: {
            pt: 'Projeto de Automação de Testes E2E para o Buger Eats, uma aplicação que simula o cadastro de novos entregadores para delivery, com foco na validação completa do formulário de inscrição.',
            en: 'E2E Test Automation project for Buger Eats, an application that simulates the registration of new delivery drivers, focusing on complete sign-up form validation.',
        },
        category: ['cypress'],
        image: '/projects/buger_eats.png',
        githubUrl: 'https://github.com/lucas-scandido/buger-eats-cypress',
    },
    {
        id: 'sauce-demo',
        title: { pt: 'Sauce Demo', en: 'Sauce Demo' },
        description: {
            pt: 'Projeto de Automação de Testes E2E para a Sauce Demo, uma aplicação que simula um mini e-commerce, com foco na validação dos detalhes dos produtos e do fluxo completo de checkout.',
            en: 'E2E Test Automation project for Sauce Demo, an application that simulates a mini e-commerce, focusing on product details and complete checkout flow validation.',
        },
        category: ['robot'],
        image: '/projects/sauce_demo.png',
        githubUrl: 'https://github.com/lucas-scandido/sauce-demo-robot-framework',
    },
    {
        id: 'walk-dog',
        title: { pt: 'Walk Dog', en: 'Walk Dog' },
        description: {
            pt: 'Projeto de Automação de Testes E2E para a Walk Dog, uma aplicação que simula o cadastro de novos Dog Walkers, com foco na validação completa do formulário de inscrição.',
            en: 'E2E Test Automation project for Walk Dog, an application that simulates the registration of new Dog Walkers, focusing on complete sign-up form validation.',
        },
        category: ['playwright'],
        image: '/projects/walk_dog.png',
        githubUrl: 'https://github.com/lucas-scandido/walk-dog-playwright',
    },
    {
        id: 'leiloes',
        title: { pt: 'Leilões', en: 'Auctions' },
        description: {
            pt: 'Projeto de Automação de Testes para uma aplicação que simula Lances de Leilões, com testes E2E focados na validação de fluxos como login, cadastro, edição e lances em novos leilões.',
            en: 'Test Automation project for an Auction Bids application, with E2E tests focused on validating flows such as login, registration, editing and bidding on new auctions.',
        },
        category: ['selenium'],
        image: '/projects/leiloes.png',
        githubUrl: 'https://github.com/lucas-scandido/selenium-leiloes',
    },
]

export const PROJECT_CATEGORIES: { key: ProjectCategory; pt: string; en: string }[] = [
    { key: 'all', pt: 'Todos', en: 'All' },
    { key: 'challenger', pt: 'Desafios Técnicos', en: 'Tech Challenges' },
    { key: 'cypress', pt: 'Cypress', en: 'Cypress' },
    { key: 'playwright', pt: 'Playwright', en: 'Playwright' },
    { key: 'selenium', pt: 'Selenium', en: 'Selenium' },
    { key: 'robot', pt: 'Robot Framework', en: 'Robot Framework' },
]