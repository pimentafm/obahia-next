import {
  Box,
  Heading,
  Container,
  Text,
  ListIcon,
  ListItem,
  List,
  Stack,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { MdCheckCircle } from "react-icons/md";

import { motion } from "framer-motion";

const MotionContainer = motion(Container);

import { linkdata, publications } from "./data";

type SectionTextProps = {
  id?: string;
};

export default function GovernanceContent({ id }: SectionTextProps) {
  return (
    <MotionContainer
      maxW={"3xl"}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Stack id={id} as={Box} textAlign={"center"} py={20}>
        <Heading
          py={2}
          fontWeight={600}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1. Resumo das ações de governança
        </Heading>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.1 Introdução
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Apesar dos muitos estudos e de um arcabouço legal robusto, o debate
          sobre os recursos hídricos e sua gestão ainda é conduzido com grandes
          lacunas de informações, principalmente em nível estadual. A análise da
          disponibilidade hídrica e a sua utilização para a produção de
          alimentos, fibras e agroenergia exige um diálogo amplo e com
          participação efetiva de todos os setores, uma vez que este assunto é
          de grande interesse da coletividade.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Se por um lado existe a preocupação com a disponibilidade da água, por
          outro existe a necessidade de produzir alimentos em maior quantidade e
          qualidade. Na agricultura tropical, os ciclos de produção são
          definidos pela disponibilidade hídrica, dependente das chuvas, que nem
          sempre ocorrem no momento e na quantidade certa. Nesse cenário, a nova
          agricultura irrigada, conectada com a sustentabilidade se coloca como
          uma opção importante para intensificar a produção e ampliar a
          produtividade com menor exigência de abertura de novas áreas. Assim,
          estudos e ações envolvendo informações integradas, monitoramento,
          governança e capacitação são importantes para dar suporte à gestão dos
          recursos hídricos.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          A região Oeste da Bahia é uma das mais ativas fronteiras agrícolas do
          mundo e segue um padrão de extensificação e intensificação, com cerca
          de 2,3 milhões de ha com agricultura e área irrigada estimada de
          200.000 ha (8,0% da área plantada). A região tem potencial de aumento
          da produção agrícola irrigada, tanto na agricultura empresarial quanto
          na de pequena escala, sendo necessário que o crescimento ocorra em
          bases sustentáveis, garantindo à sociedade em geral e aos produtores
          que investem no sistema que este crescimento seja seguro do ponto de
          vista da disponibilidade e do uso compartilhado dos recursos hídricos.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          A plataforma de Inteligência Territorial e Hídrica para o Oeste da
          Bahia – OBahia apresenta de forma integrada da disponibilidade hídrica
          superficial e subterrânea e sua modelagem, bem como análise da
          evolução do clima, do uso do solo e da irrigação no período de 30 anos
          na região e o desenvolvimento de sistemas para dar suporte à
          organização, processamento e visualização dos dados na web.
          Complementam todo o processo as ações desenvolvidas de forma integrada
          na análise e desenvolvimento de processos de governanças dos recursos
          hídricos, envolvendo todos os principais setores, ou seja: produtores,
          gestores públicos regionais, estaduais e federais, comitês das bacias,
          associações, universidades e centros de pesquisas, entre outros.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          A plataforma apresenta resultados de três projetos de cooperação,
          sendo dois financiados pelo PRODEAGRO-BA, e um financiado pelo CNPq.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.2 Objetivo geral
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          O principal objetivo é contribuir com o desenvolvimento sustentável da
          agricultura irrigada e segurança hídrica do Oeste da Bahia através da
          produção de informações técnicas e científicas integradas da
          disponibilidade dos recursos hídricos superficiais e subterrâneos em
          base temporal e regional. Os dados provenientes desse estudo são de
          grande relevância na discussão com os gestores e parceiros do governo
          municipal, estadual e federal, dos comitês de bacia, das universidades
          e faculdades, organizações não governamentais e outros na definição de
          estratégias e ações para o desenvolvimento da agricultura irrigada com
          segurança hídrica.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.3 Justificativa
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          A agricultura brasileira passa por grandes transformações, otimizando
          a produção e a produtividade e aumentando sua competitividade e
          importância na matriz econômica do país. A caracterização destas
          transformações não considera, muitas vezes, a importante participação
          dos produtores, organizados em associações regionais que atuam
          efetivamente na solução de problemas de infraestrutura e recursos
          hídricos. A Associação de Produtores e Irrigantes da Bahia (AIBA)
          desenvolve, desde 2017, um programa amplo e efetivo em prol do meio
          ambiente, saúde pública, educação e sociedade, trazendo soluções de
          sustentabilidade para a região.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Sob a coordenação estratégica da AIBA, os projetos tiveram seus
          resultados amplamente discutidos em eventos, reuniões, publicações e
          reportagens, utilizando sua estrutura e representatividade para
          envolver os associados, o governo estadual e federal, universidades
          (federais, estaduais e particulares), Comitês de Bacia, Ministério
          Público. Sua grande relevância vai além dos resultados e dados
          coletados.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Na região Oeste da Bahia, sede e maior área de atuação da AIBA, a
          produção irrigada ocupa cerca de 200 mil ha (8% da área plantada),
          gera resultados significativos de produção, produtividade e
          rentabilidade e, por isto tem demanda de crescimento por parte dos
          produtores. Por outro lado, a seca que assolou a região nos últimos
          anos associada ao crescimento expressivo da área irrigada em várias
          bacias, tem trazido incertezas e crises que afetam e trazem
          dificuldades para a região, exigindo ações mitigadoras.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Foi importante também a parceria internacional com o Instituto Água e
          Alimentos da Universidade de Nebraska Lincoln, através de reuniões,
          visitas técnicas e troca de informações no Brasil e nos EUA em pelo
          menos 10 ocasiões.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.4 Inovação
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Os estudos procuraram trazer um enfoque inovador para a análises dos
          recursos hídricos. Em especial na área de governança, buscou uma
          estratégia de envolvimento dos participantes do sistema de gestão dos
          recursos hídricos do Oeste da Bahia. As discussões envolveram diversos
          setores relacionados a questão hídrica, ou seja, produtores
          (representados pela AIBA), órgão gestor (INEMA), órgãos estaduais
          (SEMA, SEAGRI e SIHS), órgãos federais (ANA, CPRM, EMBRAPA), comitês
          de bacia, universidades, instituições internacionais (DWFI-UNL).
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Do ponto de vista técnico, as análises dos recursos hídricos
          superficiais e subterrâneas foram realizadas considerando a dinâmica
          do uso do solo e aspectos climáticos. Além da intensa troca de
          informações entre os grupos, os resultados foram integrados neste
          sistema de inteligência territorial e hídrica. Os estudos consideraram
          as demandas e expectativas de grupos de usuários, entre eles
          produtores rurais empresariais e da agricultura familiar, sociedade
          civil organizada, empresas privadas e órgãos públicos. Foi
          implementado um conjunto de ações para a criação de uma rede de
          confiança baseada em intensa troca de informações sobre os objetivos e
          andamento dos estudos. Estes canais estão permitindo a proposição e
          discussão de modificações e aperfeiçoamento de normas, além da
          disponibilização e capacitação de agentes públicos no uso de modelos
          desenvolvidos pelo estudo, como os modelos hidrogeológicos.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Todas as ações basearam-se na implementação prática e estruturada dos
          três pilares para o sucesso de um sistema de gestão dos recursos
          hídricos, ou seja: estudos da disponibilidade hídrica e das suas
          demandas, implantação de sistemas de monitoramento por sensoriamento
          remoto que permitam acompanhar a evolução da disponibilidade,
          ferramentas de previsão hidroclimática, e a governança, que é o
          processo que estrutura, organiza e prioriza o uso compartilhado dos
          recursos disponíveis. A interação entre modelos de análises gerados em
          estudos e dados confiáveis de monitoramento, permitiu a avaliação
          correta da situação do sistema. Estudos em conjunto com ações de
          governança, incluindo a criação de uma rede de confiança e a interação
          entre os principais envolvidos, estão viabilizando a discussão e
          estruturação de planos de uso eficiente e equitativo dos recursos
          hídricos, envolvendo ações de governança que destaca um sistema de
          monitoramento integrado dos recursos hídricos, que possa garantir a
          segurança hídrica e contribuir para a minimização de conflitos pelo
          uso da água. Para que todos estes pilares e suas interações ocorram,
          estão em andamento iniciativas de capacitação envolvendo diversos
          técnicos e profissionais que atuam no setor, bem como os usuários dos
          recursos hídricos, de que possam conhecer e utilizar informações para
          adequado entendimento da situação e também gerar projetos que permitam
          o uso eficientes e sustentável das águas da região Oeste da Bahia.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.5 Impacto Social e Ambiental
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Em geral estes projetos trouxeram imediato impacto social e ambiental
          quando desenvolveram diversas ações de debates sobre os seus
          resultados em iniciativas junto aos produtores, gestores estaduais e
          federais, docentes e discentes das universidades locais, comitês de
          bacia, envolvimento internacional e outros. Este debate trouxe
          expectativa positiva de desenvolvimento dos conhecimentos técnicos e
          científicos relacionados a disponibilidade hídrica e a sua gestão.
          Contribuiu neste processo a representatividade da AIBA no âmbito
          regional, estadual e federal, a ampla experiência e tradição da UFV na
          pesquisa e desenvolvimento da área de irrigação e recursos hídricos, a
          capacitação e experiência da equipe coordenadora nos temas propostos e
          a sua isenção técnico-científica.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Os impactos socioeconômicos do estudo serão concretizados através da
          implementação de sugestões de mudanças em normas e modelos de gestão
          que, baseados em informações técnicas e sistemas de monitoramento e
          previsão, viabilizando o uso múltiplo dos recursos hídricos e a
          expansão sustentável da agricultura irrigada.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Importante também destacar no projeto a divulgação e implementação de
          ações para disseminação e fortalecimento da agricultura irrigada de
          pequena escala, como capacitações e instalação de sistemas pilotos de
          irrigação em áreas estratégicas, complementam as ações de políticas
          públicas de inserção de mercado e aumento da eficiência técnica na
          agricultura familiar. Como parte dessas ações, está em andamento a
          implantação de um projeto piloto de um pivô compartilhado a ser
          implantado em um assentamento do Programa Nacional de Crédito
          Fundiário (PNCF).
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          No aspecto ambiental, os estudos sobre disponibilidades hídricas
          confirmaram a estreita interação entre águas superficiais e
          subterrâneas com consequências importantes em relação a estratégia de
          outorga de uso da água, o histórico de ocupação da área e efeitos no
          solo, na capacidade das áreas de produção em condições irrigadas de
          mitigar o efeito estufa através do aumento do nível de carbono no solo
          e disponibilizaram informações para o planejamento adequado do uso dos
          recursos hídricos. Os estudos tiveram como foco aspectos
          quantitativos, mas a rede de monitoramento proposta, integrada à rede
          existente, poderá incorporar procedimentos estruturados sobre a
          qualidade da água.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.6 Potencial e Difusão
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Os resultados gerados dentro de um modelo de integração das
          informações permitiram difusão e potencial transformador com vistas a
          segurança hídrica para a região. Envolveu os aspectos climáticos, do
          solo (características e uso), irrigação, demanda hídrica,
          disponibilidade e modelagem de águas superficiais e subterrâneas. A
          ampla parceria com secretarias estaduais (SEMA, SEAGRI, SIHS) e em
          especial com o INEMA (órgão gestor), tem possibilitado frequentes
          reuniões para análise metodológica e dos resultados. Publicações foram
          disponibilizadaa em versão impressa e digital e o sistema OBahia
          (obahia.dea.ufv.br) tem sido uma fonte de consulta permanente e é de
          acesso livre.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Diversas reuniões foram realizadas para avaliação de bancos de dados
          (em especial das outorgas disponibilizadas), treinamento do uso dos
          sistemas informáticos Obahia, Visual ModFlow e SIHBA. Destaque também
          para reunião organizada pela AIBA e o INEMA em outubro de 2019 com o
          consórcio Águas do Oeste (Hydros e Engeplus) responsável pelo plano de
          recursos hídricos (rios Grande e Corrente e riachos do Ramalho, Serra
          Dourada e Brejo Velho). Foram repassadas informações detalhadas do
          estudo (metodologia, dados e informações, modelos e resultados),
          caracterizando uma importante estratégia de potencializar o estudo
          oficial dos planos de bacias.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Os projetos estão tendo grande difusão e interesse, com proposta,
          metodologia, resultados amplamente divulgados em eventos nacionais e
          internacionais, publicados em relatórios, artigos técnicos e
          científicos, atingindo além da região Oeste da Bahia outras
          importantes regiões agrícolas do país, como demonstram a parceria com
          outras associações como a IRRIGANOR (Noroeste de Minas Gerais) e a
          Aprofir (Mato Grosso) que acompanharam os trabalhos desenvolvidos no
          estudo através de frequentes reuniões e com demanda de proposta para
          realização de estudo similar.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Informações sobre o projeto e sua articulação em prol da agricultura
          irrigada sustentável foram destaques nas reuniões de criação e
          estruturação dos Polos de Irrigação do Oeste da Bahia e do Polo
          Irrigação do Sul da Mato Grosso sob a coordenação do Ministério de
          Desenvolvimento Regional (MDR), trazendo subsídios das informações
          necessárias para uma o sucesso da implantação dos respectivos polos de
          agricultura irrigada.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.7 Sustentabilidade
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          O projeto envolve um amplo programa de trabalho participativo e
          transferência de tecnologia. Durante o período técnicos da AIBA
          participaram de inúmeras visitas, reuniões e treinamentos na região
          Oeste e na Universidade Federal de Viçosa. Várias estâncias técnicas
          de curta duração na UFV foram frequentes e envolviam treinamentos
          continuadas nas técnicas utilizadas e modelos gerados. Envolveu
          inclusive um pós-doutorado da diretora de meio ambiente, recursos
          hídricos e irrigação junto a equipe do projeto na UFV.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          O sistema OBahia desenvolvido caracteriza um importante sistema aberto
          em linguagem Web que além de reunir informações completas do projeto,
          permite ações de planejamento, de conexão com outros sistemas de
          gestão e de atualização.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Os estudos, além da avaliação conjunta de instituições e atores
          sociais envolvidos e o crivo da comunidade científica através da
          publicação de diversos artigos científicos em revistas de alto
          impacto, foi monitorado e referendado pelo conselho gestor do
          PRODEAGRO. Os impactos potenciais da implementação de ações e a
          disponibilidade de recursos no futuro deste fundo indicam que os
          resultados do projeto têm impacto de longo prazo.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.8 Adesão Social
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          As ações do projeto envolveram diretamente mais de 100 organizações de
          diversos setores, as quais participaram diretamente de seminários,
          reuniões e visitas técnicas. O projeto implementou ações estruturadas
          buscando a criação e o fortalecimento de canais de comunicação e
          confiança entre organizações dos mais diversos setores. As principais
          instituições envolvidas são:
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Organizações de Representação de Produtores Rurais, Agroindústrias e
          Profissionais: ABAPA: Associação de Produtores de Algodão da Bahia,
          APROBAN: Associação do Produtores do Barreiras Norte, CREA-BA, FAEB:
          Federação da Agricultura do Estado da BA, FUNDEAGRO: Fundo para o
          Desenvolvimento do Agronegócio do Algodão, SINDIFIBRAS-BA, SPRB e
          SPRLEM: Sindicato dos Produtores Rurais de Barreiras e LEM.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Organizações de Governança de Recursos Hídricos: CBHC, CBHG e CBHSF:
          Comitê da Bacia Hidrográfica dos Rio Corrente, Grande e São Francisco
          (respectivamente), CCRMSF: Câmara Consultiva Regional do Médio São
          Francisco, CODETER: Colegiado de Desenvolvimento Territorial da Bacia
          do Rio Grande, CODEVASF: Cia de Desenvolvimento do Vale do Rio São
          Francisco e Parnaíba, CONERH: Conselho Estadual dos Recursos Hídricos
          – BA, CPRM: Companhia de Pesquisas de Recursos Minerais.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Instituições de Ensino, Pesquisa e Extensão: CETEP-OESTE: Centro
          Territorial de Educação Profissional da Bacia do Rio Grande, FASB:
          Faculdade São Francisco, FUNDAÇÃO BAHIA, UCSAL: Universidade Católica
          de Salvador, UFBA e UFOB: Universidade Federal da Bahia e do Oeste da
          Bahia, UNEB: Universidade Estadual da Bahia, UNOPAR: Universidade do
          Oeste do Paraná: Núcleo Luís Eduardo Magalhães.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Empresas Agrícolas e Florestais: AGRI BRASIL, COLOMOTIN, KANSAS, VALE,
          VALE DO URSO Agrícola, Empresa VIDA MANSA, ZUTTION, BUSATO, DECISÃO,
          FLORYL, NORDESTE FLORESTAL E AGRÍCOLA, SANTA COLOMBA, SANTA RITA DE
          CASSIA, SCHMIDT AGRÍCOLA, SEMENTES OLEIMA, SLC, TRIFLORA.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Empresas de Insumos, Processamento e Serviços e Veículos de
          Comunicação: ADM: Empresa de Comercialização e processamento, CETREL:
          Empresa de Tratamento de Efluente, IRRIGER: Empresa de irrigação,
          KALLIANDRA: Empresa de Transporte, PIVODRIP/VALMONT.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Instituições Financeiras e de Agências de Fomento: Banco do Brasil,
          Banco do Nordeste do Brasil, DESENBAHIA.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Organizações Não Governamentais , Fundações e Institutos:
          10-ENVOLVIMENTO: Organização Ambiental, AMINA: A. Amigos da Natureza,
          CABER: Cooperativa dos Catadores de Produtos Recicláveis de Barreiras,
          CORRENTE VERDE: A. Ambientalista Corrente Verde, FAMA: Fórum
          Alternativo Mundial da Água, FUNDACAO ADM: Fundação de Empresa de
          Comercialização e Processamento Agrícola, IAIBA: Instituto AIBA,
          PARQUE VIDA CERRADO: Área de Conservação, PRODEAGRO: Programa de
          Desenvolvimento do Agronegócio.
        </Text>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Instituições do Estado do Nebraska, USA: Departamento de Recursos
          Naturais, Instituto Water for Food da UNL, Associação de Distritos de
          Recursos Naturais, STAHR FARM, Universidade de Nebraska, Distrito de
          Recursos Naturais Upper Republican.
        </Text>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.9 Links para publicações científicas
        </Heading>

        <List
          spacing={3}
          py={5}
          pl={12}
          color="blue.700"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
        >
          {publications.map((o) => (
            <ListItem
              textAlign="left"
              key={o.name}
              _hover={{
                transition: "0.2s",
                color: "blue.400",
              }}
            >
              <ListIcon as={MdCheckCircle} color="green.500" />
              <NextLink href={o.url}>{o.name}</NextLink>
            </ListItem>
          ))}
        </List>
      </Stack>

      <Stack id={id} as={Box} textAlign="left" pb={20}>
        <Heading
          py={2}
          fontWeight={600}
          fontSize="2rem"
          color="blue.700"
          lineHeight={"110%"}
        >
          2. Mapas para visualização de estatísticas municipais de variáveis
          agrícolas
        </Heading>

        <List
          spacing={3}
          py={5}
          pl={12}
          color="blue.700"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
        >
          {linkdata.map((o) => (
            <ListItem
              key={o.name}
              _hover={{
                transition: "0.2s",
                color: "blue.400",
              }}
            >
              <ListIcon as={MdCheckCircle} color="green.500" />
              <NextLink href={o.url}>{o.name}</NextLink>
            </ListItem>
          ))}
        </List>
      </Stack>
    </MotionContainer>
  );
}
