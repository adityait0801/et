import ProductContainer from "./ProductContainer";

export default {
    title : "App/Container/ProductConatiner",
    component : ProductContainer
}

const Template =(args)=> <ProductContainer {...args}/>

export const Default = Template.bind({})