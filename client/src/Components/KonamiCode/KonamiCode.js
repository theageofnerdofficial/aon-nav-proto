import React from 'react';
import Konami from 'react-konami-code';
import '../../Main.css';

class KonamiCode extends React.Component {
  easterEgg = () => {
    // alert('Hey, you typed the Konami Code!');
  };

  render() {
    return (
      <Konami action={this.easterEgg} timeout={5000}>
        <div className="konami-window">
          <img
            alt="Konami start screen gif — easter egg"
            src="https://thumbs.gfycat.com/DeadlyPlushCowrie-small.gif"
            style={{ borderRadius: '20px' }}
          />
        </div>
      </Konami>
    );
  }
}

export default KonamiCode;
