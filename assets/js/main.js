(function() {

   const ENVIROMENT = window.location.origin.includes('127.0.0.1') ? 'dev' : 'prod'
   const IS_MOBILE = window.innerWidth <= 768

   const LANGUAGE = window.location.href.includes('english') ? 'en' : 'pt'
   let CURRENT_THEME

   const headerMenu = document.querySelector('.header-menu')
   const btnMobile  = document.querySelector('#btn-mobile')
   
   btnMobile.onclick = function() {
      const isClicked = this.classList.contains('clicked')
      if(isClicked) {
         closeHeaderMenu()
      } else {
         openHeaderMenu()
      }
   }

   function openHeaderMenu() {
      btnMobile.classList.add('clicked')
      btnMobile.setAttribute('aria-expanded', 'true') // accessibility purpose

      headerMenu.classList.add('open')
   }
   
   function closeHeaderMenu() {
      btnMobile.classList.remove('clicked')
      btnMobile.setAttribute('aria-expanded', 'false') // accessibility purpose

      headerMenu.classList.remove('open')
   }
   
   const headerLinks = document.querySelectorAll('.header-menu a')
   headerLinks.forEach(link => {
      link.onclick = closeHeaderMenu
   })

   
   const btnToggleTheme = document.querySelector('#btn-toggle-theme')
   const btnIcon = btnToggleTheme.querySelector('i')
   const html = document.querySelector('html')
   
   const firstTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
   
   // trying to prevent layout shift
   let eventWasCalled = false
   if(document.readyState !== 'loading') {
      initPage()
   } else {
      document.addEventListener('DOMContentLoaded', () => {
         initPage()
      })
   }

   // trying to prevent layout shift
   setTimeout(() => {
      if(!eventWasCalled) {
         setTheme(firstTheme)
         html.style.visibility = 'visible'
         // console.log(`just set theme to ${firstTheme} cause eventWasCalled was ${eventWasCalled}`);
      }
   }, 300)
   
   // trying to prevent layout shift
   function initPage() {
      if(firstTheme === 'light') {
         setTheme('light')
      }

      html.style.visibility = 'visible'
      eventWasCalled = true
   }

   btnToggleTheme.onclick = function() {
      const currentTheme = html.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode'      
      if(currentTheme === 'dark-mode') 
         setTheme('light')
      else
         setTheme('dark')
   }

   CURRENT_THEME = firstTheme
   
   function setTheme(theme) {
      html.classList.remove(...html.classList)
      btnIcon.classList.remove('fa-sun')
      btnIcon.classList.remove('fa-moon')
      CURRENT_THEME = theme

      if(theme === 'dark') {
         btnToggleTheme.classList.add('active')
         btnIcon.classList.add('fa-moon')

         html.classList.add('dark-mode')
         localStorage.setItem('theme', 'dark')
      } else {
         btnToggleTheme.classList.remove('active')
         btnIcon.classList.add('fa-sun')
         
         html.classList.add('light-mode')
         localStorage.setItem('theme', 'light')
      }
   }

   // ###################### DINAMIC DATE INSERTION ###############################

   function getAge(date) {
      let today = new Date()
      let birthDate = new Date(date)

      let age = today.getFullYear() - birthDate.getFullYear()
      let m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         age--;
      }
      return age
   }

   const birthDate      = '2000-11-18'
   const dateStartedDev = '2019-09-01'
   
   const age    = getAge(birthDate)
   const devAge = getAge(dateStartedDev)

   const ageElement = document.querySelector('#my-age')
   const yearsDevElement = document.querySelector('#years-coding')
   
   ageElement.textContent = age
   yearsDevElement.textContent = devAge


   const currentDate = new Date()
   const currentYear = currentDate.getFullYear()
   
   const yearFooter = document.querySelector('#year-footer')
   yearFooter.innerHTML = currentYear


   // ###################### ACCORDION ###############################


   const accordionsHeaders = document.querySelectorAll('.accordion header')
   const accordionArrows  = document.querySelectorAll('.accordion-arrow')
   const accordionBodys  = document.querySelectorAll('.accordion-body')

   accordionsHeaders.forEach(accordionHeader => {   

      accordionHeader.onclick = e => {

         let accordionArrow = accordionHeader.querySelector('.accordion-arrow')
         let accordionBody = accordionHeader.nextElementSibling

         let bodyIsOpen = accordionBody.classList.contains('show')

         if(bodyIsOpen) {
            accordionBody.classList.remove('show')
            accordionArrow.style.transform = 'rotate(0deg)'
            return
         }

         accordionBodys.forEach(body => body.classList.remove('show'))
         accordionArrows.forEach(arrow => arrow.style.transform = 'rotate(0deg)')

         accordionBody.classList.add('show')
         accordionArrow.style.transform = 'rotate(180deg)'
         
      }

   })


   const skills = [
      {
         name: 'html',
         title: 'HTML',
         body: 'Após atuar em diversos projetos, posso dizer com confiança que domino essa linguagem de marcação e seus pontos mais importantes, como o uso de html semântico, técnicas de SEO, acessibilidade, otimizações, formulários e validações (não uso o atributo required pra validação, js não custa nada).',
         englishBody: 'After working in many projects, I can confidently say that I have a strong grasp of this markup language and its vital aspects, such as implementing semantic HTML, utilizing SEO techniques, ensuring accessibility, optimizing performance, handling forms, and validations (I don\'t use the required attribute to validate, cause a little bit of javascript doesn\'t hurt anybody).'
      },
      {
         name: 'css',
         title: 'CSS',
         body: 'Não existe site sem CSS, e em todos os projetos que atuei, sempre busquei perfeição, e a melhor qualidade possível, com foco em entregar um site que se destaque entre os outros, sempre sendo fiel aos mockups no figma. Também domino os principais pontos, como Flexbox, CSS Grid, Box Model,... Além do design responsivo, levando em consideração até os benditos usuários do galaxy fold...',
         englishBody: 'There\'s no website without CSS, and in all the projects I\'ve worked on, I\'ve always worked for perfection and the highest quality possible, with a focus on delivering a standout site among others, while staying true to the mockups in Figma. I\'m also an expert in key aspects such as Flexbox, CSS Grid, Box Model, and more. Additionally, I ensure the design is responsive, taking into consideration even those blessed Galaxy Fold users!'
      },
      {
         name: 'js',
         title: 'Javascript',
         body: 'É aqui que a mágica acontece, e a brincadeira fica mais legal. Possuo uma base de conhecimentos bem sólida, pois desenvolvi diversos projetos usando o javascript puro, tão reativos quanto. De seus principais pontos, domino manipulação da DOM, Event Listeners, requisições AJAX, HOFs, Arrow Functions, diferença de var, let e const rsrs, json e muito mais.',
         englishBody: 'This is where the magic happens, and the fun really begins. I have a solid knowledge base as I\'ve developed numerous projects using pure JavaScript, as reactive as it gets. Among its key aspects, I\'m expert in DOM manipulation, Event Listeners, AJAX requests, Higher-Order Functions (HOFs), Arrow Functions, the difference between var, let, and const (haha), JSON, and more.'
      },
      {
         name: 'jquery',
         title: 'jQuery',
         body: 'Apesar de todo mundo considerar ele "deprecated", e eu saber me virar muito bem sem ele, não podia deixar de fora, amo esse cara de verdade... Por muito tempo tivemos um relacionamento forte, e usar javascript sem ele as vezes me dói, mas enfim, se um dia ele voltar (espero mt q volte), pode deixar comigo!',
         englishBody: 'Even though everybody likes to say it\'s "deprecated", and the fact that i know my way without it, he couldn\'t be out, cause i love this guy... For a long time we had a serious relationship, and using javascript without him still hurts me, but anyway... if he ever comes back (forever hoping), leave it all with me!'
      },
      {
         name: 'bootstrap',
         title: 'Bootstrap',
         body: 'Não sou refém dele, mas é muito bom saber que posso usá-lo rs. Facilita muito a vida, muita gente não gosta de ficar customizando tabela e modal, e eu estou nessa lista ai, pois já usei também em muitos projetos.',
         englishBody: 'I\'m no bootstrap hostage, but it\'s very nice to know that i can use him :D. It makes life easier, cause a lot of people don\'t appreciate customizing tables and modals, and i am included, cause i\'ve used it in many projects'
      },
      {
         name: 'react',
         title: 'React JS',
         body: 'É a tecnologia que estou estudando no momento e cada vez me aprofundando mais. Já trabalhei em alguns projetos, tendo que lidar com seus Hooks, Rotas, Context API, Event Emitters, Components, gerenciamento de estado, styled components...',
         englishBody: 'Tecnology that i\'m currently studying, and improving as we speak (pretend we are). Worked in a few projects, having to deal with its hooks, routes, Context API, Event Emitters, Components, ...',
      },

      {
         name: 'php',
         title: 'PHP',
         body: 'Linguagem que eu domino e desenvolvi diversos projetos, sempre entregando tudo que foi pedido, porque né, o que é que não da pra fazer com PHP? Comecei com PHP puro, e então fui evoluindo, e domino seus principais pontos, como funções, POO (Programação Orientada a Objetos), PDO (PHP Data Objects), Composer, Sessão, Cookie, File Upload, File manipulation, geração de planilhas, pdfs, APIs REST, MVC (Model-View-Controller) e muito mais',
         englishBody: 'A language I master and have developed numerous projects in, always delivering everything that was requested, because, you know, what can\'t you do with PHP? I started with pure PHP and then evolved, becoming proficient in its key aspects such as functions, OOP (Object-Oriented Programming), PDO (PHP Data Objects), Composer, Sessions, Cookies, File Upload, File Manipulation, generating spreadsheets, PDFs, RESTful APIs, MVC (Model-View-Controller), and more.'
      },
      {
         name: 'laravel',
         title: 'Laravel',
         body: 'Não possuo tanta experiência, mas já suguei tanto do PHP puro, que não seria dificuldade nenhuma ter que trabalhar com esse framework lindo',
         englishBody: 'I don\'t have much experience with, but i already sucked so much of pure PHP, that having to work with this beautiful guy would be no problem'
      },
      {
         name: 'sql',
         title: 'Banco de Dados Relacional',
         englishTitle: 'Relational Databases',
         body: 'Vasta experiência, sempre usei e tenho bastante experiência. Já usei MySQL, SQL Server, Postgres e SQLite. Minhas tabelas sempre tem chave primária, estrangeira e índices, pq sem isso nem é tabela pra mim. Relacionamentos (Many to Many is life), Transactions, Stored Procedures, Triggers, PK, FK, otimizações, etc.',
         englishBody: 'Strong skills, always used and have plenty of experience. I have used MySQL, SQL Server, Postgres and SQLite. My tables always have primary keys, foreign keys and indexes, cause it\'s not a table without it. Relations (Many to Many is life), Transactions, Stored Procedures, Triggers, PK, FK, otimizações, etc.',
      },
      {
         name: 'node',
         title: 'Node JS',
         body: 'Tecnologia que estou estudando no momento. Já usei profissionalmente e achei fantástica e poderosa. Pretendo me aprofundar mais e dominá-la no futuro, conseguindo gerar o .eslintrc.json sem olhar no stackoverflow e gerar meus próprios Event Emitters',
         englishBody: 'Tecnology that i am currently studying. Already have used it profissionaly and found it fantastic and very powerfull. I intend in being a boss like i am in PHP, being able to generate the .eslintrc.json without asking stackoverflow for help, and generating my own Event Emitters'
      },
      {
         name: 'api',
         title: 'API Rest',
         body: 'Sempre seguindo as boas práticas, e padrões REST para tudo. Por exemplo, você fez um GET nesse lindo site, achou um erro....ops... então fez um POST pra mim, daí eu fiz um PUT para fazer uma correção e acabei também fazendo um DELETE em uma coisa que não fazia sentido =)',
         englishBody: 'Always following REST standards for everything. For example, you made a GET to this nice website, found and error.....oopsi... and then made a POST to me, then i made a PUT to fix this issue and also made a DELETE in something that didn\'t make sense =)'
      },
      {
         name: 'figma',
         title: 'Figma',
         body: 'Consigo manipular a ferramenta tranquilamente, mas desenvolver layout não é meu forte. Meu uso profissional envolve o desenvolvimento do código dos layouts propostos pelas equipes de design =)',
         englishBody: 'I am able to easily manipulate the software, but developing a nice layout is not my strong suit. My professional use envolves the coding development of layouts produced by desing team =)'
      },
      {
         name: 'git',
         title: 'Git',
         body: 'Projeto sem versionamento é tipo armário sem gaveta, uma hora vai dar ruim. Sempre utilizei, tentando seguir as melhores práticas, convenções de nome de branch e commit messages. Também familiar com o gitflow de aplicações reais, com pull requests, estrutura de branchs (branch feature, hotfix, main, ...)',
         englishBody: 'Project without versions is like a closet without drawers, sooner or lather it will fail. Always have used, trying to follow best practicets, branch and commit naming conventions. Also familiar with gitflows of real applications, with pull requests, branch structures, (branch feature, hotfix, main, ...)'
      },
      {
         name: 'azure',
         title: 'Azure',
         body: 'O meu maior projeto teve toda sua infraestrutura lá, então sou familiar com essa ferramenta de cloud. Já configurei Serviços de Aplicativos, com Pipelines dando suporte a CI/CD, Servidores Nginx, bancos de dados, Static Web Apps, SSH, Blob Storage, Azure Functions,...',
         englishBody: 'My biggest project had all of it\'s infrastructure there, so i am familiar with this cloud enviroment. I have setup App Services, with pipelines supporting CI/CD, Nginx servers, databases, Static Web Apps, SSH, Blob Storage, Azure Functions,...',
      },
      {
         name: 'devops',
         title: 'Devops',
         body: 'Implantei a ferramenta em projetos profissionais, dando suporte ao life-cycle de todo o projeto, automatizando as etapas. Desde a criação de cards, com os requisitos no Azure Boards, Versionamento do código no Azure Repos e CI/CD com Azure Pipelines',
         englishBody: 'Setup this tool in professional projects, supporting the entire life-cycle of the project, automating steps. Since cards creations, with it\'s requirements in Azure Boards, code versioning in Azure Repos and CI/CD with Azure Pipelines'
      },
      {
         name: 'soft-skills',
         title: 'Soft Skills',
         body: 'Sou bastante comunicativo, versátil, proativo, organizado e criativo. Adoro trabalhar em equipe, se ajudando para a resolução de problemas e realmente tedo a sensação de ser uma pessoa essencial para o time.',
         englishBody: 'I\'m a very comunicative person, versatile, proactive, organized and creative. I love being part of a team, helping each other to solve upcoming issues, and having the feeling that i truly make a difference to the team'
      },
      {
         name: 'english',
         title: 'Inglês',
         body: '(Check out the english version) Whenever I fill out a form, I always mark the fluent option, because that\'s true. I am fully capable of listening/talking/writing in english, thanks to games and lots of netflix hours, but chill out, my english can get very professional as needed. Want proof? I wrote this without google translator :D (i swear...)',
         englishBody: 'Whenever I fill out a form, I always mark the fluent option, because that\'s true. I am fully capable of listening/talking/writing in english, thanks to games and lots of netflix hours, but chill out, my english can get very professional as needed. Want proof? I wrote this without google translator :D (i swear...)',
      },
   ]

   const skillIcons = document.querySelectorAll('.icon[data-icon-hover]')
   let defaultTextTimeout

   skillIcons.forEach(icon => {
      
      const accordionType = icon.getAttribute('data-accordion')

      icon.onmouseenter = () => {
         clearTimeout(defaultTextTimeout)

         const childIcon = icon.querySelector('i, svg')
         childIcon.style.transform = 'scale(1.1)'
            
         
         const color = icon.getAttribute('data-icon-hover')
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = color
         } else {
            icon.style.color = color
         }

         const currentAccordionTitle = document.querySelector(`#${accordionType}-title`)
         const currentAccordionBody  = document.querySelector(`#${accordionType}-body`)

         const skillName = icon.getAttribute('data-skill-name')   
         const { title, body, englishTitle, englishBody } = skills.find(skill => skill.name === skillName)


         if(title !== document.querySelector(`#${accordionType}-title`).textContent) {
            currentAccordionTitle.classList.remove('fade-in')
            currentAccordionBody.classList.remove('fade-in')
   
            setTimeout(() => {
               currentAccordionTitle.classList.add('fade-in')
               currentAccordionBody.classList.add('fade-in')
            }, 1)
         }

         currentAccordionTitle.innerHTML = LANGUAGE === 'en' && englishTitle !== undefined ? englishTitle : title
         currentAccordionBody.innerHTML  = LANGUAGE === 'pt' ? body : englishBody
      }
      
      icon.onmouseleave = () => {
         const childIcon = icon.querySelector('i, svg')
         
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = 'var(--clr-skils-icon)'
         } else {
            icon.style.color = 'var(--clr-skils-icon)'
         }

         childIcon.style.transform = 'scale(1)'

         defaultTextTimeout = setTimeout(() => {
            document.querySelector(`#${accordionType}-title`).innerHTML = LANGUAGE === 'pt' ? 'Valeeu <i class="far fa-thumbs-up"></i> <small>(Pode passar mais ok)<small>' : 'Appreciate it <i class="far fa-thumbs-up"></i> <small>(Feel free to hover more)<small>'
            document.querySelector(`#${accordionType}-body`).innerHTML  = LANGUAGE === 'pt' ? '(É ilimitado e gratuito)' : "(It's free and ilimited)"
         }, 500)
         
      }

      if(!IS_MOBILE) 
         return

      icon.onclick = () => {
         skillIcons.forEach(skillIcon => {
            skillIcon.classList.remove('icon-mobile-open')
            skillIcon.style.color = 'var(--clr-skils-icon)'
         })

         icon.classList.add('icon-mobile-open')

         const childIcon = icon.querySelector('i, svg')
                  
         const color = icon.getAttribute('data-icon-hover')
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = color
         } else {
            icon.style.color = color
         }
         
         const skillName = icon.getAttribute('data-skill-name')
         const { body, englishBody } = skills.find(skill => skill.name === skillName)
         
         const description = icon.querySelector('.mobile-description')
         description.innerHTML = LANGUAGE === 'pt' ? body : englishBody
         description.style.color = CURRENT_THEME === 'light' ? 'var(--clr-dark)' : color
      }
   })

   if(IS_MOBILE) 
      skillIcons[0].click()


   setTimeout(() => {
      $('.portfolio-wrapper').slick({
         dots: true,
         speed: 400,
         prevArrow: $('.portifolio-previous-arrow'),
         nextArrow: $('.portifolio-next-arrow'),
         responsive: true,
         lazyLoad: 'ondemand',
      })
   }, 300)

   // ###################### CONTACT FORM ###############################

   const API_URL = 'https://portfolio-mailer-qe09.onrender.com/mail'


   const inputs = document.querySelectorAll('.form-field')
   inputs.forEach(input => {
      input.onblur = e => {
         let div = input.parentElement
         let label = div.querySelector('label')
         
         if(e.target.value == '') {
            label.classList.remove('input-has-value')
            return
         }
         
         label.classList.add('input-has-value')
      }
   })


   const form = document.querySelector('#contact-form')
   const fields = document.querySelectorAll('input, textarea')
   const btnSubmit = document.querySelector('#btn-submit')

   form.onsubmit = e => {
      e.preventDefault()
      if(btnSubmit.hasAttribute('disabled'))
         return

      let allFieldsHaveValue = true
      fields.forEach(field => {
         field.classList.remove('is-invalid')

         if(field.value == '') {
            allFieldsHaveValue = false
            field.classList.add('is-invalid')
         } 
      })

      if(!allFieldsHaveValue) {
         return
      }

      const name = form.querySelector('#name').value
      const email = form.querySelector('#email').value
      const message = form.querySelector('#message').value

      btnWait()
      const config = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({name, email, message})
      }

      try {
         fetch(API_URL, config)
            .then(res => {
               if(!res.ok || res.status != 201) {
                  throw new Error('Request failed')
               }

               return res.json()
            })
            .then(() => formFeedback('success'))
            .catch(() => formFeedback('error'))
            .finally(() => btnWait(false))

      } catch {
         formFeedback('error')
         btnWait(false)
      }

   }

   function btnWait(wait = true) {
      let btnSpan = btnSubmit.querySelector('span')

      if(wait) {
         btnSubmit.setAttribute('disabled', true)
         btnSubmit.classList.add('disabled')
         btnSpan.innerHTML = 'Enviando... <i class="fas fa-circle-notch fa-spin"></i>'
      } else {
         btnSubmit.removeAttribute('disabled', true)
         btnSubmit.classList.remove('disabled')
         btnSpan.innerHTML = 'Enviar Mensagem <i class="fas fa-paper-plane"></i>'
      }
   }

   const formFeedbackElement = form.querySelector('.form-feedback')

   function formFeedback(feedback) {
      formFeedbackElement.classList.remove('success')
      formFeedbackElement.classList.remove('error')
      
      if(feedback === 'success') {
         formFeedbackElement.textContent = LANGUAGE === 'pt' ? 'Formulário enviado com sucesso! Obrigado :)' : 'Form was successfully sent! Thank you :)'
         formFeedbackElement.classList.add('success')
         form.reset()
      } else {
         formFeedbackElement.innerHTML = LANGUAGE === 'pt' ? 
            'Ooops, deu algum erro no serviço de e-mail :( <br> <a href="https://wa.me/5521974480796?text=Ol%C3%A1+andr%C3%A9%2C+vim+do+seu+portf%C3%B3lio%21">Clique aqui para ir para o whatsapp</a>'
            :
            'Ohh no, something went wrong with in the mail service :( <br> <a href="https://wa.me/5521974480796?text=Ol%C3%A1+andr%C3%A9%2C+vim+do+seu+portf%C3%B3lio%21">Click here to go to whatsapp</a>'
         formFeedbackElement.classList.add('error')
      }

   }

   const API_BASE_URL = 'https://portfolio-mailer-qe09.onrender.com/'
   

   /**
    * API has a cold start where it is hosted, so when a user comes to the website, it hits the API to start it
    */
   async function startApiService() {
      if(ENVIROMENT === 'dev') 
         return

      try {
         const response = await fetch(API_BASE_URL)
         const json = response.json()
      } catch (error) {
         console.log(error);
      }
   }

   startApiService()

   // ###################### COPY CLIPBOARD ###############################

   function copyToClipboard(text) {
      var input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand('copy');
      document.body.removeChild(input);
      return result;
   }

   const btnCopy = document.querySelectorAll('[data-btn-copy]')
   btnCopy.forEach(btn => {
      btn.onclick = () => {
         const linkElement = btn.previousElementSibling
         const link = linkElement.href
         copyToClipboard(link)
         btn.innerHTML = '<i class="fas fa-check"></i>'
         setTimeout(() => { 
            btn.innerHTML = '<i class="fas fa-copy"></i>' 
         }, 700)
      }
   })


   // ###################### INTERSECTION OBSERVER ###############################

   const lazyElements = document.querySelectorAll('[data-lazy]')

   const options = {
      threshold: 0,
      rootMargin: "-80px 0px -80px 0px"
   }

   function lazyLoad (target) {
      const io = new IntersectionObserver((entries, observer) => {
   
         entries.forEach(entry => {
            const element = entry.target
   
            if(entry.isIntersecting) {
               
               element.classList.add('fade-completed')

               const transitionDuration = element.getAttribute('data-lazy') || 400
               element.style.transitionDuration = `${transitionDuration}ms`
               
               io.unobserve(target)
            }
         })
   
      }, options)

      io.observe(target)
   }

   lazyElements.forEach(lazyLoad)


   // ###################### LANGUAGE POPOVER ###############################
   const DEVICE_IS_PORTUGUESE = /^pt\b/.test(navigator.language || navigator.userLanguage);

   const popover = document.querySelector('#language-popover')
   const btnClosePopover = document.querySelector('#btn-close-popover')
   
   if(!DEVICE_IS_PORTUGUESE) {
      setTimeout(() => {

         showPopover()
         btnClosePopover.onclick = closePopover

      }, 2000)
   }

   function showPopover() {
      popover.classList.add('show')
      popover.setAttribute('aria-hidden', 'false')
   }
   
   function closePopover() {
      popover.classList.remove('show')
      popover.setAttribute('aria-hidden', 'true')
   }

})()
