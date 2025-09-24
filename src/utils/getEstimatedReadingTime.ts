export default function getEstimatedReadingTime (text: string, wordsPerMinute = 200): number {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute); // in minutes
};