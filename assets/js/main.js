$(document).ready(function() {


   const btnMobile = $('#btn-mobile')
   btnMobile.click(function() {
      const isClicked = $(this).hasClass('clicked')
      if(isClicked) {
         $(this).removeClass('clicked')
      } else {
         $(this).addClass('clicked')
      }
   })


   const birthDay    = new Date('2000-11-18')
   const today       = new Date()
   const yearDiffObj = new Date(today.getTime() - birthDay.getTime())
   const yearDiff    = yearDiffObj.getFullYear()
   const yearsCoding = yearDiff - 20

   const ageElement = $('#my-age')
   const yearsCodingElement = $('#years-coding')
   ageElement.text(yearDiff)
   


})