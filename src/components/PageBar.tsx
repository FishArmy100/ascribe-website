import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import type React from "react";
import * as meta from "@src/meta";
import __t, { useI18n } from "@fisharmy100/react-auto-i18n";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";

export default function PageBar(): React.ReactElement
{
    const i18n = useI18n();
    const strings = useMemo(() => ({
        install: __t("PageBar.install", "Install"),
        changelog: __t("PageBar.changelog", "Changes"),
    }), [i18n]);

    const navigate = useNavigate();

    return (    
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700,
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/")}
                >
                    {meta.APP_NAME}
                </Typography>
                
                <LanguageSelect />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        ml: 1,
                    }}
                    onClick={() => navigate("/changelog")}
                >
                    {strings.changelog}
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        ml: 1,
                    }}
                    onClick={() => meta.goto_ascribe_store_page()}
                >
                    {strings.install}
                </Button>
            </Toolbar>
        </AppBar>
    );
}