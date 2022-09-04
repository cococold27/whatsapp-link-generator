<script lang="ts">
    import CopyButton from "$lib/CopyButton.svelte";

    const SITE_TITLE: string = "Create WhatsApp Link";

    let countryCode: number = 1;
    let phoneNumber: number;
    let message: string = "";
    let whatsappLink: string = "";
    let latestWhatsappLink: string = "";

    let qrCode: string = "";

    const WHATSAPP_TIMESTAMP: string = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
        minute: "numeric",
    });

    function formSubmit(e: any) {
        e.preventDefault();

        whatsappLink = `https://wa.me/${countryCode}${phoneNumber}`;

        if (message) {
            whatsappLink += `?text=${encodeURIComponent(message)}`;
        }

        if (whatsappLink !== latestWhatsappLink) {
            generateQRCode();
            latestWhatsappLink = whatsappLink;
        }
    }

    function selectElement(e: any) {
        e.target.select();
    }

    function generateQRCode() {
        console.log("generateQRCode");

        fetch(
            `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${whatsappLink}`
        )
            .then((response) => response.blob())
            .then((imageBlob) => {
                qrCode = URL.createObjectURL(imageBlob);
            })
            .catch((error) => console.log(error));
    }
</script>

<svelte:head>
    <title>{SITE_TITLE}</title>
    <meta
        name="description"
        content="Generate WhatsApp link with custom message and allow your customers to message you without
    having to add your phone number."
    />
</svelte:head>

<section id="top">
    <div class="container">
        <h1>{SITE_TITLE}</h1>

        <p>
            Generate <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener">WhatsApp</a
            > link with a customized message and allow your customers to message
            you without having to add your phone number. In addition, you also get
            a QR code for the generated link.
        </p>
    </div>
</section>

