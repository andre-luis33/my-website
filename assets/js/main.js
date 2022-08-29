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
   ]

   const skillTitle = document.querySelector('#front-end-title')
   const skillBody  = document.querySelector('#front-end-body')

   const iconsFrontEndHover = document.querySelectorAll('[data-icon-hover]')

   iconsFrontEndHover.forEach(icon => {
      
      icon.onmouseover = () => {
         icon.querySelector('i').style.transform = 'scale(1.2)'
         
         let color = icon.getAttribute('data-icon-hover')
         icon.style.color = color

         let skillName = icon.getAttribute('data-skill-name')   
         let skill = skills.find(skill => skill.name === skillName)

         skillTitle.innerHTML  = skill.title
         skillBody.innerHTML  = skill.body
      }
      
      icon.onmouseleave = () => {
         icon.style.color = 'var(--clr-purple-dark)'
         icon.querySelector('i').style.transform = 'scale(1)'
      }
   })

   $('.portfolio-wrapper').slick({
      dots: true,
      speed: 400,
      prevArrow: $('.portifolio-previous-arrow'),
      nextArrow: $('.portifolio-next-arrow'),
   })

// })