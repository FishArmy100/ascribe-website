import React, { useMemo } from "react";
import {
    Box,
    Chip,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import BuildIcon from "@mui/icons-material/Build";
import DeleteIcon from "@mui/icons-material/Delete";
import PageBar from "@components/PageBar";
import __t, { useI18n } from "@fisharmy100/react-auto-i18n";

type UpdateType = "Added" | "Changed" | "Fixed" | "Removed";

interface Update {
    type: UpdateType;
    text: string;
}

interface ChangelogEntry {
    version: string;
    date: string;
    title: string;
    description?: string;
    updates: Update[];
}

function use_changelog(): ChangelogEntry[]
{
    const i18n = useI18n();
    return useMemo((): ChangelogEntry[] => [
        {
            version: "0.1.1",
            date: "10/9/2026",
            title: __t("l0-0", "Minor Update"),
            description: __t("l0-1", "Various bugfixes and added a new translation comparison feature"),
            updates: [
                {
                    type: "Fixed",
                    text: __t("l0-2", "{{Strongs}} number inspector couldn't click on {{Strongs}} numbers")
                },
                {
                    type: "Fixed",
                    text: __t("l0-3", "Whenever loading the Bible page, it would immediately switch to whatever should be playing in the audio player"),
                },
                {
                    type: "Fixed",
                    text: __t("l0-4", "Bible printer did not render verse punctuation"),
                },
                {
                    type: "Fixed",
                    text: __t("l0-5", "Label backgrounds for Bible printer settings now the correct color (Verse/Verse Text; Verse/Verse Alt Text; Title/Text Format)"),
                },
                {
                    type: "Fixed",
                    text: __t("l0-6", "Found effects now play for context menus"),
                },
                {
                    type: "Fixed",
                    text: __t("l0-7", "Readings display now renders properly for some dates"),
                },
                {
                    type: "Added",
                    text: __t("l0-8", "Can now compare translations by right clicking on a verse, and opening the translation comparison menu"),
                },
                {
                    type: "Added",
                    text: __t("l0-9", "Copy to clipboard option now added to the verse context menu")
                },
                {
                    type: "Added",
                    text: __t("0l-10", "You can now open chapter/verse popover from their respective context menus"),
                },
                {
                    type: "Added",
                    text: __t("l0-11", "Alternate search syntax added for searching {{(&, |)}}"),
                },
            ]
        }
    ], [i18n])
}

const updateConfig: Record<
    UpdateType,
    {
        icon: React.ReactElement;
        color: "success" | "primary" | "warning" | "error";
    }
> = {
    Added: {
        icon: <AddIcon />,
        color: "success",
    },
    Changed: {
        icon: <EditIcon />,
        color: "primary",
    },
    Fixed: {
        icon: <BuildIcon />,
        color: "warning",
    },
    Removed: {
        icon: <DeleteIcon />,
        color: "error",
    },
};

function UpdateItem({
    type,
    text,
}: Update) {
    const config = updateConfig[type];

    return (
        <Stack
            direction="row"
            sx={{
                alignItems: "flex-start",
                gap: 2,
            }}
        >
            <Chip
                label={type}
                icon={config.icon}
                color={config.color}
                variant="outlined"
                sx={{
                    minWidth: 100,
                    flexShrink: 0,

                    "& .MuiChip-icon": {
                        fontSize: 18,
                    },
                }}
            />

            <Typography
                color="text.secondary"
                sx={{
                    lineHeight: 1.7,
                    pt: 0.4,
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
}

function ChangelogRelease({
    version,
    date,
    title,
    description,
    updates,
}: ChangelogEntry) {
    return (
        <Box
            sx={{
                py: {
                    xs: 6,
                    md: 8,
                },
            }}
        >
            <Stack
                direction={{
                    xs: "column",
                    md: "row",
                }}
                sx={{
                    gap: {
                        xs: 1,
                        md: 5,
                    },
                    mb: 3,
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: 180,
                        },
                        flexShrink: 0,
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: 600,
                        }}
                    >
                        {version}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mt: 0.5,
                        }}
                    >
                        {date}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                            fontWeight: 600,
                            fontSize: {
                                xs: "1.75rem",
                                md: "2rem",
                            },
                            mb: 2,
                        }}
                    >
                        {title}
                    </Typography>

                    {description && (
                        <Typography
                            color="text.secondary"
                            sx={{
                                maxWidth: 700,
                                lineHeight: 1.7,
                                mb: 4,
                            }}
                        >
                            {description}
                        </Typography>
                    )}

                    <Stack
                        sx={{
                            gap: 2,
                            maxWidth: 800,
                        }}
                    >
                        {updates.map((update, index) => (
                            <UpdateItem
                                key={`${update.type}-${index}`}
                                {...update}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

export default function ChangelogPage(): React.ReactElement 
{
    const changelog = use_changelog();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.default",
            }}
        >
            <PageBar />

            {/* Hero */}
            <Box
                sx={{
                    py: {
                        xs: 10,
                        md: 14,
                    },
                    textAlign: "center",
                    bgcolor: "grey.100",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            fontSize: {
                                xs: "2.5rem",
                                md: "4rem",
                            },
                        }}
                    >
                        Changelog
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            maxWidth: 650,
                            mx: "auto",
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        Stay up to date with the latest features,
                        improvements, fixes, and changes.
                    </Typography>
                </Container>
            </Box>

            {/* Releases */}
            <Container
                maxWidth="lg"
                sx={{
                    py: 4,
                }}
            >
                {changelog.map((release, index) => (
                    <React.Fragment key={release.version}>
                        <ChangelogRelease {...release} />

                        {index < changelog.length - 1 && (
                            <Divider />
                        )}
                    </React.Fragment>
                ))}
            </Container>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    mt: "auto",
                    py: 3,
                    borderTop: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Container>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        © 2026 Ascribe. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}
