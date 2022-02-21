document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red'
    container.style.padding = '10px';

});

// document.getElementById('add-background').addEventListener('click', function () {
//     const background = document.getElementsByClassName('friend');
//     background.style.backgroundColor = 'red';
// })
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'skyblue';
        friend.style.borderRadius = '5px';
        // friend.style.marginLeft = '2px'
    }
};

document.getElementById('add-friend').addEventListener('click',
    function () {
        const container = document.getElementById('friend-container');
        const friendDiv = document.createElement('div');
        friendDiv.classList.add('new-friend')
        friendDiv.innerHTML = `<h3 class="frined-name">friend4</h3>
    <p>Dolor asperiores totam nostrum qui.</p>
    `;
        container.appendChild(friendDiv);


    })

// document.getElementById('add-friend').addEventListener('click', function () {
//     console.log('clicked')

//     // const container = document.getElementById('friend-container');
//     // const friendDiv = document.createElement('div');
//     // friendDiv.classList.add('New friend')
//     // friendDiv.innerHTML = `<h3 class="frined-name">friend4</h3>
//     // <p>Dolor asperiores totam nostrum qui.</p>
//     // `;
//     // container.appendChild(friendDiv);

// })