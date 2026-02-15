
import StyleDictionary from 'style-dictionary';

// LIGHT MODE CONFIG
const lightConfig = {
    source: ['tokens/global.json', 'tokens/light.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'build/css/',
            files: [{
                destination: 'variables.css',
                format: 'css/variables',
                options: {
                    outputReferences: true,
                }
            }]
        }
    }
};

// DARK MODE CONFIG
const darkConfig = {
    source: ['tokens/global.json', 'tokens/dark.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'build/css/',
            files: [{
                destination: 'variables-dark.css',
                format: 'css/variables',
                options: {
                    outputReferences: true,
                    // Custom selector if needed, but not standard without plugin
                }
            }]
        }
    }
};


async function build() {
    try {
        console.log('Building Light Mode...');
        const sdLight = new StyleDictionary(lightConfig);
        await sdLight.buildAllPlatforms();

        console.log('Building Dark Mode...');
        const sdDark = new StyleDictionary(darkConfig);
        await sdDark.buildAllPlatforms();
    } catch (e) {
        console.error('Build failed:', e);
    }
}

build();
