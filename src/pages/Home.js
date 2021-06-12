import { Page } from '../routing/Page';
import {dom} from '../routing/dom';

export class Home extends Page {
    getRoot() {
        return dom.create('div', 'home').html(`
            <p class="title">Home Page</p>
            <p>
                This example demos the functionality of a custom routing on vanilla js
            </p>
            <a class="link" href="https://github.com/elxor/vanilla-routing" target="_blank" rel="noopener noreferrer">Source code</a>
        `);
    }
}