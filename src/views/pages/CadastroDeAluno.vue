<!-- eslint-disable vue/multi-word-component-names -->

<script>
import CustomMenu from './Menu.vue';

export default {
  name: 'CadastroDeAluno',
  components: {
    CustomMenu
  },
  data() {
    return {
      searchTerm: '',
      alunos: [
        '1235 - Maria Aparecida',
        '8554 - Daniel silva',
        '5555 - Alex Santos',
        '6325 - Filipe silva',
        '5244 - Gabriela Fernada',
        '3255 - Monkey Alex',
        '8745 - José silva',
        '3215 - Whale Ribeiro',
        '4545 - Aligator silva',
        '5325 - Donkey',
        '7412 - Horse',
        '8725 - José silva Santos'
      ],
      currentIndex: 0, // New property to track the current index
      displayedAlunos: [] // New property to store the list of displayed students
    }
  },
  methods: {
    searchDados() {
      const searchTerm = this.searchTerm.toLowerCase();
      return this.alunos.filter(aluno => aluno.toLowerCase().includes(searchTerm));
    },
    deleteAluno(index) {
      this.alunos.splice(index, 1);
    },
    showNextAluno() {
      const reverseIndex = this.alunos.length - 1 - this.currentIndex;
      if (reverseIndex >= 0) {
        this.displayedAlunos.push(this.alunos[reverseIndex]);
        this.currentIndex += 1;
      }
    },
    saveList() {
      // Logic to save the list, for example, sending it to a server or saving to a file
      console.log('Lista de alunos:', this.displayedAlunos);
      alert('Lista de alunos salva!');
    }
  }
}
</script>


<template>
  <div>
    <CustomMenu />
    
    <div class="container2">
     
      <button class="button">Iniciar Coletagem</button>
    </div>

    <div class="container3">
      <h2 style="height:50px">Registro de alunos(a):</h2>
      <input class="pesquisa" v-model="searchTerm" type="text" name="search" placeholder="Pesquisar por RA">
      <br>
      <!-- Removed the initial list rendering -->
    </div>

    <div class="container4">
      
      <ul>
        <li v-for="(aluno, index) in displayedAlunos" :key="index" class="dados">
          {{ aluno }}
        </li>
      </ul>
      <button @click="saveList" class="save-list-button" v-if="currentIndex >= alunos.length && displayedAlunos.length > 0">Salvar lista</button>
      <button @click="showNextAluno" class="next-aluno-button" v-if="currentIndex < alunos.length">Salvar</button>
    </div>
  </div>
</template>

<style scoped>
.container1 {
  width: 100%;
  float: left;
  margin-bottom: 10px;
}
.container2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 110px;
}
.container3 {
  width: 100%;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.container4 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

input[type="hidden"],
input[type="file"] {
  width: 300px;
  padding: 10px;
}

.button, .next-aluno-button, .save-list-button {
  width: 200px;
  padding: 10px;
  margin-top: 10px;
  border: solid 1px rgb(126, 126, 241);
  border-radius: 20px;
  color: rgb(94, 94, 133);
  background-color: white;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
  cursor: pointer;
}

.button:hover, .next-aluno-button:hover, .save-list-button:hover {
  background-color: rgb(48, 164, 231);
  color: white;
  transform: scale(1.2);
}

.pesquisa {
  padding: 15px;
  border-radius: 30px;
}

input[type="text"] {
  width: 30%;
  transition: width 0.15s ease-in-out;
}

#list {
  font-size: 1.5em;
}

.dados {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.no-list-style {
  list-style-type: none;
}

.delete-button {
  padding: 8px 20px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
