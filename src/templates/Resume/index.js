import React from 'react';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import {
  StyledResume,
  StyledExperience,
  StyledExperienceItem,
  StyledExperienceHead,
  StyledExperienceLink,
  StyledExperienceInfo,
  StyledExperienceRole,
  StyledExperienceContent
} from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';
import LogoAteliware from 'assets/images/resume/logo-ateliware.svg';
import LogoBcredi from 'assets/images/resume/logo-bcredi.svg';
import LogoMadeiraMadeira from 'assets/images/resume/logo-madeiramadeira.svg';
import LogoEbanx from 'assets/images/resume/logo-ebanx.svg';
import LogoSnowmanLabs from 'assets/images/resume/logo-snowmanlabs.svg';
import LogoImam from 'assets/images/resume/logo-imam.svg';
import LogoWx from 'assets/images/resume/logo-wx.svg';
import LogoAndaraki from 'assets/images/resume/logo-andaraki.svg';

const Resume = () => {
  return (
    <StyledPage>
      <StyledSidebar>
        <img
          src={ImageCelsoFabri}
          srcset={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledSidebar>
      <StyledContent>
        <StyledTitle>Sobre</StyledTitle>
        <StyledResume>
          <h3>Celso Fabri Junior</h3>
          <p>
            Atualmente eu trabalho na{' '}
            <a
              href="https://ateliware.com"
              title="ateliware"
              target="_blank"
              rel="noopener noreferrer"
            >
              ateliware
            </a>{' '}
            como <strong>desenvolvedor front-end</strong>, mas eu já
            trabalhei em outras empresas como{' '}
            <a
              href="https://bcredi.com.br"
              title="Bcredi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bcredi
            </a>
            ,{' '}
            <a
              href="https://madeiramadeira.com.br"
              title="MadeiraMadeira"
              target="_blank"
              rel="noopener noreferrer"
            >
              MadeiraMadeira
            </a>
            ,{' '}
            <a
              href="https://ebanx.com"
              title="EBANX"
              target="_blank"
              rel="noopener noreferrer"
            >
              EBANX
            </a>
            ,{' '}
            <a
              href="https://snowmanlabs.com.br"
              title="Snowman Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snowman Labs
            </a>
            ,{' '}
            <a
              href="https://imam.ag"
              title="IMAM Publicidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              IMAM
            </a>
            ,{' '}
            <a
              href="https://agenciawx.com.br"
              title="Agência WX"
              target="_blank"
              rel="noopener noreferrer"
            >
              WX
            </a>{' '}
            e{' '}
            <a
              href="https://andaraki.com.br"
              title="Andaraki Calçados"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andaraki
            </a>
            .
          </p>
          <p>
            Eu sou graduado no curso de Tecnologia em Produçõa
            Multimídia (Web Design) pela Universidade Opet. Eu possuo
            habilidades visuais como <strong>UX/UI designer</strong>,
            mas meu foco atual é{' '}
            <strong>desenvolvimento front-end</strong>. Atualmente, eu
            estou trabalhando com ReactJS e aprendendo um pouco sobre
            VueJS e Elixir.
          </p>
        </StyledResume>
        <StyledExperience>
          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://ateliware.com"
                title="ateliware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoAteliware}
                  width="80"
                  height="80"
                  alt="ateliware"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>ateliware</h4>
                <h5>Front-End Developer</h5>
                <p>Setembro/2020 - Até o momento</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://bcredi.com.br"
                title="Bcredi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoBcredi}
                  width="80"
                  height="80"
                  alt="Bcredi"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>Bcredi</h4>
                <h5>Front-End Developer</h5>
                <p>Agosto/2019 - Setembro/2020</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Criação e desenvolvimento de interface e soluções
                junto com a equipe de engenharia e marketing para os
                produtos voltado tanto para o mercado B2C quanto para
                o B2B, usando React como tecnologia principal no
                desenvolvimento front-end. Desenvolvimento e
                manutenção de sites e blogs usando WordPress como CMS
                e contribuição no desenvolvimento de construção do
                Design System.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://madeiramadeira.com.br"
                title="MadeiraMadeira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoMadeiraMadeira}
                  width="80"
                  height="80"
                  alt="MadeiraMadeira"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>MadeiraMadeira</h4>
                <h5>Front-End Developer</h5>
                <p>Junho/2019 - Julho/2019</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Criação de interface e desenvolvimento front-end de
                novas soluções para marketplace 3P, utilizando
                tecnologias como HTML5, CSS3, Javascript, React, PHP,
                Photoshop, Adobe XD e Sketch. Pensando na experiência
                do usuário e uma interface de usuário eficiente,
                intuitiva, rápida e de fácil manutenção. Aplicando
                novas ferramentas como gerenciador de tarefas,
                gerenciador de dependências e metodologias como BEM
                (Block Element Modifier) ​​para melhoria do processo
                de desenvolvimento desde a construção de UI, pensando
                em componentes construindo até o desenvolvimento
                front-end.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://ebanx.com"
                title="EBANX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoEbanx}
                  width="80"
                  height="80"
                  alt="EBANX"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>EBANX</h4>
                <h5>Front-End Developer</h5>
                <p>Agosto/2016 - Maio/2019</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Desenvolvimento de novas soluções do produto junto ao
                Squad de End-User, utilizando as tecnologias HTML5,
                CSS3, Javascript, React, Node, PHP, Ruby, MySQL,
                auxiliando no UX/UI das melhorias e/ou novas
                implementações realizadas. Criação de e-mails
                marketing para campanhas e/ou direcionamentos
                específicos. Utilização do Wordpress para o
                desenvolvimento de portais, blogs, sites, entre outra
                aplicações. Gerenciamento de equipe com Scrum e
                Kanban.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://snowmanlabs.com.br"
                title="Snowman Labs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoSnowmanLabs}
                  width="80"
                  height="80"
                  alt="Snowman Labs"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>Snowman Labs</h4>
                <h5>Front-End Developer</h5>
                <p>Março/2016 - Agosto/2016</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Desenvolvimento de sites e aplicações utilizando as
                teacnologias HTML5, CSS3, Javascript, PHP, MySQL.
                Utilização do Wordpress para o desenvolvimento de
                portais, blogs, sites, entre outra aplicações.
                Gerenciamento de equipe com Scrum e Kanban.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://imam.ag"
                title="IMAM Publicidade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoImam}
                  width="80"
                  height="80"
                  alt="IMAM Publicidade"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>IMAM Publicidade</h4>
                <h5>Front-End Developer - UI/UX Designer</h5>
                <p>Dezembro/2014 - Fevereiro/2016</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Desenvolvedor front-end e ux designer, criando fluxos
                de sites, wireframes, layouts, desenvolvimento de
                sites promocionais (hotsites) e site gerenciáveis em
                WordPress. Atividades como criação de email-marketing,
                peças animadas em Flash para vários veículos de
                comunicação, como por exemplo elemídias.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://agenciawx.com.br"
                title="Agência WX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoWx}
                  width="80"
                  height="80"
                  alt="Agência WX"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>Agência WX</h4>
                <h5>Front-End Developer & WordPress Developer</h5>
                <p>Fevereiro/2014 - Novembro/2014</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Desenvolvimento de sites promocionais (hotsite) e
                sites gerenciáveis em WordPress. Manutenção e suporte
                para CMS próprio da empresa e criação de HTML de email
                marketing.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://imam.ag"
                title="IMAM Publicidade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoImam}
                  width="80"
                  height="80"
                  alt="IMAM Publicidade"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>IMAM Publicidade</h4>
                <h5>Front-End Developer - UX/UI Designer Intern</h5>
                <p>Julho/2013 - Janeiro/2014</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                Desenvolvimento front-end de sites estáticos e em
                WordPress. Auxílio no tratamento de imagens, recortes
                e derivação de peças publicitárias para os mais
                diversos veículos de comunicação. Animação de peças
                publicitárias e banners para o Google.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>

          <StyledExperienceItem>
            <StyledExperienceHead>
              <StyledExperienceLink
                href="https://andaraki.com.br"
                title="Andaraki Calçados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LogoAndaraki}
                  width="80"
                  height="80"
                  alt="Andaraki Calçados"
                />
              </StyledExperienceLink>
              <StyledExperienceInfo>
                <h4>Andaraki Calçados</h4>
                <h5>Web Designer</h5>
                <p>Outubro/2012 - Julho/2013</p>
              </StyledExperienceInfo>
            </StyledExperienceHead>
            <StyledExperienceContent>
              <p>
                No período de estágio (3 meses), atuação na manutenção
                do site da loja virtual, auxílio na criação de banners
                e tratamento de imagens. Como CLT, além das demais
                tarefas já exercidas no período de estágio,
                desenvolvimento de hotsites promocionais, criação de
                banners, auxílio no desenvolvimento de ideias de
                campanhas, criação de e-mail marketing, criação de
                campanhas do Google Adwords e banners para
                Remarketing.
              </p>
            </StyledExperienceContent>
          </StyledExperienceItem>
        </StyledExperience>
      </StyledContent>
    </StyledPage>
  );
};

export default Resume;
