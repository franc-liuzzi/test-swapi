import _CONFIG_ from './_config';
import fetch from './fetch';
import getCharacterDetails from './getCharacterDetails';

export default async (episodeID) => {
    if (Number(episodeID) != episodeID) throw new Error('<episode-id> must be a Number');

    const filmData = await (async () => {
        try {
            return await fetch(`${_CONFIG_.film.baseURL}/${episodeID}`);
        } catch (err) {
            throw new Error('<episode-id> ${episodeID} is not a SW Episode.');
        }
    })();

    const characters = filmData[_CONFIG_.film.charactersPath]
        .map((characterURL) => {
            return getCharacterDetails(characterURL);
        });

    const charactersData = await Promise.all(characters);

    return charactersData;
};
