;(() => {
   function animate() {

    const tl = gsap.timeline({
      repeat: 0,
      default: {
        duration: 0.4,
        opacity: 0,
        ease: 'power2.out',
      }

    })

    tl
      .from('.saber', { y: -200, opacity: 0, duration: 1.5 })
      .from('.archer', { y: -200, opacity: 0, duration: 1.5, })
      .from('.center-banner', { opacity: 0, duration: 1,})
       
     
    
  }

  setTimeout(animate, 500) 
})()