import chai from 'chai'
import { expect } from 'chai'
import spies from 'chai-spies'
chai.use(spies)

import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            msg: 'hi',
            loading1: false
        }
    },
})

{
    // console.log(Button);
    const Constructor = Vue.extend(Button);
    // console.log(Constructor);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}

{
    // console.log(Button);
    const Constructor = Vue.extend(Button);
    // console.log(Constructor);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    // console.log(Button);
    const Constructor = Vue.extend(Button);
    // console.log(Constructor);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount(div)
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    // expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}

// mock
{
    const Constructor = Vue.extend(Button);
    // console.log(Constructor);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    const spy = chai.spy(() => { })
    vm.$on('click', spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
}