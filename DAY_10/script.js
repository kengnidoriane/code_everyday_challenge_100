const jokeParagraph = document.querySelector('.joke-container p');
const btn = document.querySelector('.btn');

const jokes = [
    {
        joke: 'I\'ve never been a fan of facial hair. But now it\'s starting to grow on me.'
    },
    {
        joke: 'What do you call a cat with eight legs? An octo-puss.'
    },
    {
        joke: 'What\'s the best way to catch a fish? Ask someone to throw it to you.'
    },
    {
        joke: 'When\'s the best time to call your dentist? Tooth-hurty.'
    },
    {
        joke: 'What kind of bagel can travel? A plain bagel.'
    },
    {
        joke: 'What do clouds wear beneath their pants? Thunderwear.'
    },
    {
        joke: 'What did one wall say to the other? I’ll meet you at the corner.'
    },
    {
        joke: 'What do you call a happy cowboy? A jolly rancher'
    },
    {
        joke: 'How do mice floss their teeth? With string cheese.'
    },
    {
        joke: 'Why do turkeys play percussion? They have drumsticks.'
    },
    {
        joke: 'What did the beach say when the tide came in? Long time no sea'
    },
    {
        joke: 'Did you hear about the cleaners who went to space? They ended up scrubbing the mission.'
    },
    {
        joke: 'Did you hear about the two rowboats that got into an argument? It was an oar-deal.'
    },
    {
        joke: 'There are only two things I don\'t eat for breakfast: Lunch and dinner.'
    },
    {
        joke: 'I adopted a dog from a blacksmith. As soon as I brought him home, he made a bolt for the door.'
    },
    {
        joke: 'Did you hear about the cat that ate a lemon? Now it’s a sour puss.'
    }
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * jokes.length);
    jokeParagraph.innerHTML = jokes[random].joke;
})

