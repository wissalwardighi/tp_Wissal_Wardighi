// Fonction pour charger les données via le fichier JSON
function loadAeroport() {
    fetch('data.json')  // Charger le fichier JSON
      .then(response => response.json())
      .then(data => {
        // Affichage des employés
        const employesList = document.getElementById('employes');
        employesList.innerHTML = data.aeroport.employes.map(emp => `
          <li>${emp.nom} ${emp.prenom} (Age: ${emp.age}, Poste: ${emp.poste})</li>
        `).join('');
  
        // Affichage des pistes
        const pistesList = document.getElementById('pistes');
        pistesList.innerHTML = data.aeroport.pistes.map(piste => `
          <li>Piste ${piste.numero} - Longueur: ${piste.longueur}m, Etat: ${piste.etat}</li>
        `).join('');
  
        // Affichage des compagnies
        const compagniesList = document.getElementById('compagnies');
        compagniesList.innerHTML = data.aeroport.companies.map(compagnie => `
          <li>${compagnie.nom} (Code: ${compagnie.code}, Pays: ${compagnie.pays})</li>
        `).join('');
  
        // Affichage des vols
        const volsList = document.getElementById('vols');
        volsList.innerHTML = data.aeroport.vols.map(vol => `
          <li>Vol ${vol.numero} - Départ: ${vol.depart.aeroport} (${vol.depart.heure}), Arrivée: ${vol.arrivee.aeroport} (${vol.arrivee.heure}), Pilote: ${vol.pilote}</li>
        `).join('');
      })
      .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement des données');
      });
 }
  