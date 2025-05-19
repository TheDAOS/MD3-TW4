import TextareaAutosize from '@mui/material/TextareaAutosize';

function MarkdownEditor({ markdown, setMarkdown }) {

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div>
            <TextareaAutosize
                value={markdown}
                onChange={handleChange}
                placeholder="Write your Markdown here..."
            />
        </div>
    )
}

export default MarkdownEditor;
