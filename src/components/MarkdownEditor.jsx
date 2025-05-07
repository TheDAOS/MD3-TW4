import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div>
            <div>
                <textarea
                    value={markdown}
                    onChange={handleChange}
                    placeholder="Write your Markdown here..."
                />
            </div>

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkdownEditor;
