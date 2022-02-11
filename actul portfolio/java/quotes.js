quotes = [{
        quote: `A committee is a cul-de-sac down which ideas are lured and then quietly strangled`,
        src: 'Sir Barnett Cocks'
    },
    {
        quote: `There are two ways to slide easily through life; to believe everything or to doubt everything. Both ways save us from thinking.`,
        src: 'Alfred Korzybski'
    },
    {
        quote: `The point of living and of being an optimist, is to be foolish enough to believe the best is yet to come.`,
        src: 'Peter Ustinov'
    },
    {
        quote: `Sometime they'll give a war and nobody will come.`,
        src: 'Carl Sandburg'
    },
    {
        quote: `He had learned over the years that poor people did not feel so poor when allowed to give occasionally.`,
        src: ' Lawana Blackwell'
    }
];



const quotesContent = document.querySelector('.quotes');
const source = document.querySelector('.source');
const btn = document.querySelector('.newQuoteBtn');
const Quotes1 = document.querySelector('#Quotes1')


function opnieuw() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const useQuote = quotes[randomQuote];
    quotesContent.innerHTML = useQuote.quote;
    source.innerHTML = useQuote.src;
    Quotes1.classList.toggle('active')
}

btn.addEventListener('click', opnieuw);
opnieuw();