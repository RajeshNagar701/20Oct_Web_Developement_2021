import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Jsxcomp from './Jsxcomp';
import Func_comp from './Func_comp';
import Class_comp from "./Class_comp";
import Props_Class from "./Props_Class";
import Props_Func from "./Props_Func";
import StateComp from "./StateComp";
import EventBinding from "./EventBinding";
import Movie from "./Props/Movie";
import Object_data from "./Object_fetch/Object_data";
import Main_object from "./Object_fetch/Main_object";
import ApiMain from "./ApiFetch/ApiMain";
import MainLife from "./LifeCycle/MainLife";
import Lifemain from "./Lifecycle2/Lifemain";
import Main_Hooks from "./Hooks/Main_Hooks";
import UseEffect from "./Hooks/UseEffect";
import Practice from "./MUI/Practice";
import Comp1 from "./Useontext/Comp1";
import Parent from "./Useontext/useContext/Parent";
import MaintStyle from "./StyledCompo/MaintStyle";
import MainReactBootstrap from "./ReactBootstrap/MainReactBootstrap";
import Main_Reducer from "./Reducer/Main_Reducer";

function App(){
    return(
        <div>
            {/*
            <Header/>
            <Footer/>
            <Jsxcomp/>
            <Func_comp/>
            <Class_comp/>
            <Props_Class name="Raj" age="31"/>
            <Props_Class name="Mahesh" age="35"/>
            <Props_Class name="Donika" age="27"/>
            
            <Props_Func  name="Raj" age="31"/>
            <Props_Func  name="Mahesh" age="35"/>
            <Props_Func  name="Donika" age="37"/>
            <StateComp/>
            <EventBinding name="akash"/>
            <Movie />
            <Main_object/>
            <ApiMain/>
            <MainLife/>
            <Lifemain/>
            <Main_Hooks/>
            <UseEffect/>
            <Comp1/>
            <Parent/>
            <MaintStyle/>
            <MainReactBootstrap/>
            */}
            
            <Main_Reducer/>


          
            

        </div>
    )
}

export default App


