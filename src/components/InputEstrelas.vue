<template>
  <div>
    <i
      v-for="estrela in estrelas"
      :key="estrela.id"
      :class="estrela.estilo"
      @click="marcarAvaliacao(estrela.id)"
    ></i>
  </div>
</template>
<script>
export default {
  name: "InputEstrelas",
  props: {
    numeroEstrelas: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    estrelas: [],
    avaliacao: 0,
  }),
  created() {
    this.iniciarEstrelas();
  },
  methods: {
    iniciarEstrelas() {
      for (let i = 0; i < this.numeroEstrelas; i++) {
        this.estrelas[i] = { id: i, estilo: "bi-star estrela" };
      }
    },
    marcarAvaliacao(numeroEstrelas) {
      this.iniciarEstrelas();

      this.avaliacao = numeroEstrelas + 1;

      let corEstrelas = this.obterCorEstrelas();

      for (let i = 0; i < this.avaliacao; i++) {
        this.estrelas[i].estilo = `bi-star-fill estrela ${corEstrelas}`;
      }

      // this.$emit("avaliar", this.avaliacao);
      this.$emit("update:avaliar", this.avaliacao);
    },
    obterCorEstrelas() {
      if (this.avaliacao <= 2) return "avaliacao-baixa";
      if (this.avaliacao > 2 && this.avaliacao < 5) return "avaliacao-media";
      if (this.avaliacao == 5) return "avaliacao-alta";
    },
  },
};
</script>

<style scoped>
.estrela {
  font-size: 1.5rem;
  color: #999;
  margin-left: 1px;
  margin-right: 1px;
}

.avaliacao-baixa {
  color: #ff0000;
}

.avaliacao-media {
  color: #ffcc00;
}

.avaliacao-alta {
  color: #008000;
}
</style>