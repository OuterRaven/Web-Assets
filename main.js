// console.log("Hello")

new TypeIt('#element', {
  strings: [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
  ],
  breakLines: false,
  loop: true
})
  
  // Other callback methods include: 
  // beforeString: (step, queue, instance) => {}
  // afterStep: (step, queue, instance) => {}
  // afterComplete: (instance) => {}

// new TypeIt('#element', {
//   loop: true,
//   loopDelay: 45
// })
// .type('Service 1')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300)
// .type('Service 2')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300)
// .type('Service 3')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300)
// .type('Service 4')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300);

