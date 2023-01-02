<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-light">
        <span class="fs-4">ENTRADA DE DADOS</span>
        <hr />
        <form>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Nome:</label>
            <div class="col">
              <input type="text" class="form-control" v-model="nome" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input type="email" class="form-control" v-model="email" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Senha:</label>
            <div class="col">
              <input type="password" class="form-control" v-model="Senha" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Idade:</label>
            <div class="col">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gênero:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" />
                <label class="form-check-label"> Feminino </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" />
                <label class="form-check-label"> Masculino </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Licença:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Li e aceito os termos</label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interesses:</label>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> JavaScriot </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Telefone:</label>
            <div class="col">
              <input
                type="tel"
                class="form-control"
                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              />
              <small class="text-muted">Formato: 11 97777-5555</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data:</label>
            <div class="col">
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data/hora local:</label>
            <div class="col">
              <input type="datetime-local" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Mês:</label>
            <div class="col">
              <input type="month" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Semana:</label>
            <div class="col">
              <input type="week" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hora:</label>
            <div class="col">
              <input type="time" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cor:</label>
            <div class="col">
              <input type="color" class="form-color" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Valor limite:</label>
            <div class="col">
              <input
                type="range"
                class="form-range"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Escondido:</label>
            <div class="col">
              <input type="hidden" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input type="file" class="form-control" />
            </div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button class="btn btn-secondary" type="reset">Limpar</button>
              <button class="btn btn-success" type="button">
                Enviar (btn)
              </button>
              <button class="btn btn-success" type="submit">
                Enviar (submit)
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-6 text-white bg-secondary">
        <span class="fs-4">ESTADO DO OBJETO</span>
        <hr />
        <div class="mb-5 row">
          <spam>Estado do objeto</spam>
        </div>

        <span class="fs-4">SAÍDA DE DADOS</span>
        <hr />
        <div class="mb-3 row">
          <spam>Nome:</spam>
        </div>
        <div class="mb-3 row">
          <spam>E-mail:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Senha:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Idade:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Gênero:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Licença:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Interesses:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Telefone:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Data:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Data/hora local:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Mês:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Semana:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Hora:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Cor:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Valor limite:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Escondido:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Upload:</spam>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioComponents",
};
</script>
