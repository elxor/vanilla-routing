import { Page } from '../routing/Page';
import {dom} from '../routing/dom';

export class Help extends Page {
    getRoot() {
        return dom.create('div').html(`
            <p class="title">Help Page</p>
        `);
    }
}