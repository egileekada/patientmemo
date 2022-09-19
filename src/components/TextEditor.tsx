import React from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 

export default function TextEditor(props: any) {  

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = React.useState('');
  const [note, setNote] = React.useState(editorState);
  const onEditorStateChange = (editorState: any) => {
    setDescription(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setNote(editorState)
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  React.useEffect(() => {
    props.value(description)
  }, [description])
  
    return (
        <div className='w-full flex flex-col' >
            <Editor
              editorState={note}
              editorStyle={{ width: "100%", height: '30vh', backgroundColor: '#f4f4f4', borderRadius: '5px', paddingLeft: '15px',  paddingRight: '15px', marginTop: '20px'}}
              wrapperStyle={{width: "100%"}} 
              placeholder='How about the patient?...' 
              onEditorStateChange={onEditorStateChange}/>
        </div>
    )
} 