<section id="whatsapp">
    <div class="container">
        <div class="row">
            <div class="col input-col">
                <h2>WhatsApp Number</h2>

                <div class="input-container">
                    <form on:submit={formSubmit}>
                        <div class="whatsapp-number-container">
                            <div class="country-code-container">
                                <label for="country-code">Country Code</label>

                                <div class="country-code-inner-container">
                                    <span>+</span>
                                    <input
                                        type="number"
                                        id="country-code"
                                        bind:value={countryCode}
                                        required
                                    />
                                </div>
                            </div>

                            <div class="phone-number-container">
                                <label for="phone-number">Phone Number</label>
                                <input
                                    type="number"
                                    id="phone-number"
                                    bind:value={phoneNumber}
                                    required
                                />
                            </div>
                        </div>

                        <div class="message-container">
                            <label for="message">Message (Optional)</label>
                            <textarea
                                id="message"
                                rows="6"
                                bind:value={message}
                            />
                        </div>

                        <input
                            class="btn btn-primary"
                            type="submit"
                            value="Generate WA Link"
                        />
                    </form>

                    {#if whatsappLink}
                        <div class="generated-whatsapp-link-container">
                            <h2>WA Link</h2>

                            <input
                                type="text"
                                id="generated-whatsapp-link"
                                value={whatsappLink}
                                on:focus={selectElement}
                                readonly
                            />

                            <div class="generated-whatsapp-link-buttons">
                                <CopyButton link={whatsappLink} />
    
                                <a href="{whatsappLink}" target="_blank" rel="noopener" class="btn">Open Link</a>
                            </div>
                        </div>
                    {/if}

                    {#if qrCode}
                        <div class="qr-code-container">
                            <h2>QR Code</h2>

                            <a href={qrCode} target="_blank" rel="noopener">
                                <img src={qrCode} alt="" />
                            </a>
                        </div>
                    {/if}
                </div>
            </div>

            <div class="col preview-col">
                <h2>Preview</h2>

                <div class="whatsapp-preview-container">
                    <img
                        id="phone-frame"
                        src="/images/phone-frame.png"
                        alt=""
                    />

                    <div class="preview-container">
                        <div class="preview-top-container">
                            <div class="whatsapp-profile-container">
                                <div class="whatsapp-back">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="48"
                                            d="M328 112L184 256l144 144"
                                        />
                                    </svg>
                                </div>
                                <div class="whatsapp-profile">
                                    <img
                                        src="/images/default-profile-picture.png"
                                        alt=""
                                    />

                                    <div class="whatsapp-number">
                                        {#if countryCode}
                                            +{countryCode}

                                            {#if phoneNumber}
                                                {phoneNumber}
                                            {/if}
                                        {/if}
                                    </div>
                                </div>
                            </div>

                            <div class="whatsapp-icons">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                    />
                                    <path
                                        d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                    />
                                </svg>
                            </div>
                        </div>

                        {#if message}
                            <div class="preview-message-wrapper">
                                <div class="whatsapp-message">
                                    <div class="whatsapp-message-inner">
                                        {message}

                                        <div class="timestamp-container">
                                            <div class="timestamp">
                                                {WHATSAPP_TIMESTAMP}
                                            </div>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="checkmark-icon"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="square"
                                                    stroke-miterlimit="10"
                                                    stroke-width="44"
                                                    d="M465 127L241 384l-92-92M140 385l-93-93M363 127L236 273"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/if}

                        <div class="preview-bottom-container">
                            <div class="preview-bottom-inner-container">
                                <div class="preview-bottom-message" />

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M16 464l480-208L16 48v160l320 48-320 48z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    :global(:root) {
        --green: #59ce72;
        --teal-green: #35897e;
        --dark-green: #215c54;
        --light-green: #e0f6ca;

        --checkmark-blue: #4fb6ec;
        --whatsapp-light: #ebe5de;

        --blue: #2a76e9;
        --light: #f5f5f5;

        --text: #333;
    }

    :global(html) {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 20px;

        color: var(--text);

        background-image: linear-gradient(
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
            ),
            url("/images/background-image.jpg");

        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }

    :global(body) {
        margin: 0;
    }

    :global(.btn) {
        cursor: pointer;

        padding: 0.5rem 1rem;
        font-weight: 600;
        border: 2px solid;
        border-radius: 6px;

        transition: all 0.3s;
    }

    :global(.btn-primary) {
        background-color: var(--green);
        border-color: var(--green);

        &:hover {
            color: white !important;
            border-color: var(--teal-green);
            background-color: var(--teal-green);
        }
    }

    :global(.btn-primary-dark) {
        color: white;
        background-color: var(--dark-green);
        border-color: var(--dark-green);

        &:hover {
            background-color: var(--teal-green);
            border-color: var(--teal-green);
        }
    }

    h1 {
        font-family: "Lobster", cursive;
        font-size: 3.5rem;
        font-weight: 900;

        letter-spacing: 2px;

        color: var(--green);

        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--teal-green);

        margin-top: 0;
        margin-bottom: 1.25rem;
    }

    a {
        color: var(--green);
        font-weight: 700;

        text-decoration: none;

        transition: color 0.3s;

        &:hover {
            color: var(--teal-green);
        }
    }

    .input-container {
        padding: 2rem;

        backdrop-filter: blur(10px);
        border-radius: 1rem;

        background-color: rgba(255, 255, 255, 0.7);
    }

    input,
    textarea,
    :global(button) {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 1rem;

        color: var(--text);
    }

    input:not([type="submit"]),
    textarea {
        width: 100%;

        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        outline: none;

        box-sizing: border-box;

        background-color: var(--whatsapp-light);
    }

    textarea {
        display: block;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;

        font-weight: 600;

        text-transform: uppercase;
    }

    .country-code-inner-container span,
    input#country-code {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }

    .country-code-inner-container span {
        padding-left: 0.5rem;
        font-weight: 700;
    }

    input#country-code {
        padding-right: 0.5rem;
    }

    input#phone-number,
    textarea {
        padding: 0.25rem 0.5rem;
    }

    input#generated-whatsapp-link {
        padding: 1rem;
    }

    #top {
        padding-top: 2.5rem;
        padding-bottom: 1rem;
        text-align: center;
    }

    #whatsapp {
        padding-bottom: 2.5rem;
    }

    .container {
        width: 80%;
        max-width: 1000px;
        margin: auto;
    }

    .whatsapp-number-container {
        display: flex;
        gap: 5%;

        white-space: nowrap;
    }

    .message-container {
        margin-top: 1.25rem;
    }

    .generated-whatsapp-link-container,
    .qr-code-container {
        text-align: center;

        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 2px solid rgba(0, 0, 0, 0.1);
    }

    .generated-whatsapp-link-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        margin-top: 1.5rem;
    }

    input[type="submit"] {
        -webkit-appearance: none;
        margin-top: 1.75rem;
    }

    .country-code-inner-container {
        display: flex;

        span {
            background-color: var(--whatsapp-light);
        }
    }

    .phone-number-container {
        flex-grow: 1;
    }

    .input-col,
    .preview-col {
        h2 {
            text-align: center;
        }
    }

    .whatsapp-preview-container {
        position: relative;
        width: 16rem;
        max-width: 90%;
        aspect-ratio: 1 / 2;

        margin: auto;
        background-image: url("/images/whatsapp-background.jpg");

        font-size: 0.75rem;

        border-radius: 2.25rem;
        overflow: hidden;
    }

    #phone-frame {
        position: absolute;
        z-index: 1;
        left: -1.5%;
        top: -1.5%;
        width: 103%;
    }

    .preview-container {
        position: relative;
        height: 100%;
    }

    .preview-top-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        padding: 1rem 1rem 0.5rem 0.75rem;
        background-color: var(--light);
    }

    .preview-bottom-container {
        position: absolute;
        bottom: 0;

        background-color: var(--light);
        width: 100%;
    }

    .preview-bottom-inner-container {
        padding: 0.75rem 1rem 1rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .preview-bottom-message {
        width: 100%;
        height: 2rem;

        background-color: white;

        border: 2px solid #ebebeb;
        border-radius: 100px;
    }

    .icon {
        fill: var(--blue);
        color: var(--blue);
        width: 1.25rem;
    }

    .whatsapp-icons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .person-icon {
        fill: white;

        background-color: red;

        border-radius: 50%;
        padding: 1rem;
    }

    .whatsapp-profile {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
            width: 1.75rem;
        }
    }

    .whatsapp-profile-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .whatsapp-number {
        font-size: 110%;
        font-weight: 600;
    }

    .preview-message-wrapper {
        text-align: right;
    }

    .whatsapp-message {
        display: inline-block;
        position: relative;
        z-index: 1;

        max-width: 100%;

        overflow-wrap: break-word;
        white-space: pre-wrap;

        .timestamp-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 2px;

            margin-top: 0.5rem;
        }

        .timestamp {
            color: #888;
            font-size: 80%;
        }

        .checkmark-icon {
            width: 0.75rem;
            color: var(--checkmark-blue);
        }
    }

    .whatsapp-message-inner {
        background-color: var(--light-green);
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 10px;

        &::after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 50%;
            transform: rotate(45deg) translateY(-50%);

            width: 0.5rem;
            height: 0.5rem;

            background-color: var(--light-green);
        }
    }

    @media (max-width: 1023px) {
        h1 {
            font-size: 2.5rem;
        }

        .preview-col {
            margin-top: 2rem;
        }
    }

    @media (max-width: 767px) {
        .container {
            width: 90%;
        }

        .whatsapp-number-container {
            display: grid;
            gap: 1.25rem;
        }

        .generated-whatsapp-link-buttons {
            flex-direction: column;
        }
    }

    @media (min-width: 768px) {
        .country-code-container {
            width: min-content;
        }
    }

    @media (min-width: 1024px) {
        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5%;
        }
    }
</style>
