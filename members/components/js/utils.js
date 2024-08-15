export const getImageUrl = (path) => {
    return new URL(`/components/${path}`, import.meta.url).href;
};
