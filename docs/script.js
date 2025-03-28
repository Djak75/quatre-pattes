// Barre de nav
function menuBurger() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active')
  }

  function fermerMenu() {
    document.getElementById('navMenu').classList.remove('active')
  }

// Section 2 - don
function selectionDon(don) {
  let optionsDon = document.getElementsByClassName("option-don")
  for (let i = 0; i < optionsDon.length; i++) {
      optionsDon[i].classList.remove("selectionnee")
  }
  document.getElementById(don).classList.add("selectionnee")
  mettreAJourBouton()
}

function selectionFrequence(frequence) {
  let optionsFrequence = document.getElementsByClassName("option-frequence")
  for (let i = 0; i < optionsFrequence.length; i++) {
      optionsFrequence[i].classList.remove("selectionnee")
  }
  document.getElementById(frequence).classList.add("selectionnee")
  mettreAJourBouton()
}

function mettreAJourBouton() {
  let donSelectionne = document.getElementsByClassName("option-don selectionnee")[0].getElementsByTagName("h3")[0].innerHTML
  let frequenceSelectionnee = document.getElementsByClassName("option-frequence selectionnee")[0].innerText.toLowerCase()

  if (frequenceSelectionnee === "mensuel") {
      frequenceSelectionnee = "mois"
  } else if (frequenceSelectionnee === "annuel") {
      frequenceSelectionnee = "an"
  }

  document.getElementById("boutonDon").innerHTML = "<img src='Images/Icone/heart.svg' alt='Icône'> Faire un don de " + donSelectionne + "/" + frequenceSelectionnee
}

// Ajout du prompt 
document.getElementById("boutonDon").addEventListener("click", function(test) {
  
    let donSelectionne = document.getElementsByClassName("option-don selectionnee")[0].getElementsByTagName("h3")[0].innerHTML
    let frequenceSelectionnee = document.getElementsByClassName("option-frequence selectionnee")[0].innerHTML.toLowerCase()

    if (frequenceSelectionnee === "mensuel") {
        frequenceSelectionnee = "mois"
    } else if (frequenceSelectionnee === "annuel") {
        frequenceSelectionnee = "an"
    }

  // Afficher le prompt
    alert("Vous avez choisi de faire un don de " + donSelectionne + " / " + frequenceSelectionnee)
})

// Section 3 - histoire de réussite

function changerImage(source, titre, description, date) {
  document.getElementById('grandeImage').getElementsByTagName('img')[0].setAttribute('src', source)

  document.getElementById('texteImage').innerHTML = "<span>" + titre + "</span>" + "<p>" + description + "<p><small>" + date + "</small>"

  let miniatures = document.getElementsByClassName('miniature')
  for (let i = 0; i < miniatures.length; i++) {
      miniatures[i].classList.remove('active')
  }
  document.getElementById(titre.toLowerCase()).classList.add('active')
}

// Section 4 - Quizz

let score = 0
let totalQuestions = document.querySelectorAll(".question").length

function afficherReponse(questions, estCorrect, message) {
    const question = document.getElementById(questions)
    const questionTitre = question.querySelector('h3').textContent


    if (estCorrect) {
        score++
    }

    const contenu = 
        '<h3>' + questionTitre + '</h3>' +
        '<div class="' + (estCorrect ? 'correct' : 'incorrect') + '">' +
        '<img src="Images/Icone/' + (estCorrect ? 'ok.png' : 'Croix rouge.png') + '" alt="' + (estCorrect ? 'Vrai' : 'Faux') + '" class="icone">' +
        message + 
        '</div>'

    // Remplacer le contenu 
    question.innerHTML = contenu;

    // Vérifier les questions
    if (document.querySelectorAll('.question div.correct, .question div.incorrect').length === totalQuestions) {
        afficherScoreFinal()
    }
}

function afficherScoreFinal() {
    const sectionQuizz = document.querySelector(".section-quizz")

    // Créer un message 
    const scoreFinal = document.createElement("div")
    scoreFinal.className = "score-final"
    scoreFinal.innerHTML = 
        "<h3>Quiz terminé !</h3><br>" +
        "<h4>Votre score : <strong>" + score + " / " + totalQuestions + "</strong></h4>"

    // Ajouter le score final 
    sectionQuizz.appendChild(scoreFinal)
}

// PAGE CONTACT
// Formulaire
function validationForm() {
  // Récuperation des champs
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const sujet = document.getElementById("sujet").value
  const message = document.getElementById("message").value

  // Récuperation des éléments erreur
  const errorName = document.getElementById("error-name")
  const errorEmail = document.getElementById("error-email")
  const errorMessage = document.getElementById("error-message")

  // Réinitialiser les messages d'erreur
  errorName.innerHTML = ""
  errorEmail.innerHTML = ""
  errorMessage.innerHTML = ""
  document.getElementById("confirmation").innerText = ""

  let isValid = true;

  // Verification du nom
  if (name === "") {
    errorName.innerHTML = "Veuillez entrer votre nom."
    isValid = false
  }
  
  // Vérification de l'email
  if (!email.includes("@")) {
    errorEmail.innerHTML = "Veuillez entrer une adresse email valide."
    isValid = false
  } else if (email === "") {
    errorEmail.innerHTML = "Veuillez entrer votre adresse email."
    isValid = false
  }

  // Vérification du message 
  if (message === "") {
    errorMessage.innerHTML =  "Veuillez entrer un message."
    isValid = false
  }

  // Verification du sujet
  if (sujet === "") {
    alert("Veuillez sélectionner un sujet.")
    isValid = false
  }

  // Si tout est valide
  if (isValid) {
    alert("Votre message a bien été envoyé !")
    document.getElementById("confirmation").innerText = "Votre message a bien été envoyé !"
  }

  return isValid
}



