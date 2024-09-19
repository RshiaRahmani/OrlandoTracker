import { useEffect, useState } from 'react';

const QuotesFetcher = () => {
  interface Quote {
    quote: string;
    author: string;
  }

  // Hardcoded quotes array
  const quotes: Quote[] = [
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "Happiness lies in the joy of achievement and the thrill of creative effort.", author: "Franklin D. Roosevelt" },
    { quote: "The secret of business is to know something that nobody else knows.", author: "Aristotle Onassis" },
    { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { quote: "Satisfaction lies in the effort, not in the attainment. Full effort is full victory.", author: "Mahatma Gandhi" },
    { quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    { quote: "The most important thing in communication is hearing what isn't said.", author: "Peter Drucker" },
    { quote: "Happiness is a state of activity.", author: "Aristotle" },
    { quote: "The harder I work, the luckier I get.", author: "Samuel Goldwyn" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.", author: "Bill Gates" },
    { quote: "Leadership is not about being in charge. It’s about taking care of those in your charge.", author: "Simon Sinek" },
    { quote: "Happiness is not a destination. It is a method of life.", author: "Burton Hills" },
    { quote: "Alone we can do so little; together we can do so much.", author: "Helen Keller" },
    { quote: "Teamwork is the fuel that allows common people to attain uncommon results.", author: "Andrew Carnegie" },
    { quote: "The strength of the team is each individual member. The strength of each member is the team.", author: "Phil Jackson" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Business opportunities are like buses, there's always another one coming.", author: "Richard Branson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "If everyone is moving forward together, then success takes care of itself.", author: "Henry Ford" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
  ];

  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Pick a random quote on component mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div>
      {quote && (
        <div>
          <p className='text-center qoute'>"{quote.quote}"</p><br />
          <p className='text-base'>- {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default QuotesFetcher;
