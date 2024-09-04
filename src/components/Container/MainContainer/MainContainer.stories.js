import MainContainer from "./MainContainer";

export default {
    title : 'App/Body/Container/MainContainer',
    component : MainContainer
}

const Template =(args)=> <MainContainer {...args}/>

export const Default = Template.bind({})
