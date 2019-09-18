import _CONFIG_ from './_config';
import fetch from './fetch';
import getCharacterDetails from './getCharacterDetails';

export default async (episodeID) => {
    if (Number(episodeID) != episodeID) throw new Error('episodeID must be a Number');

    const filmData = await fetch(`${_CONFIG_.film.baseURL}/${episodeID}`);

    const characters = filmData[_CONFIG_.film.charactersPath]
        .map((characterURL) => {
            return getCharacterDetails(characterURL);
        });

    const charactersData = await Promise.all(characters);

    return charactersData;
};
