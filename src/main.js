import getEpisodeCharacters from './getEpisodeCharacters';
import printCharacter from './printCharacter';

const episodeID = process.argv[2];

async function main() {
    const characters = await getEpisodeCharacters(episodeID);

    characters.forEach((character) => {
        printCharacter(character);
    });
}

export default main;