import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import countriesCapitals from './countries-and-capitals.js';
const capitals = countriesCapitals.map(e => e.city);
const countries = countriesCapitals.map(e => e.country);
