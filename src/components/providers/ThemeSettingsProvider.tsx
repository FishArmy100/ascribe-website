import React, { createContext, useContext, useMemo, useState } from "react";
import { ASCRIBE_DARK_THEME, ASCRIBE_LIGHT_THEME, build_theme, type AppThemeType, type SelectedFont } from "@src/theme";
import { ThemeProvider } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export type ThemeSettingsContextType = {
    set_selected_theme(theme: AppThemeType): void;
    readonly selected_theme: AppThemeType;
    
    set_scale(scale: number): void;
    readonly scale: number;

    set_font(font: SelectedFont): void;
    readonly font: SelectedFont;
}

const ThemeSettingsContext = createContext<ThemeSettingsContextType | undefined>(undefined);

export type ThemeSettingsProviderProps = {
    children: React.ReactNode,
}

export default function ThemeSettingsProvider({
    children
}: ThemeSettingsProviderProps): React.ReactElement
{
    const [selected_theme, set_selected_theme] = useState<AppThemeType>("light");
    const [scale, set_scale] = useState(1.0);
    const [font, set_font] = useState<SelectedFont>("arial");

    const theme_settings = useMemo((): ThemeSettingsContextType => ({
        selected_theme,
        set_selected_theme,
        scale,
        set_scale,
        font,
        set_font,
    }), [selected_theme, set_selected_theme, scale, set_scale, font, set_font])

    let theme: Theme;
    if (selected_theme === "light")
    {
        theme = build_theme(ASCRIBE_LIGHT_THEME, scale, font);
    }
    else
    {
        theme = build_theme(ASCRIBE_DARK_THEME, scale, font);
    }

    return (
        <ThemeSettingsContext.Provider value={theme_settings}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeSettingsContext.Provider>
    )
}

export function use_theme_settings(): ThemeSettingsContextType
{
    const ctx = useContext(ThemeSettingsContext);
    if (!ctx) throw new Error(`use_theme_settings must be used inside of ThemeSettingsProvider`);
    return ctx;
}