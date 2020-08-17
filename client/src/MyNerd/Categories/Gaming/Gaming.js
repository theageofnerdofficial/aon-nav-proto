/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../Selector';
import GamingParent from './Subcategories/GamingParent';

class Gaming extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer } = this.props;
    return (
      <ul className="p-0" style={{}}>
        <GamingParent
          nerdReducer={nerdReducer}
          nerdUpdateCheck={nerdUpdateCheck}
        />
        <ul
          style={{
            display: nerdReducer.category[0].level1[0].gaming.isExpanded
              ? 'block'
              : 'none',
          }}
        >
          {/* Level 2-1: RetroGaming:
           ******************************************************/}
          <li>
            <Selector
              category="retroGaming"
              descendants={[
                nerdReducer.category[2].level3[0].arcade,
                nerdReducer.category[2].level3[1].atari,
                nerdReducer.category[2].level3[2].commodore,
                nerdReducer.category[2].level3[3].nintendo,
                nerdReducer.category[2].level3[4].sega,
                nerdReducer.category[2].level3[5].zx,
              ]}
              enabled={nerdReducer.category[1].level2[0].retroGaming.isEnabled}
              expanded={
                nerdReducer.category[1].level2[0].retroGaming.isExpanded
              }
              label="Retro gaming"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              reducer={nerdReducer}
            />
          </li>
          <ul
            style={{
              display: nerdReducer.category[1].level2[0].retroGaming.isExpanded
                ? 'block'
                : 'none',
            }}
          >
            {/* Level 3 (Gaming > RetroGaming): Arcade:
             ************************************************/}
            <li>
              <Selector
                category="arcade"
                enabled={nerdReducer.category[2].level3[0].arcade.isEnabled}
                label="Arcade"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
            {/* Level 3 (Gaming > RetroGaming): Atari:
             ************************************************/}
            <li>
              <Selector
                category="atari"
                enabled={nerdReducer.category[2].level3[1].atari.isEnabled}
                label="Atari"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
            {/* Level 3 (Gaming > RetroGaming): Commodore:
             ************************************************/}
            <li>
              <Selector
                category="commodore"
                enabled={nerdReducer.category[2].level3[2].commodore.isEnabled}
                label="Commodore"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>

            {/* Level 3 (Gaming > RetroGaming): Nintendo:
             ************************************************/}
            <li>
              <Selector
                category="nintendo"
                enabled={nerdReducer.category[2].level3[3].nintendo.isEnabled}
                label="Nintendo"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
            {/* Level 3 (Gaming > RetroGaming): Sega:
             ************************************************/}
            <li>
              <Selector
                category="sega"
                enabled={nerdReducer.category[2].level3[4].sega.isEnabled}
                label="Sega"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>

            {/* Level 3 (Gaming > RetroGaming): ZX Spectrum:
             ************************************************/}
            <li>
              <Selector
                category="zx"
                enabled={nerdReducer.category[2].level3[5].zx.isEnabled}
                label="ZX Spectrum"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
          </ul>

          {/* Level 2-2: ModernGaming:
           ******************************************************/}
          <li>
            <Selector
              category="modernGaming"
              descendants={[
                nerdReducer.category[2].level3[6].microsoft,
                nerdReducer.category[2].level3[7].nintendoModern,
                nerdReducer.category[2].level3[8].pc,
                nerdReducer.category[2].level3[9].sony,
              ]}
              enabled={nerdReducer.category[1].level2[1].modernGaming.isEnabled}
              expanded={
                nerdReducer.category[1].level2[1].modernGaming.isExpanded
              }
              label="Modern Gaming"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
            />
          </li>
          <ul
            style={{
              display: nerdReducer.category[1].level2[1].modernGaming.isExpanded
                ? 'block'
                : 'none',
            }}
          >
            {/* Level 3 (Gaming > ModernGaming): Microsoft:
             ************************************************/}
            <li>
              <Selector
                category="microsoft"
                enabled={nerdReducer.category[2].level3[6].microsoft.isEnabled}
                label="Microsoft"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
            {/* Level 3 (Gaming > ModernGaming): Nintendo:
             ************************************************/}
            <li>
              <Selector
                category="nintendoModern"
                enabled={
                  nerdReducer.category[2].level3[7].nintendoModern.isEnabled
                }
                label="Nintendo"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
            {/* Level 3 (Gaming > ModernGaming): PC:
             ************************************************/}
            <li>
              <Selector
                category="pc"
                enabled={nerdReducer.category[2].level3[8].pc.isEnabled}
                label="PC"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
            {/* Level 3 (Gaming > ModernGaming): Sony:
             ************************************************/}
            <li>
              <Selector
                category="sony"
                enabled={nerdReducer.category[2].level3[9].sony.isEnabled}
                label="Sony"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
          </ul>
          {/* Level 2-3: TabletopGaming:
           ******************************************************/}
          <li>
            <Selector
              category="tabletopGaming"
              descendants={[nerdReducer.category[2].level3[10].dand]}
              enabled={
                nerdReducer.category[1].level2[2].tabletopGaming.isEnabled
              }
              expanded={
                nerdReducer.category[1].level2[2].tabletopGaming.isExpanded
              }
              label="Tabletop Gaming"
              level="2"
              nerdUpdateCheck={nerdUpdateCheck}
            />
          </li>
          <ul
            style={{
              display: nerdReducer.category[1].level2[2].tabletopGaming
                .isExpanded
                ? 'block'
                : 'none',
            }}
          >
            {/* Level 3 (Gaming > TabeltopGaming): D & D:
             ************************************************/}
            <li>
              <Selector
                category="dand"
                enabled={nerdReducer.category[2].level3[10].dand.isEnabled}
                label="Dungeons & Dragons"
                level="3"
                nerdUpdateCheck={nerdUpdateCheck}
              />
            </li>
          </ul>
        </ul>
      </ul>
    );
  }
}

export default Gaming;
