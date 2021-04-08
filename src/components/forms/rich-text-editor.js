import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.getBase64 = this.getBase64.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentWillMount() {
    if (this.props.editMode && this.props.contentToEdit) {
      const blocksFromHtml = htmlToDraft(this.props.contentToEdit);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
  }

  onEditorStateChange(editorState) {
    this.setState(
      { editorState },
      this.props.handleRichTextEditorChange(
        draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
      )
    );
  }
  
  // below inside the editor component there is an image prop which has an callback in the render which calls the upload file function
  //upload file handles what happens when image is picked-it returns a promise
  //the promise has 2 options-implemented resolve and called base64 passed it 2 args-passed it a file and then a function
  //passed an anonymouse function that has an arg of data and has the resolve call
  //whenever the promise is done to run the code now-have object returned 
  //(data comes from the getBase64)
  //file is in the readAsDataURl-then onload is running the callback-it took the string that was converted and placed in an object

  getBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {};
  }

  uploadFile(file) {
    return new Promise((resolve, reject) => {
      this.getBase64(file, data => resolve({ data: { link: data } }));
    });
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          wrapperClassName="demo-wrapper"
          editorClassname="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: this.uploadFile,
              alt: { present: true, mandatory: false },
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
            }
          }}
        />
      </div>
    );
  }
}