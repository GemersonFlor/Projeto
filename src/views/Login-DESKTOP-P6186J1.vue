<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const selectedEmail = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email: selectedEmail.value,
      senha: password.value,
    });
    
    if (response.data.success) {
      alert('Login realizado com sucesso!');
      // Redirecione para outra página ou faça o que for necessário após o login
    } else {
      alert('Login ou senha inválidos!');
    }
  } catch (error) {
    console.error('Erro ao tentar logar:', error);
    alert('Ocorreu um erro ao tentar logar.');
  }
};
</script>

<template>
  <div class="login">
    <img alt="Vue logo" class="logo" src="@/assets/Logofood.svg" width="122" height="122"/>
    <h1>Merenda Fácil</h1>
    <h2>Faça seu Login</h2>
    <br>
    <select v-model="selectedEmail" class="caixa1">
      <option disabled value="">Qual seu Email?</option>
      <option>adminmerendaescolar@gmail.com</option>
      <option>inspetormerendaescolar@gmail.com</option>
    </select>
    
    <input type="password" v-model="password" class="senha" placeholder="Digite sua senha">
    
    <button @click="handleLogin" class="button">Entrar</button>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Defina uma altura mínima de 100% da altura da viewport */
}

h1 {
  color: rgb(48, 164, 231);
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}

.caixa1 {
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3ch;
}

.senha {
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3ch;
}

.button {
  width: 200px;/*Define a largura do elemento */
  padding: 10px;/*Adiciona um preenchimento interno de 10 pixels ao redor do conteúdo do elemento. Isso cria espaço dentro do elemento */
  margin-top: 10px;/*Cria espaço entre este elemento e os elementos acima dele */
  border: solid 1px rgb(126, 126, 241);
  border-radius: 20px;/*Arredondamento */
  color: rgb(94, 94, 133);
  background-color: white;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;/*Aplica uma transição suave ao elemento quando ocorrem alterações */
  cursor: pointer;
}

.button:hover {
  background-color: rgb(48, 164, 231);
  color: white;
  transform: scale(1.2);
}

p {
  font-size: 1rem;
}
</style>