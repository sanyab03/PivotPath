document.getElementById('generate-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    generateRoadmap();
});

document.getElementById('submit-btn').addEventListener('click', function() {
    processUserInput();
});

function generateRoadmap() {
    const roadmapContainer = document.querySelector('.roadmap-container');
    roadmapContainer.innerHTML = ''; 
    const domain = document.querySelector('input[name="domain"]:checked').value;

    let items;

    switch (domain) {
        case '12th(commerce)':
            items = ['C.A. FOUNDATION', 'B.Com', 'BBA', 'BCA(WITH MATHS)', 'B.Arch', 'D.ed', 'Call Centre'];
            break;
        case '12th(science-PCM)':
            items = ['NDA', 'B.Arch', 'Bachelor of planning & design', 'technical entry in indian army', 'B.E', 'B.Tech', 'direct 2nd year engineering diploma','BCA/BCS/B.Sc','film and television diploma', 'hotel management degree'];
            break;
        case '12th(Science-PCMB)':
            items = ['B.SC','Bachelor of pharmacy', 'b.tech(agriculture)', 'B.Sc(bio technology)' ,'B.Sc(agriculture)'];
            break;
        case '12th(science-PCB)':
            items = ['B.A.M.S', 'B.V.Sc', 'M.B.B.S', 'Paramedical courses', 'B.Sc', 'B.M.L.T', 'B.Sc(home science)'];
            break;
        case '12th(arts)':
            items = ['D.ed', 'B.S.W', 'LLB Foundation', 'Fashion designing diploma', 'interior designing diploma', 'Foreign language diploma', 'call centre'];
            break;
        default:
            items = ['Choose a domain to generate roadmap'];
    }

    items.forEach((item, index) => {
        const roadmapItem = document.createElement('div');
        roadmapItem.classList.add('roadmap-item');
        roadmapItem.textContent = `${index + 1}. ${item}`;
        roadmapContainer.appendChild(roadmapItem);
    });
}

function processUserInput() {
    const userInput = document.getElementById('user-input').value;
    const chatContainer = document.getElementById('chat-container');
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${userInput}`;
    chatContainer.appendChild(userMessage);

    fetch('https://api.openai.com/v1/chat/completions', { //fetching gpt
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        //text for chatgpt
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = `ChatGPT: ${data.output}`;
        chatContainer.appendChild(botMessage);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}