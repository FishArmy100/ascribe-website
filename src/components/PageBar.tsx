import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import type React from "react";
import * as meta from "@src/meta";
import __t, { useI18n } from "@fisharmy100/react-auto-i18n";
import { useMemo } from "react";

export default function PageBar(): React.ReactElement
{
    const i18n = useI18n();
    const strings = useMemo(() => ({
        install: __t("PageBar.install", "Install"),
        changelog: __t("PageBar.changelog", "Changes"),
    }), [i18n])
    return (    
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700,
                    }}
                >
                    {meta.APP_NAME}
                </Typography>
                
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        ml: 1,
                    }}
                >
                    {strings.changelog}
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        ml: 1,
                    }}
                >
                    {strings.install}
                </Button>
            </Toolbar>
        </AppBar>
    );
}