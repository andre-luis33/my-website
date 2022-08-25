// $(document).ready(function() {


   const btnMobile = $('#btn-mobile')
   btnMobile.click(function() {
      const isClicked = $(this).hasClass('clicked')
      if(isClicked) {
         $(this).removeClass('clicked')
      } else {
         $(this).addClass('clicked')
      }
   })


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

   const ageElement = $('#my-age')
   const yearsDevElement = $('#years-coding')
   
   ageElement.text(age)
   yearsDevElement.text(devAge)
   


// })