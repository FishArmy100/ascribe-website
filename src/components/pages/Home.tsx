import use_screenshot_images from "@assets/screenshots";
import { use_theme_settings } from "@components/providers/ThemeSettingsProvider";
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type React from "react";
import { useState } from "react";
import PageBar from "@components/PageBar";

const features = [
    {
        title: "Simple",
        description: "A clean and intuitive experience designed to get users started quickly.",
    },
    {
        title: "Powerful",
        description: "Everything users need to get the most out of your application.",
    },
    {
        title: "Flexible",
        description: "Built to fit different workflows and adapt to your needs.",
    },
];

export default function HomePage(): React.ReactElement
{
    const screenshots = use_screenshot_images();

    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

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
                        md: 16,
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
                        Your application, made simple.
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            maxWidth: 650,
                            mx: "auto",
                            mb: 4,
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        A short description of your application goes here.
                        Explain what it does and why people should use it.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                    >
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Features */}
            <Container
                maxWidth="xl"
                sx={{
                    py: 10,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        mb: 6,
                    }}
                >
                    Everything you need
                </Typography>

                <Grid container spacing={4}>
                    {features.map((feature) => (
                        <Grid
                            size={{
                                xs: 12,
                                md: 4,
                            }}
                            key={feature.title}
                        >
                            <Card
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    border: "1px solid",
                                    borderColor: "divider",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: 4,
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Image Grid */}
            <Container
                maxWidth="xl"
                sx={{
                    py: 8,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        mb: 5,
                    }}
                >
                    See it in action
                </Typography>

                <Grid container spacing={3}>
                    {Object.values(screenshots).map((image) => (
                        <Grid
                            size={{
                                sm: 12,
                                md: 6,
                                lg: 4,
                            }}
                            key={image.src}
                        >
                            <Box
                                component="button"
                                type="button"
                                onClick={() => setSelectedImage(image)}
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    padding: 0,
                                    border: 0,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    background: "none",

                                    "&:hover img": {
                                        transform: "scale(1.02)",
                                    },

                                    "&:focus-visible": {
                                        outline: "3px solid",
                                        outlineColor: "primary.main",
                                        outlineOffset: 2,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        borderRadius: 2,
                                        transition: "transform 200ms ease",
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Full-size Image Viewer */}
            <Dialog
                open={selectedImage !== null}
                onClose={() => setSelectedImage(null)}
                maxWidth={false}
                slotProps={{
                    paper: {  
                        sx: {
                            bgcolor: "transparent",
                            boxShadow: "none",
                            overflow: "visible",
                        },
                    }
                }}
            >
                <IconButton
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close image"
                    sx={{
                        position: "fixed",
                        top: 16,
                        right: 16,
                        color: "white",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1,

                        "&:hover": {
                            bgcolor: "rgba(0, 0, 0, 0.8)",
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent
                    sx={{
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {selectedImage && (
                        <Box
                            component="img"
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            sx={{
                                display: "block",
                                maxWidth: "95vw",
                                maxHeight: "90vh",
                                width: "auto",
                                height: "auto",
                                objectFit: "contain",
                                borderRadius: 1,
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>

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
