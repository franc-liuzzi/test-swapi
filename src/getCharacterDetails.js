import _CONFIG_ from './_config';
import fetch from './fetch';

export default async (characterURL) => {
    const characterData = await fetch(characterURL);

    const characterName = characterData[_CONFIG_.character.namePath];
    const homewordURL = characterData[_CONFIG_.character.homewordPath];

    const homewordData = await fetch(homewordURL);

    const characterHomewordName = homewordData[_CONFIG_.homeworld.namePath];

    return {
        name: characterName,
        homeworld: characterHomewordName
    };
}