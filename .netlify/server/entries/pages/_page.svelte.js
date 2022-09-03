var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const tippy = "";
const CopyButton_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--green:#59ce72;--teal-green:#35897e;--dark-green:#215c54;--light-green:#e0f6ca;--checkmark-blue:#4fb6ec;--whatsapp-light:#ebe5de;--blue:#2a76e9;--light:#f5f5f5;--text:#333}html{font-family:"Source Sans Pro", sans-serif;font-size:20px;color:var(--text);background-image:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/images/background-image.jpg");background-position:center;background-size:cover;background-attachment:fixed}body{margin:0}.btn{cursor:pointer;padding:0.5rem 1rem;font-weight:600;border:2px solid;border-radius:6px;transition:all 0.3s}.btn-primary{background-color:var(--green);border-color:var(--green)}.btn-primary:hover{color:white !important;border-color:var(--teal-green);background-color:var(--teal-green)}.btn-primary-dark{color:white;background-color:var(--dark-green);border-color:var(--dark-green)}.btn-primary-dark:hover{background-color:var(--teal-green);border-color:var(--teal-green)}h1.svelte-6kqpr0.svelte-6kqpr0{font-family:"Lobster", cursive;font-size:3.5rem;font-weight:900;letter-spacing:2px;color:var(--green);margin-top:0;margin-bottom:1.5rem}h2.svelte-6kqpr0.svelte-6kqpr0{color:var(--teal-green);margin-top:0;margin-bottom:1.25rem}a.svelte-6kqpr0.svelte-6kqpr0{color:var(--green);font-weight:700;text-decoration:none;transition:color 0.3s}a.svelte-6kqpr0.svelte-6kqpr0:hover{color:var(--teal-green)}.input-container.svelte-6kqpr0.svelte-6kqpr0{padding:2rem;backdrop-filter:blur(10px);border-radius:1rem;background-color:rgba(255, 255, 255, 0.7)}input.svelte-6kqpr0.svelte-6kqpr0,textarea.svelte-6kqpr0.svelte-6kqpr0,button{font-family:"Source Sans Pro", sans-serif;font-size:1rem;color:var(--text)}input.svelte-6kqpr0.svelte-6kqpr0:not([type=submit]),textarea.svelte-6kqpr0.svelte-6kqpr0{width:100%;margin:0;padding:0;border:0;outline:none;box-sizing:border-box;background-color:var(--whatsapp-light)}textarea.svelte-6kqpr0.svelte-6kqpr0{display:block}label.svelte-6kqpr0.svelte-6kqpr0{display:block;margin-bottom:0.5rem;font-weight:600;text-transform:uppercase}.country-code-inner-container.svelte-6kqpr0 span.svelte-6kqpr0,input#country-code.svelte-6kqpr0.svelte-6kqpr0{padding-top:0.25rem;padding-bottom:0.25rem}.country-code-inner-container.svelte-6kqpr0 span.svelte-6kqpr0{padding-left:0.5rem;font-weight:700}input#country-code.svelte-6kqpr0.svelte-6kqpr0{padding-right:0.5rem}input#phone-number.svelte-6kqpr0.svelte-6kqpr0,textarea.svelte-6kqpr0.svelte-6kqpr0{padding:0.25rem 0.5rem}input#generated-whatsapp-link.svelte-6kqpr0.svelte-6kqpr0{padding:1rem}#top.svelte-6kqpr0.svelte-6kqpr0{padding-top:2.5rem;padding-bottom:1rem;text-align:center}#whatsapp.svelte-6kqpr0.svelte-6kqpr0{padding-bottom:2.5rem}.container.svelte-6kqpr0.svelte-6kqpr0{width:80%;max-width:1000px;margin:auto}.whatsapp-number-container.svelte-6kqpr0.svelte-6kqpr0{display:flex;gap:5%;white-space:nowrap}.message-container.svelte-6kqpr0.svelte-6kqpr0{margin-top:1.25rem}.generated-whatsapp-link-container.svelte-6kqpr0.svelte-6kqpr0,.qr-code-container.svelte-6kqpr0.svelte-6kqpr0{text-align:center;margin-top:2rem;padding-top:1rem;border-top:2px solid rgba(0, 0, 0, 0.1)}input[type=submit].svelte-6kqpr0.svelte-6kqpr0{margin-top:1.75rem}.country-code-inner-container.svelte-6kqpr0.svelte-6kqpr0{display:flex}.country-code-inner-container.svelte-6kqpr0 span.svelte-6kqpr0{background-color:var(--whatsapp-light)}.phone-number-container.svelte-6kqpr0.svelte-6kqpr0{flex-grow:1}.input-col.svelte-6kqpr0 h2.svelte-6kqpr0,.preview-col.svelte-6kqpr0 h2.svelte-6kqpr0{text-align:center}.whatsapp-preview-container.svelte-6kqpr0.svelte-6kqpr0{position:relative;width:16rem;max-width:90%;aspect-ratio:1/2;margin:auto;background-image:url("/images/whatsapp-background.jpg");font-size:0.75rem;border-radius:2.25rem;overflow:hidden}#phone-frame.svelte-6kqpr0.svelte-6kqpr0{position:absolute;z-index:1;left:-1.5%;top:-1.5%;width:103%}.preview-container.svelte-6kqpr0.svelte-6kqpr0{position:relative;height:100%}.preview-top-container.svelte-6kqpr0.svelte-6kqpr0{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding:1rem 1rem 0.5rem 0.75rem;background-color:var(--light)}.preview-bottom-container.svelte-6kqpr0.svelte-6kqpr0{position:absolute;bottom:0;background-color:var(--light);width:100%}.preview-bottom-inner-container.svelte-6kqpr0.svelte-6kqpr0{padding:0.75rem 1rem 1rem 1.25rem;display:flex;align-items:center;gap:0.5rem}.preview-bottom-message.svelte-6kqpr0.svelte-6kqpr0{width:100%;height:2rem;background-color:white;border:2px solid #ebebeb;border-radius:100px}.icon.svelte-6kqpr0.svelte-6kqpr0{fill:var(--blue);color:var(--blue);width:1.25rem}.whatsapp-icons.svelte-6kqpr0.svelte-6kqpr0{display:flex;align-items:center;gap:0.5rem}.whatsapp-profile.svelte-6kqpr0.svelte-6kqpr0{display:flex;align-items:center;gap:0.5rem}.whatsapp-profile.svelte-6kqpr0 img.svelte-6kqpr0{width:1.75rem}.whatsapp-profile-container.svelte-6kqpr0.svelte-6kqpr0{display:flex;align-items:center;gap:0.5rem}.whatsapp-number.svelte-6kqpr0.svelte-6kqpr0{font-size:110%;font-weight:600}.preview-message-wrapper.svelte-6kqpr0.svelte-6kqpr0{text-align:right}.whatsapp-message.svelte-6kqpr0.svelte-6kqpr0{display:inline-block;position:relative;z-index:1;max-width:100%;overflow-wrap:break-word;white-space:pre-wrap}.whatsapp-message.svelte-6kqpr0 .timestamp-container.svelte-6kqpr0{display:flex;justify-content:flex-end;align-items:center;gap:2px;margin-top:0.5rem}.whatsapp-message.svelte-6kqpr0 .timestamp.svelte-6kqpr0{color:#888;font-size:80%}.whatsapp-message.svelte-6kqpr0 .checkmark-icon.svelte-6kqpr0{width:0.75rem;color:var(--checkmark-blue)}.whatsapp-message-inner.svelte-6kqpr0.svelte-6kqpr0{background-color:var(--light-green);margin:1rem;padding:0.5rem;border-radius:10px}.whatsapp-message-inner.svelte-6kqpr0.svelte-6kqpr0::after{content:"";position:absolute;z-index:-1;top:50%;transform:rotate(45deg) translateY(-50%);width:0.5rem;height:0.5rem;background-color:var(--light-green)}@media(max-width: 1023px){h1.svelte-6kqpr0.svelte-6kqpr0{font-size:2.5rem}.preview-col.svelte-6kqpr0.svelte-6kqpr0{margin-top:2rem}}@media(max-width: 767px){.container.svelte-6kqpr0.svelte-6kqpr0{width:90%}.whatsapp-number-container.svelte-6kqpr0.svelte-6kqpr0{display:grid;gap:1.25rem}}@media(min-width: 768px){.country-code-container.svelte-6kqpr0.svelte-6kqpr0{width:min-content}}@media(min-width: 1024px){.row.svelte-6kqpr0.svelte-6kqpr0{display:grid;grid-template-columns:1fr 1fr;gap:5%}}',
  map: null
};
const SITE_TITLE = "Create WhatsApp Link";
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let countryCode = 1;
  let phoneNumber;
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
  });
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)(SITE_TITLE)}</title>`, ""}<meta name="${"description"}" content="${"Generate WhatsApp link with custom message and allow your customers to message you without\n    having to add your phone number."}" data-svelte="svelte-10w56lo">`, ""}

