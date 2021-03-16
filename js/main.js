//imports
import { getSuggestions } from './search.js';

//getting dom nodes
const tweetBtn = document.querySelector('.tweet-btn');
const tweetInput = document.querySelector('#tweet-input');
const tweetList = document.querySelector(".tweet-list");
const searchInput = document.querySelector("#search-input");

//methods
const addTweet = (tweet) => {
    if (!tweet) {
        return;
    }

    let localTweets = JSON.parse(localStorage.getItem('tweets')) || [];

    if(localTweets) {
        localTweets.push(tweet);  
    }
    localStorage.setItem('tweets', JSON.stringify(localTweets));
    createTweet(tweet);
        
}

const renderTweets = () => {
    let localTweets = JSON.parse(localStorage.getItem('tweets'));
    localTweets && localTweets.forEach(val => {
        createTweet(val);
    });
}

const createTweet = (tweet) => {
    const divEl = document.createElement('div');
    const hEl = document.createElement('h4');
    const messageEl = document.createElement('div')
    messageEl.innerText = tweet;
    hEl.innerText = "Gowtham N";
    divEl.appendChild(hEl);
    divEl.appendChild(messageEl)
    divEl.classList.add('tweet-item');

    tweetList.appendChild(divEl);

    tweetInput.value = "";
    tweetBtn.classList.remove('active');
}

const inputChange = () => {
    if (tweetInput.value) {
        tweetBtn.classList.add('active');
    } else {
        tweetBtn.classList.remove('active');
    }
}

//listeners
tweetBtn.addEventListener('click', () => {
    addTweet(tweetInput.value)
});

tweetInput.addEventListener('input', () => {
    inputChange();
});

searchInput.addEventListener('input', () => {
    getSuggestions(searchInput.value);
});


//call to load all tweets on intial load if exists
renderTweets();
