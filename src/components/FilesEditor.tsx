import React from 'react'
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 


export default class EditorConvertToHTML extends React.Component {
    state = {
      editorState: EditorState.createEmpty(),
    }
  
    onEditorStateChange: any = (editorState: any) => {
      this.setState({
        editorState,
      });
      // this.props.onChange(editorState.getCurrentContent().getPlainText());
    };
    
    render() {
      const { editorState } = this.state; 
      console.log(editorState.getCurrentContent().getPlainText())
      return (
        <div className='w-full flex flex-col mt-8' >
          <Editor
            editorStyle={{ width: "100%", border: "1px solid #E2E8F0", height: "500px", borderRadius: '5px', paddingLeft: '15px', paddingTop:'1px', paddingRight: '15px', paddingBottom: '10px'}}
            wrapperStyle={{width: "100%"}}
            placeholder='How about the patient?...'
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange} /> 
        </div>
      );
    }     
}
