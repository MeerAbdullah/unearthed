const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

headerLogo.style.width = '100px'; // You can adjust the width as needed
headerLogo.style.height = 'auto'; // Maintain aspect ratio

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

document.body.prepend(headerContainer);
