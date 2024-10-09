# Bias Corrector Bookmarklet

Welcome to the Bias Corrector Bookmarklet project! This repository houses a JavaScript bookmarklet that extracts text from web articles, and copies it to your clipboard, prefixed by a specific preamble. 

The primary aim of this bookmarklet is to assist in the analysis and rewriting of web articles to increase their information content, neutrality, and focus. In case of an error, it generates a debug-friendly output by copying an error message and its own source code to your clipboard.

## How the Bookmarklet Works

The bookmarklet tries to locate the main content of the page by scanning for HTML elements typically containing the main content (`article`, `.article`, `.post`, `.entry`, `main`, `.content`). Upon finding such an element, it extracts the text, adding a newline after any heading, paragraph, list item, or div.

The extracted text is then prefixed with a specific preamble and copied to your clipboard. If the bookmarklet fails to find an appropriate element or encounters another error, it instead copies an error message and its own source code to your clipboard. A JavaScript alert informs the user about the operation's success or failure.

[![](https://mermaid.ink/img/pako:eNplUUtPwzAM_itWzuMP5DAJuglxQUjArRc38bZoTRwSdw9N---kpaC23Pz4XpZvyrAlpVWmr46CoY3DfUJfB4CISZxxEYPAZ6a0nD0xHz2mY0uyXFWtiw1jssvFY0tpQPeCD-v1REPDSzjxkTI0c-EJZsnYXiShkQxCF4FdYg9naiLu6T_xL5OGiqOjkSQMZpp2Thryati4HFu8ZsC-B085jx6vLAR8ojRctBrxfQ0GAwQ-l_tzwciBwPS-9sfXheJcHVCe3z7USnlKHp0tn7j1srUqeE-10qW0JU6t6nAvOOyE36_BKC2po5XqokX5_dp8uLVOOCm9wzbT_RtcVrBk?type=png)](https://mermaid.live/edit#pako:eNplUUtPwzAM_itWzuMP5DAJuglxQUjArRc38bZoTRwSdw9N---kpaC23Pz4XpZvyrAlpVWmr46CoY3DfUJfB4CISZxxEYPAZ6a0nD0xHz2mY0uyXFWtiw1jssvFY0tpQPeCD-v1REPDSzjxkTI0c-EJZsnYXiShkQxCF4FdYg9naiLu6T_xL5OGiqOjkSQMZpp2Thryati4HFu8ZsC-B085jx6vLAR8ojRctBrxfQ0GAwQ-l_tzwciBwPS-9sfXheJcHVCe3z7USnlKHp0tn7j1srUqeE-10qW0JU6t6nAvOOyE36_BKC2po5XqokX5_dp8uLVOOCm9wzbT_RtcVrBk)

## How to Use the Bookmarklet

1. **Add the Bookmarklet to Your Browser:** Open your web browser (this guide works for browsers like Google Chrome, Firefox, and Safari). Right-click on the bookmarks bar and select "Add Page" in Chrome (or "New Bookmark" in Firefox). In the dialog box that appears, name the bookmarklet as you like in the 'Name' field. In the 'URL' field, paste the entire JavaScript code provided in the `bookmarklet.js` file in this repository. Click 'Save'.

2. **Use the Bookmarklet on a Webpage:** Navigate to a webpage with an article you want to analyze and click on the bookmarklet saved in your bookmarks bar. The bookmarklet will extract the main content of the article, add the preamble, and copy this to your clipboard.

3. **Check Your Clipboard:** After the alert, you can paste the content from your clipboard into a document or text editor to check what was copied. If the bookmarklet succeeded, you will see the preamble followed by the article text. If the bookmarklet failed, you will see an error message and the source code of the bookmarklet.

## Development Roadmap

Here are potential enhancements to the Bias Corrector Bookmarklet project, listed in a priority order:

- [x] **Enhanced Error Handling:** Improve error messages to be more descriptive and include the URL of the page where the error occurred.

- [x] **Support More Content Selectors:** Research common web page structures to identify additional likely content selectors.

- [x] **Improved Text Extraction:** Enhance handling of nested elements, formatting, and inclusion of image alt text and captions. Consider options to include/exclude comments.

- [ ] **User Configurable Preamble:** Develop a method for users to edit the preamble without modifying the bookmarklet code.

- [x] **Support for More Browsers:** Test the bookmarklet in different browsers and fix compatibility issues.

## Contributing to the Project

We welcome everyone's contribution! Here's how you can help:

- **Reporting bugs:** Please open an issue in this repository describing the problem and conditions under which it occurred. If possible, include the URL of the webpage where the problem occurred and the error message you received.

- **Suggesting improvements:** If you have an idea for improving the bookmarklet, please open an issue describing your suggestion.

- **Submitting changes:** If you've made a beneficial change to the bookmarklet, please open a pull request. Include a detailed description of your changes and the reasons for incorporating them.

## License

The Bias Corrector Bookmarklet is free software that's open to the public for use, modification, and distribution under the terms of the MIT License.

The MIT License is a permissive, short, and flexible license. It allows for almost unlimited freedom with the software as long as you include the original copyright and license notice in any copy of the software/source. To put it simply, you can do whatever you want with this software as long as you include the original copyright and license notice.

This essentially means:

- You are permitted to use the Bias Corrector Bookmarklet for any purpose, including commercially.
- You are allowed to modify the bookmarklet source code to suit your needs.
- You are free to distribute copies of the original or the modified bookmarklet.
- You can incorporate the bookmarklet into your own project, whether it's open or closed source.

However, it's important to note that:

- You must include a copy of the license in any redistribution you make that includes this software.
- You cannot hold the author liable for any damages that arise from your use of the bookmarklet.

For the full details, please refer to the [LICENSE](LICENSE.txt) file in the root directory of this repository, which contains the full text of the MIT License that governs the use of the Bias Corrector Bookmarklet.
