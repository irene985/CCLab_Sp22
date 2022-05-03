

const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');

const submitMadLibs = (event) => {
    //required to prevent the form from reloading on submit
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `
        <h3>Your completed story:</h3>
        <p>Hi! My name is <span class="inserted-text">${userSubmission.name_1}</span> and I have a secret to share with you. I'm a normal
        child by day, and a <span class="inserted-text">${userSubmission.noun_1}</span> by night. Only you and my best friend <span class="inserted-text">${userSubmission.name_2}</span>
        knows my secret. You may be wondering how this happened? Well, one night
        I was <span class="inserted-text">${userSubmission.verb_1}</span> at home, and then BOOM! The lights went out and <span class="inserted-text">${userSubmission.name_3}</span> showed
        up. They said in a booming voice, because your favorite color is <span class="inserted-text">${userSubmission.color}</span>
        you have been chosen to be a <span class="inserted-text">${userSubmission.noun_2}</span>. My missionis to save the people of
        <span class="inserted-text">${userSubmission.city}</span> by doing my favorite things: <span class="inserted-text">${userSubmission.verb_2}</span>,<span class="inserted-text">${userSubmission.verb_3}</span>, and <span class="inserted-text">${userSubmission.verb_4}</span>. 
        This may sound easy, but it is no walk in the park. It requires hard work and <span class="inserted-text">${userSubmission.noun_3}</span>. 
        My weakness is eating <span class="inserted-text">${userSubmission.food}</span>. They are gross!! Keep that away from me!
        I save the world every night. But when I wake up in the morning, I go back to my normal 
        life at <span class="inserted-text">${userSubmission.school}</span> school.</p>`;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `
        <button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>
    `;
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}