# Visualizar link de download do Google Drive para Firefox

Extensão criada para o Firefox que adiciona uma opção no menu de contexto para converter um link de download direto do Google Drive em um link de visualização e logo após o abrirá em uma nova aba.

## Como testar?

Para testar esta extensão, clone o repositório ou baixe e descompacte o arquivo ZIP, após siga uma das seguintes opções:

1. Abra o Firefox e carregue `about:debugging` na barra de endereços. Clique no botão [Load Temporary Add-on](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) e selecione o arquivo `manifest.json` dentro do diretório da extensão. Aqui tem um [video](https://www.youtube.com/watch?v=cer9EUKegG4) que demonstra como fazer isso.
2. Instale a ferramenta [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext), entre no diretório da extensão, e digite `web-ext run`. Isto irá abrir o Firefox e instalar a extensão automaticamente. Esta ferramente lhe dá alguns recursos de desenvolvimento adicionais como a [recarga automática](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext#Automatic_extension_reloading).

Depois de instalar a extensão de forma temporária, basta clicar com o botão auxiliar do mouse em algum link de download direto do Google Drive e selecionar a opção "Visualizar link do Google Drive". Caso você não tenha nenhum link para testar, o link para download da extensão logo abaixo pode ser utilizado para testar a extensão. Recomendo clicar normalmente no link para você ver como ele funciona e após utilizar a função da extensão para ver como o link passará a se comportar.

## Já testei e agora quero instalar, como faço?

Para instalar, basta baixar a extensão [aqui](https://drive.google.com/uc?id=1D9swQZUd2ENQlmFzmP1rpsmHXRxIha50&export=download) e abrir com o Firefox, ou instalar direto do [Firefox Add-ons](https://addons.mozilla.org/pt-BR/firefox/addon/gdrive-download-to-preview/).

---
Parte deste README foi baseado no README do [webextensions-examples](https://github.com/mdn/webextensions-examples).
