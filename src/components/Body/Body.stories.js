import Body from "./Body";

export default {
    title : 'App/Body',
    component : Body
}

const Template=(args)=> <Body {...args}/>

export const Default = Template.bind({})