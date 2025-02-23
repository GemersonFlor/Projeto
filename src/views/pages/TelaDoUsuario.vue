<template>
  <div>
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
     <div class="scaner">
        <button class="button" @click="startCollection">Iniciar coletagem</button>
     </div>

     <div class="container3">
        <h2 style="height:50px">Registro de alunos(a):</h2>
        <table id="data-grid">
           <thead>
              <tr>
                 <th>RA</th>
                 <th>Nome</th>
              </tr>
           </thead>
           <tbody>
              <tr v-for="(data, index) in dataList" :key="index">
                <td>{{ data.age }}</td> 
                <td>{{ data.name }}</td>
              </tr>
           </tbody>
        </table>
        <button class="button2" @click="saveDataList">Salvar Lista</button>
     </div>
     
  </div>
  
</template>

<script setup lang="js">
import { ref } from 'vue';

const dataList = ref([]);
const age = ref('');
const name = ref('');

function startCollection() {
   // Aqui você pode implementar a lógica para começar a coletar dados
   // Por exemplo, adicionar uma chamada de API ou iniciar um processo de coleta de dados
   console.log("Coletagem iniciada!");
}

function addData() {
   if (name.value.trim() !== '' && age.value !== '') {
       dataList.value.push({
           age: age.value,
           name: name.value
       });
       // Limpar os campos do formulário após adicionar os dados
       age.value = '';
       name.value = '';
   } else {
       alert("Por favor, preencha todos os campos.");
   }
}
</script>

<style scoped>
    /* Edições dos estilos da parte superior */
i{
  color: #069aef;
  padding-right: 5px;
}
.container {
  max-width: 900px;
  width: 100%;
}

.navbar {
  width: 100%;
  box-shadow: 0 1px 4px rgba(94, 96, 110, 0.855);
}

.nav-container {
  display: flex; /*Permite que os elementos responsivos dentro de um contêiner */
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
}/*Rotação do menu*/

.nav-container .lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}/*Rotação do menu*/

.navbar .menu-items {
  padding-top: 60px;/*espaçamento interno superior*/
  height: 50vh;/*Determina a altura da área */
  width: 100%;
  transform: translate(-150%);/*Oculta as opções do menu*/
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
}/*Rotação das linhas*/

.nav-container input[type="checkbox"]:checked ~ .lines .line1 {
  transform: rotate(45deg);
}/*Rotação das linhas*/

.nav-container input[type="checkbox"]:checked ~ .lines .line2 {
  transform: scaleY(0);
}/*Rotação das linhas*/

.nav-container input[type="checkbox"]:checked ~ .lines .line3 {
  transform: rotate(-45deg);
}/*Rotação das linhas*/

.scaner{
        display: flex; /*Os elememtos ficam responsivos dentro do contenier */
        align-items: center;/*Alinha no meio da pagina e dentro do contenier */
        justify-content: center;/*Alinha no centro da pagina e dentro do contenier */
        flex-direction: column;
        min-height: 50vh;/*Dintancia menima do top do contenier */
    }
    .scaner button {
        border: none;/*Sem borda */
        background-color: #0187a7;/*Cor de incio do buttun sem passar o mause*/
        padding: 15px 50px; /*Altura do button */
        border-radius: 30px;
    }

    .button {
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    border: solid 1px rgb(126, 126, 241);
    color: rgb(246, 246, 248);
    background-color: white;
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;/*Faz o buttun crescer */
    cursor: pointer;/*Cria uma mão quando o mause passar*/
    align-self: auto;
    }

    .button:hover {
    background-color: rgb(48, 164, 231);
    color: white;
    transform: scale(1.2);
    }

    .container3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .button2 {
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    border: solid 1px rgb(231, 231, 236);
    border-radius: 20px;
    color: rgb(32, 81, 40);
    background-color: rgb(231, 231, 236);
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
    cursor: pointer;
    align-self: auto;
    }
    
    .button2:hover {
    background-color: rgb(22, 193, 76);
    color: rgb(41, 28, 28);
    transform: scale(1.2);
    }

</style>
