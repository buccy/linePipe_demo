import Vue from 'vue'
import Hello from '@/components/Hello'
import Home from '@/components/Home'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h2')[1].textContent)
      .to.equal('Ecosystem')
  })
})


// describe('Hello.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(Hello)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h2')[1].textContent)
//       .to.equal('Welcome to Your Vue.js App1')
//   })
// })

