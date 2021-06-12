import { Page } from '../routing/Page';
import {dom} from '../routing/dom';

export class Contact extends Page {
    getRoot() {
        return dom.create('div').html(`
            <p class="title">Contact Page</p>
        `);
    }
}