let endereco = "https://api.groq.com/openai/v1/chat/completions";

async function gerarCodigo() {
  let texttarea = document.querySelector(".texto-pagina").value;
  let resposta = await fetch(endereco, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer < SUA CHAVE AQUI>",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: textarea,
        },
        {
          role: "system",
          content:
            "Você é um Programador. Você recebe uma tema de negócio e cria uma pagina com HTML e CSS. Responda apenas com código. A pagina é em Portugues do Brasil",
        },
      ],
    }),
  });
}
