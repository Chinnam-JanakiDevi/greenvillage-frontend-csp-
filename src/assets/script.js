
function showForm(formId) {
    const forms = document.getElementsByClassName("form");
    for (let i = 0; i < forms.length; i++) {
      forms[i].classList.remove("active");
    }
    document.getElementById(formId).classList.add("active");
  }
  function toggleProfileCard() {
    const profileCard = document.getElementById('profileCard');
    profileCard.style.display = profileCard.style.display === 'none' ? 'block' : 'none';
  }