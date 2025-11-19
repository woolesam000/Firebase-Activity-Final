// function to get elements by id
function r_e(id) {
  return document.querySelector(`#${id}`);
}

// adding teams to database
// db.collection("teams").add({
//   team_name: "Argentina National Team",
//   city: "",
//   country: "Argentina",
//   top_scorers: ["Messi", "Batistuta", "Maradona"],
//   worldwide_fans_millions: 888,
// });

// Question 1
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q1").innerHTML = html;
  });

// Question 2
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q2").innerHTML = html;
  });

// Question 3
db.collection("teams")
  .where("city", "==", "")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q3").innerHTML = html;
  });

// Question 4
db.collection("teams")
  .where("country", "not-in", ["Spain"])
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q4").innerHTML = html;
  });

// Question 5
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q5").innerHTML = html;
  });

// Question 6
db.collection("teams")
  .where("worldwide_fans_millions", ">", 700)
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q6").innerHTML = html;
  });

// Question 7
db.collection("teams")
  .where("worldwide_fans_millions", ">", 500)
  .where("worldwide_fans_millions", "<", 600)
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q7").innerHTML = html;
  });

// Question 8
db.collection("teams")
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q8").innerHTML = html;
  });

// Question 9
db.collection("teams")
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "";
    mydocs.forEach((doc) => {
      html += `<p>${doc.data().team_name}</p>`;
    });
    r_e("q9").innerHTML = html;
  });

// update Real Madrid's data
db.collection("teams")
  .doc("etv6eUAODelge9RXO7wF")
  .update({
    team_name: "Real Madrid FC",
    worldwide_fans_millions: 811,
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
  });

db.collection("teams")
  .doc("etv6eUAODelge9RXO7wF")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
  });

// update Barcelona's data
db.collection("teams")
  .doc("XkVByimddtVG9wl4b0P2")
  .update({
    team_name: "FC Barcelona",
    worldwide_fans_millions: 747,
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
  });

db.collection("teams")
  .doc("XkVByimddtVG9wl4b0P2")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });

// add jersey colors
let rm_colors = { home: "white", away: "black" };
let b_colors = { home: "red", away: "gold" };

db.collection("teams").doc("etv6eUAODelge9RXO7wF").update({
  colors: rm_colors,
});

db.collection("teams").doc("XkVByimddtVG9wl4b0P2").update({
  colors: b_colors,
});

// update colors
db.collection("teams").doc("etv6eUAODelge9RXO7wF").update({
  "colors.away": "purple",
});

db.collection("teams").doc("XkVByimddtVG9wl4b0P2").update({
  "colors.away": "pink",
});
