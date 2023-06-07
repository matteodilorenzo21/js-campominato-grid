// JS LINK RUN CHECK
console.log('JS RUNNING')

// Dichiariamo una funzione che genererà le celle
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = "cell";
  
    return cell;
  }
  
  // Recuperiamo la griglia dal DOM
  const grid = document.getElementById('grid');
  
  // Recuperiamo il bottone dal DOM
  const playBtn = document.getElementById('play-btn');
  
  // Prepariamo i dati per la griglia
  const rows = 10;
  const cols = 10;
  const totalCells = rows * cols;
  console.log('Celle generate: ' + totalCells);
  
  // Generiamo le celle in pagina
  for (let i = 0; i < totalCells; i++) {
    const cell = createCell();
    cell.innerText = i + 1;
  
    cell.addEventListener('click', () => {
      if (cell.classList.contains('clicked')) {
        cell.classList.remove('clicked');
      } else {
        cell.classList.add('clicked');
      }
  
      console.log('Cella selezionata:', cell.innerText);
    });
  
    grid.appendChild(cell);
  }
  
  // Nascondiamo la griglia
  grid.classList.add('d-none');
  
  // Aggiungiamo un event listener al bottone per mostrare la griglia
  playBtn.addEventListener('click', function() {
    
    grid.classList.remove('d-none');
    grid.classList.add('d-block', 'd-flex');
  });
