<script lang="ts">
    import tippy from "tippy.js";
    import "tippy.js/dist/tippy.css";

    export let link: string;

    let active: boolean = false;

    function copyLink() {
        if (link) {
            navigator.clipboard.writeText(link).then(() => {
                active = true;
            });

            tippy("#copy-button", {
                content: "Copied!",
                placement: "right",

                arrow: true,
                trigger: "click",
                hideOnClick: false,
                showOnCreate: true,

                onShow(instance) {
                    setTimeout(() => {
                        instance.destroy();
                    }, 2000);
                },
            });
        }
    }
</script>

<button
    id="copy-button"
    class="btn btn-primary-dark"
    class:active
    on:click={copyLink}>Copy Link</button
>
