const eventDetails = async() => {
try {
    const response = await fetch (
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/");
    const data = await response.json();
    console.log(data);
    return data;
 } catch (e) {
    console.error(e);
    return [];
 }
};
const eventDetail = async(id) => {
    try {
    const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/${id}`);
    
    const data = await response.json();
    console.log(data);
    return data;
 } catch (e) {
    console.error(e);
    return [];
 }
};

const addRecipe = async (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  console.log(e.target[0]);
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);

  const dateSelector = new Date(e.target[2].value);
  console.log(dateSelector.toISOString());
  console.log(dateSelector);
// EXPECTED IOS JS DATE TIME FORMAT

  const obj = {
    name: e.target[0].value,
    description: e.target[1].value,
    date: dateSelector,
    location: e.target[3].value,
  };

  console.log(obj);
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/recipes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const showEventDetails = (event) => {
    const $detailsBox = document.querySelector("#details");
    $detailsBox.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>ID:</strong> ${event.id}</p>
      <p><strong>Date:</strong>${new Date(event.date).toLocaleString()}</p>
      <p><strong>Description:</strong> ${event.description}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;
};;
 
const displayResults = async () => {
    const events = await eventDetails();
   const $app = document.querySelector("#app");
   $app.innerHTML = ""; 

    // console.log(events);
   const $h2 = document.createElement("h2");
    $h2.textContent = "Upcoming Events";
    $app.append($h2);
  
    const $detailsBox = document.createElement("div");
    $detailsBox.id = "details";
    $app.append($detailsBox);

    for (let i = 0; i < events.data.length; i++) {
        const $button = document.createElement("button");
        const eventData = events.data[i];

    
           $button.addEventListener("click", async ()=> {
            const result = await eventDetail(eventData.id);
            if (result.data) {
                showEventDetails(result.data);
            }
        });
       $button.textContent = `Event ${i + 1} ${eventData.name}`;
        $app.append($button);

         }
         const $form = setForm();
  $form.addEventListener("submit", addRecipe);
  $app.append($form);
    
  const $buttonRemove = document.createElement("button");
  $buttonRemove.innerHTML = "Remove Event";
  $buttonRemove.addEventListener("click", async () => {
    const remove = slice(even)
        })

    };
        
        const setForm = () => {
  const $form = document.createElement("form");
  $form.innerHTML = `
      <form id="form">
      <div class="name">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Description</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Date</label>
        <input
          type="date"
          class="date"
          id="exampleInputPassword1"
          placeholder="date"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Location</label>
        <input
          type="text"
          class="location"
          aria-describedby="emailHelp"
          placeholder="Enter description"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form> 
    `;
     $form.style.width = "75%";
  $form.style.margin = "0 auto";
  return $form;
        };

    displayResults();