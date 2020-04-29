import store from '../store';
import ua from '../localize/ua.json'
import en from '../localize/en.json'

const locales = {
	'uk-UA': ua,
	'en-US': en
};

export default function localizeFilter(key) {
    const locale = store.getters.info.locale || 'uk-UA';
    
	return locales[locale][key] || `[Localize error]: key ${key} not found`;
}
