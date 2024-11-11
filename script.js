const inputText = document.getElementById('input-text');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container')
function addTask(){
  if(inputText.value === ''){
    alert('Please add a task')
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
}
listContainer.addEventListener('click', (e) =>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
  }
})
