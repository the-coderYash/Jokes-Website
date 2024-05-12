const jokeEl = document.getElementById('.joke')
const jokeBtn = document.getElementById('.jokeBtn')

generateJoke()

function generateJoke() {
          const config = {
                    headers: {
                    'Accept' : 'application/json' 
                    },
          }

          fetch('https://icanhazardjoke.com', config)
          .then((res) => res.json())
          .then((data) => {
                    jokeEl.innerHTML = data.joke
          })
}