import {$} from '../modules/dom';

export function Loader() {
    return $.create('div', 'loader').html(`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`);
}