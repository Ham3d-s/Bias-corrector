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
    if (element.tagName.match(/^(H[1-6]|P|LI|DIV)$/)) {
      text += '\n';
    }
    return text;
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
    const contentSelectors = ['article', '.article', '.post', '.entry', 'main', '.content'];
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
    const preamble = '[1] - Using the heading Debiased Rewrite, rewrite the article below to make it more informative, truth-focused, and neutral.\n[2] - Using the heading Bias in Original, compare the original article to the rewrite, and describe the bias of the original, use a numbered list if needed\n\n';
    const clipboardText = preamble + text;
    copyToClipboard(clipboardText);
    alert('The article and a prompt have been copied to your clipboard. Please paste into ChatGPT to analyze and rewrite the content.');
  } catch (error) {
    const message = `Objective: Modify the bookmarklet to change the preamble and alert text.
Specification:
1) Optimize for news websites
2) Include headings and subheadings
3) Use a simple JavaScript alert for the popup
4) Update the preamble and alert text as specified

Error: ${error.message}

Source code of the bookmarklet:
${encodeURIComponent('javascript:' + arguments.callee.toString())}`;
    copyToClipboard(message);
    alert('An error occurred. The prompt for this bookmarklet and the error message have been copied to your clipboard. You can paste them into ChatGPT for assistance. If you make improvements, please submit them to [URL].');
  }
})();
