set dotenv-load
LANGUAGES := "spa_Latn swh_Latn"

translate:
    npx auto-i18n-cli                                       \
        -i "./src"                                          \
        -o "./src/assets/translations/translations.json"    \
        -s eng_Latn                                         \
        -l {{LANGUAGES}}                                    \
        -b azure                                            \
        --azureKey $AZURE_KEY

build-website:
    npx tsc -b && npx vite build --outDir ./docs --emptyOutDir