<!-- eslint-disable vue/multi-word-component-names -->
<script>
import CustomMenu from './Menu.vue';

export default {
  name: 'CadastroDeAluno',
  components: {
    CustomMenu
  }
}
</script>
<template>
  <CustomMenu />

  <div class="containerR">
      <h1>Relatorio</h1>
      
      <div class="date-selector">
          <div class="date-input">
              <label for="start-date">Período de:</label>
              <input type="date" id="start-date" v-model="startDate" />
          </div>

          <div class="date-input">
              <label for="end-date">Até:</label>
              <input type="date" id="end-date" v-model="endDate" />
          </div>
      </div>
      
      
      <h2>Tipo de Alimentação</h2>
      <select type="text" class="caixa1">
      <option>Selicionar Alimentação</option>
      <option>Todas</option>
      <option>Restrição Alimentar</option>
      </select>
    
    
      <h2>Ano</h2>
      <select type="text" class="caixa1">
      <option>Selicionar Ano</option>
      <option>Todas</option>
      <option>1° Ano</option>
      <option>2° Ano</option>
      <option>3° Ano</option>
      <option>4° Ano</option>
      <option>5° Ano</option>
      <option>6° Ano</option>
      <option>7° Ano</option>
      </select>

      <button class="buttonPDF" @click="gerarRelatorio">Gerar Relatório em PDF</button><!-- Botão para gerar o relatório em PDF -->
  </div>
</template>

<style scoped>
.containerR { 
  color: white;
  /*background-color: rgba(33, 200, 144, 0.56);*/
  margin-top: 100px; /* Adicionando margem superior para afastar do topo */
  padding: 3px; /* Adicionando preenchimento para afastar do lado esquerdo */
  width: 100%; 
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.date-selector {
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.date-input {
  margin-right: 20px;
}

.date-input label {
  margin-right: 5px;
  font-size: 25px;
}

.buttonPDF {
  width: 200px;
  padding: 10px;
  margin-top: 20px; /* Aumentando a margem superior para afastar do seletor de data */
  border: solid 1px rgb(126, 126, 241);
  border-radius: 20px;
  color: rgb(94, 94, 133);
  background-color: white;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
  cursor: pointer;
}

.buttonPDF:hover {
  color: rgb(94, 94, 133);
  transform: scale(1.2);
}


.caixa1 {
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3ch;
}

h1{
  font-size: 40px;
}
</style>


