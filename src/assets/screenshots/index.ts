import audio_player from "./audio-player.png";
import main_page from "./main-page.png";
import modules_page from "./modules-page.png";
import search_page from "./search-page.png";
import print_page from "./print-page.png";
import { __tv, useI18n } from "@fisharmy100/react-auto-i18n";
import { useCallback, useMemo } from "react";

export type ScreenshotImage = "audio_player" | "main_page" | "modules_page" | "search_page" | "print_page"

export default function use_screenshot_images(): Record<ScreenshotImage, { src: string, alt: string }>
{
    const i18n = useI18n();

    const names = useCallback((type: ScreenshotImage) =>__tv("screenshots", [
        ["Audio Player", ({type}) => type == "audio_player" ],
        ["Main Page", ({type}) => type == "main_page" ],
        ["Modules Page", ({type}) => type == "modules_page" ],
        ["Search Page", ({type}) => type == "search_page" ],
        ["Print Page", ({type}) => type == "print_page" ],
        "unknown"
    ], { type}), [i18n]);

    return useMemo(() => ({
        "audio_player": {
            src: audio_player,
            alt: names("audio_player"),
        },
        "main_page": {
            src: main_page,
            alt: names("main_page"),
        },
        "modules_page": {
            src: modules_page,
            alt: names("modules_page"),
        },
        "print_page": {
            src: print_page,
            alt: names("print_page"),
        },
        "search_page": {
            src: search_page,
            alt: names("search_page"),
        },
    }), [names])
}