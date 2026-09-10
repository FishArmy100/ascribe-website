

export const APP_NAME = "Ascribe";
export const APP_VERSION = "0.2.0";
export const APP_STORE_PAGES = {
    microsoft: "https://apps.microsoft.com/detail/9mzz9gr46g91?hl=en-US&gl=US"
}

export function goto_ascribe_store_page()
{
    window.open(APP_STORE_PAGES.microsoft);
}