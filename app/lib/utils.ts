/**
 * @param title - The title of the book
 * @returns Correctly formatted title with first letter of each word capitalized
 */
export const formatTitle = (title: string): string => {
    return title.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}