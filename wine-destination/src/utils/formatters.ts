export type InlinePart = 
    | { type: "text"; content: string }
    | { type: "bold"; content: string }
    | { type: "link"; content: string; attributes: Record<string, string> };

export const parseInlineHtml = (content: string): InlinePart[] => {
    const regex = /(<a\b[^>]*>.*?<\/a>|<b>.*?<\/b>)/g;

    return content.split(regex).map((part): InlinePart => {
        if (part.startsWith("<b>") && part.endsWith("</b>")) {
            return {
                type: "bold",
                content: part.slice(3, -4)
            };
        }

        const match = part.match(/^<a\b([^>]*)>(.*?)<\/a>$/);

        if (match) {
            const [, rawAttributes, text] = match;

            const attributes = Object.fromEntries(
                [...rawAttributes.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
                    .map(([, name, doubleQuoted, singleQuoted]) => [
                        name,
                        doubleQuoted ?? singleQuoted
                    ])
            );

            return {
                type: "link",
                content: text,
                attributes
            };
        }

        return {
            type: "text",
            content: part
        };
    });
};