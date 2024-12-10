import React from 'react';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
import Car from './Car';
import Counter from './Counter'
function Home(props){
    const v = props.passed
    return(
        <>
        <Nav/>
        <Content vp = {v}/>
        <Car/>
        <h1>This is {props.car.name}</h1>
        <h1>This is {props.bike}</h1>
        <h1>This is {props.a[2]}</h1>
        <Counter/>
        <Footer/>
        </>
    )
}
export default Home