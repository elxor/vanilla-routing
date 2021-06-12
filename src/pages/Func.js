import { Page } from '../routing/Page';
import {dom} from '../routing/dom';

export class Func extends Page {
    getRoot() {
        return dom.create('div', 'func').html(`
            <p class="title">Functional Page</p>
            <p>Added Event Listener After Page Render</p>
            <button class="btnClick">Click</button>
            <div id="outer"></div>
        `);
    }

    afterRender() {
        document.querySelector('.btnClick')
            .addEventListener('click', this.listener);
    }

    destroy() {
        document.querySelector('.btnClick')
            .removeEventListener('click', this.listener);
    }

    listener = () => {
        dom('#outer').html('<p>Click Working!</p>');
    }
}