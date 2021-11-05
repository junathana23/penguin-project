`use strict`;
let deleteBtn = document.querySelector(`#deletepenguin`);
let delId = document.querySelector(`#deleteIdentifier`);



//Delet Request
deleteRequest = () => {
   fetch(`http://localhost:8083/delete/${id}`, {
     method: `DELETE`,
   }).then((response) => {
     if (response.status !== 204) {
       console.error(`status: ${response}`);
       return;
     }
   console.log("delete successful")
   });
};

deleteFunction = () => {
  let delidValue = delId.Value;
  let id = delidValue;
    deleteRequest(id);
    return;
};
deleteBtn.addEventListener("click", deleteFunction);

// Search Request
searchRequest = (id) => {
  fetch(`http://localhost:8083/get/1${id}`, {
    method: `GET`,
  }).then((response) => {
    if (response.status !== 200) {
      console.error(`status: ${response}`);
      return;
    }
    response.json()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  });
};

// Post Request
let newPenguin = {
  name: "Junathan",
  age: 7,
  happyFeet: true,
};

createRequest = () => {
    fetch(`http://localhost:8083/createPenguin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newPenguin),
    }).then((response) => {
      if (response.status !== 201) {
        console.error(`status: ${response}`);
        return;
      }
      response
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(`${error}`);
        });
    });
}


 
//Update Request
let updateIDfinder = document.querySelector(`.updateID`);
let updateName = document.querySelector(`.updateName`);
let updateAge = document.querySelector(`.updateAge`);
let updateHappyFeet = document.querySelector(`.updateHappyFeet`);
let updateBtn = document.querySelector(`.UpdateBtn`);

let updateP = {
    name: updateName.Value,
    age: updateAge.Value,
    happyFeet: updateHappyFeet.Value
};

updatePenguin = (id) => {
    if (updateIDfinder.Value == id) {
        fetch(`http://localhost:8083/update/1${id}`, {
            method: "PUT",
            body: JSON.stringify(updateP)
        })
    } response
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
}

updateBtn.addEventListener('click', updatePenguin);

 






