import { writable } from 'svelte/store';

export const technologies = writable([
    {
        title: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        Url: 'https://www.javascript.com/',
    },
    {
        title: 'TypeScript',
        description: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        Url: 'https://www.typescriptlang.org/',
    },
    {
        title: 'Node.JS',
        description: 'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png',
        Url: 'https://nodejs.org/en',
    },
    {
        title: 'SvelteKit',
        description: 'SvelteKit is built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. It\'s a love letter to web development.',
        imageUrl: 'https://a.storyblok.com/f/88751/1702x2049/619c584101/svelte_logo.png',
        Url: 'https://kit.svelte.dev/',
    },
    {
        title: 'HyperText Markup Language',
        description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
        Url: 'https://html.com/',
    },
    {
        title: 'CSS (Cascading Style Sheets)',
        description: 'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaN7a6PrRMQKTdHg-R0-aOSavFY6s-KsWHbQ&s',
        Url: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
        title: 'C#',
        description: 'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing,[16]: 4  strong typing, lexically scoped, imperative, declarative, functional, generic,[16]: 22  object-oriented (class-based), and component-oriented programming disciplines.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1024px-C_Sharp_Logo_2023.svg.png',
        Url: 'https://dotnet.microsoft.com/en-us/languages/csharp',
    }
    // Add more projects as needed
]);