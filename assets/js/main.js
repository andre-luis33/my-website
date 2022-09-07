// $(document).ready(function() {


   const btnMobile = document.querySelector('#btn-mobile')
   btnMobile.onclick = function() {
      const isClicked = this.classList.contains('clicked')
      if(isClicked) {
         this.classList.remove('clicked')
      } else {
         this.classList.add('clicked')
      }
   }

   function getAge(date) {
      let today = new Date();
      let birthDate = new Date(date);

      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         age--;
      }
      return age;
   }

   const birthDate      = '2000-11-18'
   const dateStartedDev = '2019-09-01'
   
   const age    = getAge(birthDate)
   const devAge = getAge(dateStartedDev)

   const ageElement = document.querySelector('#my-age')
   const yearsDevElement = document.querySelector('#years-coding')
   
   ageElement.textContent = age
   yearsDevElement.textContent = devAge



   const accordions = document.querySelectorAll('.accordion')
   const accordionArrows  = document.querySelectorAll('.accordion-arrow')
   const accordionBodys  = document.querySelectorAll('.accordion-body')

   accordions.forEach(accordion => {   

      accordion.onclick = () => {
         let accordionArrow = accordion.querySelector('.accordion-arrow')
         let accordionBody = accordion.querySelector('.accordion-body')

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
         body: 'HTML semântico é comigo, tenho experiência em técnicas de SEO, estruturação e acessibilidade'
      },
      {
         name: 'css',
         title: 'CSS',
         body: 'Manjo pra caralho, display flex ate o talo, responsivo boladão e fé'
      },
      {
         name: 'js',
         title: 'Javascript',
         body: 'Putz, fetch, async await, HOFs, a porra toda!!'
      },
      {
         name: 'jquery',
         title: 'jQuery',
         body: 'Manipulo a DOM melhor que tua mãe no fogão'
      },
      {
         name: 'react',
         title: 'React JS',
         body: 'Sei useState, e um pouquinho mais ai'
      },
      {
         name: 'bootstrap',
         title: 'Bootstrap',
         body: 'Melhor coisa pra fazer interface boladona :D'
      },
      {
         name: 'responsive',
         title: 'Responsividade',
         body: 'Consigo fazer até usuário de galaxy fold ler, faz o teste nesse site ai pô'
      },
      {
         name: 'php',
         title: 'PHP',
         body: 'Faço oq tu quiser!'
      },
      {
         name: 'laravel',
         title: 'Laravel',
         body: 'O framework mais boladão de php q tem'
      },
      {
         name: 'sql',
         title: 'Banco de Dados Relacional',
         body: 'MSSQL e MySQL'
      },
      {
         name: 'node',
         title: 'Node JS',
         body: 'Hmmmmm node porra'
      },
      {
         name: 'api',
         title: 'API Rest',
         body: 'Quer falar comigo? Faz um POST ae'
      },
      {
         name: 'figma',
         title: 'Figma',
         body: 'Não é meu forte, mas consigo usar a ferramenta e também extrair layouts'
      },
      {
         name: 'git',
         title: 'Git',
         body: 'Trabalho com git diariamente'
      },
      {
         name: 'seo',
         title: 'SEO (Search Engine Optimization)',
         body: 'Quer falar comigo? Faz um POST ae'
      },
      {
         name: 'azure',
         title: 'Azure',
         body: 'ja trampei com po'
      },
      {
         name: 'devops',
         title: 'Devops',
         body: 'pipeline, devops boards, git'
      },
      {
         name: 'soft-skills',
         title: 'Soft Skills',
         body: 'sou legal e xeroso'
      },
      {
         name: 'english',
         title: 'Inglês',
         body: 'nice to meet you'
      },
   ]

   const skillTitle = document.querySelector('#front-end-title')
   const skillBody  = document.querySelector('#front-end-body')

   const iconsFrontEndHover = document.querySelectorAll('[data-icon-hover]')

   iconsFrontEndHover.forEach(icon => {
      
      const accordionType = icon.getAttribute('data-accordion')

      icon.onmouseover = () => {
         let childIcon = icon.querySelector('i, svg')

         childIcon.style.transform = 'scale(1.1)'
            
         
         let color = icon.getAttribute('data-icon-hover')
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = color
         } else {
            icon.style.color = color
         }

         let skillName = icon.getAttribute('data-skill-name')   
         let skill = skills.find(skill => skill.name === skillName)

         document.querySelector(`#${accordionType}-title`).innerHTML = skill.title
         document.querySelector(`#${accordionType}-body`).innerHTML  = skill.body
         // skillBody.innerHTML  = skill.body
      }
      
      icon.onmouseleave = () => {
         let childIcon = icon.querySelector('i, svg')
         
         if(childIcon.tagName == 'svg') {
            childIcon.querySelector('path').style.fill = 'var(--clr-purple-dark)'
         } else {
            icon.style.color = 'var(--clr-purple-dark)'
         }

         childIcon.style.transform = 'scale(1)'

         document.querySelector(`#${accordionType}-title`).innerHTML = 'Valeeu <i class="far fa-thumbs-up"></i> <small>(Pode passar mais ok)<small>'
         document.querySelector(`#${accordionType}-body`).innerHTML  = '(É ilimitado e gratuito)'
      }
   })

   $('.portfolio-wrapper').slick({
      dots: true,
      speed: 400,
      prevArrow: $('.portifolio-previous-arrow'),
      nextArrow: $('.portifolio-next-arrow'),
   })


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

      console.log('enviou')

      let allFieldsHaveValue = true
      fields.forEach(field => {
         field.classList.remove('is-invalid')

         if(field.value == '') {
            allFieldsHaveValue = false
            field.classList.add('is-invalid')
         } 
      })

      btnWait()
      setTimeout(() => {
         btnWait(false)
      }, 1000)
      // if(allFieldsHaveValue)

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

// })