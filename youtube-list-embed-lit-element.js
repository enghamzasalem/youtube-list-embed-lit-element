import {LitElement, html, property} from "lit-element";

// Extend the LitElement base class
class YoutubeListEmbedLitElement extends LitElement {
  static get properties() {
    return {width: String, height: String, listid: String};
  }
  render() {
    return html`
      <!-- template content -->
      <iframe
        width=${this.width}
        height=${this.height}
        src=${"https://www.youtube.com/embed/videoseries?list=" + this.listid}
      ></iframe>
      <h1>${this.width}</h1>
    `;
  }
}
// Register the new element with the browser.
customElements.define("youtube-list-embed-lit-element", YoutubeListEmbedLitElement);
