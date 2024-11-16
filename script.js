
$(document).ready(function() {
    const data = {
        "users": [
            {
                "id": 11,
                "name":"Hanry",
                "surname":"Hohlenko",
                "photo_url":"https://i.ytimg.com/vi/V0VH3IE7WJE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQf2hEyD35j4w0tM8swBqE2elRww",
                "balance": 10000000000
            },
            {
                "id": 13,
                "name": "Ivan7",
                "surname": "Ne7Usyk",
                "photo_url": "http7s://profile.robocode.ua/images/cats/cat_login_3.webp",
                "balance": 2045
            },
            {
                "id": 9,
                "name": "Samir",
                "surname": "Hamidov",
                "photo_url": "https://profile.robocode.ua/login",
                "balance": 11000000
            },
            {
                "id": 12,
                "name": "Pazik",
                "surname": "Govorun",
                "photo_url": "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg",
                "balance": 1500
            },
            {
                "id": 2,
                "name": "Ivan",
                "surname": "Usyk",
                "photo_url": "https://profile.robocode.ua/images/cats/cat_login_3.webp",
                "balance": 245
            },
            {
                "id": 8,
                "name": "Vlad",
                "surname": "Kobylar",
                "photo_url": "https://profile.robocode.ua/profile/user7285202697",
                "balance": 100000
            },
            {
                "id": 1,
                "name": "Ivan",
                "surname": "NeUsyk",
                "photo_url": "https://profile.robocode.ua/images/cats/cat_login_3.webp",
                "balance": 245
            }
        ]
    };

    
    function createUserCard(user) {
        return `
            <div class="user-card">
                <img src="${user.photo_url}" alt="${user.name} ${user.surname}">
                <h3>${user.name} ${user.surname}</h3>
                <p>ID: ${user.id}</p>
                <div class="balance">Баланс: ${user.balance}</div>
            </div>
        `;
    }

  
    data.users.forEach(function(user) {
        $('#users-container').append(createUserCard(user));
    });
});
