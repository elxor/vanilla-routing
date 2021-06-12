import { Page } from '../routing/Page';
import {dom} from '../routing/dom';

export class About extends Page {

    getRoot() {
        return dom.create('div').html(`
            <p class="title">About Page</p>
        `);
    }
}