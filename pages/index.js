import { useState, useEffect } from 'react';
import './styles.css';
import WalkingCat from './WalkingCat';

export default function Home() {
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0);
  const [popupText, setPopupText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const fullName = 'Priyanka';
  const tiles = new Array(fullName.length).fill(null);
  const [showImage, setShowImage] = useState(false);
  const [clickedLetter, setClickedLetter] = useState(null);
  const [bgUrl, setBgUrl] = useState('https://img.freepik.com/premium-vector/various-cute-things-doodle-style_6997-1057.jpg?w=740');

  const [sentences, setSentences] = useState('');
  const [animationKey, setAnimationKey] = useState(0);

  const phrases = [
    'P-layful like a panda doing somersaults',
    'R-adiant as a rainbow after a summer rain',
    'A-dventurous like an astronaut exploring new galaxies',
    'V-ivacious as a volcano erupting with joy',
    'D-aring like a dragonfly zooming through the air',
    'E-nigmatic as an elf hiding in a magical forest',
    'E-nergetic like an electron buzzing around an atom',
    'P-hilosophical as a penguin contemplating the meaning of life'
  ];

  const handleTileClick = (e, letter, index) => {
    setClickedLetter(letter);
    setShowImage(true);
    
    const backgrounds = [
      'https://tse3.mm.bing.net/th/id/OIP.L1vjuKI_Ty_GszFgOgRk2gHaFb?pid=ImgDet&w=474&h=347&rs=1',
      'https://tse2.mm.bing.net/th/id/OIP.djwDsqGXjKfuq1UIzJd-8AHaE7?pid=ImgDet&rs=1',
      'https://tse4.mm.bing.net/th/id/OIP.pAUjUKNV13TgjJCjK7wv1wAAAA?pid=ImgDet&rs=1',
      'https://tse4.mm.bing.net/th/id/OIP.QqndMzsLf6v98O4TTWvDAwAAAA?pid=ImgDet&rs=1',
      'https://cdn.wallpapersafari.com/96/74/AJ8k4h.jpg',
      'https://th.bing.com/th/id/R.37606a79e6af704bb35d97b722fec9ce?rik=Qbppw4Uf0CiDzw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fUdDJL2o.jpg&ehk=YUguF%2fL6CKygTu%2f6nQgetRGmodCq3u%2bmMWrLYoNOocw%3d&risl=&pid=ImgRaw&r=0',
      'https://images.fineartamerica.com/images-medium-large-5/autumn-afternoon-wears-on-jeff-folger.jpg',
      'https://tse2.mm.bing.net/th/id/OIP.MIhQiTQ0HA_ulH2mio9crwHaJ4?pid=ImgDet&rs=1',
    ];

    const newBgUrl = backgrounds[index] || 'https://img.freepik.com/premium-vector/various-cute-things-doodle-style_6997-1057.jpg?w=740';
    setBgUrl(newBgUrl);

    const newKey = Math.random();
  
    
    setSentences(phrases[index] || '');
    setAnimationKey(animationKey + 1);

  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < fullName.length) {
        setName(name + fullName[counter]);
        setCounter(counter + 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [name, counter]);

  return (
    <>
      <WalkingCat />
      <div className="background" style={{ backgroundImage: `url(${bgUrl})` }}></div>
      <div className="container">
      {tiles.map((_, index) => (
  <span key={index}
        className={`letter ${name[index] ? 'fadeIn' : ''}`}
        onClick={(e) => handleTileClick(e, name[index] || 'empty tile', index)}>
    {name[index] || ' '}
  </span>
))}
      </div>

      <div>

  </div>

  <div className="textBox" key={animationKey}>
  {sentences.split(' ').map((word, index) => (
    <span
      key={index}
      className={`wordAnimation wordSpacing`}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      {word}
    </span>
  ))}
</div>


      {showPopup && (
        <div className="popup">
          <span>{popupText}</span>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
}