<section id="${"top"}" class="${"svelte-6kqpr0"}"><div class="${"container svelte-6kqpr0"}"><h1 class="${"svelte-6kqpr0"}">${(0, import_chunks.e)(SITE_TITLE)}</h1>

        <p>Generate <a href="${"https://www.whatsapp.com/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-6kqpr0"}">WhatsApp</a> link with a customized message and allow your customers to message
            you without having to add your phone number. In addition, you also get
            a QR code for the generated link.
        </p></div></section>

<section id="${"whatsapp"}" class="${"svelte-6kqpr0"}"><div class="${"container svelte-6kqpr0"}"><div class="${"row svelte-6kqpr0"}"><div class="${"col input-col svelte-6kqpr0"}"><h2 class="${"svelte-6kqpr0"}">WhatsApp Number</h2>

                <div class="${"input-container svelte-6kqpr0"}"><form><div class="${"whatsapp-number-container svelte-6kqpr0"}"><div class="${"country-code-container svelte-6kqpr0"}"><label for="${"country-code"}" class="${"svelte-6kqpr0"}">Country Code</label>

                                <div class="${"country-code-inner-container svelte-6kqpr0"}"><span class="${"svelte-6kqpr0"}">+</span>
                                    <input type="${"number"}" id="${"country-code"}" required class="${"svelte-6kqpr0"}"${(0, import_chunks.d)("value", countryCode, 0)}></div></div>

                            <div class="${"phone-number-container svelte-6kqpr0"}"><label for="${"phone-number"}" class="${"svelte-6kqpr0"}">Phone Number</label>
                                <input type="${"number"}" id="${"phone-number"}" required class="${"svelte-6kqpr0"}"${(0, import_chunks.d)("value", phoneNumber, 0)}></div></div>

                        <div class="${"message-container svelte-6kqpr0"}"><label for="${"message"}" class="${"svelte-6kqpr0"}">Message (Optional)</label>
                            <textarea id="${"message"}" rows="${"6"}" class="${"svelte-6kqpr0"}">${""}</textarea></div>

                        <input class="${"btn btn-primary svelte-6kqpr0"}" type="${"submit"}" value="${"Generate WA Link"}"></form>

                    ${``}

                    ${``}</div></div>

            <div class="${"col preview-col svelte-6kqpr0"}"><h2 class="${"svelte-6kqpr0"}">Preview</h2>

                <div class="${"whatsapp-preview-container svelte-6kqpr0"}"><img id="${"phone-frame"}" src="${"/images/phone-frame.png"}" alt="${""}" class="${"svelte-6kqpr0"}">

                    <div class="${"preview-container svelte-6kqpr0"}"><div class="${"preview-top-container svelte-6kqpr0"}"><div class="${"whatsapp-profile-container svelte-6kqpr0"}"><div class="${"whatsapp-back"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon svelte-6kqpr0"}" viewBox="${"0 0 512 512"}"><path fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"48"}" d="${"M328 112L184 256l144 144"}"></path></svg></div>
                                <div class="${"whatsapp-profile svelte-6kqpr0"}"><img src="${"/images/default-profile-picture.png"}" alt="${""}" class="${"svelte-6kqpr0"}">

                                    <div class="${"whatsapp-number svelte-6kqpr0"}">${`+${(0, import_chunks.e)(countryCode)}

                                            ${``}`}</div></div></div>

                            <div class="${"whatsapp-icons svelte-6kqpr0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon svelte-6kqpr0"}" viewBox="${"0 0 512 512"}"><path d="${"M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"}" fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"32"}"></path><path d="${"M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z"}" fill="${"none"}" stroke="${"currentColor"}" stroke-miterlimit="${"10"}" stroke-width="${"32"}"></path></svg>

                                <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon svelte-6kqpr0"}" viewBox="${"0 0 512 512"}"><path d="${"M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"}" fill="${"none"}" stroke="${"currentColor"}" stroke-miterlimit="${"10"}" stroke-width="${"32"}"></path></svg></div></div>

                        ${``}

                        <div class="${"preview-bottom-container svelte-6kqpr0"}"><div class="${"preview-bottom-inner-container svelte-6kqpr0"}"><div class="${"preview-bottom-message svelte-6kqpr0"}"></div>

                                <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon svelte-6kqpr0"}" viewBox="${"0 0 512 512"}"><path d="${"M16 464l480-208L16 48v160l320 48-320 48z"}"></path></svg></div></div></div></div></div></div></div>
</section>`;
});
