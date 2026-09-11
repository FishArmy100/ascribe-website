import __t, { useI18n } from "@fisharmy100/react-auto-i18n";
import { Container, Typography } from "@mui/material";
import type React from "react";
import { useMemo } from "react";


export default function Footer(): React.ReactElement
{
    const i18n = useI18n();
    const text = useMemo(() => {
        return __t("footer", "{{© 2026 Ascribe.}} All rights reserved.")
    }, [i18n]);

    return (
        <Container>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    textAlign: "center",
                }}
            >
                {text}
            </Typography>
        </Container>
    )
}