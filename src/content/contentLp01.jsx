import bgImg from "../assets/imgs/hero/bgHeroLp01.webp";
import logo from "../assets/imgs/logo/logoLp.png";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Método ASA: Torne-se uma Assistente Social Autônoma e Lucre com o BPC",
    description:
      "Aprenda a atuar como Assistente Social Autônoma com o Método ASA e transforme seu conhecimento em renda, atuando com BPC e outros serviços. Conquiste independência financeira no Serviço Social.",
    keywords:
      "Assistente Social Autônoma, Método ASA, Serviço Social Autônomo, Curso para Assistente Social, Atuação Autônoma no Serviço Social, Trabalhar com BPC, Benefício de Prestação Continuada, Curso BPC para Assistentes Sociais, Como atuar com BPC, Serviço Social e BPC, Consultoria em Serviço Social, Assessoria Social, Laudos e Perícias Sociais, Captação de Clientes no Serviço Social, Renda para Assistente Social, Empreendedorismo Social, Como viver do Serviço Social, Atuação Privada no Serviço Social, Independência Financeira no Serviço Social, Hingryd Jannyne Rokar.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Seja <span className="text-[#FFABB0]"> ASA </span> e conquiste sua
          <span className="text-[#FFABB0]"> liberdade financeira</span>!
        </h1>
      ),
      subtitle:
        "Aprenda o nosso método e descubra como garantir sua renda de forma autônoma no Serviço Social.",
      buttonLabel: "Adquira o Método ASA agora",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "ATUAÇÃO ASA",
      title: "Onde você consegue atuar?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-message-circle-heart"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" />
          </svg>
        ),
        title: "Consultoria e Assessoria Social",
        description:
          "Oriente empresas, ONGs e instituições na criação de projetos sociais, políticas de assistência e suporte técnico. Atue de forma independente, utilizando seu conhecimento para transformar realidades.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-newspaper"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6Z" />
          </svg>
        ),
        title: "Perícia Social e Laudos Técnicos",
        description:
          "Elabore pareceres e laudos para processos jurídicos, previdenciários e administrativos. Seu conhecimento pode ser a chave para garantir direitos e justiça social.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hand-heart"
          >
            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
            <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 15 6 6" />
            <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
          </svg>
        ),
        title: "Atendimento e Acompanhamento Social",
        description:
          "Preste suporte a indivíduos e famílias em vulnerabilidade, oferecendo atendimento particular ou em parceria com instituições. Transforme vidas com seu conhecimento técnico.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-speech"
          >
            <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
            <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
            <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
          </svg>
        ),
        title: "Mentoria para Assistentes Sociais Iniciantes",
        description:
          "Ajude outros profissionais a se posicionarem no mercado de forma autônoma. Compartilhe sua experiência e crie um impacto positivo no Serviço Social.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "TRANSFORME SUA CARREIRA",
      title: "Lucre com sua liberdade: Seja uma Assistente Social Autônoma!",
    },
    paragraph: (
      <p>
        Cansada da falta de oportunidades no mercado convencional? Com o Método
        ASA, você pode atuar como Assistente Social Autônoma, conquistando sua
        independência financeira e vivendo do seu conhecimento. <br />
        <br /> Aprenda passo a passo como oferecer serviços, atrair clientes e
        crescer na profissão sem depender de concursos ou empregos formais!
      </p>
    ),
    buttonLabel: "Transforme sua carreira com o curso ASA",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "POR QUE SER ASA?",
      title: "A liberdade que você merece está ao seu alcance!",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-list-check"
          >
            <path d="M11 18H3" />
            <path d="m15 18 2 2 4-4" />
            <path d="M16 12H3" />
            <path d="M16 6H3" />
          </svg>
        ),
        title: "Mais oportunidades, menos limitações",
        description:
          "O mercado tradicional é restrito, mas como autônoma, você pode atuar em diversas áreas, ampliando suas possibilidades e conquistando sua independência.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-piggy-bank"
          >
            <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
            <path d="M2 9v1c0 1.1.9 2 2 2h1" />
            <path d="M16 11h.01" />
          </svg>
        ),
        title: "Renda sem depender de concursos",
        description:
          "Chega de esperar a aprovação em concursos ou vagas limitadas. Aprenda a gerar sua própria renda com seu conhecimento técnico e conquiste estabilidade financeira.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-award"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="6" />
          </svg>
        ),
        title: "Método comprovado e passo a passo",
        description:
          "Com o Método ASA, você aprende tudo que precisa para atuar de forma independente, desde a captação de clientes até a entrega dos serviços.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sparkles"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
        ),
        title: "Transforme sua carreira e sua vida",
        description:
          "Tenha orgulho da sua profissão e mostre para sua família que o Serviço Social pode te proporcionar sucesso e liberdade!",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "PACK DE ARTES PRONTAS - ASA",
      title: "Eleve sua presença online com artes profissionais!",
      subtitle: `Tenha acesso a um pack exclusivo de artes prontas para redes sociais, focado no BPC, e atraia mais clientes com conteúdos informativos e de alto impacto.`,
    },
    buttonLabel: "Quero meu pack de artes!",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
