import Header from "./Header";

export default {
    title : 'App/Header',
    component : Header
}

const Template=(args)=> <Header {...args}/>

export const Default = Template.bind({})