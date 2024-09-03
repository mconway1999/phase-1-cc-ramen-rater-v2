const handleClick = (ramen) => {
  console.log(ramen)
  const displayImage = document.querySelector(".detail-image")
  displayImage.src = ramen.image

  const ramenName = document.querySelector('.name')
  ramenName.textContent = ramen.name

  const commentDisplay = document.querySelector('.restaurant')
  commentDisplay.textContent = ramen.restaurant

  const insertRating = document.getElementById('rating-display')
  insertRating.textContent = ramen.rating

  const insertComment = document.getElementById('comment-display')
  insertComment.textContent = ramen.comment

};

const addSubmitListener = () => {
  const addSubmitListenerForm = document.getElementById ('new-ramen')
  addSubmitListenerForm.addEventListener ('submit', (event) => {
    event.preventDefault()
    console.log(event)

  const addNewRestaurant = document.getElementById ('new-restaurant')
  const addNewName = document.getElementById('new-name') 
  const addNewImage = document.getElementById ('new-image')
  const addNewRating = document.getElementById ('new-rating')
  const addNewComment = document.getElementById ('new-comment')

    const newRamen = {
      name: addNewName.value,
      restaurant: addNewRestaurant.value,
      image: addNewImage.value,
      rating: addNewRating.value,
      comment: addNewComment.value
    }
    console.log(newRamen)
    const ramenMenuDiv = document.getElementById('ramen-menu');
    const foodImage = document.createElement('img')
    foodImage.src = newRamen.image
    ramenMenuDiv.appendChild(foodImage)
    foodImage.addEventListener('click', () => {
      handleClick(newRamen)
    })
  })

}

const displayRamens = () => {
  const ramenMenuDiv = document.getElementById('ramen-menu');
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
      data.forEach(ramen => {
        const foodImage = document.createElement('img')
        foodImage.src = ramen.image
        ramenMenuDiv.appendChild(foodImage)
        foodImage.addEventListener('click', () => {
          handleClick(ramen)
        })
      })
    })


};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
   displayRamens ()
   addRamenNamesToMenu ()
  addToCart ()
  addSubmitListener()
  })

}

main()


export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
