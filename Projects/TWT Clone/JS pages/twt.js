console.log("js connected") //verifying consolelog

var state = [] //state variable to show data as an 

//var endpointURL = "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/.json"

function newUser(firstname, lastname, birthday, email, phone, username, password) {
  this.firstname = firstname
  this.lastname = lastname
  this.birthday = birthday
  this.email = email
  this.phone = phone
  this.username = username
  this.password = password

}

function newPost(message) {
  this.message = message
  

}


  //start of js document
$(document).ready(function(){

  //new user//
  const $postcard = $("#postcard")
  const $form1Table = $("#form1-table") //id of form
  const $firstName = $("#firstName-input")
  const $lastName = $("#lastName-input")
  const $birthday = $("#birthday-input")
  const $emailInput = $("#email-input")
  const $phoneNumber = $("#phoneNumber-input")
  const $username = $("#username-input")
  const $password = $("#password-input")
  const $submitBtn = $("#submit-btn")
  

      //ajax get call to pull user data 
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/.json",     
      success: function (data, status, xhr){
        console.log(data.users)
        state.users = [];

        for (form in data) {
          let newForm = data[form]
          state.users.push(new newUser(newForm.firstname, newForm.lastname, newForm.birthday, newForm.email, newForm.phone, newForm.username, newForm.password)
    )}
        // data.users.forEach((form) => {
        //   state.users.push(new newUser(form.firstname, form.lastname, form.birthday, form.email, form.phone, form.username, form.password)
        //   )
        // })

      } 
      
  
    })
  

    
    //validate text fields
    function handleSubmit() {
      if ($firstName.val() === "" || $lastName.val() === "" || $birthday.val() === "" || $emailInput.val() === "" || $phoneNumber.val() === "" || $username.val() === "" || $password.val() === ""){
        alert ('Must complete all fields')
      } else{
        //grab data from input fields
        let firstname = $firstName.val()
        let lastname = $lastName.val()
        let birthday = $birthday.val()
        let email = $emailInput.val()
        let phone = $phoneNumber.val()
        let username = $username.val()
        let password = $password.val()
        //create an object based on class constructor
        let newForm = new newUser(firstname, lastname, birthday, email, phone, username, password)
        //add data to state
        state.users.push(newForm)
        //clear input fields
        $firstName.val("")
        $lastName.val("")
        $birthday.val("")
        $emailInput.val("")
        $phoneNumber.val("")
        $username.val("")
        $password.val("")
        //post data to API
        newUserAPI(newForm)
      }
    }
  //submit click event
    $submitBtn.click((event) => {
      event.preventDefault()
      handleSubmit()
    })

  //post data to backend api
    function newUserAPI(newUserObject){
      $.ajax({
        type: "POST",
        url: "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/users.json",     
        data: JSON.stringify(newUserObject),
        success:(data) => console.log(data.users),
        dataType: "json",
  
        }
      )}
  

    
  // $emailInput.keyup(() => {
  //   console.log($emailInput.val())



    //post cards//
    const $usermessage = $("#userMessage")
    const $deletepost = $("#deletePost")
    const $submitpost = $("#submitPost")
    const $editpost = $("#editPost")
    
  
      //ajax get call to pull post data 
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/.json",     
      success: function (data, status, xhr){
        console.log(data.posts);
        state.posts = [];

        for (form in data){
          let newForm = data[form]
          state.posts.push(new newPost(newForm.message))
          //state.posts[state.posts.lenght - 1]
        }
      }
    }).then(() => {

      for (form in state.posts) {
        let newForm = state.posts[form]
        $postcard.append(`
          <div id="entry-${(form)}" class="card" style="width: 18rem;">
          <div class="card-body">
              <img src="" class="card-img-top" alt="...">
              <h5 class="card-title">Display Name</h5>
              <h6 class="card-subtitle mb-2 text-muted">@Username</h6>
              <p class="card-text"> ${(newForm.message)} </p>
   
              <button data-delete="form" type="button" class="btn btn-outline-primary"style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Delete</button>
  
              <button data-edit="form" type="button" class="btn btn-outline-primary"style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">edit</button>
          </div>
        </div>
      `)
      }
    })
       
       //.then(() => {
      //   state.posts.forEach((newField) => {
      //     })
      // })




    //handle function for posts button
    function handlePosts() {
      //validate text fields
      if ($usermessage.val() === "") {
        alert ('Must complete all fields')
      } else{
        //grab data from input fields
        let message = $usermessage.val()
        //create an object based on class constructor
        let newMessage = new newPost(message)
        //add data to state
        state.posts.push(newMessage)
        //clear input fields
        $usermessage.val("")
        //post data to API
        postToPostsAPI(newMessage)
        //add data to post
        $postcard.append(`
        <div id="entry-${field}" class="card" style="width: 18rem;">
        <div class="card-body">
            <img src="" class="card-img-top" alt="...">
            <h5 class="card-title">Display Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">@Username</h6>
            <p class="card-text"> ${(message)} </p>

            <button id="deletePost" type="button" class="btn btn-outline-primary"style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Delete</button>

            <button id="editPost" type="button" class="btn btn-outline-primary"style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">edit</button>
        </div>
    </div>

        `)
      }
    }

    $submitpost.click((event) => {
      event.preventDefault()
      handlePosts()
    })

    //   $usermessage.keyup(() => {
    // console.log($usermessage.val()) })


    //post data to backend api
    function postToPostsAPI(newPostsObj){
    $.ajax({
      type: "POST",
      url: "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/posts.json",     
      data: JSON.stringify(newPostsObj),
      success:(data) => console.log(data.posts),
      dataType: "json"

      }
    )}

    // //edit post
    this.patch = function (editMessage) {
      $.ajax({
        url: "https://twt-clone-2ff6a-default-rtdb.firebaseio.com/posts.json",
        data: JSON.stringify(newObject),
        type: "PATCH", // // Adds or modifies the object at that endpoint based on the data submitted
        success: function () {
          alert(`Item Updated!!!`);
        },
      });
    }
  
    $editpost.click((event) => {
      event.preventDefault()
      editMessage()
    })

    //delete fxn
    this.delete = function (id) {
      $.ajax({
        url: `${this.endpointUrl}movies/${id}.json`,
        type: "DELETE",
        success: function () {
          alert(`Item DELETED!!!`);
        },
      });
    }

    $deletepost.click((event) => {
      console.log('deleted')
    })
    // const today = new Date();
    // const dayOfMonth = today.getUTCDate();
    // console.log(today)

});


// const scroller = document.getElementById("#bio1");
// scroller.scrollIntoViewIfNeeded(); 
  
