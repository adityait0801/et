import Container from "./Container";

export default {
    title : 'App/Body/Container',
    component : Container
}

const Template =(args)=> <Container {...args}/>

export const Default = Template.bind({})