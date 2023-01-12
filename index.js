document.addEventListener('DOMContentLoaded', () =>{
  console.log("working")

const moodInp = document.getElementById("mood-inp");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const moodName = moodInp.value;
  fetch(`http://localhost:3000/moods`)
    .then((response) => response.json())
    .then(moods => { 
      let found = false;     
     moods.forEach(mood => {
      if (mood.name === moodName){
        found = true;
      result.innerHTML = `
      <h3>When you are ${mood.name}, consider the suggestions below :</h3>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Movie:</h4>
                <span>${mood.movie}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Music:</h4>
                <span>${mood.music}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Activities:</h4>
                <span>${mood.activities}</span>
            </div>
        </div>
      `;
    }
  });
  if (!found) {
    if (moodName.length === 0) {
      result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
      result.innerHTML = `<h3>Please select one of the following options: Happy, Angry, Mad, Smiling, or in Love. If you can't find your mood when you enter it, you can always add a new mood to the form below.</h3>`;
    }
  }
})
})
})

const form = document.querySelector('.add-new-mood');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let nameInput = document.getElementById('name-input');
  let movieInput = document.getElementById('movie-input');
  let musicInput = document.getElementById('music-input');
  let activitiesInput = document.getElementById('activities-input');
  let newMood = {
    name: nameInput.value,
    movie: movieInput.value,
    music: musicInput.value,
    activities: activitiesInput.value,
  };
  fetch('http://localhost:3000/moods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMood),
  })
  .then((response) => response.json())
  .then(moods => console.log(moods))
  .catch(error => console.error(error));
});





