const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  }
];

function getQuote() {   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").textContent = randomQuote.text;
    document.getElementById("author").textContent = "- " + randomQuote.author;
}