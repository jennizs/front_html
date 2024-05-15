let sobre = document.querySelector("#sobre");

async function getApiGitHub() {
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/jennizs");
        const perfil = await dadosPerfil.json();

        let conteudo = `
        // Código para manipular os dados do perfil
        `;
    } catch (error) {
        console.log(error);
    }
}
