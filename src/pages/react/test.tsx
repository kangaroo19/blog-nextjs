import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const markdown={
    title:'어쩌고저쩌고',
    content:`
            content
            `
}

export default function Test(){
    return (
        <ReactMarkdown>
            {markdown.content}
        </ReactMarkdown>
    )
}