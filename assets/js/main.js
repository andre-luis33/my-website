(function() {

   const ENVIROMENT = window.location.origin.includes('127.0.0.1') ? 'dev' : 'prod'
   const IS_MOBILE = window.innerWidth <= 768


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



   const accordionsHeaders = document.querySelectorAll('.accordion header')
   const accordionArrows  = document.querySelectorAll('.accordion-arrow')
   const accordionBodys  = document.querySelectorAll('.accordion-body')

   const closableTagsOnMobile = ['button', 'header', 'h4']

   accordionsHeaders.forEach(accordionHeader => {   

      accordionHeader.onclick = e => {
         // const currentTag = e.target.tagName.toLowerCase()
         // if(IS_MOBILE && !closableTagsOnMobile.includes(currentTag)) {
         //    return
         // }

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
         body: 'Possuo experiência vasta experiência, após trabalhar em diversos projetos das mais diferentes áreas, respeitando as tags semânticas, técnicas de SEO, acessibilidade, otimizações e formulários (não uso o atributo required pra validação, js não custa nada).'
      },
      {
         name: 'css',
         title: 'CSS',
         body: 'Não existe site sem CSS, e assim como HTML, também possuo muita experiência com CSS, Flexbox, CSS Grid, Box Model, ... Além do design responsivo e aquele arquivozinho minificado também, que já são de praxe :D'
      },
      {
         name: 'js',
         title: 'Javascript',
         body: 'Essa é a minha parte favorita do front-end, onde toda a mágica acontece. Sei manipular a DOM direitinho, Event Listeners, requisições AJAX, HOFs e muito mais'
      },
      {
         name: 'jquery',
         title: 'jQuery',
         body: 'Apesar de todo mundo considerar ele "deprecated", e eu saber me virar muito bem sem ele, não podia deixar de fora, amo esse cara de verdade... Por muito tempo tivemos um relacionamento forte, e usar javascript sem ele as vezes me dói, mas enfim, se um dia ele voltar (espero mt q volte), pode deixar comigo!'
      },
      {
         name: 'bootstrap',
         title: 'Bootstrap',
         body: 'Não sou refém dele, mas é muito bom saber que psoso usá-lo rs. Facilita muito a vida, muita gente não gosta de ficar customizando tabela e modal, e eu estou nessa lista ai, pois já usei também em muitos projetos.'
      },
      {
         name: 'react',
         title: 'React JS',
         body: 'Da lista de skills, é o que eu tenho menos conhecimento, mas já trabalhei em alguns projetos, tendo que lidar com seus Hooks, Rotas e Context'
      },

      {
         name: 'php',
         title: 'PHP',
         body: 'Linguagem que eu domino e uso há mais de 3 anos. Comecei com PHP puro, e então fui evoluindo nessa stack que sempre me possibilitou fazer tudo. Funções, POO, PDO, Composer, Sessão, Cookie, File Upload, File manipulation, geração de planilhas, pdfs, APIs REST, MVC, etc.'
      },
      {
         name: 'laravel',
         title: 'Laravel',
         body: 'Não possuo tanta experiência, mas já suguei tanto do PHP puro, que não seria dificuldade nenhuma ter que trabalhar com esse framework lindo'
      },
      {
         name: 'sql',
         title: 'Banco de Dados Relacional',
         body: 'Minha preferência de uso em projetos, sempre usei e tenho bastante experiência. Já usei MySQL, SQL Server, Postgres e SQLite. Minhas tabelas sempre tem chave primária e índice, pq sem isso nem é tabela pra mim. Relacionamentos (Many to Many is life) Transactions, Stored Procedures, Triggers, PK, FK, otimizações, etc.'
      },
      {
         name: 'node',
         title: 'Node JS',
         body: 'Tecnologia que estou estudando no momento. Já usei profissionalmente e achei fantástica e poderosa. Pretendo me aprofundar mais e dominá-la no futuro, conseguindo gerar o .eslintrc.json sem olhar no stackoverflow'
      },
      {
         name: 'api',
         title: 'API Rest',
         body: 'Quer falar comigo? Faz um POST ae'
      },
      {
         name: 'figma',
         title: 'Figma',
         body: 'Consigo manipular a experiência tranquilamente, mas desenvolver layout não é meu forte. Meu uso profissional envolve o desenvolvimento dos layouts propostos pelas equipes de design =)'
      },
      {
         name: 'git',
         title: 'Git',
         body: 'Projeto sem versionamento é tipo armário sem gaveta, uma hora vai dar ruim. Sempre utilizei, tentando seguir as melhores práticas, convenções de nome de branch e commit messages. Também familiar com o gitflow de aplicações reais, com pull requests, estrutura de branchs, branch feature, hotfix, main, etc'
      },
      {
         name: 'azure',
         title: 'Azure',
         body: 'O meu maior projeto teve toda sua infraestrutura lá, então sou familiar com essa ferramenta de cloud. Já configurei Serviços de Aplicativos, com Pipelines dando suporte a CI/CD, Servidores Nginx, bancos de dados, Static Web Apps, SSH, etc.'
      },
      {
         name: 'devops',
         title: 'Devops',
         body: 'Implantei a ferramenta em projetos profissionais, dando suporte ao life-cycle de todo o projeto, automatizando as etapas. Desde a criação de cards, com os requisitos, etc. no Azure Boards, Versionamento do código no Azure Repos, e CI/CD com Azure Pipelines'
      },
      {
         name: 'soft-skills',
         title: 'Soft Skills',
         body: 'Sou bastante comunicativo, versátil, solícito, organizado e criativo. Adoro trabalhar em equipe, se ajudando para a resolução de problemas e realmente tedo a sensação de ser uma pessoa essencial para o time.'
      },
      {
         name: 'english',
         title: 'Inglês',
         body: 'Whenever I fill out a form, I always mark the fluent option, because that\'s true. I am fully capable of listening/talking/writing in english, thanks to games and lots of netflix hours, but chill out, my english can get very professional as needed. Want proof? I wrote this without google translator :D (i swear...)'
      },
   ]

   const skillTitle = document.querySelector('#front-end-title')
   const skillBody  = document.querySelector('#front-end-body')

   const skillIcons = document.querySelectorAll('.icon[data-icon-hover]')

   skillIcons.forEach(icon => {
      
      const accordionType = icon.getAttribute('data-accordion')

      icon.onmouseover = () => {
         const childIcon = icon.querySelector('i, svg')

         childIcon.style.transform = 'scale(1.1)'
            
         
         const color = icon.getAttribute('data-icon-hover')
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = color
         } else {
            icon.style.color = color
         }

         const skillName = icon.getAttribute('data-skill-name')   
         const { title, body } = skills.find(skill => skill.name === skillName)

         document.querySelector(`#${accordionType}-title`).innerHTML = title
         document.querySelector(`#${accordionType}-body`).innerHTML  = body
      }
      
      icon.onmouseleave = () => {
         const childIcon = icon.querySelector('i, svg')
         
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = 'var(--clr-skils-icon)'
         } else {
            icon.style.color = 'var(--clr-skils-icon)'
         }

         childIcon.style.transform = 'scale(1)'

         document.querySelector(`#${accordionType}-title`).innerHTML = 'Valeeu <i class="far fa-thumbs-up"></i> <small>(Pode passar mais ok)<small>'
         document.querySelector(`#${accordionType}-body`).innerHTML  = '(É ilimitado e gratuito)'
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
         const { title, body } = skills.find(skill => skill.name === skillName)
         
         const description = icon.querySelector('.mobile-description')
         description.innerHTML = body
         description.style.color = color
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
         formFeedbackElement.textContent = 'Formulário enviado com sucesso! Obrigado :)'
         formFeedbackElement.classList.add('success')
         form.reset()
      } else {
         formFeedbackElement.innerHTML = 'Ooops, deu algum erro no serviço de e-mail :( <br> <a href="https://wa.me/5521974480796?text=Ol%C3%A1+andr%C3%A9%2C+vim+do+seu+portf%C3%B3lio%21">Clique aqui para ir para o whatsapp</a>'
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


})
