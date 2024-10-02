const url = "https://servicodados.ibge.gov.br/api/v3/agregados/7524/periodos/198701/variaveis/29?localidades=N1[all]&classificacao=12716[115236"

async function visualizarDados(){const res = await fetch(url)

const dados = await res.json()

const tipo_dados = dados[0]['variavel']
console.log(tipo_dados)
const regiao = dados[0]["resultados"]
console.log(regiao)
}

visualizarDados()