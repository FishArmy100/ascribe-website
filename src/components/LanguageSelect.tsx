import { Box, FormControl, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { LangScriptObj, useI18n, type LangScriptCode } from "@fisharmy100/react-auto-i18n";
// react-auto-i18n's flag-icons dependency needs its CSS loaded once, e.g. in your app entry:
// import "flag-icons/css/flag-icons.min.css";

/**
 * A dropdown that lets the user pick from every locale currently present
 * in the loaded translation database, each shown with its country flag.
 * Must be rendered inside an <I18nProvider> (or I18nFileProvider / I18nMultiFileProvider).
 */
export default function LanguageSelect() 
{
    const i18n = useI18n();
    const locales = i18n.getLocales();

    const handleChange = (event: SelectChangeEvent<LangScriptCode>) => {
        i18n.setLocale(event.target.value as LangScriptCode);
    };

    return (
        <FormControl size="small" sx={{ minWidth: 180 }}>
            <Select<LangScriptCode>
                value={i18n.locale}
                onChange={handleChange}
                renderValue={(value) => <LanguageOption code={value} />}
                sx={{
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText",
                    "& .MuiSvgIcon-root": { color: "secondary.contrastText" },
                    "&:hover": { bgcolor: "secondary.dark" },
                }}
            >
                {locales.map((code) => (
                <MenuItem key={code} value={code}>
                    <LanguageOption code={code} />
                </MenuItem>
                ))}
            </Select>
        </FormControl>
  );
}

function LanguageOption({ code }: { code: LangScriptCode }) 
{
    const lang = new LangScriptObj(code);

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                component="span"
                sx={{ width: 20, display: "inline-flex", flexShrink: 0 }}
            >
                {lang.getCountryFlag()}
            </Box>
            {lang.getEnglishName() ?? code}
        </Box>
    );
}