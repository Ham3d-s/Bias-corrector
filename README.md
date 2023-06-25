# Bias Corrector Bookmarklet

Welcome to the Bias Corrector Bookmarklet project! This repository contains a JavaScript bookmarklet that extracts text content from web articles and copies it to your clipboard, prefixed by a specific preamble. 

This bookmarklet is designed to aid in analyzing and rewriting web articles for improved information content, focus, and neutrality. If it encounters an error, it generates an error message and its own source code to your clipboard, aiding in debugging and further development.

## How the Bookmarklet Works

The bookmarklet attempts to find the main content of the article on the page by looking for HTML elements that often contain the main content (`article`, `.article`, `.post`, `.entry`, `main`, `.content`). If it finds such an element, it extracts the text from it, appending a newline after any heading, paragraph, list item, or div. 

The extracted text is then prefixed with a specific preamble and copied to your clipboard. If the bookmarklet doesn't find an appropriate element, or encounters another error, it instead copies an error message and its own source code to your clipboard. After the operation, a JavaScript alert informs the user about the success or failure of the operation.

## How to Use the Bookmarklet

1. **Add the Bookmarklet to Your Browser:** Open your web browser (this guide works for browsers like Google Chrome, Firefox, and Safari). Right-click on the bookmarks bar and select "Add Page" in Chrome (or "New Bookmark" in Firefox). In the dialog box that appears, name the bookmarklet as you like in the 'Name' field. In the 'URL' field, paste the entire JavaScript code provided in the `bookmarklet.js` file in this repository. Click 'Save'.

2. **Use the Bookmarklet on a Webpage:** Navigate to a webpage with an article you want to analyze and click on the bookmarklet saved in your bookmarks bar. The bookmarklet will extract the main content of the article, add the preamble, and copy this to your clipboard.

3. **Check Your Clipboard:** After the alert, you can paste the content from your clipboard into a document or text editor to check what was copied. If the bookmarklet succeeded, you will see the preamble followed by the article text. If the bookmarklet failed, you will see an error message and the source code of the bookmarklet.

## Contributing to the Project

We welcome contributions from everyone. Here's how you can help:

- **Reporting bugs:** If you find a bug while using the bookmarklet, please open an issue in this repository describing the problem and the conditions under which it occurred. If possible, include the URL of the webpage where the problem occurred and the error message you received.

- **Suggesting improvements:** If you have an idea for improving the bookmarklet, please open an issue describing your suggestion.

- **Submitting changes:** If you've made a change to the bookmarklet that you think would be beneficial, please open a pull request. Include a detailed description of your changes and why you think they should be incorporated.

Thank you for your interest in the Article Text Extractor Bookmarklet project. We look forward to your contributions!

