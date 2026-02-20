function renderDateIdeas(responseToJson) {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML += elementAddButtonTemplate();
    mainContent.innerHTML += elementBackButtonTemplate();
    const keys = Object.keys(responseToJson);
    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const dateIdea = responseToJson[key];
        mainContent.innerHTML += elementTemplate(dateIdea, key);
    }
}

function renderLoveBox2(){
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML += elementBackButtonTemplate();

    let backButton = document.getElementById('backButton');
    backButton.classList.add('full-width');


    const targetDate = new Date('2025-11-28');
    mainContent.innerHTML += elementNormalTemplate('28.11.2025 🫶🏻');

    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.abs(Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)));
    mainContent.innerHTML += elementNormalTemplate(`${diffDays} Tage 📆`);

    mainContent.innerHTML += elementNormalTemplate('3.11 Erstes Date 👫🏼' + iframeTemplate());
    const elements = mainContent.querySelectorAll('.element');
    const lastElement = elements[elements.length - 1];
    lastElement.classList.add('full-width');

    mainContent.innerHTML += elementNormalTemplate(`
    6.11 Kino Good fortune 🎥
    <img src="assets/img/kino.png" alt="Kino" class="">
    `);

    mainContent.innerHTML += elementNormalTemplate(`
    10.11 Erster Kuss 😘
    <img src="assets/img/smarties.png" alt="Kino" class="">
    `);

    mainContent.innerHTML += elementNormalTemplate(`
    7.11 Nini Eltern 🍫`);
 
    mainContent.innerHTML += elementNormalTemplate(`
    13.12 Chrisi Eltern 💐`);

    mainContent.innerHTML += elementNormalTemplate(`
    Viele weitere gemeinsame Momente warten auf uns 🌟`);
}