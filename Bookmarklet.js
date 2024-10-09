javascript:(function() {
    function extractText(element) {
        if (element.nodeType === Node.TEXT_NODE) {
            return element.textContent.trim() + ' ';
        }
        if (element.nodeType !== Node.ELEMENT_NODE) {
            return '';
        }
        let text = '';
        for (const child of element.childNodes) {
            text += extractText(child);
        }
        if (element.tagName.match(/^(H[1-6]|P|LI|DIV|BLOCKQUOTE)$/)) {
            text += '\n';
        }
        return text;
    }

    function extractImageAltText(element) {
        const images = element.querySelectorAll('img[alt]');
        let altTexts = '';
        images.forEach(img => {
            altTexts += '[Image Alt]: ' + img.alt + '\n';
        });
        return altTexts;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    try {
        const contentSelectors = ['article', '.article', '.post', '.entry', 'main', '.content', '#main-content', '.blog-post', '#post-content'];
        let articleElement = null;
        for (const selector of contentSelectors) {
            articleElement = document.querySelector(selector);
            if (articleElement) {
                break;
            }
        }
        if (!articleElement) {
            throw new Error('Article element not found');
        }

        const text = extractText(articleElement);
        const altText = extractImageAltText(articleElement);
        const pageURL = window.location.href;

        const preamble = `[1] - Using the heading "Debiased Rewrite", rewrite the article to enhance the following:
    - **Clarity**: Simplify complex language, avoid jargon, and ensure concise sentence structures. Divide long paragraphs for readability. Clearly define any ambiguous terms or concepts.
    - **Neutrality**: Eliminate subjective, opinionated, or emotionally charged language. Ensure a balanced tone by presenting all sides of the issue fairly and without preference.
    - **Truth-Focus**: Fact-check any claims made in the article, ensuring that all data and assertions are supported by credible sources. Remove or qualify statements that present opinion as fact.

[2] - Under the heading "Bias in Original", identify and list the biases found in the original article with clear examples from the text. Use the following categories of bias as a guide:
    - **Framing Bias**: Is the article framing an issue in a way that favors one perspective over others? Look for selective wording or emotional framing.
    - **Confirmation Bias**: Does the article disproportionately highlight information that supports a particular viewpoint while downplaying or omitting counterarguments?
    - **Omission Bias**: Are important facts, perspectives, or context left out that would give a fuller understanding of the topic?
    - **Tone Bias**: Does the tone of the article lean towards positive or negative emotions, and does this affect the objectivity of the piece?
    - Provide numbered points for each bias identified.

[3] - Under the heading "Flow and Structure", analyze and improve the overall structure:
    - Ensure that the article is well-organized, with a logical flow from introduction to conclusion.
    - Check that headings and subheadings accurately represent the content of their sections.
    - Remove or rephrase any sections that seem irrelevant or disrupt the flow of the article.\n\n`;

        const clipboardText = preamble + text + '\n' + altText + '\nPage URL: ' + pageURL;
        copyToClipboard(clipboardText);
        alert('The article text, image descriptions, and analysis instructions have been copied to your clipboard. You can paste it into ChatGPT or another tool for analysis.');
    } catch (error) {
        const message = `Objective: Modify the bookmarklet to enhance functionality for news websites. An error occurred: ${error.message}\nPage URL: ${window.location.href}`;
        copyToClipboard(message);
        alert('An error occurred. The error message and the bookmarklet code have been copied to your clipboard.');
    }
})();
