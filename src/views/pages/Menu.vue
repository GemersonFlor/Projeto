<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="menu-flutuante">
       <div class="navbar">
         <div class="container nav-container">
             <input class="checkbox" type="checkbox" name="" id="" />
             <div class="lines">
               <span class="line line1"></span>
               <span class="line line2"></span>
               <span class="line line3"></span>
             </div>  
           <div class="logo">
             <h1>Merenda Fácil</h1>
           </div>
           <div class="menu-items">
             <li><RouterLink class="nav-item" to="/Usuario">Inicio</RouterLink></li>
             <li><RouterLink class="nav-item" to="/Cadastro">Cadastro de Aluno</RouterLink></li>
             <li><RouterLink class="nav-item" to="/Relatorio">Relatorio</RouterLink></li>
             <li><RouterLink to="/">Sair</RouterLink></li>
           </div>
         </div>
       </div>
     </nav>
     
 </template>
 
 <style scoped>
     /* Edições dos estilos da parte superior */
 .container {
   max-width: 900px;
   width: 100%;
 }
 
 .navbar {
   width: 100%;
   box-shadow: 0 1px 4px rgba(94, 96, 110, 0.855);
 }
 
 .nav-container {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 62px;
 }
 
 .navbar .menu-items {
   display: flex;
 }
 
 .navbar .nav-container li {
   list-style: none;
 }
 
 .navbar .nav-container a {
   text-decoration: none;
   color: #f7fafc;
   font-weight: 500;
   font-size: 1.2rem;
   padding: 0.7rem;
 }
 
 .navbar .nav-container a:hover{
     font-weight: bolder;
 }
 
 .nav-container {
   display: block;
   position: relative;
   height: 60px;
 }
 
 .nav-container .checkbox {
   position: absolute;
   display: flex;
   height: 32px;
   width: 30px;
   top: 20px;
   left: 10px;
   z-index: 5;
   opacity: 0;
   cursor: pointer;
 }
 
 .nav-container .lines {
   display: block;
   height: 26px;
   width: 32px;
   position: absolute;
   top: 17px;
   left: 8px;
   z-index: 2px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
 }
 
 .nav-container .lines .line {
   display: block;
   height: 4px; /*Largura das três linhas do menu*/
   width: 100%; /*Comprimento das linhas do menu */
   border-radius: 10px;
   background: #e9ecee;
 }
 
 .nav-container .lines .line1 {
   transform-origin: 0% 0%;
   transition: transform 0.4s ease-in-out;
 }
 
 .nav-container .lines .line2 {
   transition: transform 0.2s ease-in-out;
 }
 
 .nav-container .lines .line3 {
   transform-origin: 0% 100%;
   transition: transform 0.4s ease-in-out;
 }
 
 .navbar .menu-items {
   padding-top: 60px;
   height: 50vh;
   width: 100%;
   transform: translate(-150%);
   display: flex;
   flex-direction: column;
   margin-left: -40px;
   padding-left: 50px;
   transition: transform 0.5s ease-in-out;
   text-align: left;
 }
 
 .navbar .menu-items li {
   margin-bottom: 1.2rem;
   font-size: 1.5rem;
   font-weight: 500;
 }
 
 .logo {
     margin-left: 5rem;
     font-size: 1.2rem;
     color: #069aef;
     display: flex;     
 }
 
 
 .nav-container input[type="checkbox"]:checked ~ .menu-items {
   transform: translateX(0);
 }
 
 .nav-container input[type="checkbox"]:checked ~ .lines .line1 {
   transform: rotate(45deg);
 }
 
 .nav-container input[type="checkbox"]:checked ~ .lines .line2 {
   transform: scaleY(0);
 }
 
 .nav-container input[type="checkbox"]:checked ~ .lines .line3 {
   transform: rotate(-45deg);
 }
 
 </style>

