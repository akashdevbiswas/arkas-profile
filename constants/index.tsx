import men from "@/public/men.jpg";
import women from "@/public/women.jpg";
import paper from "@/public/paper.jpg";
import { StaticImageData } from "next/image";
import first from "@/public/ver4.jpeg";
import second from "@/public/hori1.jpeg";
import third from '@/public/garden.jpg'
import forth from "@/public/hori9.jpeg";
import fifth from "@/public/hori2.jpeg";
import sixth from "@/public/hori3.jpeg";
import seventh from "@/public/ver2.jpeg";

const constants: {
  reviews: string[];
  books: Book[];
  blogs: Blogs[];
  gallery: StaticImageData[];
} = {
  gallery: [first, second, third, forth, fifth, sixth,seventh],
  reviews: [
    "I am a man of science. I don’t consider myself an activist. I am here to just observe report and draw conclusions. I leave activism to the activists.",
    "The temptation of the forbidden is an urge too great to ignore.",
    "But persuasion by the persuasive often produces the desired result.",
    "Don’t worry my child, politics is a dirty game. It consumes many in its deadly tentacles.",
    "My dear, I don’t care if they are Red, Green or Saffron. Neither do I care if they are in power or opposition. My duty is to only stay true to truth. Nothing but the truth matters to me.",
    "Once I was in love you know. And in love, you learn things.",
    "It was war. And in war, you don’t have to pretend to be civilized. To be honest, it’s a very liberating experience. You don’t remain bound by the laws and regulations of society.",
    "Life is a tad bit too short to dwell on things that are long gone.",
    "For a father who has lighted his son’s funeral pyre though, sleep is a luxury that god forbids him from.",
    "In war though, a soldier doesn’t have the luxury to afford mercy. It may cost him his life.",
    "The promise of publicity is a deadly tool when used with efficacy.",
    "Not all Santa Clauses wear capes; some wear denim with military boots.",
  ],
  books: [
    {
      title: "The Season of Crimson Red",
      writerName: "Ritwik Ghosh",
      description:
        "Personal revolution, Abyss of corruption,  pursuit of truth",
      price: 499,
      options: [
        {
          name: "Paperback",
          price: 499,
          inStock: true,
        },
      ],
      about:
        "The book tells the story of a personal revolution against the triad of tyranny, a system plagued by the stench of entrenched rot and an ignorance most grim. It is the story of a young investigative journalist searching for truth in the abyss of corruption and violence. Will she be successful in her endeavour, or will the forces of evil overpower her?",
    },
  ],
  blogs: [
    {
      title: "Death Note of a Dreamer",
      writerName: "Ritwik Ghosh",
      image: paper,
      url: "https://www.facebook.com/share/p/1Bb25Fxo5N/",
      writing: [
        `
When they talk death
They say it is a pain
And with conviction
They fear it in vain`,

        `Contrary to what they all believe
I must tell the truth that is true
Death is the fine redeemer
And I say with conviction
There has been no misnomer`,

        `I was just a boy of ten
When my dad put me up
In the midst of evil men
Tyrants they were
In a space called school
The cane was the gift
Given to every little fool`,

        `It was a nightmare
To say the least
Punishments and insults
Were plenty in the feast
The institution it was
Had too great a name
To criticize was blasphemy
And not a fair game`,

        `Criticism though was still my thing
And I put it forth
With an electrifying zeal
For abuse I was dealt
Had no bounds
My great father
Blamed me for making sounds`,

        `Iron ruled where love should have
With all my heart
I abhor my dad
Clipping my wings
His mission was
And ruin did he bring
To my painter\’s brush
Never could I paint
The visions I had
All that is left
Is a bitter lad`,

        `But to my father and his pride
All I would say is you have to hide
My dreams you can\’t kill
For all you try
A dreamer is defiant
Just like a glowing firefly`,

        `Don\’t claim my body
Whenever I die
An unmarked grave
Is a better place to lie
I want no name
And not his for sure
I am just a dreamer
And that is all but crystal clear
`,
      ],
    },
    {
      title: "To be a Man",
      writerName: "Ritwik Ghosh",
      image: men,
      url: "https://www.facebook.com/share/p/197w5kzLn3/",
      writing: [
        `It\’s a disgrace to being a man
        If you falter; to do what you can
        You are doomed to fail
        If ostracism makes you flail
        You are just a little sissy
        If tribulations make you messy
        You can never be a lover
        If circumstances, make you look for cover
        You aren\’t a warrior
        If you give up,
        When things get scarier
        You are just a knave
        If greed makes you waive`,

        `Cheer it up for yourself my lad
        You have it all,
        That will make you glad
        Is the question
        If your answer is a principled man
        Then you must fight
        With all you can
        You must not quit in a damned fight
        If you know in your heart;
        That you are right
        You must not wish for lighter loads
        But for broader shoulders
        And stronger bones`,

        `You must play out your heart for good
        Never to think of loss;
        Even as a brood
        You should be prepared
        For swimming up
        In murderous rapids;
        That never goes up
        You must step up in the arena of life
        Regardless of troubles, that are rife
        You must do what you think is right
        And stay the course;
        When things are tight`,
      ],
    },
    {
      title: "The Breakfast Girl",
      writerName: "Ritwik Ghosh",
      image: women,
      url: "https://www.facebook.com/share/p/1BKcKH3iwk/",
      writing: [
        `Among all the smiles
In this fleeting world;
The temerity of your\’s
Lit my morning in its mould`,

        `Across that table you sat
Making a play with forks and spoons
Like the way your smiles and glances
Made good with mine in tandem boons`,

        `Quiet glances we stole
Like brights and shadows
Or was it just me
In imaginations of fuchasia meadows?`,

        `Behold my overtures
O\’ Girl of beauty
For in your smiles lay
My mystic breakfast\’s play`,
      ],
    },
  ],
};

export default constants;

export interface BuyOption {
  name: string;
  price: number;
  inStock: boolean;
}
export interface Book {
  title: string;
  writerName: string;
  description: string;
  price: number;
  options: BuyOption[];
  about: string;
}
export interface Blogs {
  title: string;
  writerName: string;
  image: StaticImageData;
  writing: string[];
  url: string;
}
