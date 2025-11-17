export const curriculumData = {
  personalInfo: {
    name: "Ana Silva Santos",
    title: "Desenvolvedora Full Stack",
    photo: require('../../assets/images/profile-placeholder.jpg'),
    about: "Desenvolvedora Full Stack com 5 anos de experiência em criação de aplicações web e mobile. Especializada em React, React Native, Node.js e tecnologias modernas. Busco oportunidades para contribuir com projetos inovadores e crescer profissionalmente em ambientes desafiadores."
  },
  
  experiences: [
    {
      id: 1,
      company: "Tech Solutions Ltda",
      position: "Desenvolvedora Full Stack Pleno",
      period: "2021 - Presente",
      description: "Desenvolvimento e manutenção de aplicações web e mobile utilizando React, React Native e Node.js.",
      details: `• Liderança técnica em projetos de e-commerce
• Desenvolvimento de APIs RESTful com Node.js e Express
• Implementação de sistemas de autenticação JWT
• Coordenação de equipe de 3 desenvolvedores juniores
• Integração com serviços AWS (S3, Lambda, CloudFront)
• Otimização de performance reduzindo tempo de carregamento em 40%`
    },
    {
      id: 2,
      company: "InovaTech StartUp",
      position: "Desenvolvedora Front-End",
      period: "2019 - 2021",
      description: "Desenvolvimento de interfaces responsivas e aplicações web com React e Vue.js.",
      details: `• Criação de componentes reutilizáveis em React
• Implementação de testes unitários com Jest
• Colaboração com equipe de UX/UI para melhorar experiência do usuário
• Desenvolvimento de aplicações PWA (Progressive Web Apps)
• Integração com APIs de terceiros
• Participação em sprints ágeis (Scrum)`
    },
    {
      id: 3,
      company: "Digital Works",
      position: "Estagiária em Desenvolvimento",
      period: "2018 - 2019",
      description: "Suporte no desenvolvimento de sites institucionais e sistemas internos.",
      details: `• Desenvolvimento de páginas web com HTML5, CSS3 e JavaScript
• Manutenção de sites WordPress
• Suporte na implementação de layouts responsivos
• Aprendizado de boas práticas de desenvolvimento
• Participação em code reviews
• Documentação de projetos`
    }
  ],
  
  education: [
    {
      institution: "Universidade Federal de Tecnologia",
      course: "Bacharelado em Ciência da Computação",
      year: "2019"
    },
    {
      institution: "Digital House",
      course: "Pós-graduação em Desenvolvimento Full Stack",
      year: "2021"
    },
    {
      institution: "Alura",
      course: "Certificação em React Native",
      year: "2022"
    }
  ],
  
  skills: {
    hardSkills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React/React Native", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Python", level: 70 },
      { name: "SQL/NoSQL", level: 75 },
      { name: "Git/GitHub", level: 85 },
      { name: "AWS", level: 65 }
    ],
    softSkills: [
      { name: "Trabalho em Equipe", level: 90 },
      { name: "Comunicação", level: 85 },
      { name: "Resolução de Problemas", level: 95 },
      { name: "Gestão de Tempo", level: 80 },
      { name: "Liderança", level: 75 },
      { name: "Adaptabilidade", level: 90 }
    ]
  },
  
  contacts: {
    email: "ana.silva@email.com",
    phone: "+55 (11) 98765-4321",
    linkedin: "https://linkedin.com/in/anasilva",
    github: "https://github.com/anasilva",
    website: "https://anasilva.dev"
  }
};