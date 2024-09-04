import SecondaryContainer from "./SecondaryContainer"

export default {
    title : 'App/Container/SecondaryContainer',
    component : SecondaryContainer
}

const Template =(args)=> <SecondaryContainer {...args}/>

export const Default=Template.bind({})