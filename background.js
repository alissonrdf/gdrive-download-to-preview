browser.contextMenus.create({
    id: "gdrive-download-to-view",
    title: "Visualizar link do Google Drive",
    contexts: ["link"]
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "gdrive-download-to-view") {
        // Obtendo o link de download.
        const download_url = info.linkUrl;

        if (download_url.includes("https://drive.google.com")) {

            // Adicionando o começo do novo link + id retirado do link de download + final do novo link
            const view_url = "https://drive.google.com/file/d/" + /id=([^&]+)/.exec(download_url)[1] + "/view";

            // Criando uma nova aba não ativa, ao lado da aba atual
            browser.tabs.create({
                url: view_url,
                active: false,
                index: tab.index + 1
            })

        }
    }
});