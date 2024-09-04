import SideBar from "./SideBar";

export default {
    title : 'App/Container/SecondaryContainer/SideBar',
    component : SideBar
}

const Template =(args)=> <SideBar {...args}/>

export const Default=Template.bind({})