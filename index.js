function getDogImages() {
    console.log('Fetching your dog images');
    let quantity = getQuantity();
     fetch (`https://dog.ceo/api/breeds/image/random/${quantity}`)
     .then(response => response.json())
     .then(responseJson => displayResults(responseJson))
     .catch(error => alert('Something went wrong.Try again later.'))
  }
  
  function getQuantity() {
    let enteredNum = $('#dog-quantity').val();
    return enteredNum;
  }
  
  // displaysResults to the console
  function displayResults(responseJson) {
    console.log(responseJson);
  }
  
  // submit form listener
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImages();
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });