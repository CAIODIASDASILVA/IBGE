const url = "https://servicodados.ibge.gov.br/api/v3/agregados/7524/periodos/198701/variaveis/29?localidades=N1[all]&classificacao=12716[115236"

async function visualizarDados(){

     const res = await fetch(url)

const dados = await res.json()

regiao = 0
tipo_dados = (dados[0]['variavel'])


resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])
console.log(resultado_dados, resultado_regiao)
let ano = Object.keys(resultado_dados)
let valor = Object.values(resultado_dados)
let genero = dados[0]['resultados'][0]['classificacoes'][0]['categoria']



const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos--container__texto')
  paragrafo.innerHTML = `Está é uma pesquisa do IBGE com o foco em ${tipo_dados}.`

  const container = document.getElementById('graficos--container')
  container.appendChild(paragrafo)

}

visualizarDados()